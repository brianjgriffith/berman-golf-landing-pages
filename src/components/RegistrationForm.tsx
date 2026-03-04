"use client";

import Script from "next/script";
import { Workshop } from "@/config/workshops";

interface RegistrationFormProps {
  workshops: Workshop[];
}

export default function RegistrationForm({ workshops }: RegistrationFormProps) {

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Reserve Your Free Spot
          </h2>
          <p className="text-white/80 text-lg">
            Pick the date that works best for you
          </p>
        </div>

        <div className={`grid gap-8 ${workshops.length > 1 ? "md:grid-cols-2" : "max-w-2xl mx-auto"}`}>
          {workshops.map((workshop, index) => (
            <div key={index} id={`register-${index}`} className="scroll-mt-24">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl h-full">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {workshop.date}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    at <strong>{workshop.time}</strong>
                  </p>
                </div>

                {/* GHL Embedded Form */}
                <div className="w-full min-h-[627px]">
                  <iframe
                    src={workshop.form.src}
                    style={{ width: "100%", height: "627px", border: "none", borderRadius: "3px" }}
                    id={workshop.form.id}
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={workshop.form.formName}
                    data-height="627"
                    data-layout-iframe-id={workshop.form.id}
                    data-form-id={workshop.form.formId}
                    title={workshop.form.formName}
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
          ))}
        </div>
      </div>
      <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
