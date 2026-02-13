"use client";

import Script from "next/script";

interface RegistrationFormProps {
  workshopDate?: string;
  workshopTime?: string;
}

export default function RegistrationForm({
  workshopDate = "February 18th",
  workshopTime = "3:30 PM ET",
}: RegistrationFormProps) {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reserve Your Free Spot
            </h2>
            <p className="text-gray-600 mb-3">
              Join us on <strong>{workshopDate}</strong> at <strong>{workshopTime}</strong>
            </p>
            <p className="inline-flex items-center gap-2 bg-[#F26B4E]/10 text-[#F26B4E] text-sm font-semibold px-4 py-1.5 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 5a3 3 0 015-3h2a3 3 0 015 3v.1a2 2 0 011.7 1.9v8a2 2 0 01-2 2H3.3a2 2 0 01-2-2V7a2 2 0 011.7-1.9V5zm4-1a1 1 0 00-1 1v.1h4V5a1 1 0 00-1-1H9z" />
              </svg>
              Includes a free digital copy of The Berman Method book
            </p>
          </div>

          {/* GHL Embedded Form */}
          <div className="w-full min-h-[627px]">
            <iframe
              src="https://link.physiofunnels.com/widget/form/UtHzQj5ew5Mf8fCKpI4S"
              style={{ width: "100%", height: "627px", border: "none", borderRadius: "3px" }}
              id="inline-UtHzQj5ew5Mf8fCKpI4S"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="(TM) (February 2026) Virtual Workshop Sign Up"
              data-height="627"
              data-layout-iframe-id="inline-UtHzQj5ew5Mf8fCKpI4S"
              data-form-id="UtHzQj5ew5Mf8fCKpI4S"
              title="(TM) (February 2026) Virtual Workshop Sign Up"
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Replay Sent to Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
