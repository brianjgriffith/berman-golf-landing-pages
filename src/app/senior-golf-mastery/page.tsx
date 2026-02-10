"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorGolfMasteryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const testimonialVideos = [
    {
      name: "Michael Litwin",
      videoId: "JpIUsGG1nhk",
      quote: "I was 80% certain I was canceling my golf club membership. Now I've gained 50 yards with the driver and joined the 200 Club — at 77!",
      age: 77,
      location: "Quail Creek, FL"
    },
    {
      name: "Pete",
      videoId: "p3dc2hx6teU",
      quote: "Day one max was 179 yards. Final max was 208 yards. Everything clicked. Boom.",
      age: 78,
      location: "Naples, FL"
    },
    {
      name: "Karen Reinecke",
      videoId: "-BtarQM1mVs",
      quote: "Before this, I'd top it, chunk it, or spray it. Now five out of five driver shots are right down the middle. And yes — I finally beat my husband!",
      age: 78,
      location: "Florida"
    },
    {
      name: "Richard Rosenblatt",
      videoId: "jgMnW1dy1lU",
      quote: "It really taught me about the body and how to use the body—not be wristy. We shaved three club lengths from tee to green.",
      age: 69,
      location: "Naples, FL"
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section - Two Column */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Eyebrow - Centered Above Both Columns */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-base md:text-lg px-6 py-2 rounded-full">
              Attention: Senior Golfers
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Copy */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Add 30+ Yards to Your Drive & Hit Greens in Regulation Again
              </h1>
              <p className="text-xl text-[#F26B4E] font-semibold mb-4">
                Even If You&apos;ve Lost Distance in Recent Years
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The 7-step biomechanics system proven by 1,000+ senior golfers to add 20-50 yards, improve consistency, and play pain-free — without expensive lessons or new equipment.
              </p>
              <a
                href="/senior-golf-mastery/checkout"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-3"
              >
                Join the 50-Yard Club
              </a>
              <p className="text-gray-500 text-sm">100% success rate. Lifetime access. Start today.</p>
            </div>

            {/* Right Column - Bundle Image */}
            <div className="flex justify-center lg:justify-end lg:-mr-12">
              <Image
                src="/senior-golf-mastery-bundle-image.png"
                alt="Senior Golf Mastery Bundle"
                width={1200}
                height={900}
                className="object-contain w-full lg:scale-125 lg:translate-x-4"
                priority
              />
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
            {[
              "1,000+ Senior Golfers Trained",
              "100% Success Rate",
              "Gain 20-50 Yards",
            ].map((item, index) => (
              <span key={index} className="text-gray-800 text-sm font-medium flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          {/* Michael Litwin Testimonial */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/30">
                <Image
                  src="/michael-litwin.png"
                  alt="Michael Litwin"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-lg text-white italic mb-2">
                  &quot;I was 80% certain I was canceling my golf club membership. Now I&apos;ve gained 50 yards and joined the 200 Club — at 77!&quot;
                </p>
                <p className="text-blue-200 font-semibold">- Michael Litwin, 77</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Watch How Senior Golfers Are Adding 30+ Yards
          </h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/yJ1I5iHr54M"
              title="Senior Golf Mastery"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Brief Dr. Jake Intro */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#F26B4E]">
              <Image
                src="/jake-solo.png"
                alt="Dr. Jake Berman"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-gray-900">Dr. Jake Berman, PT, DPT</span> — Physical therapist turned golf performance specialist. After helping 1,000+ senior golfers add 20-50 yards, he developed the physics-based system you&apos;re about to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Move", highlight: "Better", color: "border-[#F26B4E]", bgColor: "bg-[#F26B4E]", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { label: "Gain", highlight: "Distance", color: "border-[#1565c0]", bgColor: "bg-[#1565c0]", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Improve", highlight: "Consistency", color: "border-[#F26B4E]", bgColor: "bg-[#F26B4E]", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Play More", highlight: "Frequently", color: "border-[#1565c0]", bgColor: "bg-[#1565c0]", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            ].map((benefit, index) => (
              <div key={index} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${benefit.color} flex items-center gap-4`}>
                <div className={`w-10 h-10 ${benefit.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{benefit.label}</p>
                  <p className="text-lg font-bold text-gray-900">{benefit.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How Senior Golfers Are Adding 30+ Yards & Playing Their Best Golf
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <Image
                src="/icon-computer.png"
                alt="Train from home"
                width={120}
                height={120}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 7-Step Berman Method</h3>

              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-800 font-semibold italic">
                  &quot;The slower you go, the farther it&apos;ll go.&quot;
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                Follow Jake&apos;s proven 7-step system from Address to Finish. Each step builds on the last, activating the right muscles in the right order to unlock distance you thought was gone forever.
              </p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-gray-500 text-sm">
                  Train from home in 30-45 minutes — no clubs, no range, no travel required.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <Image
                src="/icon-movement.png"
                alt="Movements that add distance"
                width={120}
                height={120}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Biomechanics, Not Technique</h3>

              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-800 font-semibold italic">
                  How your body DOES move — not how it SHOULD move.
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                This isn&apos;t swing tips for 25-year-olds. Jake teaches you how to activate your core, glutes, and the 16 muscles in your feet to generate real power.
              </p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-gray-500 text-sm">
                  Rooted in laws of physics and biomechanics — not made-up technical advice.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <Image
                src="/icone-gear.png"
                alt="100% Success Rate"
                width={120}
                height={120}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Success Rate</h3>

              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-800 font-semibold italic">
                  Every person who completed the program got results.
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                This isn&apos;t theory or guesswork. Multiple seniors in their 70s have gained 50-65 yards. Your name could be on the Wall of Fame next.
              </p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-gray-500 text-sm">
                  100% of clients who complete the program gain distance. Not 90%. Not 95%. 100%.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xl font-bold text-gray-900 mb-6">Ready to join the 50-Yard Club?</p>
            <a
              href="/senior-golf-mastery/checkout"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Yes! Show Me The 7-Step System
            </a>
            <p className="text-gray-500 mt-4">Instant access. Start training in 5 minutes.</p>
          </div>
        </div>
      </section>

      {/* Peter Testimonial - Moved up for better flow */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/30">
              <Image
                src="/peter-schmitt.png"
                alt="Peter Schmitt"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-xl text-white italic mb-4">
                &quot;It was amazing… I&apos;m hitting the sweet spot now and getting more distance—it&apos;s just easier.&quot;
              </p>
              <p className="text-blue-200 font-semibold">- Peter Schmitt, 78</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            These Aren&apos;t Pros. They&apos;re Golfers Just Like You.
          </h2>
          <p className="text-center text-gray-600 mb-12">
            These golfers refused to accept distance loss. Now they&apos;re crushing drives again. Your turn.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div className="text-center">
            <a
              href="/senior-golf-mastery/checkout"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Put Your Name on This Board
            </a>
            <p className="text-gray-500 mt-4">Join 1,000+ senior golfers who gained distance</p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Is This Right For You?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* This IS For You */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">This IS For You If...</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "You're a senior golfer frustrated by losing distance off the tee",
                  "You've tried lessons, tips, and new clubs — but nothing sticks",
                  "Your body doesn't move like it used to — and golf lessons haven't helped",
                  "You're tired of watching younger golfers out-drive you",
                  "You want a proven system, not random YouTube tips",
                  "You're ready to invest 30-45 minutes a day to see real results",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This is NOT For You */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">This is NOT For You If...</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "You're looking for a magic pill or overnight fix",
                  "You're not willing to practice 30-45 minutes a day",
                  "You think your distance loss is \"just part of getting old\"",
                  "You'd rather keep buying new clubs than fix your swing mechanics",
                  "You still have the flexibility of a 25-year-old",
                  "You're happy with where your game is right now",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-gray-600 mb-6">
              If you checked more boxes on the left, you&apos;re exactly who this program was built for.
            </p>
            <a
              href="/senior-golf-mastery/checkout"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              I&apos;m Ready — Show Me The Program
            </a>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Introducing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Everything You Need to Gain Distance, Improve Consistency & Play More Frequently
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The complete 7-step system used by 1,000+ senior golfers to join the 50-Yard Club and dominate their foursome
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Bundle Image */}
            <div className="flex justify-center mb-8">
              <Image
                src="/senior-golf-mastery-bundle-image.png"
                alt="Senior Golf Mastery Bundle"
                width={500}
                height={375}
                className="object-contain"
              />
            </div>

            <p className="text-center text-gray-700 mb-4 text-lg">
              Here&apos;s what you get:
            </p>
            <p className="text-center text-gray-500 mb-8">Total value: <span className="font-bold text-gray-900">$3,032</span></p>

            {/* Main Course */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Senior Golf Mastery <span className="text-gray-500 font-normal">($1,997 Value)</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 1:</strong> Quick Wins — Fire up the right muscles and see immediate gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 2:</strong> The Foundation (Steps 1-3) — The most important module. Master address to top of backswing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 3:</strong> Downswing & Impact (Steps 4-5) — Initiate with your belt buckle, not your hands</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 4:</strong> Release & Finish (Steps 6-7) — Complete weight transfer for maximum power</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 5:</strong> Put It All Together — Translate drills into real swings with real results</span>
                </li>
              </ul>
            </div>

            {/* Bonuses */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">BONUS MATERIALS (Included Free):</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BONUS: 1-on-1 Virtual Session with Dr. Jake <span className="text-gray-500">($500 Value)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BONUS: Senior Golf Mastery PDF Book <span className="text-gray-500">($97 Value)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BONUS: Pre-Shot Routine <span className="text-gray-500">($97 Value)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BONUS: Weight Shift Hack for Seniors <span className="text-gray-500">($97 Value)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BONUS: Weekly Workout Videos <span className="text-gray-500">($197 Value)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BONUS: Golf Gear Guide for Seniors <span className="text-gray-500">($47 Value)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lifetime Access to Senior Golf Mastery <span className="text-gray-500">(Priceless)</span></span>
                </li>
              </ul>
            </div>

            {/* Price */}
            <div className="text-center bg-green-50 rounded-xl p-8">
              <p className="text-gray-600 mb-2">Total Value: <span className="line-through">$3,032</span></p>
              <p className="text-4xl font-bold text-gray-900 mb-2">Today Just $997</p>
              <p className="text-green-600 font-semibold mb-4">(Save $2,035!)</p>

              <a
                href="/senior-golf-mastery/checkout"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
              >
                Enroll in Senior Golf Mastery
              </a>

              {/* Guarantee Callout */}
              <div className="flex justify-center mb-2">
                <Image
                  src="/guarantee-badge.png"
                  alt="100% Money Back Guaranteed"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm">Instant access. Start training in 5 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Karen Testimonial */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/30">
              <Image
                src="/karen-reinecke.png"
                alt="Karen Reinecke"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-xl text-white italic mb-4">
                &quot;My husband said, &apos;I never thought I&apos;d see the day that you&apos;d actually beat me.&apos; This is one of the best decisions I&apos;ve ever made for my golf game.&quot;
              </p>
              <p className="text-blue-200 font-semibold">- Karen Reinecke, 78</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works (Alternative Comparison) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Why Traditional Golf Instruction Fails Senior Golfers
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Most golf pros teach techniques designed for 25-year-old bodies. That&apos;s why their advice doesn&apos;t work for you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Traditional Golf Lessons */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <span className="text-3xl">🏌️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Traditional Golf Lessons</h3>
              <p className="text-2xl font-bold text-gray-900 text-center mb-4">$150+<span className="text-base font-normal text-gray-500">/hour</span></p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Teaches techniques for younger, flexible bodies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>&quot;Turn more&quot; and &quot;swing harder&quot; causes pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Requires 10+ lessons to see any change</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>No understanding of biomechanics or pain</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <span className="text-gray-500 text-sm">10 lessons = $1,500+</span>
              </div>
            </div>

            {/* 1-on-1 with Dr. Jake */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">1-on-1 with Dr. Jake</h3>
              <p className="text-2xl font-bold text-gray-900 text-center mb-4">$500<span className="text-base font-normal text-gray-500">/session</span></p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized assessment and coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Biomechanics expertise for aging bodies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Available virtually — no travel required</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Limited availability — books up fast</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <span className="text-gray-500 text-sm">4 sessions = $2,000</span>
              </div>
            </div>

            {/* Senior Golf Mastery */}
            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-6 shadow-lg border-2 border-[#F26B4E] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#F26B4E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-white text-center mb-2">Senior Golf Mastery</h3>
              <p className="text-2xl font-bold text-white text-center mb-4">$997<span className="text-base font-normal text-blue-200"> one-time</span></p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Jake&apos;s complete 7-step system</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Designed specifically for senior golfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Train from home — no travel required</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Lifetime access + all bonuses</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <span className="text-white font-semibold">100% Success Rate</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 text-center">
              <strong className="text-gray-900">The difference?</strong> Golf pros teach technique for how the club <em>should</em> move. Dr. Jake teaches biomechanics for how your body <em>does</em> move — and the club fits into that equation.
            </p>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/guarantee-badge.png"
                alt="100% Money Back Guaranteed"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-green-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Try It Risk Free
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              100% Money Back Guarantee
            </h2>
            <p className="text-gray-700 mb-8">
              We built Senior Golf Mastery to help you gain distance, improve consistency, and play more frequently. If you follow the program and don&apos;t see results, we don&apos;t want your money.
            </p>
            <a
              href="/senior-golf-mastery/checkout"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Enroll in Senior Golf Mastery
            </a>
            <p className="text-gray-500 mt-4 text-sm">Instant access. Start training in 5 minutes.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "How long until I see results?",
                answer: "Most golfers notice improvements within the first 1-2 weeks. The Quick Wins module is designed to give you immediate gains. Full transformation typically happens over 4-6 weeks as you progress through all 7 steps."
              },
              {
                question: "What if I'm not tech-savvy?",
                answer: "If you can watch a YouTube video, you can do this. The course is simple, step-by-step video lessons. No apps to download, no complicated software. Just click play and follow along."
              },
              {
                question: "What equipment do I need?",
                answer: "None! That's the beauty of this program. You train from home without clubs, balls, or a driving range. The exercises can be done in your living room in 30-45 minutes."
              },
              {
                question: "Will this work for my specific situation (hip replacement, limited mobility, etc.)?",
                answer: "Yes. Dr. Jake designed this program specifically for senior golfers dealing with the common limitations that come with age. The movements are designed to work WITH your body, not against it. Many students with hip replacements and limited mobility have seen significant gains."
              },
              {
                question: "How is this different from other golf programs?",
                answer: "Most golf instruction teaches technique designed for 25-year-old bodies. \"Turn more\" and \"swing harder\" doesn't work for seniors. Dr. Jake's method is built on biomechanics and physics — it's about how your body DOES move, not how it SHOULD move. The club fits into that equation."
              },
              {
                question: "What if it doesn't work for me?",
                answer: "We offer a 100% money-back guarantee. If you follow the program exactly and don't see improvement, we'll refund your investment. We have a 100% success rate with every person who completed the program — so we're confident you'll join the 50-Yard Club too."
              },
              {
                question: "How much time do I need to commit?",
                answer: "30-45 minutes per day, 3-4 days per week. The lessons are bite-sized and designed to fit into your schedule. You can train from home at any time that works for you."
              },
              {
                question: "Do I get lifetime access?",
                answer: "Yes! Once you enroll, you have lifetime access to all course materials, including any future updates. You can revisit the lessons anytime you need a refresher."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#F26B4E] flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a
              href="/senior-golf-mastery/checkout"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Join Senior Golf Mastery Today
            </a>
          </div>
        </div>
      </section>

      {/* Additional Testimonials - Ray & Kathy */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ray */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#F26B4E]">
                <Image
                  src="/ray.png"
                  alt="Ray"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-gray-700 italic mb-2">
                  &quot;I just came here for my back. I had to settle for more distance. Imagine that.&quot;
                </p>
                <p className="text-gray-500 text-sm">Went from 157 to 180 yard average</p>
                <p className="font-semibold text-gray-900 mt-1">- Ray, 80</p>
              </div>
            </div>
            {/* Kathy */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#F26B4E]">
                <Image
                  src="/kathy.png"
                  alt="Kathy"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-gray-700 italic mb-2">
                  &quot;Keep the muscles activated and get through it. The back is not hurting — not at all.&quot;
                </p>
                <p className="text-gray-500 text-sm">Max club head speed: 68 mph with 7-iron</p>
                <p className="font-semibold text-gray-900 mt-1">- Kathy, 78</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-blue-200 font-semibold tracking-wide uppercase text-sm mb-3">
            Meet Your Instructor
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hey, I&apos;m Dr. Jake!
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/jake-solo.png"
                  alt="Dr. Jake Berman"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-blue-100 text-lg">
              <p>
                Dr. Jake Berman, PT, DPT, kept seeing the same pattern with senior golfers:
              </p>
              <p className="text-white font-semibold">
                Losing 30-50 yards... and nobody could tell them why.
              </p>
              <p>
                Traditional golf instructors teach techniques designed for 25-year-old bodies. &quot;Turn more&quot; and &quot;swing harder&quot; doesn&apos;t work when your body moves differently.
              </p>
              <p className="bg-white/10 p-4 rounded-lg border-l-4 border-[#F26B4E] text-white">
                <strong>Here&apos;s what Jake discovered:</strong> You&apos;re not losing distance because of age. You&apos;re losing distance because you&apos;re swinging with momentum instead of muscles.
              </p>
              <p>
                That&apos;s why he developed <strong>The Berman Method</strong> — rooted in laws of physics and biomechanics, not made-up technical advice.
              </p>
              <p>
                It&apos;s about how your body <strong>does</strong> move — and the club fits into that equation.
              </p>

              <div className="mt-6 space-y-2">
                {["Gain real distance off the tee", "Improve consistency", "Play more frequently"].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">{result}</span>
                  </div>
                ))}
              </div>

              <p className="text-white font-semibold mt-6">
                100% success rate. No gimmicks. Just science-backed movement.
              </p>
              <span className="inline-block bg-[#F26B4E] text-white font-bold px-6 py-2 rounded-lg mt-4">
                Yeah baby. Let&apos;s get you back to dominating your foursome.
              </span>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Doctor of Physical Therapy with 15+ years helping aging golfers",
                "Trusted by thousands of golfers over 60",
                "Specializes in core, glute, and spine activation for safer, stronger swings",
              ].map((credential, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-lg">
                  <svg className="w-6 h-6 text-[#F26B4E] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join the 50-Yard Club?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 1,000+ senior golfers who&apos;ve gained distance, improved consistency, and are playing more frequently.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Golf Mastery</h3>
            <p className="text-gray-600 mb-2">Complete 7-Step System + All Bonuses + Lifetime Access</p>
            <p className="text-gray-400 line-through mb-2">$3,032</p>
            <p className="text-4xl font-bold text-gray-900 mb-6">$997</p>
            <a
              href="#"
              className="btn-primary block w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
            >
              Enroll Now - Instant Access
            </a>
            <p className="text-gray-500 text-sm">100% Money-Back Guarantee | Secure Checkout</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
