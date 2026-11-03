import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
                    GOTO Kosei<span className="text-blue-500">.</span>
                </Link>
                <details className="relative md:hidden">
                    <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
                        Menu
                    </summary>
                    <nav aria-label="モバイルナビゲーション" className="absolute right-0 top-11 z-10 flex w-44 flex-col rounded-lg border border-white/10 bg-slate-950 p-2 shadow-xl">
                        <Link href="#about" className="rounded px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white">About</Link>
                        <Link href="#skills" className="rounded px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white">Skills</Link>
                        <Link href="#experience" className="rounded px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white">Experience</Link>
                        <Link href="#projects" className="rounded px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white">Projects</Link>
                    </nav>
                </details>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
                    <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
                    <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                </nav>
            </div>
        </header>
    );
}
