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
    // Thu Oct 15, 2026, 12:00 PM ET (EDT = UTC-4). Keep `date`/`time` and
    // `start` in sync — the page shows the strings, the calendar link uses `start`.
    date: "Thursday, October 15th",
    time: "12:00 PM ET",
    start: new Date("2026-10-15T16:00:00Z"),
    durationMinutes: 90,
    form: {
      src: "https://link.physiofunnels.com/widget/form/C6sIbSQJXDh72Zwnzmdp",
      id: "inline-C6sIbSQJXDh72Zwnzmdp",
      formName: "(TM) 10.15.26 Webclass Sign Up Page",
      formId: "C6sIbSQJXDh72Zwnzmdp",
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
