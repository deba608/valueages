<!-- BEGIN:nextjs-agent-rules -->
# VALUEAGES — Universal Agent Instructions

## ⚠️ This is NOT Standard Next.js

This project runs **Next.js 16.2.6** (Turbopack). APIs and conventions differ from your training data.
Read `node_modules/next/dist/docs/` before writing any Next.js-specific code.

## 📚 Required Reading — AI Workspace

All project intelligence lives in `.ai/`. Read these files **before any task**:

| File | Purpose |
|---|---|
| `.ai/AGENTS.md` | Full agent rules, gotchas, pre-commit checklist |
| `.ai/STACK.md` | Framework, dependencies, path aliases |
| `.ai/ARCHITECTURE.md` | Folder structure, component patterns, naming |
| `.ai/DESIGN_SYSTEM.md` | Colors, typography, animations, tokens |
| `.ai/COMPONENT_RULES.md` | How to build/modify components, checklists |
| `.ai/UI_RULES.md` | Non-negotiable UI enforcement rules |
| `.ai/WORKFLOW.md` | Development commands, git conventions |
| `.ai/PERFORMANCE.md` | Performance standards |
| `.ai/ACCESSIBILITY.md` | WCAG 2.1 AA standards |

## 🔴 Critical Rules (Memorize These)

1. **No `dark:` Tailwind classes** — dark mode is permanently disabled
2. **Always run `npm run build`** after changes — never leave TypeScript errors
3. **SVG linear gradients** need `gradientUnits="userSpaceOnUse"` on horizontal paths
4. **Icons**: `lucide-react` only — never mix icon packs
5. **Card hover**: `whileHover={{ y: -6 }}` primary, `whileHover={{ y: -4 }}` secondary
6. **Viewport**: always `viewport={{ once: true, margin: "-100px" }}` on scroll reveals
<!-- END:nextjs-agent-rules -->
