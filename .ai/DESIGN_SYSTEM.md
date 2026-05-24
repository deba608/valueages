# VALUEAGES — Design System Reference

> This is the canonical source of design truth for every AI agent and developer. Do not invent tokens — use these.

---

## Color Palette (CSS Custom Properties via Tailwind `@theme`)

| Token | Hex | Usage |
|---|---|---|
| `brand-teal` | `#109B82` | Primary brand, CTAs, icons, active states |
| `brand-teal-light` | `#5D9F9B` | Gradients, hover accents |
| `accent-teal` | `#0FA88A` | Button hover, laser glow endpoints |
| `brand-green` | `#4F8F7B` | Secondary accent, GCC/green route |
| `brand-rust` | `#B85A3A` | Warm accent, GSI/rust route, error states |
| `brand-tan` | `#C99A5A` | Warm gradient endpoint, tan route |
| `dark-bg` | `#090e17` | Dark card backgrounds (rarely used) |
| `dark-card` | `rgba(15,23,42,0.6)` | Dark card surface |

## Semantic CSS Variables (Light-only — dark mode DISABLED)

```css
--background: #fbfcf8           /* Page background */
--foreground: #0f172a           /* Page text */
--surface: #f7faf6              /* Muted surface */
--surface-elevated: #ffffff     /* Card surface */
--surface-panel: rgba(255,255,255,0.86)
--border-primary: #dfe8e5       /* Default border */
--text-primary: #0f172a
--text-secondary: #475569
--text-tertiary: #64748b
--text-muted: #94a3b8
```

> **CRITICAL**: Dark mode is permanently disabled. Never add `dark:` utility classes. The CSS has `color-scheme: light` forced at both `:root` and `html` level.

---

## Typography

| Role | Font | CSS Class |
|---|---|---|
| Headings (serif) | Playfair Display | `font-serif` |
| Body / UI (sans) | Inter | `font-sans` (default) |

### Heading Hierarchy

```
h1  → font-serif, text-4xl → text-6xl, font-bold/black
h2  → font-serif, text-3xl → text-5xl, font-bold
h3  → font-sans,  text-lg  → text-2xl, font-bold
h4  → font-sans,  text-base → text-xl, font-semibold
```

### Eyebrow Labels (Section Badges)

```tsx
// Always use this exact pattern:
<motion.div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-semibold text-brand-teal shadow-xs mb-4">
  <Sparkles size={13} className="text-brand-teal animate-pulse" />
  Section Label
</motion.div>
```

---

## Spacing Scale

Use Tailwind's default spacing scale. Key section values:

| Usage | Value |
|---|---|
| Section vertical padding | `py-24 sm:py-32` |
| Container max-width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Card padding | `p-6` (default), `p-8` (premium), `p-4` (compact) |
| Gap between grid items | `gap-6` (default), `gap-8` (relaxed) |
| Header bottom margin | `mb-16 md:mb-20` |

---

## Section Structure Template

Every section must follow this exact shell:

```tsx
<section
  id="unique-id"
  className="section-shell theme-section-light|muted relative overflow-hidden transition-colors duration-500 py-24 sm:py-32"
  aria-labelledby="section-title"
>
  {/* Ambient Glow Background */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(to right, #109B82 1px, transparent 1px), linear-gradient(to bottom, #109B82 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
      WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
    }} />
    <div className="absolute top-1/4 left-[-10%] h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[120px]" />
    <div className="absolute bottom-1/4 right-[-10%] h-[350px] w-[350px] rounded-full bg-brand-rust/5 blur-[120px]" />
  </div>

  <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
      {/* Eyebrow badge */}
      {/* h2 with id matching aria-labelledby */}
      {/* Description paragraph */}
    </div>

    {/* Section Content */}
  </div>
</section>
```

---

## Section Backgrounds

| Class | Background | Usage |
|---|---|---|
| `theme-section-light` | `#ffffff` | Bright sections |
| `theme-section-muted` | `#f8fafc` | Alternating sections |

Sections should **alternate** between light and muted backgrounds.

---

## Card System

### Premium Card (Large dashboard container)
```css
.premium-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,252,249,0.9));
  border: 1px solid rgba(223,232,229,0.95);
  box-shadow: 0 22px 70px -48px rgba(15,23,42,0.58), 0 1px 0 rgba(255,255,255,0.85) inset;
}
```

### Glass Effect Card
```css
.glass-effect {
  background: rgba(255,255,255,0.72);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.4);
}
```

### Interactive Card
```css
.interactive-card {
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease;
}
.interactive-card:hover {
  transform: translateY(-2px);
  border-color: rgba(16,155,130,0.34);
}
```

### Framer Motion Hover (preferred over CSS hover for cards)
```tsx
<motion.div whileHover={{ y: -6 }}>  {/* Primary cards */}
<motion.div whileHover={{ y: -4 }}>  {/* Secondary cards */}
<motion.div whileHover={{ y: -2 }}>  {/* Compact cards */}
```

### BorderGlow Component
For premium interactive cards, use the `<BorderGlow>` component:
```tsx
import BorderGlow from "./BorderGlow";

<BorderGlow
  edgeSensitivity={45}
  glowColor="169 81 34"        // HSL string for teal
  backgroundColor="transparent"
  borderRadius={16}
  glowRadius={70}
  glowIntensity={1.4}
  coneSpread={30}
  animated={isActive}
  colors={["#0f766e", "#109B82", "#5D9F9B"]}
>
  {/* card content */}
</BorderGlow>
```

BorderGlow `glowColor` / `glowColors` per accent:

| Accent | `glowColor` (HSL) | `glowColors` |
|---|---|---|
| teal | `"169 81 34"` | `["#0f766e", "#109B82", "#5D9F9B"]` |
| green | `"162 29 43"` | `["#4F8F7B", "#5D9F9B", "#109B82"]` |
| rust | `"16 52 47"` | `["#B85A3A", "#C99A5A", "#B85A3A"]` |
| tan | `"35 52 57"` | `["#C99A5A", "#5D9F9B", "#109B82"]` |

---

## Animation Standards

### Entrance Reveals (Framer Motion — MANDATORY pattern)
```tsx
// Container with stagger
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },  // or 0.12 for slower
};

// Child items
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Usage — ALWAYS use viewport={{ once: true }}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

### Section Header Reveal (individual items)
```tsx
<motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
<motion.p  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
```

### CSS Animation Classes (defined in globals.css)
| Class | Effect |
|---|---|
| `animate-pulse-slow` | 6s slow pulse |
| `animate-flow-dash` | SVG dashed line flow (2s) |
| `animate-flow-dash-fast` | SVG dashed line flow (1.2s) |
| `animate-float` | 9s gentle float |
| `animate-float-slow` | 13s slow float |
| `animate-spin-slow` | 20s slow spin |
| `animate-glow-pulse` | 5s ambient glow breath |
| `animate-blur-up` | One-shot blur+slide entrance |
| `animate-gradient-text` | Animated gradient text |
| `btn-shimmer` | Light beam shimmer on hover |

### Transition Speed Standards
```
Fast interactions (icon hover, color change): duration-200 (200ms)
Standard interactions (card hover, button):   duration-300 (300ms)
Page-level reveals:                           duration-500–600ms
Slow ambient animations:                      duration-800ms+
```

---

## Gradient Text (Brand Heading Accents)

```tsx
// Teal → Green → Teal-light (primary heading accent)
<span className="bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal-light bg-clip-text text-transparent">
  Highlighted Words
</span>

// Teal → Rust (contrast gradient)
<span className="text-gradient-teal-rust">...</span>
```

---

## Tag / Pill Component Pattern

```tsx
// Section eyebrow badge
<span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-semibold text-brand-teal shadow-xs">

// Accent tags (within cards)
<span className="rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider border-brand-teal/25 bg-brand-teal/5 text-brand-teal">

// Status pill (active route)
<span className="rounded-full px-3 py-0.5 text-[9px] font-extrabold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
```

---

## Icon Usage

- **Library**: `lucide-react` exclusively — do not mix with other icon packs
- **Size**: `size={13}` (labels), `size={16}` (compact), `size={18}` (standard), `size={22}` (featured)
- **Stroke**: `className="stroke-[1.8]"` for featured icons (default is 2)

---

## Responsive Breakpoints

Standard Tailwind breakpoints — always mobile-first:

| Prefix | Min-width | Usage |
|---|---|---|
| (none) | 0px | Mobile |
| `sm:` | 640px | Large mobile / tablet |
| `md:` | 768px | Tablet landscape |
| `lg:` | 1024px | Desktop (primary breakpoint) |
| `xl:` | 1280px | Wide desktop |

Desktop-only sections use `hidden lg:block`. Mobile sections use `flex flex-col lg:hidden`.

---

## Accessibility Standards

- All `<section>` elements must have `aria-labelledby` pointing to the section heading `id`
- All interactive elements must have unique descriptive `id` attributes
- Minimum touch target: `min-h-[44px] min-w-[44px]` (`.btn-touch-target`)
- Keyboard focus: `*:focus-visible { outline: 2px solid #109B82; outline-offset: 2px; }`
- Skip link present in layout
- `@media (prefers-reduced-motion: reduce)` — all CSS animations disabled automatically
- Color contrast: maintain 4.5:1 minimum for body text on all backgrounds
