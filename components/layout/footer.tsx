import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/50 py-8 px-6 mt-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} GOTO Kosei. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-slate-400">
                    <a href="https://github.com/gtksi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                        <span className="sr-only">GitHub</span>
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/gotokosei" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:contact@example.com" className="hover:text-white transition-colors duration-200">
                        <span className="sr-only">Email</span>
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
