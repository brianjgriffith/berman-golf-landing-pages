// Single source of truth for the Senior Golf Mastery MEMBERSHIP
// ($199/mo or $1,997/yr) — the offer Jake pitches at the end of Day 2 of the
// Sept 30 + Oct 1, 2026 challenge.
//
// Used by:
//   - /mastery                          (sales page)
//   - /mastery/checkout/monthly|annual  (checkout pages)
//   - /mastery/thank-you                (post-purchase)
//   - /20-more-yards/replay             (post-challenge CTA)
//
// ── WHAT THIS IS (decided Sept 29, 2026) ─────────────────────────────
// The Senior Golf Mastery curriculum + everything in the Berman Clubhouse,
// sold as one membership. Annual buyers also get a 1-on-1 with Jake.
// Source of truth for the plan contents is Jake's "Choose Your Plan" slide
// — the six inclusions below are the slide's lines, word for word.
//
// It supersedes the $997 12-week program (/senior-golf-mastery) as the
// post-challenge CTA. That page is still live and still sells the $997;
// decide whether to retire it before Track D emails go out.
//
// It is a MEMBERSHIP, not a one-time purchase: access runs while the
// membership is active. That's the opposite of the $997's "lifetime access"
// line — don't borrow copy from that page without checking this.

export interface MasteryPlan {
  key: "monthly" | "annual";
  label: string;
  price: string;
  priceNumeric: number;
  cadence: string;
  checkoutPath: string;
  /** Small line under the price. */
  note: string;
  /**
   * GHL checkout form embed. Leave `formId` empty until the form exists —
   * the checkout page shows a "checkout opens shortly" panel instead of a
   * dead iframe, and swaps to the live embed as soon as this is filled in.
   */
  checkoutForm: {
    formId: string;
    formName: string;
    /** Natural form height from GHL's embed code (data-height), in px. */
    height: number;
  };
}

export const masteryMembership = {
  name: "Senior Golf Mastery",
  path: "/mastery",
  thankYouPath: "/mastery/thank-you",

  monthly: {
    key: "monthly",
    label: "Monthly",
    price: "$199",
    priceNumeric: 199,
    cadence: "/month",
    checkoutPath: "/mastery/checkout/monthly",
    note: "Cancel anytime",
    // Live GHL form, added Sept 29, 2026.
    checkoutForm: { formId: "zFBlxdSDoahYKqmbQyAd", formName: "(TM) SGM - Monthly", height: 1100 },
  } satisfies MasteryPlan,

  annual: {
    key: "annual",
    label: "Annual",
    price: "$1,997",
    priceNumeric: 1997,
    cadence: "/year",
    checkoutPath: "/mastery/checkout/annual",
    // No 1-on-1 here on purpose — the bonus expires (see `annualBonus`).
    // Use annualNote() where the line should mention it while it's live.
    note: "Best value — save $391",
    // Live GHL form, added Sept 29, 2026. The trailing space in the name is
    // how it's saved in GHL — kept so the embed matches exactly.
    checkoutForm: { formId: "rLmDnK5rkUg6j1lRMvep", formName: "(TM) SGM - Annual ", height: 1082 },
  } satisfies MasteryPlan,

  /** Twelve months on the monthly plan — the annual strike-through. */
  annualCompareAt: "$2,388",
  annualCompareAtNumeric: 2388,
  annualSavings: "$391",

  /**
   * Annual-only bonus, per the slide. The monthly plan does NOT include it.
   * TODO(BERMAN): confirm how annual buyers book this (link in the welcome
   * email? Calendly?) — the thank-you page promises an email about it.
   *
   * ⏰ TIME-BOXED (decided Oct 1, 2026). The post-challenge emails close on
   * "the free 1-on-1 comes with annual through Wed Oct 7 at midnight ET" —
   * the membership itself never closes, so this is the real deadline. After
   * `endsAt` the bonus is genuinely gone: every page that shows it checks
   * annualBonusLive() per request and drops it on its own, no deploy. That's
   * what keeps the deadline honest — if the bonus were still on the page on
   * Oct 8, the emails would have been fake urgency. To run it again, move
   * `endsAt` + `endsLabel` together (and tell the email side).
   */
  annualBonus: {
    label: "A Free 1-on-1 Session with Dr. Jake",
    value: "$500",
    // Thu Oct 8, 12:00 AM ET (EDT = UTC-4) = end of Wed Oct 7.
    endsAt: new Date("2026-10-08T04:00:00Z"),
    endsLabel: "Wednesday, October 7 at midnight ET",
  },

  /**
   * The six inclusions, identical on both plans. `label` is the slide's line;
   * `body` is the plain-English version used on the sales page.
   */
  includes: [
    {
      label: "Complete Senior Golf Mastery curriculum",
      body:
        "The full 7-step Berman Method, Address to Finish, across all five modules. Train from home in 30–45 minutes — no clubs, no range required.",
    },
    {
      label: "Monthly group coaching",
      body:
        "Once a month Dr. Jake goes live on Zoom. Bring your questions, watch him work through other senior golfers' swings. Recorded if you can't make it.",
    },
    {
      label: "Access to Dr. Jake",
      body:
        "Post your swing video and get it broken down. Members' questions go to the front of the line.",
    },
    {
      label: "Practice plans & progress tracking",
      body:
        "Know exactly what to work on each week, and see the progress instead of guessing at it.",
    },
    {
      label: "Training library & challenges",
      body:
        "Every 30-day challenge Jake runs, plus Tee Shot Transformation — a full course we sell on its own for $397.",
    },
    {
      label: "Senior golf community",
      body:
        "The private Berman Clubhouse. Senior golfers on the same journey, sharing wins and asking questions — with Jake's team in there every day.",
    },
  ],
} as const;

/** True while the annual 1-on-1 bonus is still on offer. Check per request. */
export function annualBonusLive(now: number = Date.now()): boolean {
  return now < masteryMembership.annualBonus.endsAt.getTime();
}

/** The annual plan's short note — mentions the 1-on-1 only while it's live. */
export function annualNote(now: number = Date.now()): string {
  return annualBonusLive(now)
    ? "Best value — includes a 1-on-1 with Dr. Jake"
    : masteryMembership.annual.note;
}

// The annual strike-through and savings are arithmetic, not marketing.
// If a price changes, the build fails until all three numbers agree.
if (masteryMembership.monthly.priceNumeric * 12 !== masteryMembership.annualCompareAtNumeric) {
  throw new Error("Mastery membership: annualCompareAt must equal 12x the monthly price.");
}
if (
  masteryMembership.annualCompareAtNumeric - masteryMembership.annual.priceNumeric !==
  Number(masteryMembership.annualSavings.replace(/[^0-9]/g, ""))
) {
  throw new Error("Mastery membership: annualSavings doesn't match compareAt minus annual price.");
}
