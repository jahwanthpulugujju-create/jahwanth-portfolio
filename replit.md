# Jahwanth Creative Portfolio

A personal creative portfolio for Jahwanth Pulugujju showcasing brand strategy, content systems, and creative direction work.

## Run & Operate

- **Dev**: `npm run dev` (port 5000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Format**: `npm run format`

## Stack

- React 19 + TanStack Router + TanStack Start (SSR framework)
- Vite 7 with `@lovable.dev/vite-tanstack-config`
- Tailwind CSS v4
- TypeScript 5
- Radix UI components
- Node.js 22 (required by TanStack Start & Wrangler)

## Where things live

- `src/routes/` — TanStack file-based routes (`__root.tsx`, `index.tsx`)
- `src/components/` — UI components (shadcn/ui in `ui/`)
- `src/styles.css` — Global styles and Tailwind theme
- `src/router.tsx` — Router creation with QueryClient
- `src/server.ts` — SSR server entry (Cloudflare Worker)
- `vite.config.ts` — Vite config (port 5000, host 0.0.0.0)

## Architecture decisions

- Uses `@lovable.dev/vite-tanstack-config` which bundles TanStack Start, React, Tailwind, and Cloudflare Worker build plugins
- SSR via TanStack Start targeting Cloudflare Workers (`wrangler.jsonc`)
- Port overridden to 5000 with `allowedHosts: true` for Replit proxy compatibility
- Node.js 22+ required (TanStack Start and miniflare require >=22)

## Product

Single-page portfolio with: hero section, marquee, about, featured work (Narico Naturals case study), skills, process, and contact sections. Custom cursor, scroll progress, reveal animations.

## User preferences

_Populate as you build_

## Gotchas

- Node.js 22 is required — TanStack Start and Wrangler fail on Node 20
- `@lovable.dev/vite-tanstack-config` defaults to port 8080; we override to 5000 via `vite.server` in `vite.config.ts`
- Do NOT add duplicate plugins (tailwindcss, tsConfigPaths, etc.) — they are bundled inside `@lovable.dev/vite-tanstack-config`

## Pointers

- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)
