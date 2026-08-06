# Berman Golf Landing Pages

## Brand Voice & Copy Knowledge Base
For ANY copywriting task (emails, ad/social captions, landing-page copy, testimonials),
read from `../Docs/Berman Knowledge Base/` first:
- `Brand Voice v2 (MASTER).md` — current voice, signature phrases, beliefs, avatar, methodology, story library. **Read first.**
- `testimonials/` — long-form references per student. Check each file's **Accuracy Checkpoints** before quoting any number or result.
- `Webclass Transcript 2025-10-29.md` — Jake's spoken voice / live pitch.
- `README.md` — index + hard rules for copy.
Other copy assets live in `../Docs/` (e.g. `20 More Yards Challenge - Social Captions.md`).

## Routing (src/proxy.ts — NOT next.config.ts)
All funnel routing lives in `src/proxy.ts`, because the webclass → challenge
handoff is **time-based** and next.config redirects/rewrites are baked in at
build time. `next.config.ts` is intentionally empty; a `beforeFiles` rewrite
there would run after the proxy and silently shadow it.

The cutover timestamp is `src/config/funnelSwitch.ts` (currently
**Aug 6, 2026 11:00 AM ET** — the moment the Aug 6 webclass starts). Before it,
the webclass funnel takes signups; after it, everything feeds the challenge:

| Entry point | Before cutover | After cutover |
|---|---|---|
| `20moreyards.com/` (+ www) | `/free-class` (rewrite) | `/20-more-yards` (rewrite) |
| `/free-class` | serves opt-in | → `/20-more-yards` (307) |
| `/free-class-v1` (archived) | serves opt-in | → `/20-more-yards` (307) |
| `golflessonsdontwork.com` | → `/free-class` | inherits the 307 → `/20-more-yards` |
| `gaindistance.com/` | → `/free-book` | unchanged |
| `/free-book` | unchanged | unchanged |

`golflessonsdontwork.com` forwards to `gaindistance.com/free-class` at the
**registrar** (301, not Vercel), so it is not in this repo — it inherits
whatever `/free-class` does. Leave that forward pointing at `/free-class`.

Query strings survive the redirect, so ad UTMs are preserved. 307 (not 308) so
`/free-class` can serve its own opt-in again for the next webclass — to do
that, push the timestamp forward and update `src/config/workshops.ts`.

## Workshop Dates
When updating workshop dates or form IDs, edit `src/config/workshops.ts`. This is the single source of truth used by:
- `/free-class` — Hero buttons + RegistrationForm embeds
- `/free-book/thank-you` — CTA buttons linking to free class
- `/senior-golf-warm-up/thank-you` — CTA buttons linking to free class

## Page Structure
- `/free-class` — Free workshop landing page (full funnel: hero, benefits, instructor, testimonials, registration forms)
- `/free-book` — Free book opt-in page
- `/free-book/thank-you` — Book confirmation + workshop upsell
- `/10yards-30days` — Paid course page
- `/senior-golf-mastery` — Premium course page
- `/community` — Community membership page

## Stack
- Next.js with TypeScript
- Tailwind CSS
- GHL (GoHighLevel) embedded forms via iframe
- Brand colors: blue gradient `#0f4c81` → `#1e88e5`, orange accent `#F26B4E`
