"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { masteryMembership as mm, type MasteryPlan } from "@/config/masteryMembership";

/**
 * Checkout for the Senior Golf Mastery membership. One component, two plans,
 * so the monthly and annual pages can't drift apart.
 *
 * If the plan's GHL form ID is still empty, this renders a "checkout opens
 * shortly" panel instead of a dead iframe.
 *
 * `bonusLive` comes from the (server, force-dynamic) checkout page so the
 * annual 1-on-1 disappears at its deadline — see annualBonus in
 * @/config/masteryMembership.
 */
export default function MasteryCheckout({
  planKey,
  bonusLive,
}: {
  planKey: "monthly" | "annual";
  bonusLive: boolean;
}) {
  const plan: MasteryPlan = mm[planKey];
  const other: MasteryPlan = planKey === "monthly" ? mm.annual : mm.monthly;
  const isAnnual = planKey === "annual";
  const { formId, formName, height } = plan.checkoutForm;

  useEffect(() => {
    if (!formId) return;
    const script = document.createElement("script");
    script.src = "https://link.physiofunnels.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={mm.path} className="flex items-center gap-2">
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
          {/* Order summary */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Join Senior Golf Mastery</h1>

            <div className={`bg-white rounded-2xl p-6 shadow-sm mb-6 ${isAnnual ? "border-2 border-amber-400" : ""}`}>
              <div className="mb-6">
                <Image
                  src="/senior-golf-mastery-bundle-image.png"
                  alt="Senior Golf Mastery"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                  {plan.label} Membership
                </p>
                {isAnnual && <p className="text-gray-400 line-through font-semibold">{mm.annualCompareAt}</p>}
                <p className="text-4xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-xl text-gray-500 font-normal">{plan.cadence}</span>
                </p>
                {isAnnual && <p className="text-green-600 font-semibold text-sm mt-1">You save {mm.annualSavings}</p>}
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 mb-3">What&apos;s Included:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {mm.includes.map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item.label}
                    </li>
                  ))}
                  {isAnnual && bonusLive && (
                    <li className="flex items-start gap-2 font-semibold text-gray-900">
                      <span aria-hidden>🎁</span>
                      <span>
                        {mm.annualBonus.label} ({mm.annualBonus.value} Value)
                        <span className="block font-normal text-gray-600 text-xs mt-0.5">
                          Comes with annual through {mm.annualBonus.endsLabel}.
                        </span>
                      </span>
                    </li>
                  )}
                  {!isAnnual && (
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Cancel anytime &mdash; no commitment
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Cross-sell the other plan */}
            <div className="bg-[#F26B4E]/10 border border-[#F26B4E]/30 rounded-2xl p-5 mb-6">
              {isAnnual ? (
                <>
                  <p className="text-gray-900 font-semibold mb-2">Rather pay month to month?</p>
                  <p className="text-gray-600 text-sm mb-3">
                    Monthly is {other.price}{other.cadence}, cancel anytime.
                    {bonusLive && " (The free 1-on-1 with Dr. Jake is annual only.)"}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-900 font-semibold mb-2">Want to save {mm.annualSavings}?</p>
                  <p className="text-gray-600 text-sm mb-3">
                    Go annual for {other.price}{other.cadence}
                    {bonusLive
                      ? ` and get a free 1-on-1 session with Dr. Jake (${mm.annualBonus.value} value) — through ${mm.annualBonus.endsLabel}.`
                      : ` — that's ${mm.annualSavings} less than twelve months of monthly.`}
                  </p>
                </>
              )}
              <Link href={other.checkoutPath} className="text-[#F26B4E] font-semibold text-sm hover:underline">
                Switch to {other.label} &rarr;
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
                  <Image src="/peter-schmitt.png" alt="Pete" width={64} height={64} className="object-cover w-full h-full" />
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

          {/* Payment form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Payment Details</h2>

              {formId ? (
                <iframe
                  src={`https://link.physiofunnels.com/widget/form/${formId}`}
                  style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "3px" }}
                  id={`inline-${formId}`}
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={formName}
                  data-height={String(height)}
                  data-layout-iframe-id={`inline-${formId}`}
                  data-form-id={formId}
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title={formName}
                />
              ) : (
                <div className="text-center py-16 px-6 border-2 border-dashed border-gray-200 rounded-xl">
                  <p className="text-xl font-bold text-gray-900 mb-3">Checkout opens shortly</p>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    We&apos;re putting the finishing touches on enrollment. Want in now? Email{" "}
                    <a href="mailto:distance@bermangolf.com" className="text-[#F26B4E] font-semibold hover:underline">
                      distance@bermangolf.com
                    </a>{" "}
                    and we&apos;ll get you set up.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
              <span>🔒 Secure SSL</span>
              <span>✓ {isAnnual ? "Billed once a year" : "Cancel anytime"}</span>
              <span>✓ Instant access</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Berman Golf. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
