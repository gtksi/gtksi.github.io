import Image from "next/image";
import { GithubActivity } from "@/components/github-activity";
import { WakaTimeActivity } from "@/components/wakatime-stats";
import { Code2, Terminal, Database, Cloud, Wrench, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">robust architectures</span> & modern web apps.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Hi, I'm GOTO Kosei. I am a software architect passionate about creating scalable solutions, optimizing performance, and crafting elegant user experiences.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition duration-300">
              View Projects
            </a>
            <a href="mailto:contact@example.com" className="bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition duration-300 border border-slate-700">
              Contact Me
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
            <p className="text-slate-400">React, Next.js, TypeScript, Tailwind CSS, Vue.js.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Terminal className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-slate-400">Node.js, Python, Go, REST APIs, GraphQL.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Database className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Database</h3>
            <p className="text-slate-400">PostgreSQL, MySQL, MongoDB, Redis.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Cloud className="w-8 h-8 text-sky-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">DevOps & Cloud</h3>
            <p className="text-slate-400">AWS, GCP, Docker, Kubernetes, CI/CD.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
            <Briefcase className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Architecture</h3>
            <p className="text-slate-400">Microservices, Serverless, Event-driven design.</p>
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
