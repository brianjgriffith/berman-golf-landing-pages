// Single source of truth for the Berman Clubhouse membership offer.
//
// Used by:
//   - /community                          (sales page)
//   - /community/checkout/monthly|annual  (checkout pages)
//   - <ClubhouseOffer />                  (the soft-sell block on free opt-in
//                                          thank-you pages)
//
// The Clubhouse is now the FIRST paid step in the funnel: every free opt-in
// (book, warm-up, challenge waitlist) offers it on the thank-you page. Keep
// the copy welcoming to brand-new people — this is no longer a
// graduates-only offer.

export interface ClubhousePlan {
  label: string;
  price: string;
  cadence: string;
  checkoutPath: string;
  /** Small line under the price, e.g. "Cancel anytime". */
  note: string;
}

export const clubhouse = {
  name: "Berman Clubhouse",
  path: "/community",

  // Same artwork the /community page leads with — reused in the thank-you
  // page offer blocks so the Clubhouse looks like one recognizable thing
  // everywhere it's sold. 1280x720.
  image: "/berman-clubhouse.png",

  monthly: {
    label: "Monthly",
    price: "$47",
    cadence: "/month",
    checkoutPath: "/community/checkout/monthly",
    note: "Cancel anytime",
  } satisfies ClubhousePlan,

  annual: {
    label: "Annual",
    price: "$297",
    cadence: "/year",
    checkoutPath: "/community/checkout/annual",
    note: "Just $24.75/month",
  } satisfies ClubhousePlan,

  // $47 x 12 = $564, minus $297. Don't change one without the other.
  annualSavings: "$267",

  // The bonus course bundled with every membership.
  bonus: {
    name: "Tee Shot Transformation",
    value: "$397",
  },

  // What a member gets. Kept in one place so the sales page, the checkout
  // pages and the thank-you soft-sell never drift apart.
  includes: [
    "Private virtual Clubhouse with senior golfers on the same journey",
    "Monthly live coaching call with Dr. Jake (recorded if you miss it)",
    "Post your swing video and get it broken down",
    "Priority support — your questions go to the front of the line",
    "Every 30-day challenge Jake runs, included",
    "Tee Shot Transformation ($397 course) free while you're a member",
  ],
} as const;
