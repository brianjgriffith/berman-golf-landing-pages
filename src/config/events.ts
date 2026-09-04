// Single source of truth for the 20 More Yards live challenge.
//
// The challenge runs in cohorts, so this page has two modes:
//
//   status: "scheduled"  — dates are locked. Full registration page: hero date
//                          strip, agenda with real days, countdown, Event
//                          schema, the GHL registration form.
//   status: "waitlist"   — between runs. No dates, no countdown, no Event
//                          schema (an Event without a startDate is invalid
//                          structured data). The page sells the next run by
//                          its rough window and captures the waitlist instead.
//
// Everything on /20-more-yards reads from here — hero, agenda, logistics,
// FAQ, footer, thank-you page, JSON-LD — so flipping modes is a one-file edit.
//
// TO SCHEDULE THE NEXT RUN:
//   1. status -> "scheduled"
//   2. fill `days` with the two real dates (long, time, short)
//   3. point `form` at the new GHL registration form
//   4. update SESSION_1 / SESSION_2 / REPLAY_END in config/eventWindow.ts
//   5. if a webclass runs first, push FUNNEL_SWITCHOVER in config/funnelSwitch.ts
//
// TO CLOSE A FINISHED RUN:
//   status -> "waitlist", empty `days`, set `windowLabel` to the next window.

export type EventStatus = "scheduled" | "waitlist";

export interface EventDay {
  /** Long form, e.g. "Wednesday, August 26" */
  date: string;
  /** e.g. "10:00 AM ET" */
  time: string;
  /** Compact form for tight UI, e.g. "Aug 26" */
  short: string;
}

export interface GhlForm {
  src: string;
  id: string;
  formName: string;
  formId: string;
}

export interface TwoDayEvent {
  name: string;
  slug: string;
  status: EventStatus;
  /** The two live days. EMPTY while on the waitlist — always guard before indexing. */
  days: EventDay[];
  /** Rough window sold on the waitlist, e.g. "Late September 2026". */
  windowLabel: string;
  /** e.g. "90 min each" */
  sessionLength: string;
  /** Registration form — used when status is "scheduled". */
  form: GhlForm;
  /**
   * Waitlist capture form — used when status is "waitlist".
   *
   * Currently the SAME GHL form as `form`, on purpose: the challenge opt-in
   * form already collects exactly what a waitlist needs (name + email), and
   * the waitlist/registrant distinction is handled in GHL, where these
   * submissions get tagged as waitlist and routed to the waitlist
   * confirmation instead of the old August automations.
   *
   * ⚠️ Because it's the same form, the GHL side has to be right: if the
   * August "here's your Zoom link" workflow is still attached, waitlist
   * signups will get a link to an event that already happened.
   *
   * If `formId` is ever empty, the registration section renders a "waitlist
   * opens shortly" placeholder rather than a broken embed.
   */
  waitlistForm: GhlForm;
}

export const twentyMoreYardsEvent: TwoDayEvent = {
  name: "20 More Yards",
  slug: "20-more-yards",

  // The Aug 26 + 27 run is finished and the replay window closed Sept 2.
  // Next run is late September — dates not locked yet, so: waitlist.
  status: "waitlist",
  days: [],
  windowLabel: "Late September 2026",
  sessionLength: "90 min each",

  // The standing 20 More Yards opt-in form. Replace the ID when the next run
  // gets its own registration form.
  form: {
    src: "https://link.physiofunnels.com/widget/form/W0ydyDyDva54Rx6xRYGx",
    id: "inline-W0ydyDyDva54Rx6xRYGx",
    formName: "(TM) 20 More Yards Opt In",
    formId: "W0ydyDyDva54Rx6xRYGx",
  },

  // Same form — see the note on `waitlistForm` above. GHL turns these
  // submissions into waitlist contacts; the page just changes what it
  // promises around the embed.
  waitlistForm: {
    src: "https://link.physiofunnels.com/widget/form/W0ydyDyDva54Rx6xRYGx",
    id: "inline-W0ydyDyDva54Rx6xRYGx",
    formName: "(TM) 20 More Yards Opt In",
    formId: "W0ydyDyDva54Rx6xRYGx",
  },
};

/** True between runs — no dates locked, collecting a waitlist. */
export function isWaitlist(event: TwoDayEvent): boolean {
  return event.status === "waitlist";
}

/** True once the GHL waitlist form actually exists. */
export function waitlistFormReady(event: TwoDayEvent): boolean {
  return event.waitlistForm.formId.trim().length > 0;
}

/** The form the page should embed right now. */
export function activeForm(event: TwoDayEvent): GhlForm {
  return isWaitlist(event) ? event.waitlistForm : event.form;
}

/** "Wednesday, August 26 + Thursday, August 27", or the window while on waitlist. */
export function longDates(event: TwoDayEvent): string {
  if (!event.days.length) return event.windowLabel;
  return event.days.map((d) => d.date).join(" + ");
}

/** "Aug 26 + Aug 27", or the window while on waitlist. */
export function shortDates(event: TwoDayEvent): string {
  if (!event.days.length) return event.windowLabel;
  return event.days.map((d) => d.short).join(" + ");
}

/** Session start time, or a placeholder while on waitlist. */
export function timeLabel(event: TwoDayEvent): string {
  return event.days[0]?.time ?? "Time announced soon";
}

/**
 * Eyebrow for a day card, e.g. "Day 1 • Wed, Aug 26 • 10:00 AM ET".
 * Falls back to just "Day 1" while dates aren't locked.
 */
export function dayLabel(event: TwoDayEvent, index: number): string {
  const day = event.days[index];
  if (!day) return `Day ${index + 1}`;
  return `Day ${index + 1} • ${day.short} • ${day.time}`;
}

/** Short day eyebrow, e.g. "Day 1 • August 26" — or just "Day 1". */
export function dayLabelShort(event: TwoDayEvent, index: number): string {
  const day = event.days[index];
  if (!day) return `Day ${index + 1}`;
  return `Day ${index + 1} • ${day.date.replace(/^\w+day, /, "")}`;
}

/** Label for every "#register" button on the challenge page. */
export function ctaLabel(event: TwoDayEvent): string {
  return isWaitlist(event) ? "Join The Waitlist" : "Reserve Your Seat";
}
