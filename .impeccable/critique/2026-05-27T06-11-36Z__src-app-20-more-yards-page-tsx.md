---
target: /20-more-yards
total_score: 21
p0_count: 2
p1_count: 2
timestamp: 2026-05-27T06-11-36Z
slug: src-app-20-more-yards-page-tsx
---
# Critique: /20-more-yards (Pass 2)

## Design Health Score

| # | Heuristic | Score | Delta | Key Issue |
|---|-----------|-------|-------|-----------|
| 1 | Visibility of System Status | 3 | = | Countdown exists; no registration count |
| 2 | Match System / Real World | 2 | -1 | "Est. 2026" fake heritage; "Doors open in" for a Zoom |
| 3 | User Control and Freedom | 2 | -1 | "Live only, no replays" is a wall |
| 4 | Consistency and Standards | 1 | -2 | Hero poster vs body SaaS - two design systems on one page |
| 5 | Error Prevention | 2 | = | GHL iframe; no timezone clarification |
| 6 | Recognition Rather Than Recall | 3 | = | Dates repeated, good |
| 7 | Flexibility and Efficiency | 2 | = | 8 visible CTAs before the form |
| 8 | Aesthetic and Minimalist | 2 | = | New 2px rule is template-shaped same way |
| 9 | Error Recovery | 2 | = | No missed-Day-1 path |
| 10 | Help and Documentation | 2 | -1 | No timezone converter; no Zoom-for-seniors copy |
| **Total** | | **21/40** | **-5** | **Consistency cratered** |

## Anti-Patterns Verdict

**Detector**: 0 findings. Clean. (border-l-4 Instructor fix landed.)

**LLM (new tells introduced by redesign)**:
1. 5% paper-grain texture multiply blend - humblebrag texture
2. rotate(-1deg) on portrait - reads broken not crafted
3. Anton as lone voice - no secondary typeface, one loud font on beige
4. "Est. 2026" in kicker - brand-mark cosplay for a first-time event
5. Countdown without scarcity backing - theater
6. New 2px navy rule replacing orange eyebrow - quieter template, same template

## Overall Impression

Hero shipped. Rest of the page didn't. Poster glued to a brochure. HeroEvent is genuinely different from HeroV2 (different aesthetic class), but scroll past it and PerryStory opens on bg-gray-100 with rounded-2xl shadow cards - pure SaaS template grammar. WrongVsRight still has the orange "The Problem" eyebrow (purge incomplete). 8 of 12 sections unchanged from /free-class aesthetic.

## What's Working

1. Framed portrait + caption upgrade over the floating cutout PNG. "PT, DPT · YOUR HOST" signals presenter not influencer.
2. The 3px solid navy rule under the subhead - one piece of typography that actually feels like print.
3. EventLogistics SVG icons replacing emoji - clear win.

## Priority Issues

### [P0] Page collapses back into /free-class aesthetic at section 2
Hero pulls away successfully but body doesn't follow. Lasting impression is the body, not the hero.
Fix: Force-propagate 3 hero tokens everywhere - bg-[#f5ede0] replacing bg-gray-100, sharp navy hairlines replacing rounded-2xl + shadow, 3px navy rule replacing every remaining orange eyebrow.
Command: /impeccable colorize or freeform propagation

### [P0] Anton is unsupported - one loud font on beige
Tournament posters work because of type contrast. Anton has no secondary voice.
Fix: pair Anton with a serif body face (Source Serif 4). Anton for H1 + Day labels only. Serif carries body copy and pull quotes.
Command: /impeccable typeset

### [P1] Anton at 13vw with leading-0.85 is hard to read for seniors
Largest decorative element is the least legible.
Fix: drop clamp ceiling 11rem to 8rem, loosen leading to 0.95, loosen tracking to 0.01em. Test Archivo Black (geometric heavy non-condensed) against Anton.
Command: /impeccable typeset HeroEvent

### [P1] Commit to paper texture or kill it
5% noise is humblebrag.
Fix: delete the SVG noise layer (cream does the work alone) OR commit to risograph treatment (visible halftone, plate offset, deckled portrait edges).
Command: /impeccable distill HeroEvent or /impeccable overdrive HeroEvent

### [P2] Countdown is decoration without scarcity backing
Ticking clock + no seat count = theater.
Fix: pair with real number ("1,247 registered" or "Last cohort sold out in 72 hours") or move next to form with static dated stamp in hero.
Command: /impeccable delight EventRegistrationForm

### [P2] rotate(-1deg) reads as broken
Visible enough to notice, not committed enough to be intentional.
Fix: drop rotation entirely OR commit to -4deg with tape/thumbtack/margin annotation.
Command: /impeccable polish HeroEvent

## Persona Red Flags

**Hal, 68, retired engineer**: squints at "Yards.", frowns at the tilt, puts up wall at ticking countdown, scrolls to gray-card PerryStory and concludes "this is a different website," Google "Jake Berman scam."

**Carol, 72, wife registering husband**: scans for date/time/cost/attendance. Cost is six scrolls down. Replay policy is tiny tracked uppercase she can't read. Google "20moreyards replay."

**Greg, 64, warm lead from Instagram**: smashes hero CTA, lands at form. Generic GHL iframe inside navy gradient doesn't connect to hero aesthetic. Hero credibility is spent. Fills form anyway because of pre-existing Jake trust, not page-earned trust.

## Minor Observations

- WrongVsRight.tsx lines 6-8 still has orange "The Problem" eyebrow
- WrongVsRight.tsx lines 66, 74 still have em-dashes
- WalkAwayWith.tsx line 9 has em-dashes in "Use muscles—not momentum—"
- Instructor.tsx blue gradient = third design system on the page (cream → gray → blue)
- EventRegistrationForm.tsx has the same orange-eyebrow Day 1/Day 2 card pattern killed in TheAgenda
- Hero kicker "Est. 2026" should be dropped
- Mobile H1 Anton condensed at 4rem with leading-0.85 may overlap descenders
- At lg breakpoint H1 dominates the portrait - presenter should be at parity
- Testimonials heading "Don't let them tell you it's just your age" is strongest single line of copy on the page

## Questions to Consider

1. What if you killed the hero entirely and opened on Perry's tournament screenshot at full bleed?
2. What if "20 More Yards" is the wrong headline and "Don't let them tell you it's just your age" is the H1?
3. Why is a free webinar getting the visual language of a $5K paid conference?
4. What is the one element that could only exist for senior golfers? Find that, put it in the hero, "feels like other pages" solves itself.
