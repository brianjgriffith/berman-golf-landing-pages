// When the webclass funnel hands off to the 20 More Yards challenge.
//
// The Aug 6 webclass starts at 11:00 AM ET. The moment it does, there is
// nothing left to register for, so every free-class entry point stops taking
// signups and feeds the Aug 26 + 27 challenge instead:
//
//   /free-class            -> /20-more-yards   (307)
//   /free-class-v1         -> /20-more-yards   (307)
//   20moreyards.com/       -> /20-more-yards   (rewrite, clean URL kept)
//   golflessonsdontwork.com -> forwards to /free-class at the registrar,
//                              so it inherits the redirect for free.
//
// /free-book and gaindistance.com/ are deliberately untouched.
//
// This is enforced at request time in src/proxy.ts, so the switch happens on
// its own — no deploy needs to be timed to the minute. To hand the webclass
// funnel back to /free-class for a future class, move this timestamp forward
// (and update config/workshops.ts with the new date).
export const FUNNEL_SWITCHOVER = Date.parse("2026-08-06T11:00:00-04:00");

export function challengeOwnsFunnel(now: number = Date.now()): boolean {
  return now >= FUNNEL_SWITCHOVER;
}
