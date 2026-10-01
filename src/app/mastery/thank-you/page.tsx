import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { masteryMembership as mm, annualBonusLive } from "@/config/masteryMembership";

export const metadata: Metadata = {
  title: "Welcome to Senior Golf Mastery | Berman Golf",
  description: "Your Senior Golf Mastery membership is confirmed.",
  robots: { index: false, follow: false },
};

// Per request: the 1-on-1 reminder only shows while the bonus is on offer, so
// an annual buyer after the deadline isn't promised a session they didn't get.
export const dynamic = "force-dynamic";

export default function MasteryThankYouPage() {
  const bonusLive = annualBonusLive();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-28 md:pt-32 pb-12 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-[#1565c0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-200 mb-4">Membership Confirmed</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Welcome to the Club. Yeah baby!</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto">
            You&apos;re in. <strong className="text-white">{mm.name}</strong> is yours &mdash; the full
            curriculum, the monthly coaching, and the Clubhouse. Your login details are on the way to
            your inbox.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">How To Get Started</h2>
          <p className="text-center text-gray-600 mb-12">Three steps to your first quick win.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Check Your Email",
                body: "Your login and access links are on the way. Not there in a few minutes? Check spam and add distance@bermangolf.com to your contacts.",
              },
              {
                num: "02",
                title: "Start With Module 1",
                body: "Begin with Quick Wins. It's built to fire up the right muscles and give you something you can feel in your very first session.",
              },
              {
                num: "03",
                title: "Say Hi in the Clubhouse",
                body: "Introduce yourself, and when you're ready, post a swing video. That's how Jake and the team get to know your swing.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-5xl font-extrabold text-[#F26B4E] leading-none mb-4">{step.num}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          {bonusLive && (
          <div className="mt-10 max-w-3xl mx-auto bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">Joined for the year?</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Don&apos;t Forget Your 1-on-1 With Dr. Jake</h3>
            <p className="text-gray-700">
              Annual members get a free private session with Jake. Look for a separate email with how
              to book it. Most golfers use it early, so everything after is aimed at their body specifically.
            </p>
          </div>
          )}

          <p className="text-center text-gray-600 mt-12">
            Questions? Email{" "}
            <a href="mailto:distance@bermangolf.com" className="font-bold text-[#F26B4E] hover:underline">
              distance@bermangolf.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
