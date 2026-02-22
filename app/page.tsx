import Image from "next/image";
import { GithubActivity } from "@/components/github-activity";
import { WakaTimeActivity } from "@/components/wakatime-stats";
import { Code2, Terminal, Database, Cloud, Wrench, Briefcase, Github, Twitter, Linkedin, Mail, User, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">GOTO Kosei</span>
            </h1>
            <h2 className="text-2xl font-medium text-slate-300">
              Frontend Engineer / Software Architect
            </h2>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            I am passionate about creating scalable solutions, optimizing performance, and crafting elegant user experiences for modern web applications.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <a href="https://github.com/gtksi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/gotokosei" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/goto.kosei" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#about" className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition duration-300">
              About Me
            </a>
            <a href="#projects" className="bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition duration-300 border border-slate-700">
              View Projects
            </a>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-slate-800 shrink-0 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 z-10" />
          {/* Placeholder for real avatar, falls back nicely */}
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-slate-600">
            GK
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 space-y-8 bg-white/5 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-blue-500/20 p-4 rounded-2xl">
            <User className="w-8 h-8 text-blue-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">自己紹介 (About Me) & 趣味 (Hobbies)</h2>
            <p className="text-slate-300 leading-relaxed">
              こんにちは！モダンなフロントエンド技術を活用した使いやすいUI/UXの開発が得意です。バックエンドやインフラまで幅広い領域に興味を持ち、日々キャッチアップしています。）
            </p>
            <div className="pt-2">
              <h3 className="text-lg font-semibold text-white mb-2">趣味 (Hobbies)</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>カメラ・写真撮影</li>
                <li>読書</li>
                <li>スピードキュービング</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="skills" className="scroll-mt-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A selection of technologies and tools I utilize to bring ideas to production.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Code2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p className="text-slate-400">React, Next.js, TypeScript, Tailwind CSS, Vue.js</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Terminal className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-slate-400">Node.js, Python, Go, REST APIs, GraphQL</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Database className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Database</h3>
            <p className="text-slate-400">PostgreSQL, MySQL, Redis</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Cloud className="w-8 h-8 text-sky-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">DevOps & Cloud</h3>
            <p className="text-slate-400">GCP, Docker, Kubernetes, CI/CD</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Wrench className="w-8 h-8 text-rose-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Tools</h3>
            <p className="text-slate-400">Git, GitHub Actions, Terraform, Jest.</p>
          </div>
        </div>
      </section>

      {/* GitHub Projects & Activity */}
      <section id="projects" className="scroll-mt-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Recent Projects & Open Source</h2>
            <p className="text-slate-400">My latest public contributions on GitHub.</p>
          </div>
          <a href="https://github.com/gtksi" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            View full profile →
          </a>
        </div>
        <GithubActivity />
      </section>

      {/* WakaTime Stats */}
      <section className="space-y-12 pb-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Coding Activity</h2>
          <p className="text-slate-400">Real-time programming metrics via WakaTime.</p>
        </div>
        <WakaTimeActivity />
      </section>

    </div>
  );
}
