import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { twentyMoreYardsEvent } from "@/config/events";

export const metadata: Metadata = {
  title: "You're In! | 20 More Yards Live Event with Dr. Jake Berman",
  description:
    "Your seat for the 20 More Yards 2-day live event is confirmed. Watch the welcome video from Dr. Jake and see what to expect.",
  robots: { index: false, follow: false },
};

export default function TwentyMoreYardsThankYouPage() {
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
              You&apos;re Registered
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
            Your Seat Is Saved.
          </h1>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto mb-2">
            You&apos;re on the list for <strong className="text-[#1a365d]">20 More Yards</strong> &mdash; two
            days, live with Dr. Jake Berman.
          </p>
          <p className="font-serif italic text-[#1a365d]/70 text-base sm:text-lg mb-10">
            Check your inbox for the confirmation &amp; your Zoom link. Then press play below. &darr;
          </p>

          {/* Watch this first — Jake's video */}
          {/* TODO(BERMAN): Replace the src below with Jake's welcome video embed URL once edited. */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(26,54,93,0.3)] border-2 border-[#1a365d] bg-[#1a365d]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f5ede0]/80 gap-3 px-6 text-center">
              <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Welcome video from Dr. Jake
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5ede0]/50">
                {/* TODO(BERMAN): swap this placeholder for the real <iframe> embed */}
                Video coming soon
              </p>
            </div>
            {/*
            Example once the video is ready (delete the placeholder div above):
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
              title="Welcome from Dr. Jake — 20 More Yards"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            */}
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-[3px] bg-[#1a365d] mb-10 w-32 mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[#1a365d] mb-3">
            What Happens Next
          </h2>
          <p className="font-serif italic text-center text-[#1a365d]/70 mb-12 max-w-xl mx-auto">
            Three simple steps so you get the most out of your two days with Jake.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Check Your Email",
                body:
                  "We just sent your confirmation and the link to join live. If you don't see it in a few minutes, check spam and add us to your contacts.",
              },
              {
                num: "02",
                title: "Save the Dates",
                body: `${twentyMoreYardsEvent.days[0].date} & ${twentyMoreYardsEvent.days[1].date} at ${twentyMoreYardsEvent.days[0].time}. Put both days on your calendar now — showing up live is where the real gains happen.`,
              },
              {
                num: "03",
                title: "Show Up Ready",
                body:
                  "Have a club nearby and a little space to move. Come with questions — Jake answers them live, this isn't a recording.",
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

          {/* Reassurance line */}
          <p className="text-center mt-12 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
            See you live &middot; {twentyMoreYardsEvent.days[0].date} + {twentyMoreYardsEvent.days[1].date}
          </p>
        </div>
      </section>

      <Footer variant="poster" />
    </main>
  );
}
