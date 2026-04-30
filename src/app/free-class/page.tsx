import { Metadata } from "next";
import Header from "@/components/Header";
import HeroV2 from "@/components/HeroV2";
import StatStrip from "@/components/StatStrip";
import WrongVsRight from "@/components/WrongVsRight";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import WalkAwayWith from "@/components/WalkAwayWith";
import BonusGift from "@/components/BonusGift";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import VideoTransition from "@/components/VideoTransition";
import Instructor from "@/components/Instructor";
import JakeQuote from "@/components/JakeQuote";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { workshops } from "@/config/workshops";

export const metadata: Metadata = {
  title: "Golf Lessons Don't Work | The Activation Method - Dr. Jake Berman",
  description: "99% of golf instruction is designed for a 25-year-old body. Join Dr. Jake Berman's free, live class on The Activation Method and learn how seniors are gaining 20-50 yards without rebuilding their swing.",
  openGraph: {
    title: "Golf Lessons Don't Work | The Activation Method",
    description: "Free live class with Dr. Jake Berman on how senior golfers are gaining distance without rebuilding their swing.",
    type: "website",
  },
};

export default function FreeClassPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroV2 workshops={workshops} />
      <StatStrip />
      <WrongVsRight />
      <WhatYoullLearn />
      <WalkAwayWith />
      <BonusGift />
      <WhoThisIsFor />
      <VideoTransition />
      <Instructor />
      <JakeQuote />
      <Testimonials
        eyebrow="Real Senior Golfers. Real Results."
        title="Don't let them tell you it's just your age."
        subtitle="Real results from golfers who refused to age out of the game."
      />
      <RegistrationForm workshops={workshops} />
      <Footer />
    </main>
  );
}
