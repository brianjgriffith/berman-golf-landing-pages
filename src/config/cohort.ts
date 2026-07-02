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
  // e.g. "6 weeks"
  duration: string;
  // Time of every live call, e.g. "11:00 AM ET"
  time: string;
  // The six live session dates, in order.
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
  enrollDeadline: "when the cohort starts Wednesday, July 8",
  slotsLeft: 3,

  schedule: {
    callDay: "Wednesdays at 11:00 AM ET (with one Thursday session)",
    startLabel: "Starts Wednesday, July 8, 2026",
    duration: "6 weeks",
    time: "11:00 AM ET",
    sessions: [
      "Wednesday, July 8, 2026",
      "Wednesday, July 15, 2026",
      "Wednesday, July 22, 2026",
      "Thursday, July 30, 2026",
      "Wednesday, August 5, 2026",
      "Wednesday, August 12, 2026",
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
