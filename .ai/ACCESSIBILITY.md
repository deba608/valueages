# VALUEAGES — Accessibility Reference

> Accessibility is non-negotiable. Every component must meet WCAG 2.1 AA.

---

## Semantic Structure

- One `<h1>` per page (in `Hero.tsx`)
- Section headings: `<h2>` with `id` matching `aria-labelledby` on `<section>`
- Card sub-headings: `<h3>`
- Never skip heading levels (h1 → h3 without h2)

---

## ARIA Patterns

### Sections
```tsx
<section id="services" aria-labelledby="services-title">
  <h2 id="services-title">Services</h2>
</section>
```

### Buttons Without Visible Text
```tsx
<button type="button" aria-label="Close menu">
  <X size={20} aria-hidden="true" />
</button>
```

### Interactive Cards
```tsx
<button type="button" onClick={...} onMouseEnter={...}>
  {/* content */}
</button>
```
Never use `<div onClick>` as a button substitute.

### Loading States
```tsx
<div role="status" aria-live="polite">Loading...</div>
```

---

## Focus Management

All focusable elements get this focus style (defined in globals.css):
```css
*:focus-visible {
  outline: 2px solid #109B82;
  outline-offset: 2px;
  border-radius: 2px;
}
```

Do not suppress focus outlines. Do not use `outline: none` without `focus-visible` guard.

---

## Color Contrast

| Context | Minimum Ratio |
|---|---|
| Normal text (< 18px) | 4.5:1 |
| Large text (≥ 18px bold) | 3:1 |
| UI components/icons | 3:1 |

Verified combinations:
- `text-slate-950` on `bg-white` ✅ (21:1)
- `text-slate-600` on `bg-white` ✅ (5.9:1)
- `text-brand-teal` on `bg-white` ✅ (4.6:1)
- `text-white` on `bg-brand-teal` ✅ (4.6:1)

⚠️ `text-brand-tan` (`#C99A5A`) on `bg-white` is **3.5:1** — only use for large decorative text, not body copy.

---

## Touch Targets

Minimum interactive area: **44×44px** (WCAG 2.5.5).

```tsx
// Apply to all buttons/links
className="min-h-[44px] min-w-[44px]"
// Or use the utility class:
className="btn-touch-target"
```

---

## Keyboard Navigation

- Tab order must follow visual reading order
- All interactive elements reachable by Tab
- Modals/drawers must trap focus while open
- Escape key closes any overlay

---

## Motion / Animation

```css
/* Already in globals.css — do not remove */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Do not add JavaScript-only animation guards — the CSS handles it globally.

---

## Screen Reader Support

- Decorative SVGs: `aria-hidden="true"`
- Decorative icons: `aria-hidden="true"` on the `<Icon>` component
- Status indicators: use `role="status"` and `aria-live="polite"` for dynamic content
- Image alt text: descriptive and meaningful, not filename-based

---

## Skip Navigation

A skip link is present in `layout.tsx`:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
The `<main>` element has `id="main-content"`.
