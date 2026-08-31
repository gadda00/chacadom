# Review Actions — Independent Product Review (31 Aug 2026)

An external product review ("Chacadom Investments and Keja AI — Deep Product,
UX, Technology, Trust, and Growth Review") examined both repositories and the
deployed sites. This tracker maps every chacadom recommendation to what we
did: **implemented**, **partial**, **deferred (owner decision)**, or
**rejected (with reason)**.

Status legend: ✅ implemented · 🟡 partial · ⏸️ deferred (owner decision) · ❌ rejected

## P0 items

| #    | Recommendation                                                      | Status | What we did                                                                                                                                                                                                                                                                                                            |
| ---- | ------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-1 | Replace and verify all contact details                              | ⏸️     | Only the owner can supply real phone/WhatsApp/email and test them — inventing them would be worse than the placeholder. The state is disclosed honestly on `/proof#entity` and flagged as the launch blocker in the README. The structured form works regardless: enquiries compose in the visitor's own email client. |
| P0-2 | Add legal entity, licensing, office, responsible-person information | 🟡     | `ENTITY` block in content.ts is data-driven with explicit `verified: false` states, rendered on `/proof#entity` with a "what's verified / what's pending" register. Real values drop in without redesign; the placeholder state is stated, not hidden.                                                                 |
| P0-3 | Claim provenance layer (period, definition, source, last-verified)  | ✅     | `STATS` now carries `definition` / `asOf` / `source` per figure; rendered on `/proof#how-we-count`; homepage disclaimer links to it; invariants tested (owner-attested figures must say "not independently audited"; plans must be labelled as plans).                                                                 |

## P1 items

| #    | Recommendation                                                                         | Status | What we did                                                                                                                                                                                                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1-1 | Audience-specific landing paths                                                        | ✅     | "What brings you here?" section on Home: six intent doors (sell / buy / manage / partner / careers / proof) linking to tailored destinations; contact links carry `?intent=` which pre-selects the inquiry type.                                                                                                                                     |
| P1-2 | Case studies with the full structure                                                   | 🟡     | Case-study **framework** implemented (`ENGAGEMENT_PROFILES`): role, problem, work, outcome, horizon, risks — rendered on `/proof#profiles`. The three profiles are clearly-labelled illustrative composites, because fabricating permissioned client stories would be worse than none. Replacing each with a real, permissioned case is a data edit. |
| P1-3 | Fees, conflicts and referral disclosures                                               | ✅     | `FEES_DISCLOSURE` + rendered table on `/proof#fees`: fee model, five fee types with current status ("negotiated per mandate" / "not charged" for ranking), conflicts policy, and a note that the formal counsel-reviewed schedule follows.                                                                                                           |
| P1-4 | Methodology pages (valuation, underwriting, title review, tenant screening, reporting) | ✅     | `METHODOLOGIES` — all five disciplines, each with a 4-step outline, rendered on `/proof#methodology` (informational, not advice).                                                                                                                                                                                                                    |
| P1-5 | Instrument CTA and contact conversion                                                  | 🟡     | Structured inquiry form captures intent, budget band, preferred channel, timeline, consent timestamp and reference ID; consent recorded on-device; confirmation panel states the response expectation and next steps. Server-side attribution/CRM awaits the Phase-2 backend.                                                                        |
| P2-1 | Insights library with provenance (author, date, sources)                               | 🟡     | Insights articles exist; front-matter provenance fields (author/date/sources/caveats) are a content task for the owner — the data layer already renders what exists.                                                                                                                                                                                 |
| P2-2 | Client portal / Keja handoff preview                                                   | ⏸️     | Needs the Keja backend and consent architecture.                                                                                                                                                                                                                                                                                                     |

## Engineering items (our own findings)

| Item                               | Status | What we did                                                                                                                |
| ---------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| security.txt                       | ✅     | `public/.well-known/security.txt`.                                                                                         |
| New route wired everywhere at once | ✅     | `/proof` added to App routes, prerender ROUTES, sitemap — the routes↔sitemap↔prerender consistency test enforces no drift. |
| Content invariants extended        | ✅     | Provenance, engagement-profile, fee-disclosure and entity-state invariants added to content.test.ts (18 → 31 tests).       |

## Explicitly deferred (owner decisions, not code)

- Real, tested contact channels and a monitored inbox (P0-1 above).
- Business registration number, licences, named leadership credentials.
- Permissioned client case studies to replace the illustrative profiles.
- Published fee schedule (needs commercial + counsel sign-off).
- Response-time SLA ownership (a named person) — the copy now states the
  expectation, but honouring it is an operational commitment.

---

## Internal audit wave 2 (31 Aug 2026, post-review hardening)

A second skeptical pass over the repo (not the external review) found and
fixed issues the review never surfaced. Tracked for the same reason as the
tables above: nothing gets silently ignored.

| Finding                                                                                                                     | Severity | What was done                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact consent text used a raw `href="/privacy"` — hard 404 under the GH Pages base path, plus a full page reload mid-form | P1       | router `<Link>` (no reload, no 404)                                                                                                                                                |
| JSON-LD published the placeholder phone/email as schema.org facts                                                           | P1       | contact points removed from structured data (comment documents the day they return)                                                                                                |
| Deploy 404.html was a copy of Home (content + meta flash on dead links)                                                     | P1       | prerender captures the real NotFound page (noindex)                                                                                                                                |
| SW cache version bumped by hand; asset writes fire-and-forget; no navigate timeout                                          | P1       | content-hash stamping in CI; `event.waitUntil`; 8s timeout race                                                                                                                    |
| FAQ fee answer ("typically 5–8%") contradicted the fees disclosure ("no schedule published")                                | P1       | answer rewritten to market-typical ranges + explicit pointer to `/proof#fees`                                                                                                      |
| Portfolio TRACK asserted outcomes as fact, duplicated stat literals                                                         | P1       | rendered from the single-source STATS register; hero + disclaimer now state owner-attested / not independently audited; FAQ references labelled representative                     |
| Prerendered HTML shipped 33 Home elements with `opacity: 0` (invisible to no-JS/crawlers)                                   | P2       | capture strips the framer initial-hide style pair only                                                                                                                             |
| Phone "validation" accepted `"abcdefg"`                                                                                     | P2       | requires 7+ digits                                                                                                                                                                 |
| FAQ questions not inside headings (SR heading navigation blind)                                                             | P2       | each question is an `h3 > button`                                                                                                                                                  |
| Mobile menu: dangling `aria-controls`, no focus containment, Escape didn't restore focus, non-passive scroll                | P2       | gated ref, focus moves in on open, Tab trap, focus restore, passive listener, focus-visible rings                                                                                  |
| `text-ink-faint` at 3.51:1 fails WCAG AA on white                                                                           | P2       | darkened to #6F6A61 (5.37:1); `white/45` lifted to `/60`                                                                                                                           |
| Maps iframe sandbox broke the embed (opaque origin)                                                                         | P2       | sandbox removed (documented + oxlint-disabled with reason); click-to-load gate retained                                                                                            |
| `og:image` leaked between routes                                                                                            | P2       | resets to the site default                                                                                                                                                         |
| Netlify path: no prerender (deep links soft-404 with Home meta)                                                             | P2       | prerender parity in the build command                                                                                                                                              |
| Google Fonts render-blocking                                                                                                | P2       | print-media swap + `noscript` fallback                                                                                                                                             |
| Tokenize deep link lost `?view=learn` (GH Pages 301 drops the query)                                                        | P2       | `tokenizeUrl` now carries the trailing slash                                                                                                                                       |
| "Visit keja.ai" buttons actually opened the GitHub Pages preview                                                            | P2       | labels now say "Preview keja.ai" (the FAQ already disclosed it)                                                                                                                    |
| Privacy policy omitted the localStorage keys the site actually uses                                                         | P2       | newsletter email + consent records now listed                                                                                                                                      |
| Zero component tests (3 files, 26 tests, no page ever rendered in CI)                                                       | P1       | page smoke tests (14 pages), Navbar behaviour, FAQ accordion + JSON-LD lifecycle, Contact validation + intent preselection, Footer newsletter, SW-version contract — 26 → 68 tests |
| Prerender never ran on PRs                                                                                                  | P2       | `pr-check.yml` runs the full pipeline including headless prerender                                                                                                                 |
