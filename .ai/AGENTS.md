# VALUEAGES — Agent Instructions (AGENTS.md)

> This file is read by ALL AI agents: Cursor, Claude Code, Codex, Gemini CLI, Windsurf, GitHub Copilot, and any MCP-compatible system. Follow every rule here without exception.

---

## 🔴 CRITICAL: This is NOT Standard Next.js

This project uses **Next.js 16.2.6** with Turbopack. APIs, file conventions, and behaviors differ significantly from Next.js 13/14/15 training data.

**Before writing any Next.js code:**
1. Read `node_modules/next/dist/docs/` for this specific version
2. Check `next.config.ts` for active feature flags
3. Do not assume routing or image optimization APIs match older versions
4. Heed all deprecation warnings in the build output

---

## 📖 Required Reading Before Making Changes

Read these files **in order** before any task:

1. `.ai/STACK.md` — framework, dependencies, paths
2. `.ai/ARCHITECTURE.md` — folder structure, component patterns
3. `.ai/DESIGN_SYSTEM.md` — colors, typography, animations, tokens
4. `.ai/COMPONENT_RULES.md` — how to build/modify components
5. `.ai/UI_RULES.md` — non-negotiable UI enforcement rules

For section-specific work, read the relevant component file in full before editing.

---

## 🏗 Architecture Rules

- **Flat component structure**: All section components live in `src/components/` — no subdirectories
- **Single responsibility**: Each file = one section = one default export
- **Local state only**: No global state. Use `useState`/`useEffect` within components
- **Static data co-location**: Data arrays live at the top of the file that uses them
- **No API routes**: This is a static marketing site — no `src/app/api/`

---

## 🎨 Design System Rules

- **Color palette**: Use only `brand-teal`, `brand-green`, `brand-rust`, `brand-tan` (from Tailwind `@theme`)
- **No dark mode**: Never add `dark:` prefix classes — permanently disabled
- **Typography**: `font-serif` for headings, `font-sans` for body
- **Icons**: `lucide-react` exclusively — never mix icon sets
- **Motion**: Framer Motion for UI animations, `globals.css` classes for ambient/CSS animations

### Mandatory Animation Values
```
Primary card hover:    whileHover={{ y: -6 }}
Secondary card hover:  whileHover={{ y: -4 }}
Entrance reveal:       { opacity: 0, y: 30 } → { opacity: 1, y: 0 }, duration: 0.6, ease: "easeOut"
Stagger:               staggerChildren: 0.08 (fast) or 0.12 (standard)
Transitions:           duration-300 (standard), duration-200 (fast)
viewport:              always { once: true, margin: "-100px" }
```

---

## 🔧 Development Workflow

### Before Any Edit
1. Read the complete target file
2. Understand the current animation state, theme classes, and data structure
3. Plan minimal changes — do not rewrite working sections

### After Every Edit
1. Run `npm run build` to verify TypeScript + build
2. Fix all TypeScript errors before considering the task done
3. Never leave the build in a broken state

### Git Workflow
- Commit messages are freeform (~36 chars average)
- Stage related files together
- Never commit `node_modules/`, `.next/`, or `*.tsbuildinfo`

---

## ⚠️ Common Gotchas

### SVG Linear Gradients on Horizontal Lines
```tsx
// ❌ WRONG — fails on horizontal/flat paths (zero-height bounding box)
<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">

// ✅ CORRECT — always use userSpaceOnUse
<linearGradient id="grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
```

### Framer Motion Easing Arrays
```tsx
// ❌ TypeScript error
transition={{ ease: [0.16, 1, 0.3, 1] }}

// ✅ Correct
transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
// OR just use string easing:
transition={{ ease: "easeOut" }}
```

### Tailwind v4 Dark Mode
In Tailwind v4, `@media (prefers-color-scheme: dark)` is active by default. Any stray `dark:` utility class will apply in system-dark environments. This site has no dark mode — **never add `dark:` classes**.

### Card Shadow Overlap on SVG Paths
Straight horizontal SVG paths get swallowed by adjacent card shadows. Always use curved Bezier paths (`M x1 y1 C cx1 cy1, cx2 cy2, x2 y2`) for connector lines between cards.

### Motion Height Animation
To animate height to `auto` in Framer Motion, use `animate={{ height: isOpen ? "auto" : 0 }}` with `className="overflow-hidden"` on the container. Do not set `height: "100%"` — it won't animate.

---

## 🤝 Multi-Agent Compatibility

This workspace supports multiple AI agents. When working concurrently:

- **Explorer agents**: Read-only. Gather evidence, analyze patterns. Do not write code.
- **Reviewer agents**: Validate TypeScript, check animation consistency, verify AGENTS.md compliance.
- **Docs researcher agents**: Verify Next.js 16 API behavior, lucide-react icon availability, framer-motion API.
- **Implementation agents**: Follow `.ai/` rules, implement changes, run build to verify.

All agents share the same `.ai/` intelligence layer. If you discover a new pattern or gotcha, update the relevant `.ai/*.md` file.

---

## ✅ Pre-Commit Checklist

Before marking any task as done:

- [ ] `npm run build` passes with zero errors
- [ ] No `dark:` utility classes added
- [ ] No TypeScript `any` types
- [ ] All hover animations use standard values
- [ ] `viewport={{ once: true }}` on all scroll reveals
- [ ] Section has `aria-labelledby` + matching heading `id`
- [ ] All interactive elements have `type="button"` (if `<button>`)
- [ ] No placeholder images or copy
- [ ] No `console.log` statements
- [ ] No commented-out code
