import { Metadata } from "next";
import Header from "@/components/Header";
import BookHero from "@/components/BookHero";
import BookVSL from "@/components/BookVSL";
import BookWhatYoullLearn from "@/components/BookWhatYoullLearn";
import BookTestimonials from "@/components/BookTestimonials";
import VideoTransition from "@/components/VideoTransition";
import Instructor from "@/components/Instructor";
import BookForm from "@/components/BookForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Book | The Berman Method - Add Distance Back to Your Drives",
  description: "Get your free digital copy of The Berman Method. Learn how senior golfers are adding 20-50 yards to their drives and playing pain-free golf.",
  openGraph: {
    title: "Free Book | The Berman Method",
    description: "Add distance back to your drives, pain-free. Get your free digital copy.",
    type: "website",
  },
};

export default function FreeBookPage() {
  // Replace with your actual GoHighLevel form webhook URL
  const ghlFormAction = "#";

  return (
    <main className="min-h-screen">
      <Header />
      <BookHero />
      <BookVSL />
      <BookWhatYoullLearn />
      <BookTestimonials />
      <VideoTransition />
      <Instructor />
      <BookForm ghlFormAction={ghlFormAction} />
      <Footer />
    </main>
  );
}
