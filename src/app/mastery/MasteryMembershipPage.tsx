"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { masteryMembership as mm } from "@/config/masteryMembership";

function Check({ className = "w-5 h-5 text-green-500" }: { className?: string }) {
  return (
    <svg className={`${className} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

// Same icon set as /community, one per inclusion (in config order).
const includeIcons = [
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
];

const testimonialVideos = [
  {
    name: "Michael Litwin",
    videoId: "JpIUsGG1nhk",
    quote: "I was 80% certain I was canceling my golf club membership. Now I've gained 50 yards with the driver and joined the 200 Club — at 77!",
    age: 77,
    location: "Quail Creek, FL",
  },
  {
    name: "Pete",
    videoId: "p3dc2hx6teU",
    quote: "Day one max was 179 yards. Final max was 208 yards. Everything clicked. Boom.",
    age: 78,
    location: "Naples, FL",
  },
  {
    name: "Karen Reinecke",
    videoId: "-BtarQM1mVs",
    quote: "Before this, I'd top it, chunk it, or spray it. Now five out of five driver shots are right down the middle. And yes — I finally beat my husband!",
    age: 78,
    location: "Florida",
  },
  {
    name: "Richard Rosenblatt",
    videoId: "jgMnW1dy1lU",
    quote: "It really taught me about the body and how to use the body—not be wristy. We shaved three club lengths from tee to green.",
    age: 69,
    location: "Naples, FL",
  },
];

function buildFaqs(bonusLive: boolean) {
  const faqs = [
  {
    question: "What's the difference between monthly and annual?",
    answer: `Everything inside is the same — the full curriculum, the monthly coaching calls, the Clubhouse, the library and challenges. Annual is ${mm.annual.price} for the year instead of ${mm.annualCompareAt} on monthly (you save ${mm.annualSavings}), ${bonusLive ? `and it comes with a free 1-on-1 session with Dr. Jake (${mm.annualBonus.value} value) if you join by ${mm.annualBonus.endsLabel}. Monthly doesn't include the 1-on-1.` : "and you pay once a year."}`,
  },
  {
    question: "Can I cancel the monthly plan?",
    answer: "Yes. No long-term commitment — cancel whenever you like and you won't be billed again. Your access runs through the end of the month you've paid for.",
  },
  {
    question: "Is this a course I keep forever?",
    answer: "It's a membership. The curriculum, the coaching calls, the Clubhouse and the library are yours for as long as your membership is active. That's the point — you're not buying a course and going it alone, you're getting a coach in your corner for as long as you want one.",
  },
  {
    question: "When are the monthly coaching calls?",
    answer: "Dr. Jake goes live on Zoom once a month. The schedule is posted inside the Clubhouse, and every call is recorded if you can't make it live.",
  },
  {
    question: "How does the 1-on-1 with Dr. Jake work? (Annual)",
    answer: "It's a private virtual session — just you and Jake. After you join, you'll get an email with how to book it. Most golfers use it early, so everything after is aimed at their body specifically.",
  },
  {
    question: "What equipment do I need?",
    answer: "None to start. The curriculum is built to be done at home — no clubs, no balls, no range. 30–45 minutes, a few days a week. A phone is all you need to film your swing when you want Jake to look at it.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "If you can watch a YouTube video, you can do this. Simple step-by-step video lessons, and you can use it on your computer, tablet or phone. If you get stuck, Jake's team is a message away.",
  },
  {
    question: "Will this work with a hip replacement, bad back, or limited mobility?",
    answer: "Jake is a Doctor of Physical Therapy, and this was built for senior bodies — the movements work with your body, not against it. Plenty of our golfers have replacements and old injuries. And because you're a member, you can bring your specific situation to the monthly call.",
  },
  {
    question: "I already bought Senior Golf Mastery or I'm in the Clubhouse. What should I do?",
    answer: "Email us at distance@bermangolf.com before you join and we'll sort out the right option for you.",
  },
  ];
  // The 1-on-1 FAQ only exists while the bonus does.
  return bonusLive ? faqs : faqs.filter((f) => !f.question.includes("1-on-1"));
}

const BONUS_DEADLINE_LINE = `The free 1-on-1 comes with annual through ${mm.annualBonus.endsLabel}.`;

// Rendered by ./page.tsx (a server component) so `bonusLive` is decided per
// request on the server — the bonus comes down at the deadline on its own.
export default function MasteryMembershipPage({ bonusLive }: { bonusLive: boolean }) {
  const faqs = buildFaqs(bonusLive);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-14 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-sm md:text-base px-5 py-2 rounded-full mb-6">
                Senior Golf Mastery
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                The Complete System, a Coach in Your Corner, and a Clubhouse Full of Golfers Who Get It
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 mb-8">
                Two days got you moving. This is where it sticks. The full 7-step Berman Method,
                live coaching with Dr. Jake every month, and a community of senior golfers doing
                the work right alongside you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={mm.monthly.checkoutPath}
                  className="inline-block bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 uppercase tracking-wide border-2 border-white/50"
                >
                  {mm.monthly.price}{mm.monthly.cadence}
                </a>
                <a
                  href={mm.annual.checkoutPath}
                  className="inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide relative"
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Save {mm.annualSavings}
                  </span>
                  {mm.annual.price}{mm.annual.cadence}
                </a>
              </div>
              {bonusLive && (
                <p className="text-blue-200 text-sm mt-4">
                  Annual includes a free 1-on-1 with Dr. Jake ({mm.annualBonus.value} value) &mdash;
                  through {mm.annualBonus.endsLabel}.
                </p>
              )}
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/senior-golf-mastery-bundle-image.png"
                alt="Senior Golf Mastery"
                width={1200}
                height={900}
                className="object-contain w-full max-w-md lg:max-w-none"
                priority
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
            {["The Complete 7-Step System", "Live Coaching Every Month", "1,000+ Senior Golfers Trained"].map((item) => (
              <span key={item} className="text-white text-sm font-medium flex items-center gap-2">
                <Check className="w-5 h-5 text-green-300" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The problem with courses */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Why A Membership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Buying a Course and Finishing a Course Are Two Different Things
          </h2>
          <div className="space-y-4 text-lg text-gray-700 text-left md:text-center">
            <p>
              You&apos;ve bought the drivers. The training aids. The lessons from the pro who&apos;s
              40 years younger than you. Maybe a course or two that&apos;s still sitting in your inbox.
            </p>
            <p>
              Here&apos;s the thing. Practice doesn&apos;t make perfect &mdash; practice makes{" "}
              <strong>permanent</strong>. Grooving the wrong move for three months on your own is how
              you end up right back where you started.
            </p>
            <p className="font-semibold text-gray-900">
              So Senior Golf Mastery isn&apos;t just the system. It&apos;s the system plus Dr. Jake
              checking your work, every month, for as long as you want him to.
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Everything You Get as a Member
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Same six things on both plans. Annual adds a private session with Jake.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mm.includes.map((item, i) => (
              <div key={item.label} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className={`w-14 h-14 ${i % 2 === 0 ? "bg-[#1565c0]" : "bg-[#F26B4E]"} rounded-full flex items-center justify-center mb-5`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={includeIcons[i]} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.label}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>

          {bonusLive && (
          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="text-5xl" aria-hidden>🎁</div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-700 mb-1">Annual members only</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Plus&hellip; {mm.annualBonus.label}
              </h3>
              <p className="text-gray-700">
                Just you and Jake, one on one. A <strong>{mm.annualBonus.value} value</strong> &mdash;
                it&apos;s what he charges for a private session &mdash; included free when you join for the year.
              </p>
              <p className="text-amber-800 text-sm font-semibold mt-2">{BONUS_DEADLINE_LINE}</p>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Michael Litwin */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/30">
              <Image src="/michael-litwin.png" alt="Michael Litwin" width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="text-xl text-white italic mb-4">
                &quot;I was 80% certain I was canceling my golf club membership. Now I&apos;ve gained 50 yards and joined the 200 Club — at 77!&quot;
              </p>
              <p className="text-blue-200 font-semibold">- Michael Litwin, 77</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            These Aren&apos;t Pros. They&apos;re Golfers Just Like You.
          </h2>
          <p className="text-center text-gray-600 mb-12">
            They refused to accept distance loss as part of getting older. Your turn.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonialVideos.map((t) => (
              <div key={t.videoId} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}`}
                    title={`${t.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">&quot;{t.quote}&quot;</p>
                  <p className="font-semibold text-gray-900">- {t.name}, {t.age}, {t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#join"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Choose Your Plan
            </a>
          </div>
        </div>
      </section>

      {/* Pricing — mirrors Jake's "Choose Your Plan" slide */}
      <section id="join" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center uppercase tracking-tight">
            Choose Your <span className="text-green-600">Plan</span>
          </h2>
          <p className="text-gray-600 mb-14 text-center">
            Same membership either way. Annual saves you {mm.annualSavings}
            {bonusLive ? " and adds a 1-on-1 with Jake." : "."}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Monthly */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 flex flex-col">
              <p className="text-gray-900 font-extrabold uppercase tracking-wide text-2xl mb-2 text-center">
                {mm.monthly.label}
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-6xl font-extrabold text-[#0f2a4a]">{mm.monthly.price}</span>
                <span className="text-gray-600 font-bold uppercase">{mm.monthly.cadence}</span>
              </div>
              <p className="text-gray-500 text-sm text-center mb-6">{mm.monthly.note}</p>

              <ul className="space-y-3 mb-8 border-t border-gray-200 pt-6 flex-1">
                {mm.includes.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Check />
                    <span className="text-gray-800">{item.label}</span>
                  </li>
                ))}
              </ul>

              <a
                href={mm.monthly.checkoutPath}
                className="block w-full bg-gray-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 uppercase tracking-wide text-center"
              >
                Join Monthly
              </a>
            </div>

            {/* Annual */}
            <div className="bg-amber-50/60 rounded-2xl p-8 shadow-xl border-4 border-amber-400 relative flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="bg-amber-400 text-[#0f2a4a] font-extrabold uppercase text-sm px-5 py-2 rounded-lg whitespace-nowrap shadow">
                  ★ Best Value ★
                </span>
              </div>
              <div className="absolute -top-3 -right-3 rotate-6">
                <span className="bg-red-600 text-white font-extrabold uppercase text-sm px-3 py-2 rounded-md shadow-lg">
                  Save {mm.annualSavings}
                </span>
              </div>

              <p className="text-gray-900 font-extrabold uppercase tracking-wide text-2xl mb-1 text-center mt-2">
                {mm.annual.label}
              </p>
              <p className="text-gray-400 line-through text-center text-lg font-bold">{mm.annualCompareAt}</p>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-6xl font-extrabold text-green-700">{mm.annual.price}</span>
                <span className="text-gray-700 font-bold uppercase">{mm.annual.cadence}</span>
              </div>
              <p className="text-gray-500 text-sm text-center mb-6">Billed once a year</p>

              <ul className="space-y-3 mb-6 border-t border-amber-200 pt-6">
                {mm.includes.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Check />
                    <span className="text-gray-800">{item.label}</span>
                  </li>
                ))}
              </ul>

              {bonusLive ? (
                <div className="bg-amber-100 border border-amber-300 rounded-xl p-4 mb-8 flex items-center gap-3 flex-1">
                  <span className="text-3xl" aria-hidden>🎁</span>
                  <div>
                    <p className="font-extrabold text-gray-900 uppercase text-sm leading-tight">
                      Plus&hellip; {mm.annualBonus.label}
                    </p>
                    <p className="font-bold text-amber-700 text-sm">{mm.annualBonus.value} Value</p>
                    <p className="text-gray-700 text-xs mt-1">Through {mm.annualBonus.endsLabel}</p>
                  </div>
                </div>
              ) : (
                <div className="mb-8 flex-1" />
              )}

              <a
                href={mm.annual.checkoutPath}
                className="block w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide text-center"
              >
                Join Annual &amp; Save
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Is This Right For You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">This IS for you if&hellip;</h3>
              <ul className="space-y-4">
                {[
                  "You felt something click in the challenge and don't want to lose it",
                  "You're tired of losing distance and being told it's just age",
                  "You've tried lessons, tips and new clubs — and nothing stuck",
                  "You want someone checking your work, not another course to watch alone",
                  "You'd like a group of golfers your age who get it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">This is NOT for you if&hellip;</h3>
              <ul className="space-y-4">
                {[
                  "You're looking for a magic pill or an overnight fix",
                  "You won't put in 30–45 minutes a few days a week",
                  "You'd rather keep buying new clubs than fix how your body moves",
                  "You're happy with where your game is right now",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Jake */}
      <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-blue-200 font-semibold tracking-wide uppercase text-sm mb-3">
            Your Coach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hey, I&apos;m Dr. Jake!</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                <Image src="/jake-solo.png" alt="Dr. Jake Berman" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 text-blue-100 text-lg">
              <p>
                I&apos;m not a golf pro. I&apos;m a biomechanics expert &mdash; a Doctor of Physical
                Therapy who&apos;s spent 15+ years helping golfers over 60 get their game back.
              </p>
              <p className="bg-white/10 p-4 rounded-lg border-l-4 border-[#F26B4E] text-white">
                You&apos;re not losing distance because of age. You&apos;re losing distance because
                you&apos;re swinging with momentum instead of muscles.
              </p>
              <p>
                The system fixes that. The membership makes sure it <strong className="text-white">stays</strong> fixed
                &mdash; because I get to see your swing, answer your questions live, and keep you on
                track month after month.
              </p>
              <span className="inline-block bg-[#F26B4E] text-white font-bold px-6 py-2 rounded-lg mt-2">
                Let the big dog eat, baby!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#F26B4E] flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFaqIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            If You Don&apos;t Plan on Dying This Year, Why Not Plan on Being Better?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            The system, the coaching, and the Clubhouse. Pick your plan and let&apos;s get to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mm.monthly.checkoutPath}
              className="inline-block bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 uppercase tracking-wide border-2 border-white/50"
            >
              {mm.monthly.price}{mm.monthly.cadence}
            </a>
            <a
              href={mm.annual.checkoutPath}
              className="inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide relative"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                Save {mm.annualSavings}
              </span>
              {mm.annual.price}{mm.annual.cadence}
            </a>
          </div>
          {bonusLive && (
            <p className="text-blue-200 mt-6 text-sm">
              Annual includes a free 1-on-1 session with Dr. Jake ({mm.annualBonus.value} value) &mdash;
              through {mm.annualBonus.endsLabel}.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
