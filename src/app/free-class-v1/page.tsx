import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import WalkAwayWith from "@/components/WalkAwayWith";
import BonusGift from "@/components/BonusGift";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import VideoTransition from "@/components/VideoTransition";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { workshops } from "@/config/workshops";

export const metadata: Metadata = {
  title: "Free Golf Workshop (Archive v1) | The Berman Method",
  description: "Archived earlier version of the free golf workshop landing page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FreeClassV1Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero workshops={workshops} />
      <WhatYoullLearn />
      <WalkAwayWith />
      <BonusGift />
      <WhoThisIsFor />
      <VideoTransition />
      <Instructor />
      <Testimonials />
      <RegistrationForm workshops={workshops} />
      <Footer />
    </main>
  );
}
