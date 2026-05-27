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
import { twentyMoreYardsEvent } from "@/config/events";

export const metadata: Metadata = {
  title: "20 More Yards in 2 Days | Free Live Event with Dr. Jake Berman",
  description:
    "Free 2-day live event June 24 + 25, 2026 with Dr. Jake Berman. Learn the exact protocol senior golfers are using to add 20+ yards, without rebuilding their swing.",
  openGraph: {
    title: "20 More Yards. In 2 Days. Live with Dr. Jake.",
    description:
      "Two free live sessions where senior golfers learn The Activation Method, and start gaining 20+ yards without rebuilding their swing.",
    type: "website",
  },
};

const jakeEventQuote = (
  <>
    &ldquo;This isn&apos;t really about yards. It&apos;s about what the last 10, 15, 20 years of your golf life look like.{" "}
    <span className="text-[#F26B4E]">Shrinking</span> with every season, or playing better than you have in a decade.&rdquo;
  </>
);

const eventSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "20 More Yards: Live 2-Day Event with Dr. Jake Berman",
  description:
    "Free 2-day live event teaching senior golfers The Activation Method to add 20+ yards without rebuilding their swing.",
  startDate: "2026-06-24T10:00:00-04:00",
  endDate: "2026-06-25T11:30:00-04:00",
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
    validFrom: "2026-05-01T00:00:00-04:00",
  },
});

export default function TwentyMoreYardsPage() {
  return (
    <main className="min-h-screen">
      <Script id="event-schema" type="application/ld+json" strategy="beforeInteractive">
        {eventSchema}
      </Script>
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
      />
      <WhoThisIsFor variant="poster" />
      <Instructor variant="poster" />
      <JakeQuote quote={jakeEventQuote} variant="poster" />
      <EventLogistics />
      <FAQ variant="poster" />
      <EventRegistrationForm event={twentyMoreYardsEvent} />
      <Footer variant="poster" />
      <StickyMobileCTA />
    </main>
  );
}
