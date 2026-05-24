# VALUEAGES — Performance Reference

> Performance standards and guidelines for this production site.

---

## Core Web Vitals Targets

| Metric | Target | Priority |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Critical |
| FID / INP (Interaction to Next Paint) | < 200ms | High |
| CLS (Cumulative Layout Shift) | < 0.1 | High |
| TTFB | < 600ms | Medium |

---

## Image Optimization

- **Always** use Next.js `<Image>` component — never raw `<img>` tags
- Set explicit `width` and `height` props to prevent CLS
- Use `priority` prop for above-the-fold images (Hero section)
- Use `loading="lazy"` (default) for below-fold images
- Remote images must be whitelisted in `next.config.ts` via `remotePatterns`

```tsx
// ✅ Correct
import Image from "next/image";
<Image src="..." alt="..." width={800} height={600} priority />

// ❌ Wrong
<img src="..." alt="..." />
```

---

## Animation Performance

- **Animate only GPU-composited properties**: `transform` and `opacity`
- **Never animate**: `width`, `height`, `top`, `left`, `padding`, `margin`
- Use `will-change: transform` sparingly (Framer Motion handles this)
- Backdrop filter (`blur()`) is GPU-intensive — limit to 2–3 per section
- `animate-ping` creates continuous repaints — one per section maximum

---

## Bundle Size

- Do not add new dependencies without checking bundle impact
- Prefer tree-shakeable imports: `import { motion } from "framer-motion"` not `import * as motion`
- Icons: import only used icons, not the full `lucide-react` package
- GSAP: available but do not add new GSAP animations — use Framer Motion instead

---

## CSS Performance

- Tailwind v4 purges unused classes automatically via content scanning
- Do not use arbitrary values `px-[17px]` — use scale values
- `blur-[120px]` for ambient glow blobs — do not exceed this
- Limit total `box-shadow` layers per element (max 5)

---

## Rendering Strategy

- All pages are **static** (no `export const dynamic = 'force-dynamic'`)
- No `use server` or server actions — keep the site fully static
- `reactStrictMode: true` — double-invocation in development is expected and normal
