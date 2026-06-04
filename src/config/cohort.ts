// Single source of truth for the Senior Golf Mastery Cohort ($3,000 offer).
// Used by:
//   - /senior-golf-mastery-cohort           (sales page)
//   - /senior-golf-mastery-cohort/checkout   (checkout page)
//
// TODO(BERMAN): Fill in the real cohort schedule + GHL checkout form once available.

export interface CohortSchedule {
  // e.g. "Wednesdays at 11:00 AM ET"
  callDay: string;
  // e.g. "Starts July 16, 2026"
  startLabel: string;
  // e.g. "6 weeks"
  duration: string;
}

export interface CohortOffer {
  name: string;
  // Headline price shown to the buyer (one-time).
  price: string;
  priceNumeric: number;
  schedule: CohortSchedule;
  // GHL checkout form embed. TODO: replace placeholder IDs with the real cohort form.
  checkoutForm: {
    src: string;
    id: string;
    formName: string;
    formId: string;
  };
}

export const seniorGolfMasteryCohort: CohortOffer = {
  name: "Senior Golf Mastery Cohort",
  price: "$3,000",
  priceNumeric: 3000,

  // TODO(BERMAN): Confirm the real schedule. Placeholders below are editable.
  schedule: {
    callDay: "Weekly live Zoom calls — day & time TBD",
    startLabel: "Next cohort starts soon — dates TBD",
    duration: "6 weeks",
  },

  // TODO(BERMAN): Replace with the real $3,000 cohort checkout form from GHL.
  // (Reusing the SGM form ID as a visible placeholder so the embed renders.)
  checkoutForm: {
    src: "https://link.physiofunnels.com/widget/form/REPLACE_WITH_COHORT_FORM_ID",
    id: "inline-REPLACE_WITH_COHORT_FORM_ID",
    formName: "Senior Golf Mastery Cohort",
    formId: "REPLACE_WITH_COHORT_FORM_ID",
  },
};
