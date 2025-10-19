# MIT African Graduate Association (AGA) Website

Where African scholarship meets innovation and global influence.

## Overview

This repository contains the AGA website — a fast, accessible single‑page app built with Vite, React, and TypeScript. It highlights our mission, pillars (Aim, Act, Africa), events, resources, and community, while making it easy for new members and partners to get involved.

Live site: aga.mit.edu

## Tech Stack

- React 19 + TypeScript
- Vite 7 (bundler & dev server)
- React Router (hash routing for GitHub Pages)
- Plain CSS (modularized via `styles/` and imported in `styles.css`)
- GitHub Pages + Actions for deployment

## Quick Start

Prerequisites: Node.js 20 (recommended), npm

```bash
npm ci            # or: npm install
npm run dev       # start local dev server
# open the printed URL (usually http://localhost:5173)
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

Type checks and linting:

```bash
npm run typecheck
npm run lint
```

## Environment Variables

This repo uses Vite’s `import.meta.env` conventions. Add secrets locally in `.env.local` (already git‑ignored):

```bash
VITE_GOOGLE_API_KEY=your-browser-api-key
```

The key should:

- Be restricted to the `Google Calendar API`.
- Accept only your production origins (`https://aga.mit.edu`, `https://mitgradafricans.github.io`) plus any dev ports (e.g. `http://localhost:5173`).

When you change any secret used in the GitHub Actions workflow, re-run the deploy job (or push a commit) so the bundle gets rebuilt with the new value.

## Google Calendar Integration

`src/services/googleCalendar.ts` wraps the Calendar REST API and powers the Upcoming Events grid. The helper:

- Reads `VITE_GOOGLE_API_KEY` during build time.
- Fetches six upcoming single events, ordered by start time, and maps them into the `EventCard` shape.
- Surfaces friendly fallback messages when the key is missing or the API errors.

If the key is not available, users see “Our events calendar is being configured. Please check back soon.” Once the API key is configured, both local (`npm run dev`) and production builds display the live events while the embedded iframe remains as a backup.

## Scripts

- `dev` — Run Vite dev server
- `build` — Build production assets to `dist/`
- `preview` — Preview the production build locally
- `typecheck` — TypeScript type checking
- `lint` — ESLint across `.ts`/`.tsx`
- `deploy` — Publish `dist/` to `gh-pages` (uses `gh-pages` CLI)

## Project Structure

- `src/pages/` — Page components (Home, About, Resources, Events, FAQ)
- `src/components/` — UI components (Navbar, HeroSection, Team, Footer, etc.)
- `src/constants/teamMembers.ts` — Team roster data used by the Team section
- `src/assets/` — Images and static assets
- `styles/` — Global CSS split by section; all imported via `styles.css`
- `index.html` — App entry (loads `src/main.tsx`)
- `vite.config.ts` — Vite configuration (base path, plugins)
- `package.json` — Scripts and dependencies

Note: Some legacy `.html` files (e.g., `about.html`, `faq.html`) remain for historical reasons. The React app handles routes and redirects these to their corresponding paths.

## Content Editing Guide

- Home headline: `src/pages/Home.tsx`
- About (pillars copy & images): `src/pages/About.tsx`
- Team members list (name, role, dept, country, links, photo): `src/constants/teamMembers.ts`
- Events (upcoming cards + embedded calendar): `src/pages/Events.tsx`
- Resources cards: `src/pages/Resources.tsx`
- FAQ items and form links: `src/pages/Faq.tsx`
- Navbar labels/links: `src/components/Navbar.tsx`
- Footer logos, socials, address: `src/components/Footer.tsx`

Images live in `src/assets/images/…`. Add new images there and import them where needed.

## Routing & URLs

- The app uses `HashRouter` for GitHub Pages compatibility (`src/main.tsx`).
- Legacy `.html` routes are redirected to the new paths in `src/App.tsx`.

## Deployment

There are two supported flows:

1) GitHub Actions (recommended)

- Workflow: `.github/workflows/deploy_to_pages.yml`
- Trigger: push to `master`
- Website automatically updates once this workflow is triggered
- Secrets: add `VITE_GOOGLE_API_KEY` as an Actions secret (repository-level, or environment-level with `environment: github-pages` on the job) so `npm run build` can embed it. Re-run the workflow after creating or updating the secret.

2) Manual CLI deploy

```bash
npm run build
npm run deploy   # publishes dist/ to gh-pages branch
```

Notes:

- `vite.config.ts` currently sets `base: '/'` which is correct for a root‑level Pages site like this repository.
- The router is hash‑based, so direct links work on GitHub Pages without additional server config.
