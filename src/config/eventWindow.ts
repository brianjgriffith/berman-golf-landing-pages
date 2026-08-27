// Single source of truth for the 20 More Yards event timeline.
//
// Server-safe on purpose (no "use client"), so both server components and
// client components can read it. src/lib/eventPhase.ts re-exports everything
// here and adds the client-side hook on top.
//
// Session times are 10:00 AM ET each day (EDT = UTC-4).
export const SESSION_1 = new Date("2026-08-26T14:00:00Z");
export const SESSION_2 = new Date("2026-08-27T14:00:00Z");

// The free replay comes down at midnight ET at the end of Wed Sept 2 —
// i.e. Thu Sept 3, 12:00 AM ET. Move this one timestamp to change the
// window; the replay page expires itself against it at request time.
export const REPLAY_END = new Date("2026-09-03T04:00:00Z");

// Display copy for the deadline above. Keep in sync with REPLAY_END.
export const REPLAY_END_LABEL = "Wednesday, September 2 at midnight ET";

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
