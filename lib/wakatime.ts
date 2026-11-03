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
        human_readable_daily_average: string;
        languages: WakaTimeLanguage[];
    };
}

export async function getWakaTimeStats(): Promise<WakaTimeStats | null> {
    const apiKey = process.env.WAKATIME_API_KEY;

    if (!apiKey) {
        return null;
    }

    const encodedKey = Buffer.from(apiKey).toString("base64");

    // Static export fetches WakaTime data at build time.
    const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
        headers: {
            Authorization: `Basic ${encodedKey}`,
        },
    });

    if (!res.ok) {
        console.error("Failed to fetch WakaTime stats:", await res.text());
        return null;
    }

    return res.json();
}
