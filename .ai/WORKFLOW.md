# VALUEAGES — Workflow Reference

> Standard development workflows for all contributors and AI agents.

---

## Development Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build + TypeScript check |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint check |

**Always run `npm run build` before marking a task done.**

---

## Adding a New Section

1. Create `src/components/MySectionName.tsx`
2. Follow the section template from `.ai/DESIGN_SYSTEM.md`
3. Add `"use client"` if using hooks
4. Import and add to `src/app/page.tsx` with a numbered comment
5. Run `npm run build`
6. Verify rendering in dev server

## Modifying a Section

1. Read the full component file
2. Understand existing state, animations, and theme classes
3. Make targeted changes — do not rewrite working logic
4. Test all interactive states (hover, active, mobile/desktop)
5. Run `npm run build`

## Updating the Design System

Changes to shared visual tokens must:
1. Update `src/app/globals.css`
2. Update `.ai/DESIGN_SYSTEM.md` to match
3. Audit all components that use the changed token
4. Run `npm run build`

## Debugging TypeScript Errors

1. Run `npm run build` and read errors carefully
2. Check framer-motion type constraints (easing arrays need casting)
3. Use `as keyof typeof obj` for dynamic object lookups
4. Never use `@ts-ignore` — fix the root type issue

---

## Git Conventions

- Commit message style: freeform, ~36 characters
- Examples: `polish CXOConnect graph layout`, `fix connector gradient`, `add WhoShouldContact section`
- Never commit `.next/`, `node_modules/`, or `*.tsbuildinfo`
- `.gitignore` is already configured

---

## Deployment

- Build command: `npm run build`
- Output: `.next/` (standard Next.js static output)
- The site is fully static — no server required at runtime
