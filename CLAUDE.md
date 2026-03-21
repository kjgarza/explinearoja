# explinearoja

## Monorepo Structure

```
explinearoja/
├── apps/
│   └── explinearoja/     # Next.js 15 app (App Router)
├── packages/
│   ├── utils/            # @repo/utils — cn(), types, Zod schemas
│   ├── tsconfig/         # @repo/tsconfig — shared TS configs
│   ├── ui/               # @repo/ui — shadcn/ui component library
│   └── eslint-config/    # @repo/eslint-config — shared ESLint
├── tooling/
│   └── theme.css         # Shared OKLCH design tokens (@theme)
├── package.json          # Bun workspaces
├── justfile              # Task runner
├── CITATION.cff          # Citation metadata
└── LICENSE               # MIT
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 15.x (App Router only) |
| React | React | 19.x (Server Components default) |
| Runtime | Bun | 1.1+ |
| Language | TypeScript | 5.6+ (strict mode) |
| CSS | Tailwind CSS | 4.x with OKLCH tokens |
| Components | shadcn/ui (New York) | Radix UI primitives |
| Icons | lucide-react | Only icon library |
| Theming | next-themes | Class-based dark mode |
| Forms | React Hook Form + Zod | @hookform/resolvers |
| Toasts | sonner | Only toast library |
| Charts | recharts | When needed |
| Build | tsup | For packages |

## Code Style (enforced)

- 2-space indentation
- Double quotes
- No semicolons
- `import type` for type-only imports
- kebab-case for files
- PascalCase for components
- camelCase for functions and variables
- Design tokens over hardcoded values
- `"use client"` only where needed
- Path alias: `@/*` maps to `./src/*` in apps

## Component Architecture (three layers)

1. **Base UI** (`packages/ui/`) — shadcn/ui components, no business logic
2. **App components** (`apps/*/src/components/`) — feature-specific compositions
3. **Pages** (`apps/*/src/app/`) — minimal logic, delegate to components

## Data/Format Separation

- **Data**: `src/content/` (TypeScript or JSON files)
- **Format**: `src/components/` + `src/app/` (presentation only)
- Never hardcode content in page components or templates

## Commands

```bash
bun run dev          # Start all apps in dev mode
bun run build        # Build packages then apps
bun run lint         # Lint all workspaces
bun run type-check   # Type-check all workspaces
bun test             # Run tests
```

## Anti-patterns (never do these)

- Never use `pages/` directory — App Router only
- Never install Radix UI packages directly — use shadcn/ui
- Never use CSS Modules or styled-components — Tailwind only
- Never use `var` — `const` preferred, `let` when needed
- Never hardcode colors — use CSS custom properties via Tailwind theme
- Never use Turbopack with next-pwa — use `--webpack` flag
- Never put business logic in page.tsx files — extract to components
- Never hardcode content in page.tsx — extract to `src/content/`
- Never use Formik or Yup — React Hook Form + Zod only
- Never use react-hot-toast or react-toastify — sonner only
- Never use Font Awesome or Heroicons — lucide-react only

## Cross-Package Imports

- Apps import via workspace aliases: `import { cn } from "@repo/utils"`
- Packages can import from other packages but never from apps
- Use `import type` for type-only imports across packages
- Never use relative paths across workspace boundaries

## Adding shadcn Components

```bash
cd packages/ui && bunx shadcn@latest add <component-name>
```

Then export from `packages/ui/src/index.ts`.
