"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { seniorGolfMasteryCohort as cohort } from "@/config/cohort";

// Whether the real GHL cohort checkout form has been wired up yet.
// TODO(BERMAN): once cohort.checkoutForm has real IDs, set this to true.
const FORM_READY = !cohort.checkoutForm.formId.startsWith("REPLACE_WITH");

export default function SeniorGolfMasteryCohortCheckout() {
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
    <main className="min-h-screen bg-[#f5ede0] text-[#1a365d]">
      {/* Poster header */}
      <header className="bg-[#1a365d] text-[#f5ede0] border-b-2 border-[#1a365d]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/senior-golf-mastery-cohort" className="flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#F26B4E] leading-none">
              Berman
            </span>
            <span className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#f5ede0] leading-none">
              Golf
            </span>
          </Link>
          <div className="flex items-center gap-2 text-[#f5ede0]/70 text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
            <svg className="w-5 h-5 text-[#F26B4E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure Checkout
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* ===== Left: Order summary ===== */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a365d] mb-8 leading-tight">
              Complete Your Enrollment
            </h1>

            {/* Product card */}
            <div className="bg-white border-2 border-[#1a365d] p-6 mb-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-24 h-24 bg-[#1a365d]/10 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/jake-coaching.png"
                    alt="Senior Golf Mastery Cohort"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d] leading-tight">
                    {cohort.name}
                  </h2>
                  <p className="font-serif text-[#1a365d]/70 text-sm">
                    6 weeks live with Dr. Jake + course, bonuses &amp; Clubhouse
                  </p>
                  <p className="text-[#1a365d]/40 line-through text-sm mt-1">$6,596+</p>
                  <p className="font-display text-2xl font-black text-[#1a365d]">{cohort.price}</p>
                </div>
              </div>

              <div className="border-t border-[#1a365d]/15 pt-4">
                <p className="font-display font-black uppercase tracking-tight text-[#1a365d] mb-3 text-sm">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2 text-sm font-serif text-[#1a365d]/75">
                  {[
                    "6 Weeks Live Group Coaching with Dr. Jake ($3,000 Value)",
                    "Full Senior Golf Mastery Course (5 Modules)",
                    "1 Full Year in the Berman Clubhouse ($564 Value)",
                    "Tee Shot Transformation Course (included with Clubhouse)",
                    "FREE 1-on-1 Virtual Session with Dr. Jake — first 10 only ($500 Value)",
                    "Senior Golf Mastery PDF Book",
                    "Pre-Shot Routine + Weight Shift Hack",
                    "Weekly Workout Videos + Gear Guide",
                    "Lifetime Access to Course Material",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#F26B4E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white border-2 border-[#1a365d] p-6 mb-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
              <div className="flex items-center gap-4">
                <Image
                  src="/guarantee-badge.png"
                  alt="100% Money-Back Guarantee"
                  width={80}
                  height={80}
                  className="object-contain flex-shrink-0"
                />
                <div>
                  <p className="font-display font-black uppercase tracking-tight text-[#1a365d]">
                    Show Up &amp; You&apos;re Covered
                  </p>
                  <p className="font-serif text-[#1a365d]/70 text-sm">
                    Do the work, come to the calls. No real progress? We don&apos;t want your money.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#1a365d] text-[#f5ede0] p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f5ede0]/30">
                  <Image
                    src="/peter-schmitt.png"
                    alt="Pete"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-serif italic mb-2">
                    &ldquo;Day one max was 179 yards. Final max was 208 yards. Everything clicked.
                    Boom.&rdquo;
                  </p>
                  <p className="text-[#F26B4E] font-bold text-sm uppercase tracking-wider">&mdash; Pete, 78</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right: Payment ===== */}
          <div className="lg:col-span-3" id="payment">
            <div className="bg-white border-2 border-[#1a365d] p-6 md:p-8 shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
              <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d] mb-6 text-center">
                Payment Details
              </h2>

              {FORM_READY ? (
                /* GHL Form Embed */
                <iframe
                  src={cohort.checkoutForm.src}
                  style={{ width: "100%", height: "750px", border: "none", borderRadius: "3px" }}
                  id={cohort.checkoutForm.id}
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={cohort.checkoutForm.formName}
                  data-height="750"
                  data-layout-iframe-id={cohort.checkoutForm.id}
                  data-form-id={cohort.checkoutForm.formId}
                  title={cohort.checkoutForm.formName}
                />
              ) : (
                /* TODO(BERMAN): Placeholder until the real $3,000 cohort GHL form exists.
                   Add the form to cohort.checkoutForm in src/config/cohort.ts — this block
                   will automatically swap to the live embed. */
                <div className="border-2 border-dashed border-[#1a365d]/30 rounded-lg p-10 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#1a365d]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#1a365d]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <p className="font-display font-black uppercase tracking-tight text-[#1a365d] mb-2">
                    Checkout Form Coming Soon
                  </p>
                  <p className="font-serif text-[#1a365d]/60 text-sm max-w-sm mx-auto">
                    The secure {cohort.price} payment form will appear here. (Placeholder &mdash; add the
                    GHL form ID in <code className="text-xs">src/config/cohort.ts</code>.)
                  </p>
                </div>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-[#1a365d]/60 text-xs font-bold uppercase tracking-[0.15em]">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#F26B4E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure SSL
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#F26B4E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Money-Back Guarantee
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#F26B4E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Limited Seats
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-[#f5ede0]/70 py-6 border-t-2 border-[#1a365d]">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Berman Golf. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
