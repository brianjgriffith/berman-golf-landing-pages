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
  title: "Out-Drive Your Buddies This Summer | Free Live Class with Dr. Jake Berman",
  description: "Gain 20-50 yards without rebuilding your swing. Join Dr. Jake Berman (PT, DPT) for a free, live class on the biomechanics that add distance for senior golfers — no matter your age or handicap.",
  openGraph: {
    title: "Out-Drive Your Buddies This Summer | Free Live Class",
    description: "Free live class with Dr. Jake Berman on how senior golfers are gaining 20-50 yards without rebuilding their swing.",
    type: "website",
  },
};

export default function FreeClassPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroV2 workshops={workshops} />
      <VideoTransition />
      <StatStrip />
      <WrongVsRight />
      <WhatYoullLearn />
      <WalkAwayWith />
      <BonusGift />
      <WhoThisIsFor />
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
