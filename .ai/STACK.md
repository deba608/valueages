# VALUEAGES — Stack Reference

> Single source of truth for all AI agents working on this repository.

## Framework & Runtime

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.2.6 (Turbopack) |
| Runtime | React | 19.2.4 |
| Language | TypeScript | ^5 (`strict: true`) |
| Node | Node.js | ≥20 |
| Package Manager | npm | (package-lock.json present) |

## Styling

| Layer | Technology | Notes |
|---|---|---|
| CSS Engine | Tailwind CSS v4 | `@import "tailwindcss"` in globals.css |
| Animations | tw-animate-css | `@import "tw-animate-css"` |
| Component Library | shadcn/ui + Radix UI | Configured via `components.json` |
| Custom Utilities | `globals.css` | 1,000+ lines of hand-crafted design system |
| Motion | Framer Motion | ^12.39.0 |
| GSAP | gsap | ^3.15.0 (available, use sparingly) |

## Component Libraries

- `lucide-react` ^1.16.0 — Icon set (use exclusively, do not mix icon packs)
- `class-variance-authority` ^0.7.1 — Variant-based class management
- `clsx` ^2.1.1 — Conditional classnames
- `tailwind-merge` ^3.6.0 — Merge Tailwind classes without conflicts

## Path Aliases

```
@/* → ./src/*
```

## Key Files

```
src/
  app/
    globals.css      ← Design system root (Tailwind theme, CSS variables, animations)
    layout.tsx       ← Root layout (fonts: Inter + Playfair Display)
    page.tsx         ← Page assembly (imports all section components)
  components/        ← All page sections (flat structure, no subdirectories)
  lib/               ← Utility functions
```

## Rendering

- All pages are **Static** (SSG) — no server-side data fetching yet
- `"use client"` directive required for all interactive components
- `reactStrictMode: true` in next.config.ts

## Remote Images Allowed

- `images.unsplash.com` (via `remotePatterns` in next.config.ts)
