import { getPinnedRepos } from "@/lib/github";
import { FolderGit2, Star, Circle } from "lucide-react";

export async function GithubActivity() {
    const repos = await getPinnedRepos("gtksi");

    if (!repos.length) {
        return <div className="text-slate-500">No public repositories found.</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
                <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition duration-300 flex flex-col justify-between group"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <FolderGit2 className="w-5 h-5 text-blue-400" />
                            <h3 className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                                {repo.name}
                            </h3>
                        </div>
                        <p className="text-sm text-slate-400 line-clamp-2">
                            {repo.description || "No description provided."}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-500">
                        {repo.language && (
                            <span className="flex items-center gap-1.5">
                                <Circle className="w-3 h-3 fill-current text-blue-500" />
                                {repo.language}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5">
                            <Star className="w-4 h-4" />
                            {repo.stargazers_count}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}
