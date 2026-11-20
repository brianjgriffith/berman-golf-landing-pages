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
    // Mon Nov 30, 2026, 2:00 PM ET (EST = UTC-5) — the Cyber Monday "last
    // call" class, same class as Nov 19. Set on the Oct 28 strategy call; the
    // Black Friday sale it closes ends that night at midnight ET
    // (config/masteryMembership.ts → blackFriday.endsAt). Keep `date`/`time`
    // and `start` in sync — the page shows the strings, the calendar link
    // uses `start`.
    date: "Monday, November 30th",
    time: "2:00 PM ET",
    start: new Date("2026-11-30T19:00:00Z"),
    durationMinutes: 90,
    form: {
      src: "https://link.physiofunnels.com/widget/form/oXEX7JWwdrnMSPePRr1j",
      id: "inline-oXEX7JWwdrnMSPePRr1j",
      formName: "(TM) 11.30.26 Webclass Sign Up Page",
      formId: "oXEX7JWwdrnMSPePRr1j",
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
