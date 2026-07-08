"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { twentyMoreYardsSale as sale } from "@/config/downsell";

// Whether the real $997 GHL checkout form has been wired up yet.
// Stays false while the src/formId still contain the REPLACE_WITH sentinel —
// so this page shows a placeholder until the real form exists in downsell.ts.
const FORM_READY = !sale.checkoutForm.formId.startsWith("REPLACE_WITH");

export default function TwentyMoreYardsSaleCheckout() {
  useEffect(() => {
    if (!FORM_READY) return;
    // Load GHL form embed script only when a real form is present.
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
          <Link href="/20-more-yards-sale" className="flex items-center gap-2">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Enrollment</h1>

            {/* Product Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border-2 border-[#F26B4E]">
              <div className="flex justify-center -mt-10 mb-4">
                <span className="bg-[#F26B4E] text-white font-bold uppercase text-sm px-4 py-2 rounded-full">
                  Course + Clubhouse Year
                </span>
              </div>

              <div className="mb-6">
                <Image
                  src="/senior-golf-mastery-bundle-image.png"
                  alt="Senior Golf Mastery + Clubhouse"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                  {sale.name}
                </p>
                <p className="text-4xl font-bold text-gray-900">
                  {sale.price}
                  <span className="text-xl text-gray-500 font-normal"> today</span>
                </p>
                <p className="text-gray-500 text-xs mt-2 max-w-xs mx-auto">{sale.renewalNote}</p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 mb-3">What&apos;s Included:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Complete Senior Golf Mastery Course (5 Modules)",
                    "All Course Bonuses + Lifetime Access",
                    "1 Full Year in the Berman Clubhouse",
                    "Monthly Live Coaching Calls with Dr. Jake",
                    "Priority Support (You Jump the Line)",
                    "Access to All 30-Day Challenges",
                    "Tee Shot Transformation Course ($397 Value)",
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

            {/* Clubhouse-only step-down link */}
            <div className="text-center mb-6">
              <p className="text-gray-500 text-sm">
                Just want the Clubhouse?{" "}
                <Link href={sale.clubhouseOnly.checkoutPath} className="text-[#1565c0] hover:underline">
                  Join for {sale.clubhouseOnly.price}/year instead
                </Link>
              </p>
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

              {FORM_READY ? (
                /* GHL Form Embed */
                <iframe
                  src={sale.checkoutForm.src}
                  style={{ width: "100%", height: `${sale.checkoutForm.height}px`, border: "none", borderRadius: "3px" }}
                  id={sale.checkoutForm.id}
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={sale.checkoutForm.formName}
                  data-height={String(sale.checkoutForm.height)}
                  data-layout-iframe-id={sale.checkoutForm.id}
                  data-form-id={sale.checkoutForm.formId}
                  title={sale.checkoutForm.formName}
                />
              ) : (
                /* TODO(BERMAN): Placeholder until the real $997 GHL form exists.
                   Add the form to sale.checkoutForm in src/config/downsell.ts —
                   this block automatically swaps to the live embed. */
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <p className="font-bold text-gray-900 mb-2">Checkout Form Coming Soon</p>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    The secure {sale.price} payment form will appear here. (Placeholder — add the GHL
                    form ID in <code className="text-xs">src/config/downsell.ts</code>.)
                  </p>
                </div>
              )}
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
