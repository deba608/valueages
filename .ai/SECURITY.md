# VALUEAGES — Security Reference

> Security guidelines for this static marketing site.

---

## Current Attack Surface

This is a **fully static site** with no server-side logic, no database, and no authentication. The attack surface is minimal.

### What Exists
- Contact form (client-rendered) — submits to external service
- External image CDN (Unsplash)
- No API routes
- No user data stored

---

## Next.js Configuration Security

```typescript
// next.config.ts — already configured
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" }
  ]
  // ⚠️ Do NOT use deprecated `images.domains` — it's less secure
}
```

**Rule**: Only whitelist specific hostnames in `remotePatterns`. Never use wildcards.

---

## Dependency Security

```bash
# Check for vulnerabilities
npm audit

# Fix automatically where possible
npm audit fix
```

- Keep dependencies updated (especially Next.js and React)
- Review changelog before major version upgrades
- Never install packages with known high/critical CVEs

---

## Content Security

- No `dangerouslySetInnerHTML` — never render user-provided HTML
- No `eval()` — never execute dynamic strings
- External links should have `rel="noopener noreferrer"`

```tsx
// ✅ Always for external links
<a href="https://..." target="_blank" rel="noopener noreferrer">
```

---

## Environment Variables

If any secrets are added in the future:
- Store in `.env.local` (already in `.gitignore`)
- Never commit `.env.local`
- Server-only variables: `NEXT_PUBLIC_` prefix exposes to client — use it intentionally
- Do not log environment variables in console

---

## Headers (Future Hardening)

Add to `next.config.ts` when deploying:
```typescript
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]
  }]
}
```
