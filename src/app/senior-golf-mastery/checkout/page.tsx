"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SeniorGolfMasteryCheckout() {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement("script");
    script.src = "https://link.physiofunnels.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/senior-golf-mastery" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-[#F26B4E]">BERMAN</span>
              <span className="text-gray-800">GOLF</span>
            </span>
          </Link>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure Checkout
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Order</h1>

            {/* Product Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/senior-golf-mastery-bundle-image.png"
                    alt="Senior Golf Mastery"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Senior Golf Mastery</h2>
                  <p className="text-gray-600 text-sm">Complete 7-Step System + All Bonuses</p>
                  <p className="text-gray-400 line-through text-sm mt-1">$3,032</p>
                  <p className="text-2xl font-bold text-gray-900">$997</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 mb-3">What&apos;s Included:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Senior Golf Mastery Course (5 Modules)",
                    "1-on-1 Virtual Session with Dr. Jake ($500 Value)",
                    "Senior Golf Mastery PDF Book",
                    "Pre-Shot Routine Guide",
                    "Weight Shift Hack for Seniors",
                    "Weekly Workout Videos",
                    "Golf Gear Guide for Seniors",
                    "Lifetime Access",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/guarantee-badge.png"
                  alt="100% Money Back Guaranteed"
                  width={80}
                  height={80}
                  className="object-contain flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-gray-900">100% Money-Back Guarantee</p>
                  <p className="text-gray-600 text-sm">
                    If you don&apos;t see results, we don&apos;t want your money. Simple as that.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
                  <Image
                    src="/peter-schmitt.png"
                    alt="Pete"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white italic mb-2">
                    &quot;Day one max was 179 yards. Final max was 208 yards. Everything clicked. Boom.&quot;
                  </p>
                  <p className="text-blue-200 font-semibold text-sm">- Pete, 78</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Payment Details</h2>

              {/* GHL Form Embed */}
              <iframe
                src="https://link.physiofunnels.com/widget/form/e7HaJyrtlmofNOCv6wTE"
                style={{ width: "100%", height: "750px", border: "none", borderRadius: "3px" }}
                id="inline-e7HaJyrtlmofNOCv6wTE"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Senior Golf Mastery"
                data-height="750"
                data-layout-iframe-id="inline-e7HaJyrtlmofNOCv6wTE"
                data-form-id="e7HaJyrtlmofNOCv6wTE"
                title="Senior Golf Mastery"
              />
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure SSL
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Money-Back Guarantee
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Berman Golf. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
