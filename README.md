# Chacadom Investments — Building Wealth Through Real Estate Excellence

Corporate site of Chacadom Investments, parent of **Keja.ai** (Kenya's AI real-estate trust layer).
Live at **https://gadda00.github.io/chacadom/**

## Regulatory readiness — CMA Regulatory Sandbox

Application pack prepared per the CMA sandbox requirements (sandbox.cma.or.ke) for the
**Keja.ai Tokenization Pilot** (applicant: Chacadom Investments):

- **[Testing Plan (PDF)](docs/cma/Chacadom_CMA_Sandbox_Testing_Plan.pdf)** — a twelve-month, four-phase live test with hard participation and exposure caps, suitability screening, segregated client money, phase gates reported to the Authority, and a rehearsed exit (full licence / letter of no objection / wind-down).
- **[Safeguards & Risk-Management Plan (PDF)](docs/cma/Chacadom_CMA_Sandbox_Safeguards_Risk_Management_Plan.pdf)** — three-lines governance, a twelve-risk register with named owners, KYC/AML controls, Kenya Data Protection Act compliance, incident classes with CMA notification times, and a wind-down that ranks investors' capital ahead of the applicant's recovery.

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

## Round-6 — The Waterfront Karen, flagship location

- **New page `/waterfront-karen`**: the client's flagship selling point given
  its full weight — editorial investment thesis (institutional validation,
  the reported 50.6-acre catalyst, Karen fundamentals), lifestyle amenity
  grid, click-to-load YouTube tour (zero third-party JS until play), photo
  gallery, sources & "as reported" labelling. Prerendered to a status-200
  HTML page with Place JSON-LD, canonical, og:image; in the sitemap (0.9),
  navbar and footer.
- **Homepage**: a dedicated "Flagship location" section (hero image + aqua
  park inset + reported-KES-9B stat chip + amenity chips) linking to the
  page and to live listings on Keja.ai.
- **Track Record**: a Waterfront Karen corridor watching-brief mandate entry
  plus a corridor banner — reported figures framed as market signals, not hype.
- **Cross-linking**: both sites now point at each other's Waterfront content
  (chacadom advisory framing -> keja.ai listings guide).
- Config cleanups: `__dirname` removed from vite/vitest configs
  (`import.meta.url`), routes-consistency test now understands hyphenated
  routes.

## Round-4 upgrades

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

Home (incl. Waterfront Karen flagship section) · About (2022–2026 timeline) · **Leadership & Desks** · Services (7 lines) · **Track Record** (incl. Waterfront corridor brief) · **The Waterfront Karen** (flagship location) · **Proof & Disclosure Center** · Ventures (Keja.ai showcase + 2026–2030 roadmap + investor relations) · Insights (philosophy) · Contact (structured inquiry + consent + reference ID, mailto + WhatsApp handoff, click-to-load map) · **FAQ** · **Careers** · **Privacy Policy (KDPA-aligned)** · **Terms & Disclaimers**

Per-route SEO titles/descriptions/canonicals + FAQPage JSON-LD; 404 is `noindex`; Careers is in the primary nav; PWA (manifest + service worker + offline page); skip-link, reduced-motion support, focus/ARIA discipline.

## Stack

React 19 · Vite 8 · TypeScript (strict, project references) · Tailwind 3.4 · framer-motion · Playwright (build-time prerendering) · vitest · oxlint · Prettier · husky · GitHub Pages via Actions.

## Develop

```bash
npm install
npm run dev
npm run typecheck   # tsc -b (strict; same gate as CI)
npm run lint        # oxlint
npm test            # vitest (89 tests: pages, navbar, faq, contact, newsletter, seo, content, routes, sw-contract, video facade)
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

`src/data/content.ts` holds the single source for phone/email/WhatsApp. The
real client lines are live: **+254 108 611 387** (phone & WhatsApp — the same
number backs the vendor catalogue linked from the Portfolio page). The
`/proof#entity` block reflects the confirmed state, and every WhatsApp
handoff (`whatsappLink()`) and listing deep-link (`src/data/listings.ts`) is
pinned to that number by test (`src/lib/__tests__/listings.test.ts`).

## External-review implementation

`docs/REVIEW_ACTIONS.md` maps every recommendation from the independent
product review (Aug 2026) to implemented / partial / deferred-with-reason.
Deferred items are owner decisions (real contact channels, registration
numbers, permissioned case studies, fee schedule) — documented, not ignored.

## Deployment

`git push origin main` → Actions runs typecheck + lint + Prettier + tests,
builds `--base=/chacadom/`, prerenders all routes (incl. the real 404 page),
stamps the sitemap, stamps the service-worker cache version from deployed
content, deploys to Pages. Pull requests get the same checks — plus the
headless prerender pass — via `.github/workflows/pr-check.yml`.

**Host-root limitation on GitHub Pages project sites:** crawlers only honour
`robots.txt` at the host root (`gadda00.github.io/robots.txt`), and RFC 9116
places `security.txt` at the host root too. Both files deploy correctly under
`/chacadom/` (and work at the root of a custom domain or the Netlify deploy),
but on the shared `github.io` host they are unreachable — a platform
limitation, tracked here so the README's security.txt claim is not
over-read.

## Netlify (optional)

`netlify.toml` sets `VITE_BASE=/` so the same repo deploys at the root of a
Netlify site with correct asset URLs and an SPA redirect. GitHub Pages
remains the canonical host.

### Client desk — direct mandates

Beyond vendor catalogue stock, `src/data/listings.ts` also exports
`CLIENT_MANDATES`: live owner mandates Chacadom holds and sells itself
(Daykio Kiragu 5BR at KES 67M, Amber Bay Heights off-plan, and the 30-acre
Kantafu parcel at KES 5.5M/acre). Each opens a prefilled WhatsApp chat with
the desk; land mandates without photography render a stat-forward gold card.
Data-integrity tests pin ids, images, enquiry links and substance for both
collections (89 tests total).
