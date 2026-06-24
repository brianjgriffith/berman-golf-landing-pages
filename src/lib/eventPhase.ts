"use client";

import { useEffect, useState } from "react";

// Single source of truth for where the live event stands right now.
// Session times are 10:00 AM ET each day (EDT = UTC-4).
export const SESSION_1 = new Date("2026-06-24T14:00:00Z");
export const SESSION_2 = new Date("2026-06-25T14:00:00Z");
export const REPLAY_END = new Date("2026-07-02T04:00:00Z"); // Thu 12 AM ET, after Wed July 1

export type EventPhase = "before" | "between" | "replay" | "closed";

export function getPhase(now: number): EventPhase {
  if (now < SESSION_1.getTime()) return "before";
  if (now < SESSION_2.getTime()) return "between";
  if (now < REPLAY_END.getTime()) return "replay";
  return "closed";
}

// Starts on "before" so SSR and the first client render match, then corrects
// after mount and re-checks every 30s so the page rolls itself between phases.
export function useEventPhase(): EventPhase {
  const [phase, setPhase] = useState<EventPhase>("before");

  useEffect(() => {
    const update = () => setPhase(getPhase(Date.now()));
    update();
    const id = setInterval(update, 30 * 1000);
    return () => clearInterval(id);
  }, []);

  return phase;
}
