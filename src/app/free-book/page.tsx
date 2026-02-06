import { Metadata } from "next";
import Script from "next/script";
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
  return (
    <main className="min-h-screen">
      <Header />
      <BookHero />
      <BookVSL />
      <BookWhatYoullLearn />
      <BookTestimonials />
      <VideoTransition />
      <Instructor />
      <BookForm />
      <Footer />

      {/* GHL Popup Form */}
      <iframe
        src="https://link.physiofunnels.com/widget/form/D18SxDhr2xWsOI90DgLb"
        style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id="popup-D18SxDhr2xWsOI90DgLb"
        data-layout='{"id":"POPUP"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="(TM) Berman Method Book Freebie"
        data-height="525"
        data-layout-iframe-id="popup-D18SxDhr2xWsOI90DgLb"
        data-form-id="D18SxDhr2xWsOI90DgLb"
        title="(TM) Berman Method Book Freebie"
      />
      <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  );
}
