# VALUEAGES — Component Rules

> Rules for building, modifying, and reviewing any component in this codebase.

---

## The Golden Rules

1. **One file = one section.** No barrel exports. No index files. No subdirectories.
2. **Data lives with its component.** Define static data arrays at the top of the file that uses them.
3. **Animations are always consistent.** Match the exact Framer Motion patterns from `.ai/DESIGN_SYSTEM.md`.
4. **No dark mode classes ever.** The site is light-only. `dark:` prefixes break the design.
5. **Section structure is standardized.** Every section follows the shell template from `DESIGN_SYSTEM.md`.

---

## New Section Checklist

When creating a new section component, verify ALL of these:

- [ ] File is in `src/components/` (no subdirectory)
- [ ] File name is PascalCase
- [ ] Default export only: `export default function MySectionName()`
- [ ] `"use client"` at the top if it uses state/effects/browser APIs
- [ ] Section uses `section-shell` + either `theme-section-light` or `theme-section-muted`
- [ ] Section has `id` attribute (kebab-case) and `aria-labelledby` pointing to the `<h2>`
- [ ] Section `<h2>` has matching `id` attribute
- [ ] Background grid pattern is included (opacity-[0.04] grid with radial mask)
- [ ] Ambient glows are included (at least one teal, one rust/green blob)
- [ ] Section eyebrow badge uses the `Sparkles` icon + teal styling
- [ ] Header reveal uses the standard 3-motion-element pattern (badge, h2, p)
- [ ] Cards use `whileHover={{ y: -6 }}` (primary) or `whileHover={{ y: -4 }}` (secondary)
- [ ] Grid entrance uses `containerVariants` + `cardVariants` with `viewport={{ once: true }}`
- [ ] No `dark:` classes anywhere
- [ ] TypeScript: no `any` types, all Variants explicitly typed
- [ ] Component is imported and placed in `src/app/page.tsx` with a comment
- [ ] Build passes: `npm run build` with zero errors

---

## Modifying Existing Components

Before modifying a component:
1. Read the full component file to understand its current animation state
2. Check which `themeClasses` accent keys are used
3. Do not change hover/transition values from the standards below
4. Run `npm run build` after every significant change

---

## Standard Animation Values (Never Deviate)

```
Hover lift — primary cards:    whileHover={{ y: -6 }}
Hover lift — secondary cards:  whileHover={{ y: -4 }}
Hover lift — compact cards:    whileHover={{ y: -2 }}
Hover scale — icon badges:     whileHover={{ scale: 1.1 }}

Entrance reveal duration:      0.6s
Entrance reveal ease:          "easeOut"
Stagger delay — fast:          0.08s
Stagger delay — standard:      0.12s

CSS transitions — standard:    duration-300 (300ms)
CSS transitions — fast:        duration-200 (200ms)

Accordion expand:              duration: 0.35, ease: "easeInOut"
Scale pulse (active cards):    initial: scale 0.96, animate: scale 1, duration: 0.25s
```

---

## BorderGlow Component Usage

The `<BorderGlow>` component is the **premium card wrapper** for interactive elements.

```tsx
// Active state (hovered/selected)
<BorderGlow
  edgeSensitivity={30}
  glowColor="169 81 34"           // HSL teal
  backgroundColor="transparent"
  borderRadius={20}
  glowRadius={70}
  glowIntensity={1.4}
  coneSpread={30}
  animated={true}
  colors={["#0f766e", "#109B82", "#5D9F9B"]}
>

// Inactive state
<BorderGlow
  edgeSensitivity={50}
  glowColor="169 81 34"
  backgroundColor="transparent"
  borderRadius={20}
  glowRadius={0}
  glowIntensity={0}
  animated={false}
  colors={["#0f766e", "#109B82", "#5D9F9B"]}
>
```

---

## SVG Connector Graphs

When building connector graphs (as in `CXOConnect.tsx`):

1. Use `viewBox="0 0 100 100"` with `preserveAspectRatio="none"` for percentage-based coordinates
2. **Always use `gradientUnits="userSpaceOnUse"`** on all `<linearGradient>` elements. ObjectBoundingBox fails on horizontal/flat lines.
3. Use `vectorEffect="non-scaling-stroke"` on all `<path>` elements to maintain consistent visual stroke width
4. Use curved Bezier paths (`C`) not straight lines (`L`) for connections to avoid card-shadow overlap
5. Apply `filter="url(#laser-glow)"` on glow underlayer paths
6. Animate flowing dashed lines with `stroke-dasharray` + `animate-flow-dash` or `animate-flow-dash-fast`
7. Inactive connector: `rgba(148,163,184,0.25)` stroke, `strokeWidth="1.2"`, no filter
8. Active connector: themed `glowColor` with filter, `strokeWidth="6"` glow + `strokeWidth="2"` laser

---

## Accordion / Expand Pattern

For expandable card content:

```tsx
<motion.div
  initial={false}
  animate={{
    height: isSelected ? "auto" : 0,
    opacity: isSelected ? 1 : 0,
    marginTop: isSelected ? 14 : 0,
  }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className="overflow-hidden"
>
  {/* expanded content */}
</motion.div>
```

---

## Footer Status Bar Pattern

For section-level status bars at the bottom of interactive dashboards:

```tsx
<div className="glass-effect relative z-20 mt-8 rounded-2xl p-4 border border-slate-200/80 shadow-lg bg-white">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    {/* Left: icon + status text */}
    {/* Right: "Connected" badge with animated ping dot */}
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
      Connected <ArrowRight size={12} />
    </span>
  </div>
</div>
```
