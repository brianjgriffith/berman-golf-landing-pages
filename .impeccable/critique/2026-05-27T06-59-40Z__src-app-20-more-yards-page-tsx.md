---
target: /20-more-yards
total_score: 26
p0_count: 1
p1_count: 2
timestamp: 2026-05-27T06-59-40Z
slug: src-app-20-more-yards-page-tsx
---
# Critique: /20-more-yards (Pass 3)

## Design Health Score

| # | Heuristic | Score | Delta | Key Issue |
|---|-----------|-------|-------|-----------|
| 1 | Visibility of System Status | 3 | = | Countdown sticky good; no scroll-progress |
| 2 | Match Real World | 3 | +1 | "Activation Blueprint" jargon for first-timers |
| 3 | User Control and Freedom | 3 | +1 | No calendar download |
| 4 | Consistency and Standards | 3 | +2 | Body consistent with hero. Header/Footer still SaaS chrome. |
| 5 | Error Prevention | 2 | = | GHL iframe blind spot |
| 6 | Recognition Rather Than Recall | 3 | = | 3 date formats in use |
| 7 | Flexibility and Efficiency | 2 | = | No mobile sticky CTA; no calendar add |
| 8 | Aesthetic and Minimalist Design | 3 | +1 | Identity exists; dragged down by structural repetition |
| 9 | Error Recovery | 2 | = | No iframe fallback |
| 10 | Help and Documentation | 2 | = | No FAQ on this page |
| **Total** | | **26/40** | **+5** | **Recovered consistency drop. No net forward motion on usability.** |

Trend: 26 -> 21 -> 26

## Anti-Patterns Verdict

Detector: 0 findings (clean for 2 passes).

LLM (new tells from propagation):
1. 3px × 128px navy rule above every H2 = new orange-eyebrow tic. 10 sections identical position.
2. Anton H2s repeated 10 times - no headline can be louder than another.
3. "01 / 02 / 03" Anton numerals in 4 places - fashion-trade reflex, wrong for senior eligibility lists.
4. Two near-identical cream shades alternating - looks like "AI couldn't pick one."
5. Navy contrast card overused (4 places).
6. Photo + caption frame duplicated between HeroEvent and Instructor poster.

## Overall Impression

Body is now one document with the hero. But the page opens on a white SaaS pill header and closes on a bg-gray-900 Inter footer. Interior is consistent; the edges break the spell at exactly the highest-attention moments. The propagation succeeded structurally but didn't unlock new design moves - every section opens the same way (3px rule + Anton H2 + Source Serif lede), so the rhythm is monotone with no chorus.

## What's Working

1. Source Serif + Anton pairing is a real typographic system.
2. EventRegistrationForm two-column with sticky countdown is the page's best section.
3. Instructor poster variant is a real upgrade - formal white-frame portrait reads as authority.

## Priority Issues

### [P0] Header and Footer chrome not propagated
First and last impression break the aesthetic. White SaaS pill header -> tournament poster body -> bg-gray-900 Inter footer.
Fix: variant prop pattern. Cream-on-navy header with Anton wordmark + square orange CTA. Navy-on-cream footer with 3px rule device. Pass variant="poster" from /20-more-yards only.
Command: /impeccable colorize Header Footer

### [P1] 3px navy rule is the new orange-eyebrow tic
10 sections identical device in identical position.
Fix: keep rule on 3 structural moments only (Hero, TheAgenda, EventRegistrationForm). Vary interior openings: section numbers, date stamp, wordmark, or nothing. JakeQuote should have no rule.
Command: /impeccable distill - vary section-opening device

### [P1] Anton H2s monotone - 10 broadsides means nothing loud
JakeQuote should be emotional peak, can't be.
Fix: 3-tier hierarchy. Broadside (Anton 6xl/7xl): Hero, TheAgenda, JakeQuote, EventRegistrationForm. Mid (Anton 3xl/4xl + Source Serif italic subhead): WhyTwoDays, EventLogistics, WrongVsRight. Quiet (Source Serif italic 3xl/4xl, no Anton): PerryStory, WalkAwayWith, WhoThisIsFor, Instructor.
Command: /impeccable typeset - three-tier H2 hierarchy

### [P2] "01 / 02 / 03" Anton numerals don't serve seniors
For 60+ scanning eligibility criteria, numerals provide zero info.
Fix: navy checkmark glyphs in WhoThisIsFor and WalkAwayWith. Keep numerals only in EventRegistrationForm day listing (sequential) and Instructor credentials.
Command: /impeccable clarify - checkmarks for criteria

### [P2] Date format inconsistent
5 different formats for the same event date.
Fix: 1 long form ("Wed Jun 24 + Thu Jun 25 · 10am ET") + 1 short form ("Jun 24 + 25"). Never a third.
Command: /impeccable clarify - normalize dates

### [P3] No FAQ section
"What if I miss Day 1?" / "Will I be pitched?" never addressed.
Fix: compact FAQ between EventLogistics and EventRegistrationForm. 6 questions. Source Serif italic.
Command: /impeccable onboard - add objection-handling FAQ

## Persona Red Flags

**Bill, 67**: drops off at WalkAwayWith/Testimonials because rhythm is monotone. Looks for checkmarks at "01/02/03", doesn't find them.

**Margaret, 62**: scrolls looking for "is this safe for husband Tom's back." Reassurance scattered across Perry + Instructor; WhoThisIsFor at section 9. Risk: scroll-fatigue before reaching it.

**Frank, 72**: low risk. Already trusts Jake. Page works for him via header CTA.

## Minor Observations

- EventRegistrationForm H2 has terminal period; not every H2 does. Audit, pick one rule.
- HeroEvent subhead uses text-[#1a365d]/90 vs H1 solid navy - noticeable color shift.
- PerryStory is the ONLY section that doesn't use the 3px+Anton opener. It opens with rule + blockquote. Inconsistency that's actually welcome - replicate that variance elsewhere.
- &rarr; glyphs read by screen readers as "right arrow." Wrap in aria-hidden.
- Footer "since 2010" - verify before shipping.
- Consider schema.org/Event structured data.
- GHL iframe 627px - verify iOS keyboard.

## Questions to Consider

1. Where's the scarcity backing the countdown? No seat count, no waitlist mention.
2. Where's the bridge to the $2,997 program? One phrase in Day 2 ("path forward").
3. What tournament-poster reference are we actually pulling? The form without the content (named event, year, sponsor, trophy).
4. Why is the header still a SaaS pill? Highest-leverage move available.
