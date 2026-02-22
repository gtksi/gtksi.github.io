# GOTO Kosei Portfolio

Modern, high-performance portfolio website built with Next.js (App Router), Tailwind CSS v4, and TypeScript. Optimized for a perfect 100/100 Lighthouse score and designed to automatically fetch and display real-time GitHub and WakaTime activity.

## 🚀 Architecture

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (Utility-first, minimal compiled CSS)
- **Deployment**: GitHub Pages (via Static HTML Export)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Dynamic Content**: GitHub API & WakaTime API integrated as Next.js Server Components.

## 🛠 Features

- **Blazing Fast**: Uses Next.js `output: 'export'` for full static generation (SSG). Zero runtime server overhead.
- **Dark Mode First**: Premium aesthetic utilizing a deep slate gradient and glassmorphism.
- **GitHub Integration**: Automatically fetches and lists recent, non-forked public repositories.
- **WakaTime Integration**: Displays the last 7 days of coding time and language usage dynamically.

## 💻 Local Development

### Prerequisites

- Node.js (v20+)
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
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment (GitHub Pages)

This repository is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### Setup Instructions

1. Go to your repository settings on GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Under **Settings > Secrets and variables > Actions**, add the following **Repository secrets**:
   - `WAKATIME_API_KEY` (Required for WakaTime stats)
   - `GH_TOKEN_FOR_PORTFOLIO` (Optional: If you want to use a Custom PAT instead of default `GITHUB_TOKEN`)

The `.github/workflows/deploy.yml` workflow will handle building the static site and deploying it directly to GitHub Pages.
