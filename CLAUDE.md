# Berman Golf Landing Pages

## Workshop Dates
When updating workshop dates or form IDs, edit `src/config/workshops.ts`. This is the single source of truth used by:
- `/free-class` — Hero buttons + RegistrationForm embeds
- `/free-book/thank-you` — CTA buttons linking to free class

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
