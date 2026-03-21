# explinearoja App

Next.js 15 application using App Router with React 19 Server Components.

## Dev Server

```bash
bun run dev  # Runs next dev (Turbopack default in Next.js 15.4+)
```

Dev server runs on http://localhost:3000

## Key Files

- `next.config.js` — PWA config via next-pwa, transpiles @repo/* packages
- `src/app/globals.css` — Tailwind v4 CSS config, theme tokens, dark mode variables
- `components.json` — shadcn/ui config (new-york style, RSC enabled)
- `src/components/theme-provider.tsx` — next-themes wrapper ("use client")
- `src/content/` — content data files (separated from presentation)

## Important Notes

- next-pwa is disabled in dev automatically (NODE_ENV=development), Turbopack works fine
- Content goes in `src/content/`, not hardcoded in pages
- Interactive components need `"use client"` directive
- Import shared utils as `@repo/utils`, UI as `@repo/ui`
- Path alias `@/*` resolves to `./src/*`
