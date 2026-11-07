// lib/wakatime.ts

export interface WakaTimeLanguage {
    name: string;
    percent: number;
    text: string;
    color: string;
}

export interface WakaTimeStats {
    data: {
        human_readable_total: string;
        human_readable_daily_average?: string;
        languages?: WakaTimeLanguage[];
        is_up_to_date?: boolean;
    };
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getWakaTimeStats(): Promise<WakaTimeStats | null> {
    const rawApiKey = process.env.WAKATIME_API_KEY;

    if (!rawApiKey) {
        console.warn("WAKATIME_API_KEY is not set.");
        return null;
    }

    const apiKey = rawApiKey.trim();
    if (!apiKey) {
        console.warn("WAKATIME_API_KEY is empty after trimming.");
        return null;
    }

    const encodedKey = Buffer.from(apiKey).toString("base64");

    // Fetch stats for the last 7 days.
    // If WakaTime returns 202 Accepted (processing in background), retry with backoff.
    const maxRetries = 3;
    const url = `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${encodeURIComponent(apiKey)}`;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const res = await fetch(url, {
                headers: {
                    Authorization: `Basic ${encodedKey}`,
                },
                cache: "force-cache",
                next: { revalidate: 3600 },
            });

            if (res.status === 202) {
                console.warn(`WakaTime stats are being calculated (attempt ${attempt}/${maxRetries}). Waiting before retry...`);
                if (attempt < maxRetries) {
                    await sleep(2000 * attempt);
                    continue;
                }
            }

            if (!res.ok) {
                console.error(`Failed to fetch WakaTime stats (status ${res.status}):`, await res.text());
                return null;
            }

            const json = (await res.json()) as WakaTimeStats;
            if (json?.data?.is_up_to_date === false && attempt < maxRetries) {
                console.warn(`WakaTime stats not up to date yet (attempt ${attempt}/${maxRetries}). Retrying...`);
                await sleep(2000 * attempt);
                continue;
            }

            return json;
        } catch (error) {
            console.error(`Error fetching WakaTime stats (attempt ${attempt}/${maxRetries}):`, error);
            if (attempt < maxRetries) {
                await sleep(2000 * attempt);
                continue;
            }
            return null;
        }
    }

    return null;
}
