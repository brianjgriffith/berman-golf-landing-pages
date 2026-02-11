"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-sm md:text-base px-5 py-2 rounded-full mb-6">
                Berman Club House
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Get Ongoing Coaching, Live Q&A, and a Community of Senior Golfers Who Get It
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 mb-8">
                Join Dr. Jake&apos;s private virtual Club House and get monthly live coaching calls, direct access to his team, and connect online with golfers on the same journey as you.
              </p>
              <a
                href="#join"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
              >
                Join the Club House — $47/month
              </a>
              <p className="text-blue-200 text-sm">Cancel anytime. No long-term commitment.</p>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <Image
                src="/berman-clubhouse.png"
                alt="Berman Clubhouse - Exclusive Senior Golf Community"
                width={1280}
                height={720}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile Image - Below text on smaller screens */}
          <div className="lg:hidden mt-10">
            <Image
              src="/berman-clubhouse.png"
              alt="Berman Clubhouse - Exclusive Senior Golf Community"
              width={1280}
              height={720}
              className="w-full h-auto rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Everything You Get as a Member
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            This isn&apos;t just another online course. It&apos;s ongoing support, accountability, and direct access to Dr. Jake.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Access */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1565c0] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Private Virtual Club House</h3>
              <p className="text-gray-600">
                Connect virtually with senior golfers who understand your journey. Share wins, ask questions, and get support from golfers just like you — plus Jake&apos;s team is there to help.
              </p>
            </div>

            {/* Monthly Live Calls */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Live Coaching</h3>
              <p className="text-gray-600">
                Every month, join Dr. Jake LIVE on Zoom for coaching, Q&A, and personalized feedback. Get your questions answered directly and stay on track with your game.
              </p>
            </div>

            {/* Team Support */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1565c0] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Team Access</h3>
              <p className="text-gray-600">
                Got a question between calls? Jake&apos;s team is active in the Club House daily, ready to help you troubleshoot, stay motivated, and keep improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Calls Deep Dive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
                The Highlight
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Monthly Live Coaching with Dr. Jake
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Once a month, Dr. Jake goes live on Zoom exclusively for Club House members. This is your chance to get real-time coaching, ask questions, and get feedback on your progress.
              </p>
              <ul className="space-y-4">
                {[
                  "Live Q&A — get your specific questions answered",
                  "Swing feedback and form corrections",
                  "New drills and techniques each month",
                  "Accountability check-ins to keep you on track",
                  "Recordings available if you can't make it live",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30">
                  <Image
                    src="/jake-solo.png"
                    alt="Dr. Jake Berman"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-xl">Dr. Jake Berman</p>
                  <p className="text-blue-200">Your Coach</p>
                </div>
              </div>
              <p className="text-blue-100 italic mb-4">
                &quot;These monthly calls are my favorite part. I get to connect with you directly, answer your questions, and help you break through whatever&apos;s holding you back. It&apos;s like having a personal coach in your corner.&quot;
              </p>
              <p className="text-white font-semibold">— Dr. Jake</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-sm px-4 py-1 rounded-full mb-6">
            Special Bonus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Tee Shot Transformation FREE
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            When you join the Club House, you&apos;ll get instant access to Tee Shot Transformation — a complete course we normally sell for $397. It&apos;s yours free as a member.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="mb-6">
              <Image
                src="/tee-shot-transformation.png"
                alt="Tee Shot Transformation"
                width={500}
                height={281}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl font-bold text-gray-300 line-through">$397</span>
              <span className="text-5xl font-bold text-green-500">FREE</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tee Shot Transformation</h3>
            <p className="text-gray-600 mb-6">
              This course alone has helped hundreds of golfers add distance and consistency to their drives. It&apos;s the perfect complement to your Club House membership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant Access
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Full Course Access
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Included with Membership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            The Club House Is For You If...
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ul className="space-y-4">
              {[
                "You've already worked with Dr. Jake and want ongoing support",
                "You've completed a Berman Golf course and want to keep improving",
                "You want accountability and a community that understands your goals",
                "You'd love direct access to Dr. Jake through monthly live calls",
                "You want to connect with other senior golfers on the same journey",
                "You're committed to continuous improvement in your game",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Berman Club House
          </h2>
          <p className="text-gray-600 mb-12">
            Get ongoing coaching, Club House support, and exclusive bonuses.
          </p>

          <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-8 md:p-12 text-white shadow-xl">
            {/* Clubhouse Image */}
            <div className="mb-6">
              <Image
                src="/berman-clubhouse.png"
                alt="Berman Clubhouse"
                width={600}
                height={338}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <p className="text-blue-200 font-semibold uppercase tracking-wide text-sm mb-2">Monthly Membership</p>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="text-5xl font-bold">$47</span>
              <span className="text-blue-200">/month</span>
            </div>

            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {[
                "Private Club House access",
                "Monthly live coaching calls with Dr. Jake",
                "Direct support from Jake's team",
                "Tee Shot Transformation course ($397 value)",
                "Cancel anytime — no commitment",
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
              href="#"
              className="btn-primary block w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
            >
              Join Now — $47/month
            </a>
            <p className="text-blue-200 text-sm">Secure checkout. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "When are the monthly live calls?",
                answer: "Dr. Jake hosts a live Zoom call once per month. The schedule is shared in the Club House, and if you can't make it live, recordings are always available."
              },
              {
                question: "Where is the Club House hosted?",
                answer: "The Club House is hosted on Skool — a simple, easy-to-use platform. You'll get access as soon as you join, and you can participate from your computer or phone."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. There's no long-term commitment. If the Club House isn't right for you, you can cancel your membership anytime with no questions asked."
              },
              {
                question: "Do I keep the Tee Shot Transformation course if I cancel?",
                answer: "Access to Tee Shot Transformation is included as part of your membership. If you cancel, you'll lose access to the course along with the Club House and live calls. As long as you're a member, it's all yours!"
              },
              {
                question: "What if I haven't purchased a Berman Golf course yet?",
                answer: "The Club House is designed for golfers who've already experienced Dr. Jake's training. If you're new, we recommend starting with one of our courses first to get the foundation."
              },
              {
                question: "How active is the Club House?",
                answer: "Very active! Jake's team is in there daily, and members regularly share wins, ask questions, and support each other. It's a welcoming, engaged group."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Club House?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get ongoing coaching, connect with fellow golfers, and keep improving your game.
          </p>
          <a
            href="#join"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            Join Now — $47/month
          </a>
          <p className="text-blue-200 mt-4 text-sm">
            Plus get Tee Shot Transformation ($397 value) FREE
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
