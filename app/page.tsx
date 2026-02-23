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
              Software Architect / Frontend Engineer
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 z-10 rounded-full" />
          <Image
            src="/avatar.png"
            alt="GOTO Kosei"
            fill
            className="object-cover z-20"
            sizes="(max-width: 768px) 192px, 256px"
            priority
          />
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
                <li>アナログゲーム</li>
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

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <p className="text-slate-400">これまでの経歴や参加プロジェクトについて。</p>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950" />
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">最近は</h3>
                <span className="text-sm font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full w-fit">2024年 11月 - 現在</span>
              </div>
              <p className="text-slate-400 leading-relaxed pt-2">
                非同期発達の子どもの助けになるよう認知と行動の差を埋めるスマートフォンアプリの開発を行っています。
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950" />
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">ソフトウェアアーキテクト</h3>
                <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">2016年 9月 - 現在</span>
              </div>
              <p className="text-slate-400 leading-relaxed pt-2">
                いくつかのスタートアップ企業を支援し、React / Next.js を用いた新規サービス等の立ち上げに従事していました。
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950" />
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">Webエンジニア(フロントエンド・バックエンド)</h3>
                <span className="text-sm font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full w-fit">2007年 4月 - 2016年 8月</span>
              </div>
              <p className="text-slate-400 leading-relaxed pt-2">
                社内向け勤怠管理システム等でフロントエンド・バックエンド開発を担当。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Works / Apps Section */}
      <section id="works" className="scroll-mt-24 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Works / Apps</h2>
          <p className="text-slate-400">個人的に開発・公開しているアプリケーション。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Go/No-Go App Card */}
          <a
            href="https://gtksi.github.io/pwa_go_no_go/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
              <div className="bg-blue-500/20 text-blue-400 p-2 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Go/No-Go & Stroop Task PWA
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                衝動性のコントロールと認知的柔軟性を鍛えるための脳トレアプリ。PWAとしてインストール可能で、レベルが上がるとストループ効果を利用した複雑な課題に変化します。
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">React</span>
                <span className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">TypeScript</span>
                <span className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">Vite</span>
                <span className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">PWA</span>
              </div>
            </div>
          </a>
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
