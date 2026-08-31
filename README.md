# Chacadom Investments — Building Wealth Through Real Estate Excellence

Corporate site of Chacadom Investments, parent of **Keja.ai** (Kenya's AI real-estate trust layer).
Live at **https://gadda00.github.io/chacadom/**

## Round-5 upgrades (this wave — external-review implementation)

An independent product review (Aug 2026) found the site's primary weakness was
**proof density**: authoritative claims without definitions, periods, sources,
fees or case studies. This wave builds the truth layer:

- **Proof & Disclosure Center (`/proof`)**: how we count our numbers (every
  stat now carries `definition` / `asOf` / `source`, owner-attested figures
  explicitly say "not independently audited"); engagement profiles with the
  full case-study structure (role, problem, work, outcome, horizon, risks) —
  clearly labelled **illustrative composites** until permissioned real cases
  replace them; five methodology outlines (valuation, underwriting, title
  review, tenant screening, reporting); fees & conflicts disclosure
  ("negotiated per mandate" stated plainly; website ranking explicitly
  **not charged"); an entity block that shows exactly what is verified vs
  pending instead of papering over the placeholders.
- **Structured inquiry form**: intent (radio cards, pre-selected via
  `?intent=` from the homepage), budget band, preferred response channel,
  timeline, message, and an explicit timestamped **consent** record stored
  on-device (KDPA-aligned); every enquiry gets a reference ID, and the
  confirmation panel states who responds, on which channel, and when.
- **Audience intent pathways** on Home ("What brings you here?"): six doors —
  sell, buy/invest, manage, partner, careers, proof — each with tailored copy
  and destination, replacing the single generic "Invest Today" framing.
- **security.txt** at `/.well-known/security.txt`.
- **`docs/REVIEW_ACTIONS.md`**: every external-review recommendation mapped
  to implemented / partial / deferred-with-reason — nothing silently ignored.
- Tests 18 → 26 (provenance, engagement-profile, fee-disclosure and
  entity-state invariants); route/sitemap/prerender consistency extended to
  the new `/proof` route; SW v4 → v5.

## Round-4 upgrades (previous wave)

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

Home · About (2022–2026 timeline) · **Leadership & Desks** · Services (7 lines) · **Track Record** · **Proof & Disclosure Center** · Ventures (Keja.ai showcase + 2026–2030 roadmap + investor relations) · Insights (philosophy) · Contact (structured inquiry + consent + reference ID, mailto + WhatsApp handoff, click-to-load map) · **FAQ** · **Careers** · **Privacy Policy (KDPA-aligned)** · **Terms & Disclaimers**

Per-route SEO titles/descriptions/canonicals + FAQPage JSON-LD; 404 is `noindex`; Careers is in the primary nav; PWA (manifest + service worker + offline page); skip-link, reduced-motion support, focus/ARIA discipline.

## Stack

React 19 · Vite 8 · TypeScript (strict, project references) · Tailwind 3.4 · framer-motion · Playwright (build-time prerendering) · vitest · oxlint · Prettier · husky · GitHub Pages via Actions.

## Develop

```bash
npm install
npm run dev
npm run typecheck   # tsc -b (strict; same gate as CI)
npm run lint        # oxlint
npm test            # vitest (26 tests)
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
The `/proof#entity` block discloses this state publicly, and the structured
inquiry form works without it (enquiries compose in the visitor's own email
client), but a live corporate site should not ship placeholder phone lines —
until then, the site is honest about it rather than silent.

## External-review implementation

`docs/REVIEW_ACTIONS.md` maps every recommendation from the independent
product review (Aug 2026) to implemented / partial / deferred-with-reason.
Deferred items are owner decisions (real contact channels, registration
numbers, permissioned case studies, fee schedule) — documented, not ignored.

## Deployment

`git push origin main` → Actions runs typecheck + lint + tests, builds
`--base=/chacadom/`, prerenders all routes, stamps the sitemap, adds the SPA
404 fallback, deploys to Pages. Pull requests get the same checks via
`.github/workflows/pr-check.yml`.

## Netlify (optional)

`netlify.toml` sets `VITE_BASE=/` so the same repo deploys at the root of a
Netlify site with correct asset URLs and an SPA redirect. GitHub Pages
remains the canonical host.
