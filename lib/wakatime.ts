// lib/wakatime.ts

export interface WakaTimeLanguage {
    name: string;
    percent: number;
    text: string;
    color: string;
}

export interface WakaTimeStats {
    data?: {
        human_readable_total: string;
        human_readable_daily_average?: string;
        languages?: WakaTimeLanguage[];
        is_up_to_date?: boolean;
    };
    errorReason?: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getWakaTimeStats(): Promise<WakaTimeStats | null> {
    const rawApiKey = process.env.WAKATIME_API_KEY;

    if (!rawApiKey) {
        console.warn("WAKATIME_API_KEY is not set.");
        return {
            errorReason: "WAKATIME_API_KEY is not configured in GitHub Secrets.",
        };
    }

    const apiKey = rawApiKey.trim();
    if (!apiKey) {
        console.warn("WAKATIME_API_KEY is empty after trimming.");
        return {
            errorReason: "WAKATIME_API_KEY is empty.",
        };
    }

    // Clean token (strip Bearer if user accidentally included it in secret)
    const token = apiKey.replace(/^Bearer\s+/i, "");

    // WakaTime stats API requires Personal OAuth Token (Authorization: Bearer <token>)
    const maxRetries = 3;
    let lastError = "";

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            // Primary method: OAuth Bearer token
            let res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: "force-cache",
                next: { revalidate: 3600 },
            });

            // Fallback for legacy setups: Basic auth
            if (res.status === 401) {
                const encodedKey = Buffer.from(token).toString("base64");
                res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
                    headers: {
                        Authorization: `Basic ${encodedKey}`,
                    },
                    cache: "force-cache",
                    next: { revalidate: 3600 },
                });
            }

            if (res.status === 202) {
                console.warn(`WakaTime stats are being calculated (attempt ${attempt}/${maxRetries}). Waiting before retry...`);
                lastError = "WakaTime is compiling metrics in the background (HTTP 202).";
                if (attempt < maxRetries) {
                    await sleep(3000 * attempt);
                    continue;
                }
            }

            if (!res.ok) {
                const errorText = await res.text();
                console.error(`Failed to fetch WakaTime stats (status ${res.status}):`, errorText);
                lastError = `WakaTime API error (HTTP ${res.status}): ${errorText.slice(0, 150)}`;
                if (res.status === 401 || res.status === 403) {
                    return { errorReason: lastError };
                }
                if (attempt < maxRetries) {
                    await sleep(2000 * attempt);
                    continue;
                }
                return { errorReason: lastError };
            }

            const json = (await res.json()) as WakaTimeStats;
            if (json?.data?.is_up_to_date === false && attempt < maxRetries) {
                console.warn(`WakaTime stats not up to date yet (attempt ${attempt}/${maxRetries}). Retrying...`);
                lastError = "WakaTime stats are still updating.";
                await sleep(3000 * attempt);
                continue;
            }

            if (!json?.data?.human_readable_total) {
                return {
                    errorReason: "WakaTime response did not contain statistics data.",
                };
            }

            return json;
        } catch (error) {
            console.error(`Error fetching WakaTime stats (attempt ${attempt}/${maxRetries}):`, error);
            lastError = `Network error connecting to WakaTime: ${error instanceof Error ? error.message : String(error)}`;
            if (attempt < maxRetries) {
                await sleep(2000 * attempt);
                continue;
            }
            return { errorReason: lastError };
        }
    }

    return { errorReason: lastError || "Failed to retrieve statistics from WakaTime." };
}
