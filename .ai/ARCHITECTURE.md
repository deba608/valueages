# VALUEAGES — Architecture Reference

> Read this before proposing structural or refactoring changes.

---

## Application Type

**Marketing / Consulting Website** — Single-page multi-section layout. All content is static. No database, no auth, no API routes.

---

## Folder Structure

```
valueages/
├── .ai/                     ← AI workspace intelligence (this folder)
├── .agents/skills/          ← Agent-specific skill packs
├── .claude/skills/          ← Claude-specific skill configs
├── .codex/                  ← Codex CLI config + multi-agent specs
├── public/                  ← Static assets (images, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css      ← DESIGN SYSTEM ROOT — all tokens, utilities, animations
│   │   ├── layout.tsx       ← Root layout: fonts, metadata, body shell
│   │   └── page.tsx         ← PAGE ASSEMBLY — imports and orders all sections
│   ├── components/          ← ONE FILE PER SECTION — flat structure
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── About.tsx
│   │   ├── UnifyAppsPartnership.tsx
│   │   ├── GSIStrategy.tsx
│   │   ├── GCCStrategy.tsx
│   │   ├── ValueSelling.tsx
│   │   ├── ProductExpansion.tsx
│   │   ├── CXOConnect.tsx
│   │   ├── Services.tsx
│   │   ├── GTMConsole.tsx
│   │   ├── ClientWins.tsx
│   │   ├── WhoShouldContact.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BorderGlow.tsx   ← Reusable interactive card glow component
│   │   └── BlurText.tsx     ← Reusable text animation utility
│   ├── hooks/               ← Reusable React hooks (useMediaQuery)
│   ├── types/               ← Shared TypeScript interfaces (SectionId, NavLink, StatItem, LucideIcon)
│   └── lib/                 ← Utility functions (cn, etc.)
├── AGENTS.md                ← Next.js version warning for all agents
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Page Assembly Pattern

`src/app/page.tsx` imports and renders all section components in order. Sections are numbered with comments:

```tsx
// 1. CXO Hero
<Hero />
// 2. Strategic proof points
<TrustBar />
// 3. Founder advisory
<About />
// ...etc
```

**Rule**: Page ordering is managed exclusively in `page.tsx`. Never hardcode order within components.

---

## Component Architecture

### Section Component Rules
1. Each section is a **single `.tsx` file** in `src/components/`
2. File names use **PascalCase** (e.g., `CXOConnect.tsx`)
3. **Default exports only** — no named exports from section files
4. Components using hooks or browser APIs must start with `"use client"`
5. State management is **local only** (useState/useEffect) — no global state
6. No cross-component state sharing — if data is needed in two places, duplicate it (site is static content)

### Data Co-location Pattern
Static data arrays (networks, services, etc.) are defined **at the top of the same file** they're used in. Do not create separate data files unless the data is shared across 3+ components.

```tsx
// Correct: data defined at file top
const networks = [
  { title: "BFSI Leaders", ... },
];

export default function CXOConnect() {
  return <section>...</section>;
}
```

### Theme / Accent Mapping Pattern
Components with multiple accent variants use a `themeClasses` map:
```tsx
const themeClasses = {
  teal: { border: "border-brand-teal", text: "text-brand-teal", ... },
  green: { ... },
  warm: { ... },
};
```

---

## Reusable Components

### `<BorderGlow>` — `src/components/BorderGlow.tsx`
Mouse-interactive HSL mesh sweep glow border. Used in `Services.tsx`, `WhyChooseUs.tsx`, `CXOConnect.tsx`.
- Pass `animated={true}` for auto-sweep on mount
- Pass `animated={isSelected}` for toggle-based activation
- See `.ai/DESIGN_SYSTEM.md` for exact prop values per accent

### `<BlurText>` — `src/components/BlurText.tsx`
Animated text reveal with blur effect. Use for hero headlines.

---

## Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Files | PascalCase | `CXOConnect.tsx` |
| Components | PascalCase | `export default function CXOConnect()` |
| Variables | camelCase | `activeSegment`, `themeClasses` |
| CSS classes | kebab-case | `premium-card`, `glass-effect` |
| Section IDs | kebab-case | `id="cxo"`, `id="services"` |
| Constants | SCREAMING_SNAKE | (not currently used — avoid) |

---

## Import Order Convention

```tsx
"use client";  // if needed

// 1. React/Next
import { useState, useEffect } from "react";

// 2. Third-party
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Icon1, Icon2 } from "lucide-react";

// 3. Internal components
import BorderGlow from "./BorderGlow";

// 4. Types (if any)
```

---

## TypeScript Rules

- `strict: true` — all types must be explicit
- **No `any`** — use proper types or `unknown`
- Framer Motion easing arrays must be typed: `as [number, number, number, number]`
- Explicitly type `Variants` from framer-motion: `const x: Variants = { ... }`
- Use `as keyof typeof obj` for typed object lookups

---

## What NOT to Do

- ❌ Do not create subdirectories inside `src/components/`
- ❌ Do not create API routes (no `src/app/api/`)
- ❌ Do not add global state management (no Zustand, Redux, Context)
- ❌ Do not use `export const` for section components (always `export default function`)
- ❌ Do not add `dark:` Tailwind classes — dark mode is permanently disabled
- ❌ Do not use inline `style` for colors/spacing that can be expressed as Tailwind classes
- ❌ Do not import from `@/lib` for component-specific helpers — keep them in the component file
- ❌ Do not use GSAP unless animating canvas/SVG paths — use Framer Motion for all UI animations
