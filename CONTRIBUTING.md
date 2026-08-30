# Contributing to the Chacadom site

## Setup

```bash
npm install        # installs the husky pre-commit hook
npm run dev
```

## Before every push

```bash
npm run verify     # typecheck (strict) + oxlint + vitest + production build
```

## Conventions

- TypeScript strict; project references (`tsconfig.app.json` / `tsconfig.node.json`).
- Prettier (no semicolons, single quotes, 100 cols) runs on commit via lint-staged.
- Every route added to `src/App.tsx` must also be added to `public/sitemap.xml`
  and `scripts/prerender.mjs` — `src/lib/__tests__/routes.test.ts` enforces this.
- Every page sets its own `usePageMeta(title, description)` — unique title and
  description are mandatory.
- Contact details live in `src/data/content.ts` only (single source of truth).
- No new third-party requests without a click-to-load gate or a Privacy Policy
  disclosure.
- Marketing claims about returns/performance must carry a disclaimer
  (CMA-sensitive domain).
