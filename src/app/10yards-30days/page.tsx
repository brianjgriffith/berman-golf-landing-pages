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
    { name: "Michael Litwin", videoId: "JpIUsGG1nhk" },
    { name: "Pete", videoId: "p3dc2hx6teU" },
    { name: "Karen Reinecke", videoId: "-BtarQM1mVs" },
    { name: "Richard Rosenblatt", videoId: "jgMnW1dy1lU" },
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-semibold tracking-widest uppercase text-sm mb-4">
            Attention: Senior Golfers
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Add 10+ Yards to Your Drive in the Next 30 Days
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            (Without Expensive Lessons, New Equipment, or &quot;Swinging Harder&quot;)
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Join Dr. Jake Berman for 4 weeks of live group coaching designed specifically for senior golfers who want to move better, generate more power, and play pain-free—starting January 21st.
          </p>
          <a
            href="#enroll"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-6"
          >
            Secure Your Spot - Only $97
          </a>
          <p className="text-gray-600 mb-8">4 Live Weekly Sessions</p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              1,000+ Senior Golfers Trained
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Success Rate
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Gain 10+ Yards
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ages into 80s/90s
            </span>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Move", highlight: "Better" },
              { label: "Gain", highlight: "Distance" },
              { label: "Improve", highlight: "Consistency" },
              { label: "Play More", highlight: "Frequently" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 text-sm">{benefit.label}</p>
                <p className="text-xl font-bold text-gray-900">{benefit.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-16 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            How Senior Golfers Are Adding 10+ Yards In Just 30 Days
          </h2>

          {/* Video Embed */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <iframe
              src="https://www.youtube.com/embed/yX9__f-dBgw"
              title="30 Day Distance Breakthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <p className="text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Over the next 30 days, you&apos;ll learn how to move your body more efficiently so you can generate more power from your core and glutes, and increase your shoulder turn. This system is custom-tailored to the way a senior body moves—not the way a 20-year-old pro on the PGA Tour moves. You&apos;ll swing more efficiently, not harder, and gain distance without pain.
          </p>
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
          <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
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
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`${testimonial.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
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
              href="#"
              className="btn-primary block w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide mb-4"
            >
              Enroll Now - Start January 21st
            </a>
            <p className="text-gray-500 text-sm">100% Money-Back Guarantee | Secure Checkout</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
