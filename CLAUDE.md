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

## Challenge dates + waitlist mode (src/config/events.ts)
`/20-more-yards` has two modes, driven by `status` in `src/config/events.ts`:

| `status` | Page behavior |
|---|---|
| `"scheduled"` | Full registration page — real dates in hero/agenda/logistics/footer, countdown, Event JSON-LD, GHL registration form. |
| `"waitlist"` | Between runs. No dates, no countdown, **no Event schema** (invalid without a `startDate`). Sells the next run by `windowLabel` and captures a waitlist instead. |

**Currently `waitlist`** — Aug 26 + 27 ran, replay closed Sept 2. Next run: late September 2026, dates TBD.

**The waitlist reuses the existing opt-in form** (`(TM) 20 More Yards Opt In`, `W0ydyDyDva54Rx6xRYGx`) — it already collects name + email, which is all a waitlist needs. The waitlist/registrant distinction is handled **in GHL**, where these submissions get tagged as waitlist and routed to the waitlist confirmation email. The page just changes what it promises around the embed.

⚠️ **Because it's the same form, the GHL side has to be right.** If the August "here's your Zoom link" workflow is still attached, waitlist signups get a link to an event that already happened — the exact failure that bit the June run. Confirm the automation before driving traffic.

(If `waitlistForm.formId` is ever emptied, the register section falls back to a "waitlist opens shortly" panel pointing at the Clubhouse rather than rendering a dead embed.)

**To schedule the next run** (all in `src/config/events.ts` unless noted):
1. `status` → `"scheduled"`
2. Fill `days` with the two real dates (`date` long, `time`, `short`)
3. Point `form` at the new GHL registration form
4. Update `SESSION_1` / `SESSION_2` / `REPLAY_END` / `REPLAY_END_LABEL` in `src/config/eventWindow.ts`
5. Update the hardcoded dates in the `eventSchema` JSON-LD in `src/app/20-more-yards/page.tsx` (the one place that can't read the config — it's a static string)
6. If a webclass runs first, push `FUNNEL_SWITCHOVER` in `src/config/funnelSwitch.ts`

Everything else reads from the config: `HeroEvent`, `HeroCTA`, `StickyMobileCTA`, `TheAgenda`, `WhyTwoDays`, `PerryStory`, `EventLogistics`, `FAQ`, `Footer`, `EventRegistrationForm`, `/20-more-yards/thank-you`, `Header`, and page metadata.

## Webclass Dates
When updating webclass dates or form IDs, edit `src/config/workshops.ts`. Used by `/free-class` and `/free-class-v1` (both currently 307 to `/20-more-yards` — see Routing above). The thank-you pages no longer link here; they sell the Clubhouse now.

## The Clubhouse is the first paid step (src/config/clubhouse.ts)
Every free opt-in now soft-sells the Berman Clubhouse on its thank-you page instead of pushing the next free class. Live challenge/webclass invites go out **by email** on their own timetable, so the thank-you pages deliberately carry one offer and no competing button.

| Free opt-in | Thank-you page | Offer |
|---|---|---|
| Free book | `/free-book/thank-you` | `<ClubhouseOffer variant="light" />` |
| 5-min warm-up | `/senior-golf-warm-up/thank-you` | `<ClubhouseOffer variant="light" />` |
| Challenge / waitlist | `/20-more-yards/thank-you` | `<ClubhouseOffer variant="poster" />` |

Pricing, the inclusions list and checkout paths live in `src/config/clubhouse.ts` — change them there, not in the component. `<ClubhouseOffer>` takes `variant` (`"light"` = blue/white system, `"poster"` = cream/navy system), `eyebrow`, `title`, and `intro`, so each page bridges from whatever they just opted in for.

Because the Clubhouse is now sold to brand-new leads, `/community` no longer says "buy a course first" — keep that page welcoming to people who've only had the free book or warm-up.

## Page Structure
- `/free-class` — Free workshop landing page (full funnel: hero, benefits, instructor, testimonials, registration forms)
- `/free-book` — Free book opt-in page
- `/free-book/thank-you` — Book confirmation + workshop upsell
- `/10yards-30days` — Paid course page
- `/senior-golf-mastery` — Premium course page
- `/community` — Berman Clubhouse membership page ($47/mo, $297/yr)
- `/20-more-yards` — Challenge page (registration or waitlist, see above)
- `/20-more-yards/thank-you` — Confirmation (registered or waitlisted) + Clubhouse offer

## Stack
- Next.js with TypeScript
- Tailwind CSS
- GHL (GoHighLevel) embedded forms via iframe
- Brand colors: blue gradient `#0f4c81` → `#1e88e5`, orange accent `#F26B4E`
