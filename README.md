# Chacadom Investments — Building Wealth Through Real Estate Excellence

Corporate site of Chacadom Investments, parent of **Keja.ai** (Kenya's AI real-estate trust layer).
Live at **https://gadda00.github.io/chacadom/**

## Round-4 upgrades (this wave)

- **Static-first deployment**: all 12 routes are prerendered at build time
  (`scripts/prerender.mjs`, headless Chromium) — every sitemap URL now returns
  **HTTP 200 with real HTML** (previously deep routes were served by the SPA
  404-fallback copy: page rendered, but crawlers and WhatsApp/social unfurls
  saw a 404 with Home's meta tags).
- **Dual-host deployment fixed**: `base` is now env-parameterized
  (`VITE_BASE`, default `/chacadom/`); `netlify.toml` sets `VITE_BASE=/` so a
  Netlify deploy no longer 404s every asset.
- **Engineering gates**: strict TypeScript via proper project references
  (previously orphaned configs — `vite.config.ts` was never typechecked),
  oxlint correctness rules, Prettier, husky pre-commit, vitest suite
  (SEO meta mutations, site-data invariants, route/sitemap/prerender
  consistency), PR validation workflow.
- **WCAG**: gold-shimmer gradient stops lifted to ≥3:1 on dark sections
  (was ~2.45:1); hash navigation retries until lazy routes mount; hash
  targets clear the fixed navbar (`scroll-margin-top`); FAQ accordion keeps
  panels mounted with stable `aria-controls`; contact errors are
  `role="alert"` + `aria-describedby`; ErrorBoundary resets per route.
- **Performance/privacy**: About & Insights posters now use WebP `<picture>`
  with dimensions + lazy loading (~470KB lighter, no CLS); the Google Maps
  embed is click-to-load (zero third-party requests until the visitor asks);
  service-worker `skipWaiting` removed (no more version-skew broken tabs);
  dead assets deleted; sitemap `lastmod` stamped at build time.
- **Honesty**: newsletter success copy tells the truth (device-local +
  email-app confirmation); tokenization claims on Home carry the same
  simulated-demo disclaimer as Ventures; Privacy Policy discloses the
  click-to-load map and Google Fonts.

## Pages

Home · About (2022–2026 timeline) · **Leadership & Desks** · Services (7 lines) · **Track Record** · Ventures (Keja.ai showcase + 2026–2030 roadmap + investor relations) · Insights (philosophy) · Contact (mailto + WhatsApp handoff, click-to-load map) · **FAQ** · **Careers** · **Privacy Policy (KDPA-aligned)** · **Terms & Disclaimers**

Per-route SEO titles/descriptions/canonicals + FAQPage JSON-LD; 404 is `noindex`; Careers is in the primary nav; PWA (manifest + service worker + offline page); skip-link, reduced-motion support, focus/ARIA discipline.

## Stack

React 19 · Vite 8 · TypeScript (strict, project references) · Tailwind 3.4 · framer-motion · Playwright (build-time prerendering) · vitest · oxlint · Prettier · husky · GitHub Pages via Actions.

## Develop

```bash
npm install
npm run dev
npm run typecheck   # tsc -b (strict; same gate as CI)
npm run lint        # oxlint
npm test            # vitest (18 tests)
npm run verify      # typecheck + lint + tests + build — the full CI pipeline
npm run build       # production build (base /chacadom/ baked in)
```

## Prerendering

`npm run build && node scripts/prerender.mjs` renders every route with
headless Chromium and writes `dist/<route>/index.html` — GitHub Pages then
serves each sitemap URL with status 200. The SPA still hydrates on top for
visitors. CI installs Chromium via Playwright and runs this automatically.
`node scripts/refresh-sitemap.mjs` stamps the build date into the deployed
sitemap's `lastmod` fields.

Route coverage is enforced by test: `src/lib/__tests__/routes.test.ts` fails
CI if a route is added to `App.tsx` without also landing in the sitemap and
the prerender list.

## Contact details

`src/data/content.ts` holds the single source for phone/email/WhatsApp —
replace the placeholder numbers there (and in `index.html` JSON-LD) when the
real client lines are confirmed. **This is the remaining launch blocker.**

## Deployment

`git push origin main` → Actions runs typecheck + lint + tests, builds
`--base=/chacadom/`, prerenders all routes, stamps the sitemap, adds the SPA
404 fallback, deploys to Pages. Pull requests get the same checks via
`.github/workflows/pr-check.yml`.

## Netlify (optional)

`netlify.toml` sets `VITE_BASE=/` so the same repo deploys at the root of a
Netlify site with correct asset URLs and an SPA redirect. GitHub Pages
remains the canonical host.
