# Valueages — Claude Skill

> This file is read by Claude Code. For the full, canonical AI intelligence layer, read `.ai/` directory.

## Quick Reference

**Stack**: Next.js 16.2.6 (Turbopack) · React 19 · TypeScript 5 · Tailwind CSS v4 · Framer Motion 12

**Full docs**: See `.ai/AGENTS.md` for complete rules, gotchas, and pre-commit checklist.

## Critical Rules

1. Never add `dark:` Tailwind classes — dark mode permanently disabled
2. Run `npm run build` after every change — zero TypeScript errors required
3. Icons: `lucide-react` only
4. SVG linearGradients need `gradientUnits="userSpaceOnUse"` on horizontal paths
5. Card hover: `whileHover={{ y: -6 }}` primary, `whileHover={{ y: -4 }}` secondary
6. Scroll reveals: always `viewport={{ once: true, margin: "-100px" }}`

## Read These Before Any Task

- `.ai/STACK.md` — framework, dependencies
- `.ai/ARCHITECTURE.md` — folder structure, patterns
- `.ai/DESIGN_SYSTEM.md` — colors, typography, animation standards
- `.ai/COMPONENT_RULES.md` — build/modify guide with checklists
- `.ai/UI_RULES.md` — non-negotiable UI enforcement