"use client";

import { useEffect, useState } from "react";

const DEFAULT_TARGET = new Date("2026-06-24T14:00:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const LABELS: Array<keyof TimeLeft> = ["days", "hours", "minutes", "seconds"];
const LABEL_TEXT: Record<keyof TimeLeft, string> = {
  days: "Days",
  hours: "Hours",
  minutes: "Min",
  seconds: "Sec",
};

interface CountdownProps {
  tone?: "light" | "dark";
  targetDate?: Date;
  heading?: string;
}

export default function Countdown({
  tone = "light",
  targetDate = DEFAULT_TARGET,
  heading = "Doors open in",
}: CountdownProps = {}) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const initialTimer = setTimeout(() => setTime(getTimeLeft(targetDate)), 0);
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(id);
    };
  }, [targetDate]);

  const isLight = tone === "light";
  const cardClass = isLight
    ? "bg-white border-2 border-[#1a365d]"
    : "bg-[#1a365d] border-2 border-[#1a365d]";
  const numberClass = isLight ? "text-[#1a365d]" : "text-white";
  const labelClass = isLight ? "text-[#1a365d]/70" : "text-white/70";
  const headingClass = isLight ? "text-[#1a365d]/70" : "text-white/80";

  return (
    <div>
      <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-3 ${headingClass}`}>
        {heading}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
        {LABELS.map((key) => (
          <div key={key} className={`${cardClass} px-2 py-3 text-center`}>
            <div
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tabular-nums leading-none ${numberClass}`}
            >
              {time === null ? "--" : String(time[key]).padStart(2, "0")}
            </div>
            <div
              className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1.5 ${labelClass}`}
            >
              {LABEL_TEXT[key]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
