// lib/github.ts

export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
    fork: boolean;
}

export async function getRecentRepos(username: string): Promise<GitHubRepo[]> {
    // Use a fallback if token is not available during static export
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
        Accept: "application/vnd.github.v3+json",
    };

    if (token) {
        headers.Authorization = `token ${token}`;
    }

    // Static export fetches the repository data at build time.
    const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
        {
            headers,
            cache: "force-cache",
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        console.error("Failed to fetch repositories:", await res.text());
        return [];
    }

    const repos: GitHubRepo[] = await res.json();
    // Return the four most recently updated non-fork repositories.
    return repos.filter((repo) => !repo.fork).slice(0, 4);
}
