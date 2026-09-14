// Single source of truth for the Senior Golf Mastery offer ($997).
//
// Used by:
//   - /senior-golf-mastery            (sales page)
//   - /senior-golf-mastery/checkout   (checkout page)
//   - /senior-golf-mastery/thank-you  (what-happens-next block)
//
// ── THE REPOSITION (decided Sept 11, 2026) ──────────────────────────
// This used to be a buy-it-and-watch-it course. It is now a **12-week
// program with support**, which is the post-challenge call to action for
// the Sept 30 + Oct 1 run — replacing the $2,997 cohort, which Jake isn't
// running again in Q4.
//
// Three things changed, and all three are delivery commitments, not copy:
//   1. A 12-week structure over the same course material.
//   2. A weekly swing-video upload that gets reviewed.
//   3. A live group call each month of the 12 weeks (3 total).
//
// ⚠️ #2 is the one that scales badly. 100 buyers = 1,200 video reviews.
// The live cohort was dropped for exactly this reason. If review capacity
// becomes the constraint, change `support.weeklyVideo` here AND the page
// copy together — do not quietly let the promise outrun the delivery.
//
// The course itself is still lifetime access. The SUPPORT is 12 weeks.
// Keep that distinction explicit everywhere it's sold: it's the difference
// between a clear offer and a refund.

export interface ValueLine {
  /** What the buyer gets. Shown verbatim in the stack. */
  label: string;
  /** Stacked value, e.g. "$1,200". Empty string = no price shown. */
  value: string;
  /** Numeric form of `value`, used to prove the total adds up. */
  amount: number;
}

export interface ProgramPhase {
  /** e.g. "Weeks 1–2" */
  weeks: string;
  title: string;
  body: string;
}

/**
 * The 12-week arc. This is the existing 5-module course laid over a
 * schedule — no new course material was promised on the Sept 11 call, and
 * none should be implied here.
 */
export const programPhases: ProgramPhase[] = [
  {
    weeks: "Weeks 1–2",
    title: "Quick Wins",
    body:
      "Fire up the muscles that stopped working. Most golfers feel a difference in the first session — this is the fastest part of the whole program.",
  },
  {
    weeks: "Weeks 3–6",
    title: "The Foundation",
    body:
      "Address through the top of your backswing. The most important stretch of the twelve weeks, and the one your video feedback will focus on hardest.",
  },
  {
    weeks: "Weeks 7–9",
    title: "Downswing & Impact",
    body:
      "Initiating with your belt buckle instead of your hands, and getting your weight where it belongs at impact.",
  },
  {
    weeks: "Weeks 10–12",
    title: "Release, Finish & Putting It Together",
    body:
      "Complete weight transfer, a real finish position, and translating the drills into swings you actually make on the course.",
  },
];

export const seniorGolfMastery = {
  name: "Senior Golf Mastery",
  path: "/senior-golf-mastery",
  checkoutPath: "/senior-golf-mastery/checkout",

  price: "$997",
  priceNumeric: 997,

  /** Program length. The support window, not the access window. */
  duration: "12 weeks",

  /**
   * Why it isn't a cohort: it starts the day they buy. This is the honest
   * upside of automated delivery and worth saying out loud — nobody waits
   * for a group to fill.
   */
  startsImmediately: true,

  support: {
    /** The weekly homework review. See the capacity warning at the top. */
    weeklyVideo: {
      label: "12 Weeks of Weekly Swing Video Feedback",
      short: "Upload a swing video each week, get it broken down",
      /** $100/week. Deliberately well under Jake's $500 live session rate —
       *  an async review is not a live session and shouldn't be priced as one. */
      value: "$1,200",
      amount: 1200,
    },
    /** 3 calls across the 12 weeks. Jake's note on the Sept 11 call was that
     *  this can be the monthly Clubhouse call he already runs, not a new one. */
    groupCalls: {
      label: "3 Live Group Coaching Calls With Dr. Jake",
      short: "One live call each month of your 12 weeks",
      count: 3,
      /** Anchored to the published Clubhouse price ($47/mo x 3) so this can
       *  never contradict /community sitting one click away. */
      value: "$141",
      amount: 141,
    },
  },

  /**
   * The value stack, exactly as it appears on the page.
   *
   * SOURCE OF TRUTH for the strike-through number. `totalValue` below is
   * asserted against the sum of these lines at module load — if you add a
   * line without updating the total (or vice versa), the build throws
   * instead of shipping a stack that doesn't add up.
   */
  valueStack: [
    { label: "Senior Golf Mastery — the complete 7-step system", value: "$1,997", amount: 1997 },
    { label: "12 Weeks of Weekly Swing Video Feedback", value: "$1,200", amount: 1200 },
    { label: "1-on-1 Virtual Session with Dr. Jake", value: "$500", amount: 500 },
    { label: "3 Live Group Coaching Calls With Dr. Jake", value: "$141", amount: 141 },
    { label: "Weekly Workout Videos", value: "$197", amount: 197 },
    { label: "Senior Golf Mastery PDF Book", value: "$97", amount: 97 },
    { label: "Pre-Shot Routine", value: "$97", amount: 97 },
    { label: "Weight Shift Hack for Seniors", value: "$97", amount: 97 },
    { label: "Golf Gear Guide for Seniors", value: "$47", amount: 47 },
  ] satisfies ValueLine[],

  totalValue: "$4,373",
  totalValueNumeric: 4373,

  savings: "$3,376",
} as const;

/**
 * The stack has to sum to the strike-through price or the offer reads as
 * made up. This is the guard — it runs at import, so a mismatch fails the
 * build rather than going live.
 */
const stackSum = seniorGolfMastery.valueStack.reduce((n, line) => n + line.amount, 0);
if (stackSum !== seniorGolfMastery.totalValueNumeric) {
  throw new Error(
    `Senior Golf Mastery value stack doesn't add up: lines total ${stackSum}, ` +
      `totalValue says ${seniorGolfMastery.totalValueNumeric}. Fix one or the other.`,
  );
}

if (
  seniorGolfMastery.totalValueNumeric - seniorGolfMastery.priceNumeric !==
  Number(seniorGolfMastery.savings.replace(/[^0-9]/g, ""))
) {
  throw new Error("Senior Golf Mastery `savings` doesn't match totalValue minus price.");
}
