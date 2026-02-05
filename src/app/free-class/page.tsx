import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import WalkAwayWith from "@/components/WalkAwayWith";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import VideoTransition from "@/components/VideoTransition";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Golf Workshop | The Berman Method - Out-Drive Your Buddies Again",
  description: "Join our free web class and learn the 7-step framework that's helped senior golfers gain 20-50+ yards, eliminate back pain, and prove age is just a number.",
  openGraph: {
    title: "Free Golf Workshop | The Berman Method",
    description: "Learn how senior golfers are adding 20-50 yards to their drives and playing pain-free golf.",
    type: "website",
  },
};

export default function FreeClassPage() {
  // Configure these for each workshop
  const workshopConfig = {
    date: "February 15th",
    time: "3:30 PM ET",
    // Replace with your actual GoHighLevel form webhook URL
    ghlFormAction: "#",
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero workshopDate={workshopConfig.date} workshopTime={workshopConfig.time} />
      <WhatYoullLearn />
      <WalkAwayWith />
      <WhoThisIsFor />
      <VideoTransition />
      <Instructor />
      <Testimonials />
      <RegistrationForm
        workshopDate={workshopConfig.date}
        workshopTime={workshopConfig.time}
        ghlFormAction={workshopConfig.ghlFormAction}
      />
      <Footer />
    </main>
  );
}
