import { getWakaTimeStats } from "@/lib/wakatime";
import { Clock, Code2 } from "lucide-react";

export async function WakaTimeActivity() {
    const stats = await getWakaTimeStats();

    if (!stats?.data) {
        return (
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <Clock className="w-5 h-5" />
                    <h3 className="font-semibold text-white">Coding Activity API key required</h3>
                </div>
                <p className="text-sm text-slate-500">WakaTime API key is not configured locally or on Vercel/GitHub Actions.</p>
            </div>
        );
    }

    const { human_readable_total, languages } = stats.data;
    const topLanguages = languages.slice(0, 4); // Show top 4 languages

    return (
        <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-semibold text-white">Last 7 Days Activity</h3>
                </div>
                <span className="text-emerald-400 font-mono text-sm bg-emerald-400/10 px-3 py-1 rounded-full">
                    {human_readable_total}
                </span>
            </div>

            <div className="space-y-4">
                {topLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-2 text-slate-300">
                                <Code2 className="w-4 h-4 text-slate-500" />
                                {lang.name}
                            </span>
                            <span className="text-slate-400">{lang.text}</span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                style={{
                                    width: `${lang.percent}%`,
                                    backgroundColor: lang.color || '#3b82f6'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
