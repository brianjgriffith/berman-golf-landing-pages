"use client";

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
import BookPopup from "@/components/BookPopup";
import { useState, useEffect } from "react";

export default function FreeBookPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Listen for custom event to open popup
  useEffect(() => {
    const handleOpenPopup = () => setIsPopupOpen(true);
    window.addEventListener("openBookPopup", handleOpenPopup);
    return () => window.removeEventListener("openBookPopup", handleOpenPopup);
  }, []);

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

      {/* Custom Popup with Book + Form */}
      <BookPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  );
}
