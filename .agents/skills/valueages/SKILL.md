---
description: >
  Valueages development patterns, design system, and engineering standards.
  Canonical AI intelligence for all agents working on this Next.js 16 marketing site.
---

# Valueages — AI Agent Skill Pack

## 🏗 Stack Overview

- **Framework**: Next.js 16.2.6 (Turbopack), App Router
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4 + custom globals.css design system
- **Motion**: Framer Motion 12 (primary), GSAP 3 (SVG/canvas only)
- **Icons**: lucide-react (exclusively)
- **UI Components**: shadcn/ui + Radix UI
- **Path alias**: `@/*` → `./src/*`

---

## 📂 Key Files

```
src/app/globals.css       ← Design system root
src/app/page.tsx          ← Page assembly (all sections)
src/components/           ← One file per section (flat, no subdirs)
src/components/BorderGlow.tsx  ← Premium interactive glow component
.ai/                      ← Full AI workspace intelligence layer
```

---

## 🎨 Design System Essentials

### Colors (Tailwind `@theme` tokens)
```
brand-teal:       #109B82  (primary)
brand-teal-light: #5D9F9B  (gradient endpoint)
brand-green:      #4F8F7B  (secondary)
brand-rust:       #B85A3A  (warm accent)
brand-tan:        #C99A5A  (warm gradient)
```

### Typography
- Headings: `font-serif` (Playfair Display)
- Body: `font-sans` (Inter)

### Section Shell
```tsx
<section className="section-shell theme-section-light|muted relative overflow-hidden transition-colors duration-500 py-24 sm:py-32" aria-labelledby="id">
```

### Ambient Background (every section)
```tsx
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #109B82 1px, transparent 1px), ...", backgroundSize: "32px 32px", maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)" }} />
  <div className="absolute top-1/4 left-[-10%] h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[120px]" />
  <div className="absolute bottom-1/4 right-[-10%] h-[350px] w-[350px] rounded-full bg-brand-rust/5 blur-[120px]" />
</div>
```

---

## ⚡ Animation Standards

```typescript
// Entrance reveal (staggered)
containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

// Always use viewport={{ once: true, margin: "-100px" }}

// Hover lifts
whileHover={{ y: -6 }}  // primary cards
whileHover={{ y: -4 }}  // secondary cards
whileHover={{ y: -2 }}  // compact / right-stack cards

// Accordion expand
animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }}
transition={{ duration: 0.35, ease: "easeInOut" }}
```

---

## ⚠️ Critical Gotchas

### 1. SVG Linear Gradients
```tsx
// ❌ Invisible on horizontal paths
<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">

// ✅ Always use userSpaceOnUse
<linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
```

### 2. Dark Mode — BANNED
Tailwind v4 applies `dark:` classes via system preference. This site is light-only.
**Never add `dark:` prefix classes.**

### 3. Framer Motion Easing Arrays
```tsx
// ❌ TypeScript error
ease: [0.16, 1, 0.3, 1]
// ✅
ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
// ✅ OR just use strings:
ease: "easeOut"
```

### 4. SVG Card-Shadow Overlap
Use curved Bezier paths (`C` command) not straight lines (`L`) for card connectors.
Straight horizontal paths get swallowed by adjacent `shadow-xl` card shadows.

---

## 🔧 Development Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build + TypeScript check (run after every change)
npm run lint     # ESLint check
```

---

## 📋 Pre-Commit Checklist

- [ ] `npm run build` passes — zero errors
- [ ] No `dark:` classes added
- [ ] No TypeScript `any` types
- [ ] `viewport={{ once: true }}` on all scroll reveals
- [ ] Standard hover lift values used
- [ ] Section has `aria-labelledby` + matching `id`
- [ ] All `<button>` elements have `type="button"`

---

## 📚 Full Intelligence Layer

For complete documentation, read `.ai/` directory:
- `.ai/AGENTS.md` — Master agent rules
- `.ai/DESIGN_SYSTEM.md` — All design tokens and patterns
- `.ai/ARCHITECTURE.md` — Folder structure and conventions
- `.ai/COMPONENT_RULES.md` — Build/modify component guide
- `.ai/UI_RULES.md` — UI enforcement rules