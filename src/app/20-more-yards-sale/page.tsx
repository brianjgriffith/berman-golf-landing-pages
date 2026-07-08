"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { twentyMoreYardsSale as sale } from "@/config/downsell";

const CHECKOUT_997 = "/20-more-yards-sale/checkout";
const CHECKOUT_297 = sale.clubhouseOnly.checkoutPath;

export default function TwentyMoreYardsSalePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const testimonialVideos = [
    {
      name: "Michael Litwin",
      videoId: "JpIUsGG1nhk",
      quote:
        "I was 80% certain I was canceling my golf club membership. Now I've gained 50 yards with the driver and joined the 200 Club — at 77!",
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
      quote:
        "Before this, I'd top it, chunk it, or spray it. Now five out of five driver shots are right down the middle. And yes — I finally beat my husband!",
      age: 78,
      location: "Florida",
    },
    {
      name: "Richard Rosenblatt",
      videoId: "jgMnW1dy1lU",
      quote:
        "It really taught me about the body and how to use the body—not be wristy. We shaved three club lengths from tee to green.",
      age: 69,
      location: "Naples, FL",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* ===== Hero ===== */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-sm md:text-base px-5 py-2 rounded-full mb-6">
            The Cohort Is Full — But You&apos;re Not Out
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Missed the Live Cohort? Here&apos;s Your Way In — Without the $2,997 Price Tag
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            The 6-week live cohort has closed its doors. But you can still get Dr. Jake&apos;s
            complete biomechanics system — plus a full year of live coaching in the Berman
            Clubhouse — and work through it at your own pace.
          </p>
          <a
            href="#choose"
            className="inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            See Your Two Options ↓
          </a>
          <p className="text-blue-200 text-sm mt-4">
            Self-paced. Lifetime access. 100% money-back guarantee.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
            {["1,000+ Senior Golfers Trained", "100% Success Rate", "Gain 20–50 Yards"].map(
              (item, index) => (
                <span
                  key={index}
                  className="text-blue-100 text-sm font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== What This Is ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Here&apos;s the deal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Same Method. Same Results. On Your Schedule.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            In the live cohort, Jake walks a small group through his system over six weeks on
            Zoom. Those seats are gone. But the <strong>method doesn&apos;t change</strong> — and
            neither do the results.
          </p>
          <p className="text-lg text-gray-700">
            This is the self-paced path: the complete <strong>Senior Golf Mastery</strong> course
            to work through whenever it suits you, <strong>plus a full year in the Berman
            Clubhouse</strong> — where Jake goes live every month for coaching and Q&amp;A. You get
            the system <em>and</em> ongoing access to Jake. Just not on a fixed six-week clock.
          </p>
        </div>
      </section>

      {/* ===== The Offer Stack ($997) ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Everything You Get for $997
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The complete 7-step system used by 1,000+ senior golfers — bundled with a year of live
            coaching in the Clubhouse.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Part 1 — The Course */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Senior Golf Mastery
                </h3>
                <span className="text-gray-500">$997 Value</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                {[
                  <><strong>Module 1: Quick Wins</strong> — Fire up the right muscles and see immediate gains</>,
                  <><strong>Module 2: The Foundation (Steps 1–3)</strong> — The most important module. Address to top of backswing.</>,
                  <><strong>Module 3: Downswing &amp; Impact (Steps 4–5)</strong> — Initiate with your belt buckle, not your hands</>,
                  <><strong>Module 4: Release &amp; Finish (Steps 6–7)</strong> — Complete weight transfer for maximum power</>,
                  <><strong>Module 5: Put It All Together</strong> — Turn drills into real swings with real results</>,
                  <>Bonuses: PDF book, Pre-Shot Routine, Weight Shift Hack, Weekly Workout Videos &amp; Gear Guide</>,
                  <><strong>Lifetime access</strong> — revisit every lesson anytime, including future updates</>,
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Part 2 — The Clubhouse Year */}
            <div className="mb-8">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  2. One Full Year in the Berman Clubhouse
                </h3>
                <span className="text-gray-500">$297 Value — Included</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                {[
                  <><strong>Monthly live coaching calls with Dr. Jake</strong> — real-time Q&amp;A, swing feedback, and new drills every month</>,
                  <>Private virtual Clubhouse — connect with senior golfers on the same journey</>,
                  <>Priority support — your questions jump to the front of the line</>,
                  <>Free access to all 30-day challenges Jake runs through the year</>,
                  <>Tee Shot Transformation course included ($397 value)</>,
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="text-center bg-blue-50 rounded-xl p-8">
              <p className="text-gray-600 mb-1">
                The course alone is <strong>$997</strong>. The Clubhouse year is on the house.
              </p>
              <p className="text-4xl font-bold text-gray-900 mb-2">Today Just $997</p>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                {sale.renewalNote}
              </p>
              <a
                href={CHECKOUT_997}
                className="inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
              >
                Get the Course + Clubhouse Year
              </a>
              <div className="flex justify-center">
                <Image
                  src="/guarantee-badge.png"
                  alt="100% Money-Back Guarantee"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm mt-1">Instant access. Start training in 5 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Video Testimonials ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            These Aren&apos;t Pros. They&apos;re Senior Golfers Just Like You.
          </h2>
          <p className="text-center text-gray-600 mb-12">
            They refused to accept distance loss. Now they&apos;re crushing drives again. Your turn.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonialVideos.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`${testimonial.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-gray-900">
                    - {testimonial.name}, {testimonial.age}, {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Choose Your Option ===== */}
      <section id="choose" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Choose Your Way In
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Two ways to keep your momentum going after the challenge. Pick the one that fits.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            {/* Primary — $997 Bundle */}
            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-8 shadow-xl text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#F26B4E] text-white font-bold uppercase text-xs px-4 py-2 rounded-full whitespace-nowrap">
                  Best Value — Everything
                </span>
              </div>

              <p className="text-blue-200 font-semibold uppercase tracking-wide text-sm mb-2 text-center mt-2">
                Course + Clubhouse Year
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-5xl font-bold">$997</span>
                <span className="text-blue-200">one-time</span>
              </div>
              <p className="text-green-300 text-sm text-center mb-6">
                Then $297/yr for the Clubhouse — cancel anytime
              </p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "Complete Senior Golf Mastery course (5 modules)",
                  "All bonuses + lifetime access",
                  "1 full year in the Berman Clubhouse",
                  "Monthly live coaching calls with Dr. Jake",
                  "Tee Shot Transformation ($397 value)",
                  "100% money-back guarantee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_997}
                className="block w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide text-center"
              >
                Get Everything — $997
              </a>
            </div>

            {/* Step-down — $297 Clubhouse only */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <p className="text-gray-500 font-semibold uppercase tracking-wide text-sm mb-2 text-center">
                Clubhouse Only
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-5xl font-bold text-gray-900">$297</span>
                <span className="text-gray-500">/year</span>
              </div>
              <p className="text-gray-500 text-sm text-center mb-6">
                Not ready for the full course? Start here.
              </p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "1 full year in the Berman Clubhouse",
                  "Monthly live coaching calls with Dr. Jake",
                  "Private virtual community of senior golfers",
                  "Priority support (jump the line)",
                  "All 30-day challenges included",
                  "Tee Shot Transformation ($397 value)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_297}
                className="block w-full bg-gray-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 uppercase tracking-wide text-center"
              >
                Join the Clubhouse — $297/yr
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto">
            Either way, you keep working the biomechanics — fix the body, and the yards follow.
          </p>
        </div>
      </section>

      {/* ===== Guarantee ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/guarantee-badge.png"
                alt="100% Money Back Guaranteed"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <p className="text-green-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Try It Risk Free
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              100% Money-Back Guarantee
            </h2>
            <p className="text-gray-700 mb-8">
              Do the work — follow the program and show up to the calls. If you don&apos;t see real
              progress, we don&apos;t want your money. Simple as that.
            </p>
            <a
              href="#choose"
              className="inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Pick Your Option
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "How is this different from the live cohort?",
                answer:
                  "The cohort is six weeks of live group coaching with Jake on a fixed schedule — those seats are closed. This is the self-paced version: you get the complete Senior Golf Mastery course to work through on your own time, plus a full year in the Clubhouse where Jake still coaches live every month. Same method, same science — just no fixed six-week clock.",
              },
              {
                question: "What happens after the first year — what's the $297?",
                answer:
                  "Your $997 covers the course (which is yours for life) plus your first full year in the Berman Clubhouse. After that first year, the Clubhouse renews at $297/year so you keep the monthly live calls, community, and challenges. You can cancel anytime — the course stays yours either way.",
              },
              {
                question: "What if I just want the Clubhouse?",
                answer:
                  "That's the $297/year option. You get the monthly live coaching calls, the private community, priority support, all the 30-day challenges, and the Tee Shot Transformation course — without the full Senior Golf Mastery system. It's a great way to keep momentum if you're not ready for the complete course.",
              },
              {
                question: "How much time do I need to commit?",
                answer:
                  "30–45 minutes a day, a few days a week. The lessons are bite-sized and you train from home — no clubs, no range, no travel. Because it's self-paced, you set the schedule.",
              },
              {
                question: "Will this work if I have injuries or limited mobility?",
                answer:
                  "Yes. Dr. Jake built this specifically for senior golfers dealing with the real limitations that come with age. Pete had a hip and both shoulders replaced and was hitting pain-free in 45 minutes. The movements work with your body, not against it.",
              },
              {
                question: "Do I get lifetime access to the course?",
                answer:
                  "Yes. The Senior Golf Mastery course is yours for life, including any future updates. The Clubhouse is the part that's a yearly membership — the course itself never expires.",
              },
              {
                question: "What if it doesn't work for me?",
                answer:
                  "You're covered by a 100% money-back guarantee. Follow the program, show up to the calls, and if you don't see real progress, we'll refund you. We have a 100% success rate with golfers who complete the program.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#F26B4E] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t Let the Momentum Die
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            The cohort filled up — but the work is exactly the same. Fix the body, and the yards
            follow. Let&apos;s get you back to dominating your foursome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CHECKOUT_997}
              className="inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Course + Clubhouse — $997
            </a>
            <a
              href={CHECKOUT_297}
              className="inline-block bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 uppercase tracking-wide border-2 border-white/50"
            >
              Clubhouse Only — $297/yr
            </a>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            Let the big dog eat, baby. 100% money-back guarantee.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
