import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
                    GOTO Kosei<span className="text-blue-500">.</span>
                </Link>
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
