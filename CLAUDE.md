# VALUEAGES — Claude Code Instructions

> Loaded automatically by Claude Code when working in this repository.

## Project: Valueages Marketing Site

**Stack**: Next.js 16.2.6 (Turbopack) · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · Framer Motion 12

## Required: Read `.ai/` Before Working

This workspace has a complete AI intelligence layer. Always read in order:
1. `.ai/STACK.md` — dependencies and versions
2. `.ai/ARCHITECTURE.md` — folder structure, patterns
3. `.ai/DESIGN_SYSTEM.md` — design tokens, animation standards
4. `.ai/COMPONENT_RULES.md` — build/modify rules
5. `.ai/UI_RULES.md` — non-negotiable UI rules

## Top Rules

| Rule | Detail |
|---|---|
| No dark mode | Never add `dark:` classes — permanently disabled |
| Build always passes | Run `npm run build` after every change, fix all errors |
| Flat components | All sections in `src/components/` — no subdirs |
| Default exports | `export default function Name()` — not named exports |
| Icons | `lucide-react` only |
| TypeScript | No `any`. Explicit Variants types. |

## Critical SVG Gotcha

```tsx
// horizontal SVG gradients MUST use userSpaceOnUse
<linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
// Not objectBoundingBox (the default) — it fails on horizontal paths
```

## Standard Animation Values

```tsx
whileHover={{ y: -6 }}  // primary cards
whileHover={{ y: -4 }}  // secondary cards
viewport={{ once: true, margin: "-100px" }}  // always
staggerChildren: 0.08   // fast, or 0.12 standard
transition: { duration: 0.6, ease: "easeOut" }  // reveals
```

## Pre-Task Checklist

- [ ] Read the full component file before modifying
- [ ] Check which theme accent keys are used  
- [ ] Plan minimal targeted changes

## Post-Task Checklist

- [ ] `npm run build` zero errors
- [ ] No `dark:` classes
- [ ] No TypeScript `any`
- [ ] Standard hover/stagger values
- [ ] `aria-labelledby` + `id` on sections
