import { Metadata } from "next";
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
import EventRegistrationForm from "@/components/EventRegistrationForm";
import Footer from "@/components/Footer";
import { twentyMoreYardsEvent } from "@/config/events";

export const metadata: Metadata = {
  title: "20 More Yards in 2 Days | Free Live Event with Dr. Jake Berman",
  description:
    "Free 2-day live event June 24-25 with Dr. Jake Berman. Learn the exact protocol senior golfers are using to add 20+ yards, without rebuilding their swing.",
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

export default function TwentyMoreYardsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroEvent />
      <PerryStory />
      <WrongVsRight />
      <WhyTwoDays />
      <TheAgenda />
      <WalkAwayWith title="What You Walk Away With After Day 2" />
      <Testimonials
        eyebrow="Real Senior Golfers. Real Results."
        title="Don't let them tell you it's just your age."
        subtitle="Real results from golfers who refused to age out of the game."
      />
      <WhoThisIsFor />
      <Instructor />
      <JakeQuote quote={jakeEventQuote} />
      <EventLogistics />
      <EventRegistrationForm event={twentyMoreYardsEvent} />
      <Footer />
    </main>
  );
}
