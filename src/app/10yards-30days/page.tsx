import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "10+ Yards in 30 Days | The Berman Method - Senior Golf Training",
  description: "Join Dr. Jake Berman for 4 weeks of live group coaching designed specifically for senior golfers who want to move better, generate more power, and play pain-free.",
  openGraph: {
    title: "Add 10+ Yards to Your Drive in 30 Days",
    description: "4 weeks of live coaching with Dr. Jake Berman. Only $97.",
    type: "website",
  },
};

export default function TenYardsPage() {
  const testimonialVideos = [
    {
      name: "Michael Litwin",
      videoId: "JpIUsGG1nhk",
      quote: "I was 80% certain I was canceling my golf club membership. Now I've gained 50 yards and joined the 200 Club — at 77!",
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

  const faqs = [
    {
      question: "What if I can't attend the live sessions?",
      answer: "No problem! All sessions are recorded and you get lifetime access. Watch on your own schedule and catch up anytime.",
    },
    {
      question: "I've tried everything. Golf lessons, new clubs, YouTube videos. Why would this be different?",
      answer: "Because this isn't about swing tips—it's about how your body moves. Traditional instruction ignores the biomechanics of aging. Jake's method fixes the ROOT CAUSE of distance loss by activating the right muscles in the right order.",
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "Plan for about 1 hour for the live session, plus 30-45 minutes of practice during the week. That's it—no hours at the range required.",
    },
    {
      question: "What if I have back pain, hip issues, or knee problems?",
      answer: "This program was designed with exactly those issues in mind. Jake is a Doctor of Physical Therapy who specializes in helping golfers move pain-free. Many participants JOIN because of pain—and leave without it.",
    },
    {
      question: "I'm in my 70s/80s. Am I too old for this?",
      answer: "Absolutely not. Jake has worked with golfers well into their 80s and even 90s. The movements are gentle, progressive, and designed for aging bodies.",
    },
    {
      question: "Do I need any special equipment?",
      answer: "Nope. You can do everything from home with no clubs, no range, and no special gear. Just comfortable clothes and a little floor space.",
    },
    {
      question: "What makes you qualified to teach this?",
      answer: "Dr. Jake Berman is a Doctor of Physical Therapy with 15+ years of experience helping aging golfers. He's trained over 1,000 senior golfers with a 100% success rate.",
    },
    {
      question: "Is this just a bunch of stretches and exercises, or will I actually learn how to swing better?",
      answer: "Both. You'll learn the biomechanics behind an efficient swing AND the specific muscle activations that make it possible. It's not just theory—it's actionable movement you can feel immediately.",
    },
    {
      question: "Can I join if I'm not very tech-savvy?",
      answer: "Yes! We use simple Zoom meetings and you'll receive easy step-by-step instructions. If you can click a link, you can join.",
    },
    {
      question: "What happens after the 4 weeks are over?",
      answer: "You keep lifetime access to all recordings, the private community, and bonus materials. Continue practicing and improving on your own time.",
    },
    {
      question: "What if I miss a week?",
      answer: "All sessions are recorded. Watch the replay, do the exercises, and jump back in the following week. You won't fall behind.",
    },
    {
      question: "I'm a woman. Is this program designed for men?",
      answer: "This program is for ALL senior golfers. The biomechanics apply equally to men and women, and Jake has helped many female golfers gain distance and consistency.",
    },
    {
      question: "Is this a recurring subscription or a one-time payment?",
      answer: "One-time payment of $97. No subscriptions, no hidden fees, no surprises.",
    },
    {
      question: "When does the program start, and how do I access it?",
      answer: "The program starts January 21st. After you enroll, you'll receive an email with your Zoom link and all the details to get started.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section - Two Column with VSL */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-base md:text-lg px-6 py-2 rounded-full">
              Attention: Senior Golfers
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Copy */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Add 10+ Yards to Your Drive in the Next 30 Days
              </h1>
              <p className="text-xl text-[#F26B4E] font-semibold mb-4">
                Without Expensive Lessons, New Equipment, or &quot;Swinging Harder&quot;
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Join Dr. Jake Berman for 4 weeks of live group coaching designed specifically for senior golfers who want to move better, generate more power, and play pain-free.
              </p>
              <a
                href="#enroll"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-3"
              >
                Secure Your Spot - Only $97
              </a>
              <p className="text-gray-500 text-sm">4 Live Weekly Sessions | 100% Money-Back Guarantee</p>
            </div>

            {/* Right Column - VSL Video */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/yX9__f-dBgw"
                title="30 Day Distance Breakthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
            {[
              "1,000+ Senior Golfers Trained",
              "100% Success Rate",
              "Gain 10+ Yards",
              "Ages into 80s/90s",
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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 7-Step Berman Method</h3>
              <p className="text-gray-600 mb-4">
                <strong>Train from home</strong> — no clubs, no range, no travel
              </p>
              <p className="text-gray-600 mb-4">
                Follow Jake&apos;s proven 7-step system that fixes the ROOT CAUSE of distance loss. Each module adds 5-10 yards by activating the right muscles in the right order.
              </p>
              <p className="text-gray-500 text-sm">
                Bite-sized lessons you can complete in 30-45 minutes. Watch, practice, see results.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Movements That Add Distance</h3>
              <p className="text-gray-600 mb-4">
                <strong>Stop guessing.</strong> Start activating the muscles that matter.
              </p>
              <p className="text-gray-600 mb-4">
                Jake shows you EXACTLY which muscles to fire (and which to relax) to unlock explosive power without pain.
              </p>
              <p className="text-gray-500 text-sm">
                No wasted reps. No confusing drills. Just proven movements backed by physics and biomechanics.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Success Rate System</h3>
              <p className="text-gray-600 mb-4">
                <strong>Physics-based results.</strong> Not swing tips for 25-year-olds.
              </p>
              <p className="text-gray-600 mb-4">
                This isn&apos;t theory or guesswork. It&apos;s a proven system used by 1,000+ senior golfers to gain distance and eliminate pain.
              </p>
              <p className="text-gray-500 text-sm">
                100% of clients who complete the program gain distance. Not 90%. Not 95%. 100%.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xl font-bold text-gray-900 mb-6">Ready to Add 10+ Yards in 30 Days?</p>
            <a
              href="#enroll"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Yes! Reserve My Spot for $97
            </a>
            <p className="text-gray-500 mt-4">4 Weeks with Dr. Jake | Only $97</p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Introducing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            30 Day Distance Breakthrough
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here&apos;s what you get:
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-gray-700 mb-8 text-center">
              Starting January 21st, you&apos;ll join Dr. Jake Berman for 4 live group coaching sessions where he&apos;ll guide you through the exact system that&apos;s helped 1,000+ senior golfers gain 20-50 yards.
            </p>

            {/* Main Offer */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                4 Live Weekly Zoom Sessions with Dr. Jake <span className="text-gray-500 font-normal">($497 Value)</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#F26B4E] font-bold">Week 1:</span> Foundation & Muscle Activation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26B4E] font-bold">Week 2:</span> Top of Backswing Mastery
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26B4E] font-bold">Week 3:</span> Downswing & Impact
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26B4E] font-bold">Week 4:</span> Release & Finish
                </li>
              </ul>
            </div>

            {/* Bonuses */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">BONUS MATERIALS (Included Free):</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lifetime Access to Recordings <span className="text-gray-500">($97 Value)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Private Community Access <span className="text-gray-500">($97 Value)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  BONUS: Weekly Workout Videos <span className="text-gray-500">($197 Value)</span>
                </li>
              </ul>
            </div>

            {/* Price */}
            <div className="text-center bg-green-50 rounded-xl p-6">
              <p className="text-gray-600 mb-2">Total Value: <span className="line-through">$888</span></p>
              <p className="text-3xl font-bold text-gray-900 mb-4">Today Just $97 <span className="text-green-600">(Save $791!)</span></p>
              <a
                href="#enroll"
                className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
              >
                Enroll Now for $97
              </a>
              <p className="text-gray-500 mt-4 text-sm">4 Live Sessions + Lifetime Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peter Testimonial */}
      <section className="py-12 bg-white">
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

      {/* What You Get Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Here&apos;s Exactly What You Get in Your 4-Week Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Weekly Zoom Sessions",
                description: "Every week, Jake will guide you through the exact biomechanics, drills, and muscle activations you need to unlock 10+ yards. Ask questions, get feedback, and train alongside other senior golfers just like you.",
              },
              {
                title: "Lifetime Access",
                description: "Even after the 4 weeks end, you keep permanent access to every recording. Rewatch, review, and reinforce anytime you need.",
              },
              {
                title: "Bonus: Private Community",
                description: "Join a private group of senior golfers all working toward the same goal. Share wins, ask questions, stay accountable.",
              },
              {
                title: "Bonus: Weekly Workout Videos",
                description: "Dealing with a specific mobility or strength issue? Jake provides supplemental workout videos you can do on your own schedule to accelerate results.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
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
              We built this 4-week intensive to help senior golfers add effortless distance and play pain-free. If it doesn&apos;t do that for you, we don&apos;t want your money.
            </p>
            <a
              href="#enroll"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Start My 4-Week Transformation
            </a>
            <p className="text-gray-500 mt-4 text-sm">100% Money-Back Guarantee</p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet The Senior Golfers Who Gained 20-50 Yards
          </h2>

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
            <p className="text-xl font-bold text-gray-900 mb-6">Ready to Join Them?</p>
            <a
              href="#enroll"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Secure My Spot - $97
            </a>
            <p className="text-gray-500 mt-4">Join the 30-Day Distance Breakthrough</p>
          </div>
        </div>
      </section>

      {/* Why This Works - Comparison Section */}
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
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Traditional Golf Lessons</h3>
              <p className="text-2xl font-bold text-gray-900 text-center mb-4">$150+<span className="text-base font-normal text-gray-500">/hour</span></p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Teaches techniques for younger, flexible bodies",
                  "\"Turn more\" and \"swing harder\" causes pain",
                  "Requires 10+ lessons to see any change",
                  "No understanding of biomechanics or pain",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <span className="text-gray-500 text-sm">10 lessons = $1,500+</span>
              </div>
            </div>

            {/* Speed Sticks / Training Aids */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Speed Sticks &amp; Training Aids</h3>
              <p className="text-2xl font-bold text-gray-900 text-center mb-4">$200-400+</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "One-size-fits-all approach",
                  "Encourages swinging harder — risky for seniors",
                  "No coaching or feedback included",
                  "Doesn't address root cause of distance loss",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <span className="text-gray-500 text-sm">Equipment only — no guidance</span>
              </div>
            </div>

            {/* 30-Day Distance Breakthrough */}
            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-6 shadow-lg border-2 border-[#F26B4E] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#F26B4E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span>
              </div>
              <h3 className="text-lg font-bold text-white text-center mb-2">30-Day Distance Breakthrough</h3>
              <p className="text-2xl font-bold text-white text-center mb-4">$97<span className="text-base font-normal text-blue-200"> one-time</span></p>
              <ul className="space-y-2 text-blue-100 text-sm">
                {[
                  "4 live coaching sessions with Dr. Jake",
                  "Designed specifically for senior golfers",
                  "Biomechanics-based — not swing tips",
                  "Train from home — no travel required",
                  "Lifetime access + community + bonuses",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
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

      {/* Leaderboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            These Golfers Refused to Accept Distance Loss.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#F26B4E] mb-8">
            Now They&apos;re Crushing Drives Again. Your Turn.
          </h3>

          <p className="text-gray-600 mb-8">
            Every name on this board is a senior golfer who decided they weren&apos;t done yet.
          </p>

          <p className="text-gray-700 mb-8">They were tired of:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Being the shortest ball off the tee",
              "Watching their buddies outdrive them",
              "Moving up tee boxes",
              "Losing the competitive edge that made golf fun",
            ].map((item, index) => (
              <span key={index} className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-700 mb-8">So they did something about it. <strong>Now it&apos;s your turn.</strong></p>

          <a
            href="#enroll"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            Put Your Name on This Board
          </a>
          <p className="text-gray-500 mt-4">Join the 30-Day Distance Breakthrough | $97</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Add 10+ Yards in 30 Days?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Dr. Jake Berman and 1,000+ senior golfers who&apos;ve transformed their game.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">30 Day Distance Breakthrough</h3>
            <p className="text-gray-600 mb-6">4 Live Weekly Sessions + Lifetime Access + All Bonuses</p>
            <p className="text-4xl font-bold text-gray-900 mb-6">$97</p>
            <a
              href="/10yards-30days/checkout"
              className="btn-primary block w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
            >
              Enroll Now for $97
            </a>
            <p className="text-gray-500 text-sm">100% Money-Back Guarantee | Secure Checkout</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
