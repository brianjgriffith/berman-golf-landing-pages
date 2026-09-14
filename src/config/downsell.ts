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
//
// ⚠️ OFFER CONFLICT — UNRESOLVED (flagged Sept 14, 2026)
// There are now TWO different $997 offers on this site:
//
//   /senior-golf-mastery   $997 = 12-week program, weekly swing-video
//                          feedback from Jake, 3 group calls. Repositioned
//                          Sept 14 and is the post-challenge CTA for the
//                          Sept 30 + Oct 1 run.
//   /20-more-yards-sale    $997 = the course + 1 year of Clubhouse,
//                          explicitly sold as "self-paced... no fixed
//                          12-week clock" (see the FAQ on that page).
//
// Same price, contradictory promises. This page isn't linked from anywhere
// in the site, but the route is live and August's emails point at it, so
// somebody can still land on it and read the opposite pitch.
//
// Needs a decision before Track D goes out (D3, Fri Oct 2): retire this
// page, re-price it, or fold the Clubhouse year into the main $997. Don't
// drive traffic here in the meantime.

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

  checkoutForm: {
    src: "https://link.physiofunnels.com/widget/form/e7HaJyrtlmofNOCv6wTE",
    id: "inline-e7HaJyrtlmofNOCv6wTE",
    formName: "(TM) Senior Golf Mastery",
    formId: "e7HaJyrtlmofNOCv6wTE",
    height: 1138,
  },
};
