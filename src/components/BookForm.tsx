"use client";

import Image from "next/image";
import Script from "next/script";

export default function BookForm() {
  return (
    <section id="get-book" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Book Image */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-60 md:w-56 md:h-72">
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

            {/* Right - GHL Embedded Form */}
            <div className="w-full min-h-[633px]">
              <iframe
                src="https://link.physiofunnels.com/widget/form/D18SxDhr2xWsOI90DgLb"
                style={{ width: "100%", height: "633px", border: "none", borderRadius: "3px" }}
                id="inline-D18SxDhr2xWsOI90DgLb"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="(TM) Berman Method Book Freebie"
                data-height="633"
                data-layout-iframe-id="inline-D18SxDhr2xWsOI90DgLb"
                data-form-id="D18SxDhr2xWsOI90DgLb"
                title="(TM) Berman Method Book Freebie"
              />
            </div>
          </div>
        </div>
      </div>
      <Script src="https://link.physiofunnels.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
