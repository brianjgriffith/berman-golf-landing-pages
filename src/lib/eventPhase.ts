"use client";

import { useEffect, useState } from "react";
import { getPhase, type EventPhase } from "@/config/eventWindow";

// Timeline constants live in @/config/eventWindow so server components can
// read them too. Re-exported here so existing client imports keep working.
export {
  SESSION_1,
  SESSION_2,
  REPLAY_END,
  REPLAY_END_LABEL,
  getPhase,
  replayIsLive,
} from "@/config/eventWindow";
export type { EventPhase } from "@/config/eventWindow";

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
