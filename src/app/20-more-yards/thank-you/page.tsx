import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClubhouseOffer from "@/components/ClubhouseOffer";
import { twentyMoreYardsEvent, isWaitlist, longDates, timeLabel } from "@/config/events";

const event = twentyMoreYardsEvent;
const waitlist = isWaitlist(event);

export const metadata: Metadata = {
  title: waitlist
    ? "You're On The List | 20 More Yards Challenge"
    : "You're In! | 20 More Yards Live Event with Dr. Jake Berman",
  description: waitlist
    ? "You're on the waitlist for the next 20 More Yards Challenge. You'll get the dates before registration opens to everyone else."
    : "Your seat for the 20 More Yards 2-day live event is confirmed. Watch the welcome video from Dr. Jake and see what to expect.",
  robots: { index: false, follow: false },
};

const registeredSteps = [
  {
    num: "01",
    title: "Check Your Email",
    body:
      "We just sent your confirmation and the link to join live. If you don't see it in a few minutes, check spam and add us to your contacts.",
  },
  {
    num: "02",
    title: "Save the Dates",
    body: `${longDates(event)} at ${timeLabel(event)}. Put both days on your calendar now — showing up live is where the real gains happen.`,
  },
  {
    num: "03",
    title: "Show Up Ready",
    body:
      "Have a club nearby and a little space to move. Come with questions — Jake answers them live, this isn't a recording.",
  },
];

const waitlistSteps = [
  {
    num: "01",
    title: "Check Your Email",
    body:
      "We just sent your confirmation. If you don't see it in a few minutes, check spam and add distance@bermangolf.com to your contacts — that's where the dates will come from.",
  },
  {
    num: "02",
    title: "Watch for the Dates",
    body: `We're locking ${event.windowLabel} right now. The waitlist gets the dates and the registration link first, before anyone else sees them.`,
  },
  {
    num: "03",
    title: "Don't Wait to Start",
    body:
      "You don't have to sit still until then. Jake coaches senior golfers live every month inside the Clubhouse — details below.",
  },
];

export default function TwentyMoreYardsThankYouPage() {
  const steps = waitlist ? waitlistSteps : registeredSteps;

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
              {waitlist ? "You're On The List" : "You're Registered"}
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
            {waitlist ? "You're First In Line." : "Your Seat Is Saved."}
          </h1>

          {waitlist ? (
            <>
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto mb-2">
                You&apos;re on the waitlist for the next{" "}
                <strong className="text-[#1a365d]">20 More Yards Challenge</strong> &mdash; two
                days, live with Dr. Jake Berman, {event.windowLabel}. This is all about never
                being the <strong className="text-[#1a365d]">shortest ball off the tee</strong>{" "}
                again.
              </p>
              <p className="font-serif italic text-[#1a365d]/70 text-base sm:text-lg mb-10">
                The moment the dates are set, you get them &mdash; before we open registration to
                everyone else. Then press play below. &darr;
              </p>
            </>
          ) : (
            <>
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto mb-2">
                You&apos;re on the list for <strong className="text-[#1a365d]">20 More Yards</strong> &mdash; two
                days, live with Dr. Jake Berman. This is all about never being the{" "}
                <strong className="text-[#1a365d]">shortest ball off the tee</strong> again.
              </p>
              <p className="font-serif italic text-[#1a365d]/70 text-base sm:text-lg mb-10">
                Check your inbox for the confirmation &amp; your Zoom link. Then press play below. &darr;
              </p>
            </>
          )}

          {/* Watch this first — Jake's video */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(26,54,93,0.3)] border-2 border-[#1a365d] bg-[#1a365d]">
            <iframe
              src="https://www.youtube.com/embed/Uzhoz936K-8?rel=0"
              title="Welcome from Dr. Jake — 20 More Yards"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
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
            {waitlist
              ? "Three simple steps while we finalize the dates."
              : "Three simple steps so you get the most out of your two days with Jake."}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
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
            {waitlist
              ? `Next run · ${event.windowLabel} · Dates coming to your inbox`
              : `See you live · ${longDates(event)}`}
          </p>
        </div>
      </section>

      {/* Clubhouse soft-sell */}
      <ClubhouseOffer
        variant="poster"
        eyebrow={waitlist ? "While You Wait" : "Before It Starts"}
        title={
          waitlist
            ? "Don't sit still until the dates drop."
            : "Two days is the start. Not the finish."
        }
        intro={
          waitlist
            ? "The challenge is two days. Your body doesn't change in two days — it changes when someone keeps checking your work. That's the Berman Clubhouse: a monthly live call with Jake, your swing video broken down, and senior golfers doing the same work you are."
            : "You've got your seat. The golfers who actually keep the yards are the ones who don't stop when the second session ends. That's the Berman Clubhouse: a monthly live call with Jake, your swing video broken down, and senior golfers doing the same work you are."
        }
      />

      <Footer variant="poster" />
    </main>
  );
}
