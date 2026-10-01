// Which free event owns the funnel right now: the webclass (/free-class) or
// the 20 More Yards challenge (/20-more-yards).
//
// Whichever owns it, the other one's opt-in pages forward to it — so there is
// always exactly one place taking free signups, and the two can never redirect
// into each other.
//
//   owner "webclass"   /20-more-yards        -> /free-class     (307)
//                      /free-class-v1        -> /free-class     (307)
//                      20moreyards.com/      -> /free-class     (rewrite, clean URL kept)
//
//   owner "challenge"  /free-class           -> /20-more-yards  (307)
//                      /free-class-v1        -> /20-more-yards  (307)
//                      20moreyards.com/      -> /20-more-yards  (rewrite)
//
// golflessonsdontwork.com forwards to /free-class at the registrar, so it
// follows whatever /free-class does.
//
// Only the exact challenge opt-in path moves. /20-more-yards/replay and
// /20-more-yards/thank-you stay put. /free-book and gaindistance.com/ are
// deliberately untouched.
//
// Oct 1, 2026: handed back to the webclass for the Thu Oct 15 class
// (config/workshops.ts). This used to be a timestamp that flipped webclass ->
// challenge automatically when the Aug 6 class started. There's no challenge
// booked after Oct 15, so it's a plain switch now.
//
// ⚠️ Nothing changes on its own after the Oct 15 class starts: /free-class
// keeps taking signups for a date that has passed. Book the next class (or
// challenge) and flip this, or update workshops.ts, before then.

export type FunnelOwner = "webclass" | "challenge";

export const FUNNEL_OWNER: FunnelOwner = "webclass";

export function challengeOwnsFunnel(): boolean {
  return FUNNEL_OWNER === "challenge";
}
