import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Senior Golf Mastery | Add 30+ Yards to Your Drive | The Berman Method",
  description: "The 7-step biomechanics system proven by 1,000+ senior golfers to add 20-50 yards, improve consistency, and play pain-free — without expensive lessons or new equipment.",
  openGraph: {
    title: "Senior Golf Mastery | Add 30+ Yards to Your Drive",
    description: "Join 1,000+ senior golfers who gained 20-50 yards with the Berman Method.",
    type: "website",
  },
};

export default function SeniorGolfMasteryPage() {
  const testimonialVideos = [
    {
      name: "Michael Litwin",
      videoId: "JpIUsGG1nhk",
      quote: "I was ready to quit golf. Couldn't finish a round from the pain. After working with Jake, I gained 50 yards and rejoined the 200 Club — at 77!",
      age: 77,
      location: "Quail Creek, FL"
    },
    {
      name: "Pete",
      videoId: "p3dc2hx6teU",
      quote: "I couldn't hit the ball more than 165 yards and had sharp back pain every swing. After 3 weeks with Jake, I'm crushing 200+ yard drives — and no pain at all.",
      age: 78,
      location: "Naples, FL"
    },
    {
      name: "Karen Reinecke",
      videoId: "-BtarQM1mVs",
      quote: "Before this, I'd top it, chunk it, or spray it. Now every shot is right down the middle. And yes — I finally beat my husband!",
      age: 78,
      location: "Florida"
    },
    {
      name: "Richard Rosenblatt",
      videoId: "jgMnW1dy1lU",
      quote: "This taught me how to swing with my body, not just my hands. It wasn't easy — but it absolutely worked. Game-changer for aging golfers.",
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
                href="#enroll"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-3"
              >
                Gain 30+ Yards & Play Pain-Free
              </a>
              <p className="text-gray-500 text-sm">100% Success rate. Lifetime access. Start today.</p>
            </div>

            {/* Right Column - Bundle Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/senior-golf-mastery-bundle-image.png"
                alt="Senior Golf Mastery Bundle"
                width={800}
                height={600}
                className="object-contain w-full max-w-[700px]"
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
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How Senior Golfers Are Adding 30+ Yards & Playing Pain-Free Golf
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
                  Train from home — no clubs, no range, no travel
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                Follow Jake&apos;s proven 7-step system that fixes the ROOT CAUSE of distance loss. Each module adds 5-10 yards by activating the right muscles in the right order.
              </p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-gray-500 text-sm">
                  Bite-sized lessons you can complete in 30-45 minutes. Watch, practice, see results.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Movements That Add Distance</h3>

              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-800 font-semibold italic">
                  Stop guessing. Start activating the muscles that matter.
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                Jake shows you EXACTLY which muscles to fire (and which to relax) to unlock explosive power without pain.
              </p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-gray-500 text-sm">
                  No wasted reps. No confusing drills. Just proven movements backed by physics and biomechanics.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Success Rate System</h3>

              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-800 font-semibold italic">
                  Physics-based results. Not swing tips for 25-year-olds.
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                This isn&apos;t theory or guesswork. It&apos;s a proven system used by 1,000+ senior golfers to gain distance and eliminate pain.
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
              href="#enroll"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Yes! Show Me The 7-Step System
            </a>
            <p className="text-gray-500 mt-4">Instant access. Start training in 5 minutes.</p>
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
              href="#enroll"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Put Your Name on This Board
            </a>
            <p className="text-gray-500 mt-4">Join 1,000+ senior golfers who gained distance</p>
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
            Everything You Need to Add 20-50 Yards & Play Pain-Free Golf
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The complete 7-step system used by 1,000+ senior golfers to restore distance, eliminate pain, and dominate their foursome
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
            <p className="text-center text-gray-500 mb-8">Total value: <span className="font-bold text-gray-900">$2,532</span></p>

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
                  <span><strong>Module 1:</strong> Quick Wins</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 2:</strong> The Foundation - Steps 1-3</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 3:</strong> Downswing & Impact - Steps 4-5</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 4:</strong> Release & Finish - Steps 6-7</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Module 5:</strong> Put It All Together</span>
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
              <p className="text-gray-600 mb-2">Total Value: <span className="line-through">$2,532</span></p>
              <p className="text-4xl font-bold text-gray-900 mb-2">Today Just $997</p>
              <p className="text-green-600 font-semibold mb-6">(Save $1,535!)</p>
              <a
                href="#enroll"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
              >
                Enroll in Senior Golf Mastery
              </a>
              <p className="text-gray-500 mt-4 text-sm">Instant access. Start training in 5 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peter Testimonial */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-24 h-24 bg-[#1565c0] rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              P
            </div>
            <div>
              <p className="text-xl text-gray-700 italic mb-4">
                &quot;It was amazing… I&apos;m hitting the sweet spot now and getting more distance—it&apos;s just easier.&quot;
              </p>
              <p className="text-gray-600 font-semibold">- Peter Schmitt, 78</p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 md:p-12">
            <p className="text-green-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Try It Risk Free
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              100% Money Back Guarantee
            </h2>
            <p className="text-gray-700 mb-8">
              We built Senior Golf Mastery to help senior golfers add effortless distance and play pain-free. If it doesn&apos;t do that for you, we don&apos;t want your money.
            </p>
            <a
              href="#enroll"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Enroll in Senior Golf Mastery
            </a>
            <p className="text-gray-500 mt-4 text-sm">Instant access. Start training in 5 minutes.</p>
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
                Dr. Jake Berman, PT, DPT, started as a physical therapist helping golfers overcome back pain. But he kept seeing the same pattern:
              </p>
              <p className="text-white font-semibold">
                Senior golfers losing 30-50 yards... and nobody could tell them why.
              </p>
              <p>
                Traditional golf instructors said &quot;turn more&quot; or &quot;swing harder.&quot; That just made things worse — more pain, less distance, more frustration.
              </p>
              <p className="bg-white/10 p-4 rounded-lg border-l-4 border-[#F26B4E] text-white">
                <strong>Here&apos;s what Jake discovered:</strong> You&apos;re not losing distance because of age. You&apos;re losing distance because your body is compensating in ways that rob you of power and cause pain.
              </p>
              <p>
                That&apos;s why he developed <strong>The Berman Method</strong> — a physics-based approach designed specifically for senior golfers.
              </p>
              <p>
                Jake&apos;s method isn&apos;t based on theory or &quot;pro tour technique.&quot; It&apos;s grounded in how the body actually functions, especially as we age.
              </p>

              <div className="mt-6 space-y-2">
                {["Gain real distance off the tee", "Improve consistency", "Play more often, with less pain"].map((result, index) => (
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
      <section id="enroll" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Add 30+ Yards & Play Pain-Free?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 1,000+ senior golfers who&apos;ve transformed their game with Senior Golf Mastery.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Golf Mastery</h3>
            <p className="text-gray-600 mb-2">Complete 7-Step System + All Bonuses + Lifetime Access</p>
            <p className="text-gray-400 line-through mb-2">$2,532</p>
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
