export interface Workshop {
  date: string;
  time: string;
  /** Session start as an absolute instant — drives the calendar link. */
  start: Date;
  /** Calendar-link length only; not shown on the page. */
  durationMinutes: number;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    // Thu Nov 19, 2026, 12:00 PM ET (EST = UTC-5; DST ended Nov 1).
    // Set on the Oct 28 strategy call. Keep `date`/`time` and `start` in sync —
    // the page shows the strings, the calendar link uses `start`.
    date: "Thursday, November 19th",
    time: "12:00 PM ET",
    start: new Date("2026-11-19T17:00:00Z"),
    durationMinutes: 90,
    form: {
      src: "https://link.physiofunnels.com/widget/form/3ciK8sc32097UNwGDeR3",
      id: "inline-3ciK8sc32097UNwGDeR3",
      formName: "(TM) 11.19.26 Webclass Sign Up Page",
      formId: "3ciK8sc32097UNwGDeR3",
    },
  },
];

/** Google Calendar "add event" link for a workshop. */
export function googleCalendarUrl(w: Workshop): string {
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const end = new Date(w.start.getTime() + w.durationMinutes * 60_000);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Free Live Class with Dr. Jake Berman",
    dates: `${stamp(w.start)}/${stamp(end)}`,
    details: "Your join link comes by email from distance@bermangolf.com.",
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
