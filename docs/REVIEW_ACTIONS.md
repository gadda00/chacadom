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
