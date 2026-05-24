# VALUEAGES — Testing Reference

> Testing standards for this production site.

---

## Current Testing Status

This is a static marketing site. No automated tests are currently configured.

## Recommended Test Strategy

### Unit Tests (when added)
- Framework: Vitest (compatible with Vite/Next.js)
- Component testing: `@testing-library/react`
- File pattern: `*.test.tsx` co-located with components

### Integration Tests
- Framework: Playwright (already in `.codex/config.toml`)
- Target: Critical user flows (contact form submission, navbar)
- Browser matrix: Chromium, Firefox, WebKit

### Visual Regression
- Recommended: Playwright screenshots or Storybook + Chromatic

---

## Manual Testing Checklist

Before any PR/release:

### Layout
- [ ] Renders correctly on mobile (375px), tablet (768px), desktop (1280px)
- [ ] No horizontal overflow at any breakpoint
- [ ] Sections alternate light/muted backgrounds
- [ ] Header navigation works and scrolls smoothly

### Animations
- [ ] All entrance reveals trigger correctly on scroll
- [ ] Hover effects on all interactive cards
- [ ] Active states in CXOConnect accordion
- [ ] SVG connector paths visible and animated

### Accessibility
- [ ] Keyboard-only navigation works through all sections
- [ ] Focus states visible on all interactive elements
- [ ] Skip link works
- [ ] Screen reader announces section headings

### Performance
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] No CLS on page load
- [ ] Images load with correct dimensions

### Cross-Browser
- [ ] Chrome / Edge (primary)
- [ ] Firefox
- [ ] Safari (macOS + iOS)

---

## Running Playwright Tests

```bash
# Install Playwright (when tests are added)
npx playwright install

# Run tests
npx playwright test

# View report
npx playwright show-report
```
