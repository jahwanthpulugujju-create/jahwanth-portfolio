# Jahwanth Creative Portfolio

A personal creative portfolio for Jahwanth Pulugujju showcasing brand strategy, content systems, and creative direction work.

## Run & Operate

- **Dev**: `npm run dev` (port 5000)
- **Build**: `npm run build` → outputs to `dist/`
- **Lint**: `npm run lint`
- **Format**: `npm run format`

## Stack

- React 19 + TanStack Router (SPA mode)
- Vite 7 with `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths`
- Tailwind CSS v4
- Framer Motion 12
- TypeScript 5
- Radix UI / shadcn components

## Where things live

- `index.html` — SPA entry point (fonts, meta tags here)
- `src/main.tsx` — React root mount + CSS import
- `src/router.tsx` — Singleton router + QueryClient
- `src/routes/` — TanStack file-based routes (`__root.tsx`, `index.tsx`, `project.$slug.tsx`)
- `src/pages/Home.tsx` — Home page composition
- `src/components/` — All UI components
- `src/styles.css` — Global styles and Tailwind CSS v4 theme
- `src/data/projects.ts` — Project data
- `vite.config.ts` — Vite SPA config (port 5000, TanStackRouterVite plugin)

## Architecture decisions

- Standard Vite SPA — no SSR, no Cloudflare Workers, no TanStack Start
- TanStack Router handles client-side routing with `TanStackRouterVite` plugin
- CSS imported in `src/main.tsx` so it bundles into `dist/assets/`
- Deployed as **static** site on Replit (`publicDir: "dist"`)
- Build: `npm run build` → `vite build` → `dist/index.html` + assets

## Product

Single-page portfolio with: hero (JAH/WANTH editorial split), marquee ticker, about, featured work (Narico Naturals case study), skills, process, and contact sections. Custom cursor, scroll progress, reveal animations, 1.1s page loader.

## User preferences

_Populate as you build_

## Deployment

- Target: **static**
- Build command: `npm run build`
- Public dir: `dist`
- All routes fallback to `index.html` (handled by Replit static hosting)

## Gotchas

- CSS must be imported in `src/main.tsx` — NOT via `?url` import (that was the old SSR pattern)
- `TanStackRouterVite` auto-generates `src/routeTree.gen.ts` — do not edit manually
- `tsconfig-paths` warnings about `.local/skills/` dirs are harmless — from the Replit skills system
