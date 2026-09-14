import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seniorGolfMasteryCohort as cohort } from "@/config/cohort";
import { seniorGolfMastery as sgm } from "@/config/seniorGolfMastery";

export const metadata: Metadata = {
  title: "Welcome to Senior Golf Mastery | Berman Golf",
  description:
    "Your Senior Golf Mastery purchase is confirmed. Watch the welcome video from Dr. Jake and start your first module.",
  robots: { index: false, follow: false },
};

export default function SeniorGolfMasteryThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f5ede0] text-[#1a365d]">
      <Header />

      {/* Confirmation hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Kicker */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[100px]" />
            <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
              Order Confirmed
            </p>
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[100px]" />
          </div>

          {/* Checkmark */}
          <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-[#f5ede0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tight text-[#1a365d] mb-6">
            Welcome to the Club.
          </h1>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto mb-2">
            You&apos;re in. <strong className="text-[#1a365d]">Senior Golf Mastery</strong> is yours &mdash;
            and your {sgm.duration} start today.
          </p>
          <p className="font-serif italic text-[#1a365d]/70 text-base sm:text-lg mb-10">
            Your login details are on the way to your inbox. First, a quick word from Dr. Jake. &darr;
          </p>

          {/* Watch this first — Jake's video */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(26,54,93,0.3)] border-2 border-[#1a365d] bg-[#1a365d]">
            <iframe
              src="https://www.youtube.com/embed/ZajjA-uGlvU?rel=0"
              title="Welcome to Senior Golf Mastery — Dr. Jake"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-[3px] bg-[#1a365d] mb-10 w-32 mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[#1a365d] mb-3">
            How To Get Started
          </h2>
          <p className="font-serif italic text-center text-[#1a365d]/70 mb-12 max-w-xl mx-auto">
            Three steps to your first quick win.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Check Your Email",
                body:
                  "We just sent your account login and access link. If it's not there in a few minutes, check spam and add us to your contacts.",
              },
              {
                num: "02",
                title: "Start With Module 1",
                body:
                  "Begin with Quick Wins. It's built to fire up the right muscles and give you noticeable gains in your very first session.",
              },
              {
                num: "03",
                title: "Film Your First Video",
                body:
                  "At the end of week 1 you'll film your homework and upload it. A phone propped against your bag is all you need. That's the habit that makes the next twelve weeks work.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white border-2 border-[#1a365d] p-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)]"
              >
                <p className="font-display text-5xl font-black text-[#F26B4E] leading-none mb-4">
                  {step.num}
                </p>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d] mb-2">
                  {step.title}
                </h3>
                <p className="font-serif text-[#1a365d]/75 leading-relaxed text-[15px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Support line */}
          <p className="text-center mt-12 font-serif text-[#1a365d]/75">
            Questions about your order?{" "}
            <a
              href="mailto:distance@bermangolf.com"
              className="font-bold text-[#F26B4E] hover:underline"
            >
              distance@bermangolf.com
            </a>
          </p>
        </div>
      </section>

      {/* The 12 weeks — what the support actually is, and when it ends.
          Added Sept 2026 with the course -> program reposition. Buyers were
          sold twelve weeks of feedback; this is where that becomes concrete. */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white border-2 border-[#1a365d] p-8 md:p-10 shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#F26B4E] mb-3">
              Your Next {sgm.duration}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight text-[#1a365d] mb-6">
              Here&apos;s How The Coaching Works
            </h2>

            <div className="space-y-5 font-serif text-[#1a365d]/85 text-[17px] leading-relaxed">
              <p>
                <strong className="text-[#1a365d]">Every week &mdash; send me your swing.</strong> Each
                week of the program ends with homework. Film it, upload it, and I&apos;ll send back
                what&apos;s working, where your power is leaking, and the one thing to fix before you
                move on. Don&apos;t skip these. They&apos;re the difference between watching the course
                and actually changing.
              </p>
              <p>
                <strong className="text-[#1a365d]">Once a month &mdash; get on the call.</strong>{" "}
                {sgm.support.groupCalls.count} live group coaching calls across your {sgm.duration}. Bring
                questions. Every one is recorded if you can&apos;t make it live.
              </p>
              <p>
                <strong className="text-[#1a365d]">And don&apos;t forget your 1-on-1.</strong> You have a
                private virtual session with me included. Most golfers use it in the first couple of
                weeks so the rest of the program is aimed at their body specifically.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a365d]/15">
              <p className="font-serif text-[15px] text-[#1a365d]/70 leading-relaxed">
                The course and every bonus are yours for life. The weekly feedback and the group calls
                run for your {sgm.duration} from today &mdash; so start now rather than saving it for a
                quieter month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort call schedule — for cohort members */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-[#1a365d] text-[#f5ede0] p-8 md:p-10 shadow-[0_20px_60px_rgba(26,54,93,0.3)]">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#F26B4E] mb-3">
              Enrolled in the Cohort?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-2">
              Your Live Call Schedule
            </h2>
            <p className="font-serif text-[#f5ede0]/80 mb-8">
              Weeks 1&ndash;6 are six live Zoom calls with Dr. Jake &mdash; all at{" "}
              <strong className="text-white">{cohort.schedule.time}</strong>. Block these out now.
              Every call is recorded in case you ever miss one live. Weeks 7&ndash;12 have no scheduled
              calls &mdash; you film your range session each week and Jake sends back his critique.
            </p>

            <ol className="divide-y divide-[#f5ede0]/15 border-y border-[#f5ede0]/15">
              {cohort.schedule.sessions.map((date, i) => (
                <li key={date} className="flex items-center gap-4 py-3.5">
                  <span className="font-display text-xl font-black text-[#F26B4E] w-8 flex-none">
                    {i + 1}
                  </span>
                  <span className="font-serif text-base md:text-lg font-bold text-[#f5ede0]">
                    {date}
                  </span>
                  <span className="ml-auto font-serif text-sm text-[#f5ede0]/60">
                    {cohort.schedule.time}
                  </span>
                </li>
              ))}
            </ol>

            <p className="font-serif text-sm text-[#f5ede0]/60 mt-6">
              Your Zoom link for each call arrives by email before the session. Add{" "}
              <a href="mailto:distance@bermangolf.com" className="font-bold text-[#F26B4E] hover:underline">
                distance@bermangolf.com
              </a>{" "}
              to your contacts so it lands in your inbox.
            </p>
          </div>
        </div>
      </section>

      <Footer variant="poster" />
    </main>
  );
}
