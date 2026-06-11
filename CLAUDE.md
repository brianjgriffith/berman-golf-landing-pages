# Berman Golf Landing Pages

## Brand Voice & Copy Knowledge Base
For ANY copywriting task (emails, ad/social captions, landing-page copy, testimonials),
read from `../Docs/Berman Knowledge Base/` first:
- `Brand Voice v2 (MASTER).md` — current voice, signature phrases, beliefs, avatar, methodology, story library. **Read first.**
- `testimonials/` — long-form references per student. Check each file's **Accuracy Checkpoints** before quoting any number or result.
- `Webclass Transcript 2025-10-29.md` — Jake's spoken voice / live pitch.
- `README.md` — index + hard rules for copy.
Other copy assets live in `../Docs/` (e.g. `20 More Yards Challenge - Social Captions.md`).

## Redirects (next.config.ts)
- `20moreyards.com` (+ www) root → serves `/20-more-yards` (rewrite, clean URL preserved)
- `/free-class` → `/20-more-yards` (temporary 307 redirect; "Golf Lessons Don't Work" funnel now points at the challenge)

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
