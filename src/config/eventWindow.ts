// Single source of truth for the 20 More Yards event timeline.
//
// Server-safe on purpose (no "use client"), so both server components and
// client components can read it. src/lib/eventPhase.ts re-exports everything
// here and adds the client-side hook on top.
//
// Sept 30 + Oct 1, 2026 run: sessions are 9:00 AM ET each day (EDT = UTC-4).
// 9 AM, not the usual 10 — Jake has Senior Golf Mastery Cohort call 4 at
// 11:00 AM ET on Wed Sept 30. Keep these in sync with `days` in config/events.ts.
export const SESSION_1 = new Date("2026-09-30T13:00:00Z");
export const SESSION_2 = new Date("2026-10-01T13:00:00Z");

// The free replay comes down at midnight ET at the end of Wed Oct 7 —
// i.e. Thu Oct 8, 12:00 AM ET. Same 6-days-after-Session-2 window the August
// run used. Move this one timestamp to change the window; the replay page
// expires itself against it at request time.
export const REPLAY_END = new Date("2026-10-08T04:00:00Z");

// Display copy for the deadline above. Keep in sync with REPLAY_END.
export const REPLAY_END_LABEL = "Wednesday, October 7 at midnight ET";

export type EventPhase = "before" | "between" | "replay" | "closed";

export function getPhase(now: number): EventPhase {
  if (now < SESSION_1.getTime()) return "before";
  if (now < SESSION_2.getTime()) return "between";
  if (now < REPLAY_END.getTime()) return "replay";
  return "closed";
}

// True while the free replay window is still open.
export function replayIsLive(now: number = Date.now()): boolean {
  return now < REPLAY_END.getTime();
}
