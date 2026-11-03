# GOTO Kosei Portfolio

Modern, static portfolio website built with Next.js (App Router), React, Tailwind CSS v4, and TypeScript. GitHub repositories and WakaTime statistics are fetched when the site is built and published as a static snapshot.

## 🚀 Architecture

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 7
- **Styling**: Tailwind CSS v4 (Utility-first, minimal compiled CSS)
- **Code Quality**: Biome (linting)
- **Deployment**: GitHub Pages (via Static HTML Export)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Build-time Data**: GitHub API & WakaTime API integrated as Next.js Server Components.

## 🛠 Features

- **Static Export**: Uses Next.js `output: 'export'` for full static generation (SSG) with no runtime server.
- **Dark Mode First**: Premium aesthetic utilizing a deep slate gradient and glassmorphism.
- **GitHub Integration**: Lists recent, non-forked public repositories captured at build time.
- **WakaTime Integration**: Displays a build-time snapshot of the last 7 days of coding time and language usage.

## 💻 Local Development

### Prerequisites

- Node.js 20.9+
- npm / pnpm / yarn

### API Keys (Optional but Recommended)

To fetch data properly during development, create a `.env.local` file in the root of the project:

```env
GITHUB_TOKEN=your_personal_access_token
WAKATIME_API_KEY=your_wakatime_api_key
```

*Note: WakaTime API key is required to show coding activity. If omitted, a fallback message will be displayed.*

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Verify code quality with `npm run lint`.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment (GitHub Pages)

This repository is configured to automatically deploy to GitHub Pages whenever you push to the `master` branch.

### Setup Instructions

1. Go to your repository settings on GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Under **Settings > Secrets and variables > Actions**, add the following **Repository secrets**:
   - `WAKATIME_API_KEY` (Required to include WakaTime stats in the build)

The `.github/workflows/deploy.yml` workflow uses GitHub Actions' built-in `GITHUB_TOKEN`, builds the static site, and deploys it directly to GitHub Pages.
