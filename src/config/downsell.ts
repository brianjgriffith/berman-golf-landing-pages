// Single source of truth for the 20 More Yards SALE — the cohort downsell.
//
// This is the self-paced path for challenge/cohort folks who didn't take the
// live $2,997 Senior Golf Mastery Cohort. Two tiers:
//   - PRIMARY  ($997): Full Senior Golf Mastery course + 1 FULL YEAR in the
//                      Berman Clubhouse. Renews at $297/yr for the Clubhouse
//                      after year one. Checkout at /20-more-yards-sale/checkout.
//   - STEP-DOWN ($297): Berman Clubhouse annual only. Reuses the existing
//                      /community/checkout/annual flow (no new form needed).
//
// Used by:
//   - /20-more-yards-sale           (sale page)
//   - /20-more-yards-sale/checkout  ($997 checkout page)
//
// TODO(BERMAN): Wire up the real $997 GHL checkout form once available — drop
// the ID into `checkoutForm` below and the checkout page swaps from the
// "coming soon" placeholder to the live embed automatically.

export interface DownsellOffer {
  name: string;
  // Headline price shown to the buyer (one-time, first year).
  price: string;
  priceNumeric: number;
  // What the price renews at after year one, and for what.
  renewalNote: string;
  // Step-down offer: Clubhouse annual only. Reuses the community checkout.
  clubhouseOnly: {
    price: string;
    priceNumeric: number;
    checkoutPath: string;
  };
  // GHL checkout form embed for the $997 bundle.
  checkoutForm: {
    src: string;
    id: string;
    formName: string;
    formId: string;
    // Natural form height from GHL's embed code (data-height), in px.
    height: number;
  };
}

export const twentyMoreYardsSale: DownsellOffer = {
  name: "Senior Golf Mastery + Clubhouse",
  price: "$997",
  priceNumeric: 997,
  renewalNote: "Includes a full year in the Berman Clubhouse. Renews at $297/year for the Clubhouse after year one — cancel anytime.",

  clubhouseOnly: {
    price: "$297",
    priceNumeric: 297,
    checkoutPath: "/community/checkout/annual",
  },

  // TODO(BERMAN): replace the src + formId below with the real $997 GHL form.
  // Leaving the REPLACE_WITH sentinel keeps the checkout placeholder visible.
  checkoutForm: {
    src: "https://link.physiofunnels.com/widget/form/REPLACE_WITH_997_FORM_ID",
    id: "inline-REPLACE_WITH_997_FORM_ID",
    formName: "(TM) Senior Golf Mastery + Clubhouse",
    formId: "REPLACE_WITH_997_FORM_ID",
    height: 1135,
  },
};
