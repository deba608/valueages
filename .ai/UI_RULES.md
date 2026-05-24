# VALUEAGES — UI Rules

> Enforce these rules on every PR and AI-generated change.

---

## Non-Negotiable UI Rules

### 1. Light Theme Only
- `dark:` Tailwind utility prefix is **banned**
- `globals.css` forces `color-scheme: light` and overrides dark mode via `html { color-scheme: light }`
- Never add `prefers-color-scheme: dark` media queries

### 2. No Placeholder Content
- Every section must have real, production-ready copy
- Images must use `generate_image` or real Unsplash URLs — no `placeholder.com`, `picsum.photos`, or grey boxes
- Icons must be from `lucide-react` — no emoji, no SVG blobs

### 3. Typography Consistency
- Headings: `font-serif` (Playfair Display)
- Body: `font-sans` (Inter, default)
- Labels / badges: `font-extrabold uppercase tracking-wider text-[9px]–text-xs`
- Never use `font-italic` on body text — only for decorative serif phrases

### 4. Consistent Text Colors
```
Headings:       text-slate-950
Subheadings:    text-slate-900
Body:           text-slate-600 or text-slate-500
Muted/labels:   text-slate-400
Brand accent:   text-brand-teal / text-brand-green / text-brand-rust
```

### 5. Spacing Consistency
- Always use Tailwind spacing scale — no arbitrary `px-[17px]` values
- Minimum touch target: `min-h-[44px]` on all interactive elements
- Card internal padding: `p-4` (compact), `p-5` (standard), `p-6` (relaxed), `p-8` (hero)

### 6. Border Radius Consistency
```
Pills / badges:   rounded-full
Standard cards:   rounded-2xl
Large dashboard:  rounded-3xl
Icon badges:      rounded-xl (square icons), rounded-full (pill labels)
Inputs:           rounded-xl
```

### 7. Shadow Hierarchy
```
Subtle (background cards): shadow-sm
Standard (floating cards): shadow-md or shadow-lg
Elevated (dashboard):      shadow-xl or shadow-2xl
Ambient glow:              blur-[100px]–blur-[120px] bg-brand-X/5
```

---

## Motion & Animation Rules

### Always Use `viewport={{ once: true }}`
Elements should only animate in once. Never re-animate on scroll out and in.

### Never Hard-Code Animation Delays Beyond 0.4s for Sequential Items
Use stagger (`staggerChildren`) instead of manual delays.

### Pulse Animations Must Be Slow
`animate-pulse-slow` (6s) not the default Tailwind 2s `animate-pulse`. Exception: icon sparkles may use `animate-pulse`.

### Respect Reduced Motion
The CSS handles `@media (prefers-reduced-motion: reduce)` globally. Do not add redundant motion-safe checks in JS.

---

## Responsive Layout Rules

### Mobile-First Always
Start with single-column layouts and add grid complexity at `lg:` breakpoints.

### Desktop Layout Standard
```
Section container: max-w-7xl
Header max-width:  max-w-3xl (centered)
Grid columns:      grid-cols-1 → lg:grid-cols-2 or lg:grid-cols-3
Gap:               gap-6 (standard), gap-8 (relaxed)
```

### Show/Hide Pattern
```tsx
<div className="block lg:hidden">     {/* mobile only */}
<div className="hidden lg:block">     {/* desktop only */}
<div className="hidden lg:flex">      {/* desktop flex */}
```

### Never Use Fixed Heights on Content
Use `min-h-*` on containers, never fixed `h-*` unless absolutely required (SVG canvas).

---

## Accessibility Rules

- All `<section>` elements: `aria-labelledby="section-id"`
- All `<h2>` elements: `id="section-id"` matching above
- All interactive `<button>` elements: `type="button"` explicitly
- All icon-only buttons: `aria-label="description"`
- Form inputs: `id`, `name`, `aria-describedby` for error states
- Color is never the only indicator of state — always add text label or icon

---

## Performance Rules

- Images: always use Next.js `<Image>` component, never `<img>`
- Animations: GPU-accelerated properties only (`transform`, `opacity`) — never animate `width`, `height`, `top`, `left`
- SVG: use `pointer-events-none` on decorative SVGs
- Blur effects: limit to 2–3 blurred blobs per section
- `animate-ping`: only one per section (overuse causes GPU strain)

---

## Code Quality Rules

- No commented-out code in production files
- No `console.log` statements
- No `TODO` comments without an issue number
- Tailwind classes: order by: layout → sizing → spacing → typography → colors → effects
- Extract repeated className strings (>3 occurrences) into a named constant or CSS class
