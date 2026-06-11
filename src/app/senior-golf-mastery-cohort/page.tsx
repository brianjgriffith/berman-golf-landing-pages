import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import JakeQuote from "@/components/JakeQuote";
import { seniorGolfMasteryCohort as cohort } from "@/config/cohort";

export const metadata: Metadata = {
  title: "Senior Golf Mastery Cohort | 6 Weeks Live with Dr. Jake Berman",
  description:
    "A 6-week live coaching cohort with Dr. Jake Berman over Zoom. Get the complete Senior Golf Mastery course, all bonuses, and a full year in the Berman Clubhouse.",
  openGraph: {
    title: "Senior Golf Mastery Cohort | 6 Weeks Live with Dr. Jake",
    description:
      "Not just a course — six weeks of live coaching with Dr. Jake, plus the full course, bonuses, and a year in the Berman Clubhouse.",
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

const cohortQuote = (
  <>
    &ldquo;Six weeks. Me, in the room with you, every week. We don&apos;t guess &mdash;{" "}
    <span className="text-[#F26B4E]">we fix it together</span>.&rdquo;
  </>
);

export default function SeniorGolfMasteryCohortPage() {
  return (
    <main className="min-h-screen bg-[#f5ede0] text-[#1a365d]">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-16 md:pb-20 overflow-hidden bg-[#f5ede0]">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
            <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
              6-Week Live Cohort
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
                Six weeks. Live with Dr. Jake Berman.
              </p>

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/75 mb-8 leading-relaxed max-w-xl">
                This isn&apos;t a course you watch alone. It&apos;s a small group, coached live over Zoom
                every week &mdash; with the full course, every bonus, and a year inside the Berman
                Clubhouse.
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
                className="inline-block bg-[#F26B4E] text-white px-10 sm:px-12 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.35)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.5)] hover:-translate-y-0.5 transition-all"
              >
                Claim Your Spot &rarr;
              </a>

              <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
                {/* TODO(BERMAN): confirm cohort start once dates are set */}
                {cohort.schedule.startLabel} &middot; Limited seats
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
                  "Live weekly Zoom calls with Dr. Jake",
                  "Your swing seen and corrected directly",
                  "Ask anything — answered on the call",
                  "A group keeping you accountable for 6 weeks",
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
            How the 6 Weeks Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-center text-[#1a365d] mb-3 leading-tight">
            Six weeks. One clear path.
          </h2>
          <p className="font-serif italic text-center text-[#1a365d]/70 max-w-2xl mx-auto mb-12 text-lg">
            {cohort.schedule.callDay}. Each week builds on the last &mdash; with Jake coaching you
            through it live.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                week: "Weeks 1–2",
                title: "Quick Wins & Foundation",
                body:
                  "Fire up the right muscles for instant gains, then lock in your address-to-top-of-backswing — the most important piece.",
              },
              {
                week: "Weeks 3–4",
                title: "Downswing, Impact & Release",
                body:
                  "Initiate from your belt buckle, not your hands. Build the sequence that turns rotation into real clubhead speed.",
              },
              {
                week: "Weeks 5–6",
                title: "Put It All Together",
                body:
                  "Translate the drills into real swings on the course — with Jake reviewing your progress and dialing it in.",
              },
            ].map((card) => (
              <div
                key={card.week}
                className="bg-white border-2 border-[#1a365d] p-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26B4E] mb-3">
                  {card.week}
                </p>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d] mb-2">
                  {card.title}
                </h3>
                <p className="font-serif text-[#1a365d]/75 leading-relaxed text-[15px]">{card.body}</p>
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
            <span className="font-bold text-[#f5ede0] line-through decoration-[#F26B4E]/70">$6,596+</span>
          </p>

          <div className="space-y-5">
            {/* Headline: the live cohort */}
            <div className="bg-[#F26B4E]/15 border-2 border-[#F26B4E] p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#F26B4E]">
                  6 Weeks Live Coaching with Dr. Jake
                </h3>
                <span className="font-bold text-[#f5ede0]/70 text-sm whitespace-nowrap">
                  $3,000 Value
                </span>
              </div>
              <p className="font-serif text-[#f5ede0]/85 leading-relaxed">
                Weekly small-group Zoom calls where Jake coaches you through every step, reviews your
                swing, and answers your questions live. This is the heart of the program.
              </p>
            </div>

            {/* The course */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  The Full Senior Golf Mastery Course
                </h3>
                <span className="font-bold text-[#f5ede0]/60 text-sm whitespace-nowrap">$1,997 Value</span>
              </div>
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
            </div>

            {/* Clubhouse membership */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0]">
                  1 Full Year in the Berman Clubhouse
                </h3>
                <span className="font-bold text-[#f5ede0]/60 text-sm whitespace-nowrap">$564 Value</span>
              </div>
              <p className="font-serif text-[#f5ede0]/80 mb-4 leading-relaxed">
                When the 6 weeks end, your progress doesn&apos;t. Stay coached all year long:
              </p>
              <ul className="space-y-2.5 font-serif text-[#f5ede0]/80">
                {[
                  "Monthly live group coaching calls with Jake's team",
                  "Private community of senior golfers on the same journey",
                  "Ongoing Q&A and direct access for your questions",
                  "The Tee Shot Transformation course — included free",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonuses */}
            <div className="bg-[#f5ede0]/5 border border-[#f5ede0]/20 p-6 md:p-7">
              <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-[#f5ede0] mb-4">
                Plus Every Bonus
              </h3>
              <ul className="space-y-2.5 font-serif text-[#f5ede0]/80">
                {[
                  ["Senior Golf Mastery PDF Book", "$97"],
                  ["Pre-Shot Routine Guide", "$97"],
                  ["Weight Shift Hack for Seniors", "$97"],
                  ["Weekly Workout Videos", "$197"],
                  ["Golf Gear Guide for Seniors", "$47"],
                ].map(([item, value]) => (
                  <li key={item} className="flex items-start justify-between gap-4">
                    <span className="flex items-start gap-3">
                      <Check />
                      <span>{item}</span>
                    </span>
                    <span className="font-bold text-[#f5ede0]/50 text-sm whitespace-nowrap">
                      {value} Value
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fast-action bonus: 1-on-1 session, first 10 only */}
            <div className="bg-[#F26B4E]/15 border-2 border-dashed border-[#F26B4E] p-6 md:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-[#F26B4E] text-white text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded">
                  First 10 Only
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#F26B4E]">
                  Free 1-on-1 Virtual Session with Dr. Jake
                </h3>
                <span className="font-bold text-[#f5ede0]/70 text-sm whitespace-nowrap">$500 Value</span>
              </div>
              <p className="font-serif text-[#f5ede0]/85 leading-relaxed">
                Enroll among the first 10 and you get a private, one-on-one virtual session with Dr.
                Jake &mdash; your swing, your questions, your plan, one-on-one. Once the first 10 spots
                are gone, this bonus is gone.
              </p>
            </div>
          </div>

          {/* Price block */}
          <div className="text-center mt-12">
            <p className="font-serif text-[#f5ede0]/70 mb-1">
              Total value:{" "}
              <span className="line-through decoration-[#F26B4E]/70">$6,596+</span>
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
                  "You'll show up to weekly calls for 6 weeks",
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
                  "You can't commit any time over the next 6 weeks",
                  "You're not willing to put a club in your hands and do the drills",
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
                Do the work, come to the calls, and if you don&apos;t see real progress, we don&apos;t want
                your money. Simple as that.
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
                a: "You get the full course — but the cohort is the live, coached version. Instead of watching alone, you spend six weeks on weekly Zoom calls with Dr. Jake, getting your swing seen and your questions answered in real time. You also get a full year in the Berman Clubhouse.",
              },
              {
                q: "When are the live calls?",
                a: `${cohort.schedule.callDay}. ${cohort.schedule.startLabel}. Every call is recorded, so if you ever miss one live, you can catch up and still ask questions.`,
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
                a: "Yes — one enrollment covers the full 6-week cohort, the complete course and all bonuses, and a full year in the Berman Clubhouse.",
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
            Spend the next 6 weeks getting better.
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#1a365d]/75 mb-10 leading-relaxed">
            Not watching videos. Not guessing. Doing the work, live, with Dr. Jake in your corner.
          </p>
          <a
            href="/senior-golf-mastery-cohort/checkout"
            className="inline-block bg-[#F26B4E] text-white px-12 sm:px-16 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Claim Your Spot &mdash; {cohort.price} &rarr;
          </a>
          <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
            Limited seats &middot; {cohort.schedule.startLabel}
          </p>
        </div>
      </section>

      <Footer variant="poster" />
    </main>
  );
}
