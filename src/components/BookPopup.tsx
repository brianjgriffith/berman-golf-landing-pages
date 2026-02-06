"use client";

import { useEffect } from "react";
import Image from "next/image";

interface BookPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookPopup({ isOpen, onClose }: BookPopupProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* Left - Book Image */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-56 h-72 md:w-64 md:h-80">
              <Image
                src="/berman-book-3d.png"
                alt="The Berman Method Book"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-6 text-center">
              Get Your Free Digital Copy
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Enter your details and we&apos;ll send The Berman Method straight to your inbox.
            </p>
          </div>

          {/* Right - GHL Form */}
          <div className="w-full min-h-[500px]">
            <iframe
              src="https://link.physiofunnels.com/widget/form/D18SxDhr2xWsOI90DgLb"
              style={{ width: "100%", height: "550px", border: "none", borderRadius: "3px" }}
              id="popup-form-D18SxDhr2xWsOI90DgLb"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="(TM) Berman Method Book Freebie"
              data-height="550"
              data-layout-iframe-id="popup-form-D18SxDhr2xWsOI90DgLb"
              data-form-id="D18SxDhr2xWsOI90DgLb"
              title="(TM) Berman Method Book Freebie"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
