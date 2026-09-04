import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import HeroEvent from "@/components/HeroEvent";
import PerryStory from "@/components/PerryStory";
import WrongVsRight from "@/components/WrongVsRight";
import WhyTwoDays from "@/components/WhyTwoDays";
import TheAgenda from "@/components/TheAgenda";
import WalkAwayWith from "@/components/WalkAwayWith";
import Testimonials from "@/components/Testimonials";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Instructor from "@/components/Instructor";
import JakeQuote from "@/components/JakeQuote";
import EventLogistics from "@/components/EventLogistics";
import FAQ from "@/components/FAQ";
import EventRegistrationForm from "@/components/EventRegistrationForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { twentyMoreYardsEvent, isWaitlist, longDates, ctaLabel } from "@/config/events";

const event = twentyMoreYardsEvent;
const waitlist = isWaitlist(event);

export const metadata: Metadata = waitlist
  ? {
      title: "20 More Yards Challenge Waitlist | Dr. Jake Berman",
      description: `The next free 2-day 20 More Yards Challenge runs ${event.windowLabel}. Join the waitlist and get the dates before registration opens to everyone else.`,
      openGraph: {
        title: "20 More Yards. In 2 Days. Live with Dr. Jake.",
        description: `The next free 2-day challenge runs ${event.windowLabel}. Get on the waitlist for first access.`,
        type: "website",
      },
    }
  : {
      title: "20 More Yards in 2 Days | Free Live Event with Dr. Jake Berman",
      description: `Free 2-day live event ${longDates(event)}, 2026 with Dr. Jake Berman. Learn the exact protocol senior golfers are using to add 20+ yards, without rebuilding their swing.`,
      openGraph: {
        title: "20 More Yards. In 2 Days. Live with Dr. Jake.",
        description:
          "Two free live sessions where senior golfers learn The Activation Method, and start gaining 20+ yards without rebuilding their swing.",
        type: "website",
      },
    };

const jakeEventQuote = (
  <>
    &ldquo;You&apos;ve got maybe 10 quality golf years left. Spend them{" "}
    <span className="text-[#F26B4E]">out-driving your buddies</span> &mdash; not watching them out-drive you.&rdquo;
  </>
);

// Schema.org Event requires a startDate, so this is emitted only when the
// run is actually booked. While on the waitlist the page ships no Event
// markup rather than invalid markup for a date that doesn't exist yet.
// NOTE: the dates below are the JSON-LD copy of config/events.ts `days` —
// update both when the next run is scheduled.
const eventSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "20 More Yards: Live 2-Day Event with Dr. Jake Berman",
  description:
    "Free 2-day live event teaching senior golfers The Activation Method to add 20+ yards without rebuilding their swing.",
  startDate: "2026-08-26T10:00:00-04:00",
  endDate: "2026-08-27T11:30:00-04:00",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://20moreyards.com/",
  },
  organizer: {
    "@type": "Organization",
    name: "Berman Golf",
    url: "https://bermangolf.com/",
  },
  performer: {
    "@type": "Person",
    name: "Dr. Jake Berman, PT, DPT",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://20moreyards.com/#register",
    validFrom: "2026-08-05T00:00:00-04:00",
  },
});

export default function TwentyMoreYardsPage() {
  return (
    <main className="min-h-screen">
      {!waitlist && (
        <Script id="event-schema" type="application/ld+json" strategy="beforeInteractive">
          {eventSchema}
        </Script>
      )}
      <Header />
      <HeroEvent />
      <PerryStory />
      <WrongVsRight variant="poster" />
      <WhyTwoDays />
      <TheAgenda />
      <WalkAwayWith title="What you walk away with after Day 2." variant="poster" />
      <Testimonials
        eyebrow="Real Senior Golfers. Real Results."
        title="Don't let them tell you it's just your age."
        subtitle="Real results from golfers who refused to age out of the game."
        variant="poster"
        ctaLabel={ctaLabel(event)}
      />
      <WhoThisIsFor variant="poster" ctaLabel={ctaLabel(event)} />
      <Instructor variant="poster" />
      <JakeQuote quote={jakeEventQuote} variant="poster" />
      <EventLogistics />
      <FAQ variant="poster" />
      <EventRegistrationForm event={event} />
      <Footer variant="poster" />
      <StickyMobileCTA />
    </main>
  );
}
