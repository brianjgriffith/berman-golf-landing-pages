// Single source of truth for the Senior Golf Mastery Cohort ($2,997 offer).
// Used by:
//   - /senior-golf-mastery-cohort            (sales page)
//   - /senior-golf-mastery-cohort/checkout   (checkout page)
//   - /senior-golf-mastery/thank-you         (cohort call schedule)
//
// TODO(BERMAN): Wire up the real GHL checkout form once available.

export interface CohortSchedule {
  // e.g. "Wednesdays at 11:00 AM ET"
  callDay: string;
  // e.g. "Starts July 16, 2026"
  startLabel: string;
  // Total program length, e.g. "12 weeks". NOTE: this is the FULL program
  // (6 weeks of live calls + 6 weeks of range implementation), not the number
  // of weeks that have a live call. Don't set this to the session count.
  duration: string;
  // Time of every live call, e.g. "11:00 AM ET"
  time: string;
  // The six live session dates, in order. These cover weeks 1-6 only —
  // weeks 7-12 have no scheduled calls (weekly range-video critiques instead).
  sessions: string[];
}

export interface CohortOffer {
  name: string;
  // Headline price shown to the buyer (one-time).
  price: string;
  priceNumeric: number;
  // Enrollment cart-close phrase, e.g. "when the cohort starts Wednesday, July 8".
  // Reads after "Enrollment closes ...".
  enrollDeadline: string;
  // How many seats remain in this reopen. Powers the top "slots left" bar and the
  // button stickers. Set to 0 to hide the scarcity UI (bar + stickers disappear).
  // KEEP THIS HONEST — only show what's actually available.
  slotsLeft: number;
  schedule: CohortSchedule;
  // GHL checkout form embed.
  checkoutForm: {
    src: string;
    id: string;
    formName: string;
    formId: string;
    // Natural form height from GHL's embed code (data-height), in px.
    height: number;
  };
}

export const seniorGolfMasteryCohort: CohortOffer = {
  name: "Senior Golf Mastery Cohort",
  price: "$2,997",
  priceNumeric: 2997,
  enrollDeadline: "when the cohort starts Tuesday, September 8",
  slotsLeft: 10,

  schedule: {
    // NOTE: this cohort is NOT one fixed weekday. Calls 1-3 are Tuesdays,
    // calls 4-6 are Wednesdays. Keep callDay honest about the switch --
    // buyers block these out on a calendar and a wrong weekday is a refund.
    callDay:
      "Tuesdays at 11:00 AM ET for calls 1–3, then Wednesdays for calls 4–6",
    startLabel: "Starts Tuesday, September 8, 2026",
    duration: "12 weeks",
    time: "11:00 AM ET",
    sessions: [
      "Tuesday, September 8, 2026",
      "Tuesday, September 15, 2026",
      "Tuesday, September 22, 2026",
      "Wednesday, September 30, 2026",
      "Wednesday, October 7, 2026",
      "Wednesday, October 14, 2026",
    ],
  },

  checkoutForm: {
    src: "https://link.physiofunnels.com/widget/form/NF1KPUDnoQ13M1VWQicq",
    id: "inline-NF1KPUDnoQ13M1VWQicq",
    formName: "(TM) Senior Golf Mastery Cohort",
    formId: "NF1KPUDnoQ13M1VWQicq",
    height: 1135,
  },
};
