import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import JakeQuote from "@/components/JakeQuote";
import { seniorGolfMasteryCohort as cohort } from "@/config/cohort";

export const metadata: Metadata = {
  title: "Senior Golf Mastery Cohort | 12 Weeks with Dr. Jake Berman",
  description:
    "A 12-week coaching cohort with Dr. Jake Berman: six weeks of live Zoom coaching, then six weeks on the range with Jake reviewing your video every week. Includes the complete Senior Golf Mastery course, all bonuses, and a full year in the Berman Clubhouse.",
  openGraph: {
    title: "Senior Golf Mastery Cohort | 12 Weeks with Dr. Jake",
    description:
      "Not just a course — six weeks of live coaching, then six weeks taking it to the range with Jake critiquing your swing every week. Plus the full course, bonuses, and a year in the Berman Clubhouse.",
    type: "website",
  },
};

// Small reusable check icon (orange) in the poster palette.
function Check() {
  return (
    <svg
      className="w-5 h-5 text-[#F26B4E] mt-0.5 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Small rotated "N left" badge that sits on the corner of a CTA button.
// Renders nothing once seats are gone (cohort.slotsLeft === 0).
function SlotSticker() {
  if (cohort.slotsLeft <= 0) return null;
  return (
    <span className="absolute -top-3 -right-3 rotate-12 bg-[#1a365d] text-[#f5ede0] text-[11px] font-black uppercase tracking-wide leading-none px-2.5 py-1.5 rounded-full border-2 border-[#f5ede0] shadow-[0_4px_12px_rgba(26,54,93,0.45)]">
      {cohort.slotsLeft} left
    </span>
  );
}

const cohortQuote = (
  <>
    &ldquo;Six weeks to learn it. Six weeks to prove it on the range. We don&apos;t guess &mdash;{" "}
    <span className="text-[#F26B4E]">we fix it together</span>.&rdquo;
  </>
);

export default function SeniorGolfMasteryCohortPage() {
  return (
    <main className="min-h-screen bg-[#f5ede0] text-[#1a365d]">
      <Header />

      {/* ===== SLOTS-LEFT BAR ===== */}
      {/* The top padding clears the fixed poster header (~64/68px) and sits hidden
          behind it, so only the orange strip shows. Disappears when slotsLeft is 0. */}
      {cohort.slotsLeft > 0 && (
        <div className="pt-16 md:pt-[68px] bg-[#F26B4E] text-white">
          <div className="max-w-7xl mx-auto px-4 py-2.5 text-center">
            <p className="text-[11px] sm:text-sm font-bold uppercase tracking-[0.15em] leading-snug">
              <span aria-hidden>&#9203;</span> Only {cohort.slotsLeft} slots left &mdash;
              enrollment closes {cohort.enrollDeadline}
            </p>
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
      <section
        className={`relative ${
          cohort.slotsLeft > 0 ? "pt-12" : "pt-24"
        } pb-16 md:pb-20 overflow-hidden bg-[#f5ede0]`}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
            <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
              12-Week Coaching Cohort
            </p>
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: typography */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-[#1a365d] mb-6">
                Senior Golf
                <br />
                Mastery <span className="text-[#F26B4E]">Cohort.</span>
              </h1>

              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1a365d] mb-4 leading-tight max-w-xl">
                Twelve weeks. Coached by Dr. Jake Berman.
              </p>

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/75 mb-8 leading-relaxed max-w-xl">
                This isn&apos;t a course you watch alone. Six weeks of live Zoom coaching in a small
                group with Jake &mdash; then six more weeks taking it to the range, with Jake reviewing
                your swing on video every week. Plus the full course, every bonus, and a year inside the
                Berman Clubhouse.
              </p>

              {/* Heavy rule */}
              <div className="h-[3px] bg-[#1a365d] mb-8 w-32" />

              {/* Detail strip */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-lg">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a365d]/60 mb-1">
                    Length
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#1a365d] leading-tight">
                    {cohort.schedule.duration}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a365d]/60 mb-1">
                    Format
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#1a365d] leading-tight">
                    Live on Zoom
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a365d]/60 mb-1">
                    Investment
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#1a365d] leading-tight">
                    {cohort.price}
                  </p>
                </div>
              </div>

              <a
                href="/senior-golf-mastery-cohort/checkout"
                className="relative inline-block bg-[#F26B4E] text-white px-10 sm:px-12 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.35)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <SlotSticker />
                Claim Your Spot &rarr;
              </a>

              <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
                {cohort.schedule.startLabel} &middot; Limited seats
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#F26B4E]">
                Enrollment closes {cohort.enrollDeadline}
              </p>
            </div>

            {/* Right: Polaroid */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] mx-auto">
                <div className="absolute top-[2%] left-[2%] sm:left-[-4%] lg:left-[-8%] w-[60%] origin-top-left rotate-[6deg] bg-white p-2.5 shadow-[0_18px_45px_rgba(26,54,93,0.22)]">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1a365d]/10">
                    <Image
                      src="/jake-coaching.png"
                      alt="Dr. Jake Berman coaching a senior golfer"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 180px"
                    />
                  </div>
                  <div className="pt-2 pb-1 text-center">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/70">
                      Live Coaching
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 sm:right-[-2%] w-[78%] origin-bottom-right -rotate-[3deg] bg-white p-3 shadow-[0_30px_80px_rgba(26,54,93,0.3)]">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1a365d]/10">
                    <Image
                      src="/jake-solo.png"
                      alt="Dr. Jake Berman, PT, DPT"
                      fill
                      className="object-cover"
                      priority
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 260px"
                    />
                  </div>
                  <div className="pt-3 pb-1.5 text-center border-t border-[#1a365d]/10 mt-2">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#1a365d]">
                      Dr. Jake Berman
                    </p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1a365d]/60 mt-1.5">
                      PT, DPT &middot; Your Coach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COURSE vs COHORT ===== */}
      <section className="py-16 md:py-20 bg-[#1a365d] text-[#f5ede0]">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#f5ede0]/60 mb-4">
            The Difference
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-center mb-4 leading-tight">
            A course teaches you. <br className="hidden md:block" />A cohort{" "}
            <span className="text-[#F26B4E]">changes you.</span>
          </h2>
          <p className="font-serif text-center text-[#f5ede0]/75 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            You can watch videos on your own and hope it clicks. Or you can do the work with Jake in the
            room &mdash; getting your swing seen, your questions answered, and your sticking points fixed
            in real time.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Just a course */}
            <div className="border-2 border-[#f5ede0]/25 p-6 md:p-8">
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#f5ede0]/70 mb-5">
                On Your Own
              </h3>
              <ul className="space-y-3 font-serif text-[#f5ede0]/70">
                {[
                  "Watch the videos whenever — or never",
                  "Guess whether you're doing it right",
                  "Hit a wall with no one to ask",
                  "Easy to start, easy to quit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#f5ede0]/40 mt-0.5">&times;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The cohort */}
            <div className="border-2 border-[#F26B4E] p-6 md:p-8 bg-[#F26B4E]/10">
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#F26B4E] mb-5">
                In the Cohort
              </h3>
              <ul className="space-y-3 font-serif text-[#f5ede0]">
                {[
                  "Six weeks of live Zoom calls with Dr. Jake",
                  "Six more weeks of range video, critiqued by Jake",
                  "Ask anything — answered on the call",
                  "A group keeping you accountable for 12 weeks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-20 bg-[#f5ede0]">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]/60 mb-4">
            How the 12 Weeks Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-center text-[#1a365d] mb-3 leading-tight">
            Twelve weeks. Two phases. <br className="hidden md:block" />One clear path.
          </h2>
          <p className="font-serif italic text-center text-[#1a365d]/70 max-w-2xl mx-auto mb-8 text-lg">
            Weeks 1&ndash;6 are live on Zoom &mdash; {cohort.schedule.callDay}. Weeks 7&ndash;12 you take
            it to the range, and Jake gets eyes on your swing every single week.
          </p>

          {/* The six live call dates */}
          <div className="max-w-2xl mx-auto mb-12 bg-white border-2 border-[#1a365d] shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
            <p className="text-center text-[11px] font-bold tracking-[0.3em] uppercase text-[#f5ede0] bg-[#1a365d] py-2">
              Weeks 1&ndash;6 &middot; Your 6 Live Call Dates &middot; {cohort.schedule.time}
            </p>
            <ol className="divide-y divide-[#1a365d]/10">
              {cohort.schedule.sessions.map((date, i) => (
                <li key={date} className="flex items-center gap-4 px-5 sm:px-8 py-3">
                  <span className="font-display text-lg font-black text-[#F26B4E] w-8 flex-none">
                    {i + 1}
                  </span>
                  <span className="font-serif text-[15px] sm:text-base font-bold text-[#1a365d]">
                    {date}
                  </span>
                  <span className="ml-auto font-serif text-sm text-[#1a365d]/60">
                    {cohort.schedule.time}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                week: "Weeks 1–2",
                phase: "Live on Zoom",
                title: "Quick Wins & Foundation",
                body:
                  "Fire up the right muscles for instant gains, then lock in your address-to-top-of-backswing — the most important piece.",
              },
              {
                week: "Weeks 3–4",
                phase: "Live on Zoom",
                title: "Downswing & Impact",
                body:
                  "Initiate from your belt buckle, not your hands. Build the sequence that turns rotation into real clubhead speed.",
              },
              {
                week: "Weeks 5–6",
                phase: "Live on Zoom",
                title: "Release & Full Swing",
                body:
                  "Lock in release and finish, then put all seven steps together into one repeatable swing you don't have to think about.",
              },
              {
                week: "Weeks 7–12",
                phase: "On the range",
                title: "Take It to the Ball",
                body:
                  "Now you hit balls. Film your range session each week and upload it — Jake tells you exactly what to fix before you go back out. This is where it sticks.",
                highlight: true,
              },
            ].map((card) => (
              <div
                key={card.week}
                className={`p-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)] ${
                  card.highlight
                    ? "bg-[#1a365d] border-2 border-[#1a365d] text-[#f5ede0]"
                    : "bg-white border-2 border-[#1a365d]"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26B4E] mb-1">
                  {card.week}
                </p>
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${
                    card.highlight ? "text-[#f5ede0]/50" : "text-[#1a365d]/50"
                  }`}
                >
                  {card.phase}
                </p>
                <h3
                  className={`font-display text-xl font-black uppercase tracking-tight mb-2 ${
                    card.highlight ? "text-[#f5ede0]" : "text-[#1a365d]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-serif leading-relaxed text-[15px] ${
                    card.highlight ? "text-[#f5ede0]/80" : "text-[#1a365d]/75"
                  }`}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 font-serif text-[#1a365d]/70">
            Can&apos;t make a call live? Every session is recorded so you never fall behind.
          </p>
        </div>
      </section>

      {/* ===== INSTRUCTOR (reused poster component) ===== */}
      <Instructor variant="poster" />

      {/* ===== WHAT'S INCLUDED / VALUE STACK ===== */}
      <section className="py-16 md:py-20 bg-[#1a365d] text-[#f5ede0]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#f5ede0]/60 mb-4">
            Everything You Get
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-center mb-3 leading-tight">
            One enrollment. <span className="text-[#F26B4E]">Everything included.</span>
          </h2>
          <p className="font-serif text-center text-[#f5ede0]/75 mb-12 text-lg">
            Total value:{" "}
            <span className="font-bold text-[#f5ede0] line-through decoration-[#F26B4E]/70">
              {cohort.totalValue}
            </span>
          </p>

          <div className="space-y-5">
            {/* Headline: phase 1 — the live cohort */}
            <div className="bg-[#F26B4E]/15 border-2 border-[#F26B4E] p-6 md:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-[#F26B4E] text-white text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded">
                  Phase 1
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#F26B4E]">
                  Weeks 1&ndash;6: Live Coaching with Dr. Jake
                </h3>
                <span className="font-bold text-[#f5ede0]/70 text-sm whitespace-nowrap">
                  $5,000 Value
                </span>
              </div>
              <p className="font-serif text-[#f5ede0]/85 leading-relaxed">
                Six weekly small-group Zoom calls where Jake coaches you through every step, reviews your
                swing, and answers your questions live. This is where your body learns the movement.
              </p>
            </div>

            {/* Headline: phase 2 — range implementation (replaces the old 30-day critique bonus) */}
            <div className="bg-[#F26B4E]/15 border-2 border-[#F26B4E] p-6 md:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-[#F26B4E] text-white text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded">
                  Phase 2
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#F26B4E]">
                  Weeks 7&ndash;12: Range Video Critiques
                </h3>
                <span className="font-bold text-[#f5ede0]/70 text-sm whitespace-nowrap">
                  $3,000 Value
                </span>
              </div>
              <p className="font-serif text-[#f5ede0]/85 leading-relaxed">
                Learning it in the living room isn&apos;t the same as owning it on the course. For six
                more weeks you take it to the range, film your session, and upload it &mdash; and Jake
                sends back exactly what to fix before you go back out. Every week, until it clicks.
              </p>
            </div>

            {/* The course + the vault, priced as one library.
                The $14,391 and its five sub-values come straight off Jake's
                "Bonus: The Senior Golf Vault" slide -- 397 + 500 + 997 + 497 +
                12,000. Change one, change the header. */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  The Complete Senior Golf Video Library
                </h3>
                <span className="font-bold text-[#f5ede0]/60 text-sm whitespace-nowrap">$14,391 Value</span>
              </div>
              <p className="font-serif text-[#f5ede0]/80 mb-4 leading-relaxed">
                The full Senior Golf Mastery course &mdash; every module, start to finish:
              </p>
              <ul className="space-y-2.5 font-serif text-[#f5ede0]/80">
                {[
                  "Module 1: Quick Wins — fire up the right muscles for immediate gains",
                  "Module 2: The Foundation (Steps 1–3) — address to top of backswing",
                  "Module 3: Downswing & Impact (Steps 4–5)",
                  "Module 4: Release & Finish (Steps 6–7)",
                  "Module 5: Put It All Together — drills into real swings",
                  "Lifetime access to all course material",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-serif text-[#f5ede0]/80 mt-6 mb-4 leading-relaxed">
                Plus the entire vault &mdash; everything Jake has ever taught, all in one place:
              </p>
              <ul className="space-y-2.5 font-serif text-[#f5ede0]/80">
                {[
                  ["Tee Shot Transformation", "$397"],
                  ["Every Previous 30-Day Challenge", "$500"],
                  ["The Senior Golf Training Video Archive", "$997"],
                  ["Drills & Practice Sessions", "$497"],
                  ["Every Previous Coaching Call & Recording", "$12,000"],
                ].map(([item, value]) => (
                  <li key={item} className="flex items-start justify-between gap-4">
                    <span className="flex items-start gap-3">
                      <Check />
                      <span>{item}</span>
                    </span>
                    <span className="font-bold text-[#f5ede0]/50 text-sm whitespace-nowrap">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personalized swing analysis */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  Personalized Swing Roadmap
                </h3>
                <span className="font-bold text-[#f5ede0]/60 text-sm whitespace-nowrap">$500 Value</span>
              </div>
              <p className="font-serif text-[#f5ede0]/80 leading-relaxed">
                Jake personally breaks down your swing on video and tells you exactly what&apos;s costing
                you yards &mdash; and the first thing to fix. No more guessing what&apos;s wrong.
              </p>
            </div>

            {/* Clubhouse membership */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  12 Months in the Berman Clubhouse
                </h3>
                <span className="font-bold text-[#f5ede0]/60 text-sm whitespace-nowrap">$564 Value</span>
              </div>
              <p className="font-serif text-[#f5ede0]/80 mb-4 leading-relaxed">
                When the 12 weeks end, your progress doesn&apos;t. Stay coached all year long:
              </p>
              <ul className="space-y-2.5 font-serif text-[#f5ede0]/80">
                {[
                  "Monthly live group coaching calls with Jake's team",
                  "Private community of senior golfers on the same journey",
                  "Ongoing Q&A and direct access for your questions",
                  "Keep your full video library access all year long",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifetime access to future updates */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  Lifetime Access to Future Program Updates
                </h3>
                <span className="font-bold text-[#F26B4E] text-sm whitespace-nowrap uppercase tracking-[0.15em]">
                  Included
                </span>
              </div>
              <p className="font-serif text-[#f5ede0]/80 leading-relaxed">
                Every time Jake adds to or improves the program &mdash; new modules, new drills, new
                material &mdash; it&apos;s yours automatically, free, for life. Enroll once, keep getting more.
              </p>
            </div>

            {/* Bonuses */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  Plus Every Bonus
                </h3>
                <span className="font-bold text-[#F26B4E] text-sm whitespace-nowrap uppercase tracking-[0.15em]">
                  Included
                </span>
              </div>
              <ul className="space-y-2.5 font-serif text-[#f5ede0]/80">
                {[
                  "Senior Golf Mastery PDF Book",
                  "Pre-Shot Routine Guide",
                  "Weight Shift Hack for Seniors",
                  "Weekly Workout Videos",
                  "Golf Gear Guide for Seniors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price block */}
          <div className="text-center mt-12">
            <p className="font-serif text-[#f5ede0]/70 mb-1">
              Total value:{" "}
              <span className="line-through decoration-[#F26B4E]/70">{cohort.totalValue}</span>
            </p>
            <p className="font-display text-5xl md:text-6xl font-black text-[#f5ede0] mb-2">
              {cohort.price}
            </p>
            <p className="font-serif italic text-[#f5ede0]/70 mb-8">
              One-time enrollment. Everything above included.
            </p>
            <a
              href="/senior-golf-mastery-cohort/checkout"
              className="inline-block bg-[#F26B4E] text-white px-10 sm:px-14 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.4)] hover:-translate-y-0.5 transition-all"
            >
              Enroll in the Cohort &rarr;
            </a>
            <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#f5ede0]/70">
              Enrollment closes {cohort.enrollDeadline}
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (reused poster component) ===== */}
      {/*
        Virtual-session students added for the cohort page (these did it over Zoom,
        like cohort members will). TODO(BERMAN): add quote text for each.
      */}
      <Testimonials
        eyebrow="Real Senior Golfers. Real Results."
        title="They stopped guessing. So can you."
        subtitle="Results from golfers who did the work with Jake instead of going it alone."
        variant="poster"
        extraTestimonials={[
          {
            name: "Jerry",
            location: "Virtual Coaching Student",
            videoId: "esVtVa4MbPQ",
          },
          {
            name: "Antonio",
            location: "Virtual Coaching Student",
            videoId: "-gCL2Gw48GU",
          },
          {
            name: "Perry",
            location: "Virtual Coaching Student",
            videoId: "n-yNUxO1fGM",
          },
        ]}
      />

      {/* ===== WHO THIS IS FOR (cohort-specific) ===== */}
      <section className="py-16 md:py-20 bg-[#f5ede0]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-black text-center text-[#1a365d] mb-12 leading-tight">
            Is the cohort right for you?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#1a365d] p-6 md:p-8">
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d] mb-5">
                This is for you if…
              </h3>
              <ul className="space-y-3 font-serif text-[#1a365d]/80">
                {[
                  "You're a senior golfer serious about adding real distance",
                  "You learn best with live feedback, not just videos",
                  "You'll show up to six weekly calls — then film your range sessions for six more",
                  "You want a coach in your corner, not another course gathering dust",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-[#1a365d]/30 p-6 md:p-8">
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d]/60 mb-5">
                This is NOT for you if…
              </h3>
              <ul className="space-y-3 font-serif text-[#1a365d]/60">
                {[
                  "You just want a cheap video course to watch on your own",
                  "You're looking for a quick swing-tip, not a real change",
                  "You can't commit any time over the next 12 weeks",
                  "You're not willing to film yourself hitting balls and take the feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1a365d]/30 mt-0.5">&times;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JAKE QUOTE (reused poster component) ===== */}
      <JakeQuote quote={cohortQuote} variant="poster" />

      {/* ===== GUARANTEE ===== */}
      <section className="py-16 md:py-20 bg-[#f5ede0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border-2 border-[#1a365d] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
            <Image
              src="/guarantee-badge.png"
              alt="100% Money-Back Guarantee"
              width={110}
              height={110}
              className="object-contain shrink-0"
            />
            <div>
              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[#1a365d] mb-2">
                Show Up &amp; You&apos;re Covered
              </h3>
              <p className="font-serif text-[#1a365d]/80 leading-relaxed">
                Come to the calls, do the drills, send in your range video &mdash; and if you don&apos;t
                see real progress, we don&apos;t want your money. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (cohort-specific, inline) ===== */}
      <section className="py-16 md:py-20 bg-[#1a365d] text-[#f5ede0]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-black text-center mb-12 leading-tight">
            Questions, answered.
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "How is this different from the Senior Golf Mastery course?",
                a: "You get the full course — but the cohort is the live, coached version. Instead of watching alone, you spend six weeks on weekly Zoom calls with Dr. Jake, getting your swing seen and your questions answered in real time — then six more weeks taking it to the range while Jake critiques your video every week. You also get a full year in the Berman Clubhouse.",
              },
              {
                q: "Why is it 12 weeks and not 6?",
                a: "Because learning the movement and owning it on the course are two different things. The first six weeks train your body to move correctly — indoors, without a ball, which is where the real work happens. The last six weeks are where you take it to the range, hit real shots, and Jake reviews your video every week. Six weeks gets it into your body. Twelve gets it into your golf.",
              },
              {
                q: "When are the live calls?",
                a: `The six live calls run in weeks 1–6: ${cohort.schedule.callDay}. ${cohort.schedule.startLabel}. Every call is recorded, so if you ever miss one live, you can catch up and still ask questions. Weeks 7–12 have no scheduled calls — you film your range sessions on your own time and Jake sends back his critique.`,
              },
              {
                q: "What do I have to send in during weeks 7–12?",
                a: "One video of you hitting balls at the range each week. Phone on a stand, a few swings, upload it. Jake reviews it and tells you exactly what to fix before your next session. No special equipment, no editing — just your phone.",
              },
              {
                q: "What if I can't attend every week?",
                a: "No problem. Every session is recorded and posted, and the Berman Clubhouse keeps you supported all year. Showing up live is best — but you won't fall behind.",
              },
              {
                q: "Do I need to be fit or flexible already?",
                a: "No. Dr. Jake is a physical therapist first — the whole approach is built around what your body can do now, and meeting you where you are.",
              },
              {
                q: "Is the $2,997 a one-time payment?",
                a: "Yes — one enrollment covers the full 12-week cohort, the complete course and all bonuses, and a full year in the Berman Clubhouse.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-[#f5ede0]/20 p-6">
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-[#f5ede0] mb-2">
                  {faq.q}
                </h3>
                <p className="font-serif text-[#f5ede0]/75 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24 bg-[#f5ede0] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-[3px] bg-[#1a365d] mb-8 w-32 mx-auto" />
          <h2 className="font-display text-4xl md:text-6xl font-black text-[#1a365d] mb-6 leading-[0.95]">
            Spend the next 12 weeks getting better.
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#1a365d]/75 mb-10 leading-relaxed">
            Not watching videos. Not guessing. Six weeks learning it live with Dr. Jake, then six weeks
            proving it on the range with him watching every swing.
          </p>
          <a
            href="/senior-golf-mastery-cohort/checkout"
            className="relative inline-block bg-[#F26B4E] text-white px-12 sm:px-16 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.4)] hover:-translate-y-0.5 transition-all"
          >
            <SlotSticker />
            Claim Your Spot &mdash; {cohort.price} &rarr;
          </a>
          <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
            Limited seats &middot; {cohort.schedule.startLabel}
          </p>
          <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#F26B4E]">
            Enrollment closes {cohort.enrollDeadline}
          </p>
        </div>
      </section>

      <Footer variant="poster" />
    </main>
  );
}
