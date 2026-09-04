"use client";

import Script from "next/script";
import {
  TwoDayEvent,
  isWaitlist,
  waitlistFormReady,
  activeForm,
} from "@/config/events";
import { clubhouse } from "@/config/clubhouse";
import {
  EventPhase,
  SESSION_1,
  SESSION_2,
  REPLAY_END,
  REPLAY_END_LABEL,
  useEventPhase,
} from "@/lib/eventPhase";
import Countdown from "./Countdown";

interface EventRegistrationFormProps {
  event: TwoDayEvent;
}

interface PhaseCopy {
  heading: string;
  subhead: string;
  countdownHeading?: string;
  countdownTarget?: Date;
}

const PHASE_COPY: Record<EventPhase, PhaseCopy> = {
  before: {
    heading: "Reserve your free seat.",
    subhead: "Limited spots available. Register now.",
    countdownHeading: "Doors open in",
    countdownTarget: SESSION_1,
  },
  between: {
    heading: "Session 1's in the books.",
    subhead:
      "Not too late to jump in. Register below to get the Session 1 replay — then join us live for Session 2 at 10 AM ET.",
    countdownHeading: "Session 2 starts in",
    countdownTarget: SESSION_2,
  },
  replay: {
    heading: "Catch the replay before it's gone.",
    subhead: `Both sessions are yours to watch free through ${REPLAY_END_LABEL}. Register below for instant access.`,
    countdownHeading: "Replay closes in",
    countdownTarget: REPLAY_END,
  },
  closed: {
    heading: "This challenge has wrapped.",
    subhead:
      "Want in on the next one? Register below and we'll save you a seat for the next live event.",
  },
};

export default function EventRegistrationForm({ event }: EventRegistrationFormProps) {
  const phase = useEventPhase();
  const waitlist = isWaitlist(event);
  const form = activeForm(event);
  const formLive = waitlist ? waitlistFormReady(event) : true;

  // Between runs, the time-phase is meaningless — the waitlist copy wins.
  const copy: PhaseCopy = waitlist
    ? {
        heading: "Get first crack at the next one.",
        subhead: `The next ${event.name} Challenge runs ${event.windowLabel}. Dates land soon — the waitlist gets them first, before we open registration to everyone else.`,
      }
    : PHASE_COPY[phase];

  return (
    <section id="register" className="py-20 bg-[#f5ede0]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 max-w-4xl">
          <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#1a365d] leading-[1.0] mb-4 tracking-tight">
            {copy.heading}
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#1a365d]/80 max-w-2xl leading-relaxed">
            {copy.subhead}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Left: Countdown + Event meta */}
          <aside className="lg:col-span-2 lg:sticky lg:top-24">
            {copy.countdownTarget && (
              <Countdown targetDate={copy.countdownTarget} heading={copy.countdownHeading} />
            )}

            {waitlist ? (
              <div className="space-y-5 font-serif text-[#1a365d]/90">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a365d]/60 mb-1">
                    Next Run
                  </p>
                  <p className="font-display text-3xl font-black text-[#1a365d] leading-tight">
                    {event.windowLabel}
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  Two live sessions with Dr. Jake, {event.sessionLength}. Same
                  format we ran in June and August.
                </p>
              </div>
            ) : (
              <div className="mt-8 space-y-5 font-serif text-[#1a365d]/90">
                {event.days.map((day, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-black text-[#1a365d] tracking-tight w-12 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a365d]/60 mb-1">
                        Day {i + 1}
                      </p>
                      <p className="font-bold text-[#1a365d] text-base sm:text-lg leading-tight">
                        {day.date}
                      </p>
                      <p className="text-[#1a365d]/70 text-sm">{day.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 border-t border-[#1a365d]/15 pt-6">
              <div className="flex flex-col gap-3 text-sm text-[#1a365d]/70">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1a365d]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 12l2 2 4-4M12 21a9 9 0 110-18 9 9 0 010 18z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{waitlist ? "No cost, no card" : "Secure registration"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1a365d]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9-5 9 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>
                    {waitlist
                      ? "Dates emailed the moment they're set"
                      : "Instant confirmation by email"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#F26B4E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                  <span>
                    {waitlist
                      ? "Waitlist registers before the public does."
                      : "Limited replay window (live is still the move)."}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-[#1a365d]/15 p-6 md:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#1a365d]/60 mb-5">
                {waitlist
                  ? `${event.name} Waitlist`
                  : `${event.name} Live Event`}
              </h3>

              {formLive ? (
                <div className="w-full min-h-[627px]">
                  <iframe
                    src={form.src}
                    style={{ width: "100%", height: "627px", border: "none" }}
                    id={form.id}
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={form.formName}
                    data-height="627"
                    data-layout-iframe-id={form.id}
                    data-form-id={form.formId}
                    title={form.formName}
                  />
                </div>
              ) : (
                /* No waitlist form wired up yet — don't render a dead embed.
                   Drop the form ID into config/events.ts and this disappears. */
                <div className="py-10 text-center">
                  <p className="font-display text-2xl md:text-3xl font-black text-[#1a365d] leading-tight mb-4">
                    The waitlist opens in a few days.
                  </p>
                  <p className="font-serif text-[#1a365d]/80 leading-relaxed mb-8 max-w-md mx-auto">
                    We&apos;re locking the {event.windowLabel} dates right now.
                    In the meantime, the fastest way to get coached by Jake
                    between challenges is the {clubhouse.name} &mdash; monthly
                    live calls, swing video feedback, and every 30-day challenge
                    he runs.
                  </p>
                  <a
                    href={clubhouse.path}
                    className="inline-block bg-[#F26B4E] text-white px-8 py-4 font-extrabold text-base uppercase tracking-wider hover:bg-[#e05a3d] transition-colors"
                  >
                    See The Clubhouse &rarr;
                  </a>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a365d]/60">
                    From {clubhouse.monthly.price}
                    {clubhouse.monthly.cadence} &middot; {clubhouse.monthly.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {formLive && (
        <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="lazyOnload" />
      )}
    </section>
  );
}
