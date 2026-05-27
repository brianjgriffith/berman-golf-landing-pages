"use client";

import Script from "next/script";
import { TwoDayEvent } from "@/config/events";

interface EventRegistrationFormProps {
  event: TwoDayEvent;
}

export default function EventRegistrationForm({ event }: EventRegistrationFormProps) {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Reserve Your Free Seat
          </h2>
          <p className="text-white/80 text-lg">
            Limited spots available &mdash; register now
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
          {/* Header showing both days */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              {event.name} Live Event
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {event.days.map((day, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-1">
                    Day {i + 1}
                  </p>
                  <p className="text-gray-900 font-bold text-sm">{day.date}</p>
                  <p className="text-gray-600 text-sm">{day.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GHL Embedded Form */}
          <div className="w-full min-h-[627px]">
            <iframe
              src={event.form.src}
              style={{ width: "100%", height: "627px", border: "none", borderRadius: "3px" }}
              id={event.form.id}
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name={event.form.formName}
              data-height="627"
              data-layout-iframe-id={event.form.id}
              data-form-id={event.form.formId}
              title={event.form.formName}
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
                <svg className="w-5 h-5 text-[#F26B4E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Live Only &mdash; Show Up Both Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
