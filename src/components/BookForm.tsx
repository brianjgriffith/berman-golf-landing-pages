"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

interface BookFormProps {
  ghlFormAction?: string;
}

export default function BookForm({ ghlFormAction = "#" }: BookFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (ghlFormAction === "#") {
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
      return;
    }
    setIsSubmitting(true);
  };

  if (isSubmitted) {
    return (
      <section id="get-book" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Book Is On Its Way!</h3>
            <p className="text-gray-600 mb-6">
              Check your email for the download link to The Berman Method. Get ready to add distance back to your drives!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-book" className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Book Image */}
            <div className="flex justify-center">
              <div className="relative w-48 h-60 md:w-56 md:h-72">
                <Image
                  src="/berman-book-3d.png"
                  alt="The Berman Method Book"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Get Your Free Digital Copy
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your details below and we&apos;ll send The Berman Method straight to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                action={ghlFormAction}
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26B4E] focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26B4E] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full bg-[#F26B4E] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Me The Book"
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
