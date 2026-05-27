---
target: /20-more-yards
total_score: 26
p0_count: 2
p1_count: 3
timestamp: 2026-05-27T05-47-14Z
slug: src-app-20-more-yards-page-tsx
---
# Critique: /20-more-yards

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Trust badges + dates visible; mostly N/A for landing |
| 2 | Match System / Real World | 3 | "Activation Method", "Ground Force" consistent with audience |
| 3 | User Control and Freedom | 3 | Standard nav, no traps |
| 4 | Consistency and Standards | 3 | Too consistent - section grammar repeats verbatim |
| 5 | Error Prevention | 2 | Form is GHL iframe, can't see validation |
| 6 | Recognition Rather Than Recall | 3 | Dates repeated across sections |
| 7 | Flexibility and Efficiency | 2 | Single linear flow, fine for landing |
| 8 | Aesthetic and Minimalist Design | 2 | Section sprawl + repeated eyebrows + card-grid monotony |
| 9 | Error Recovery | 2 | No clear path if form fails (3rd-party) |
| 10 | Help and Documentation | 3 | EventLogistics + WhyTwoDays serve as inline FAQ |
| **Total** | | **26/40** | **Functional but undifferentiated** |

## Anti-Patterns Verdict

**Detector**: 1 finding - border-l-4 side-tab accent in Instructor.tsx:46 (carries over to /free-class).

**LLM**:
1. Repeated eyebrow scaffolding (9 sections, same orange-uppercase pattern)
2. Hero-metric template via StatStrip
3. Identical card grids stacked end-to-end
4. Em-dash violations throughout

## Overall Impression

The page works as a content brief. As a launch, it doesn't. Of 15 sections, 9 are reused from /free-class without visual adaptation, and the 5 new sections all use the same visual grammar: orange eyebrow -> centered headline -> card grid -> orange CTA. Strip the copy and a senior golfer who saw /free-class two weeks ago will think they're looking at the same page.

The single biggest opportunity: the hero should not look like HeroV2.

## What's Working

1. Perry's Skool screenshot - distinctive, credible, can't be copy-pasted onto other pages
2. Day 1 white card vs Day 2 blue-gradient card - one of the few asymmetric moments
3. The WhyTwoDays closing tagline ("Information doesn't change your golf game. Implementation does.") - sounds like Jake

## Priority Issues

### [P0] Hero is structurally identical to HeroV2
Same gradient, same photo position, same CTA shape. User pattern-matches immediately to "another free webinar page."
Fix: Event-poster hero. Date as massive typography, drenched color, asymmetric composition, or countdown.
Command: /impeccable shape -> /impeccable bolder

### [P0] Section-eyebrow scaffolding repeated everywhere
9 sections use identical orange-uppercase-tracked kicker. Loudest AI tell on the page. Brand register explicitly bans this.
Fix: Kill eyebrows on most sections. Keep at most 2 strategically.
Command: /impeccable distill

### [P1] Card-grid sameness end to end
At least 6 grid layouts back-to-back. Eye gets no rest and no signal about what matters more.
Fix: Break the grid in 2-3 places. WhyTwoDays as typographic statement, WalkAwayWith as long-form list, kill StatStrip.
Command: /impeccable layout

### [P1] Section sprawl - 15 sections, 4 doing the same job
3 sections do proof (StatStrip + Perry + Testimonials). 4 sections do education (WrongVsRight + WhyTwoDays + TheAgenda + WalkAwayWith). Cognitive load on 65+ audience is real.
Fix: Cut 3-4 sections.
Command: /impeccable distill

### [P1] No launch-specific urgency mechanic
A 2-day live event needs temporal pressure visible above the fold. Right now only signal is small "Live Only" tile near the bottom.
Fix: Countdown timer near hero, date as largest type on page, or "doors close" counter.
Command: /impeccable delight or /impeccable overdrive

## Persona Red Flags

**Frank, 68 - retired engineer**: Skims past the 4 orange-eyebrowed middle sections (all look the same). EventLogistics emoji icons feel like fitness-app aesthetic. Zoom-friendliness reassurance is too far down the page.

**Linda, 64 - wife forwarded the link**: Cost not named in hero. Perry's screenshot (strongest credibility signal) appears too low. Page reads too marketing-y for skeptical spouse-test.

**Greg, 71 - power user on email list**: Reads it as another /free-class. Hero composition is identical. Page doesn't tell him this one is different. Misses the launch signal entirely.

## Minor Observations

- Instructor.tsx:46 side-tab border (detector flag). Inherited from /free-class.
- Hero's "20 More Yards. / In 2 Days." gets undercut by orange "Live with Dr. Jake." - three colors competing.
- WalkAwayWith trailing exclamation + em-dash registers as AI marketing.
- 4+ "Reserve Your Seat" CTAs across the page. Repetition isn't urgency.
- The 2-day registration card shows both days as visually equal-weight boxes.

## Questions to Consider

- What if this was a single fold of dates + Jake + one CTA?
- If you killed every orange eyebrow, would anyone notice?
- What single visual moment could ONLY exist on /20-more-yards?
- What does an event poster for "20 More Yards" look like with no copy constraints?
