import Image from "next/image";
import { clubhouse } from "@/config/clubhouse";

interface ClubhouseOfferProps {
  /**
   * "light"  — blue/white/gray system used by the /free-book and
   *            /senior-golf-warm-up thank-you pages.
   * "poster" — cream + navy editorial system used by /20-more-yards.
   */
  variant?: "light" | "poster";
  eyebrow?: string;
  /** Headline. Written per-page so it picks up whatever they just opted in for. */
  title: React.ReactNode;
  /** One or two sentences bridging the free thing to the membership. */
  intro: string;
}

/**
 * The Berman Clubhouse soft-sell that sits on every free opt-in thank-you page.
 *
 * This is the first paid step in the funnel now: free thing -> thank-you page
 * -> $47/mo or $297/yr Clubhouse. Live challenge invitations go out by email
 * separately, so this block deliberately carries ONE offer and no competing
 * button.
 */
export default function ClubhouseOffer({
  variant = "light",
  eyebrow = "Keep Going",
  title,
  intro,
}: ClubhouseOfferProps) {
  const isPoster = variant === "poster";

  return (
    <section
      className={
        isPoster
          ? "py-16 md:py-24 bg-[#efe5d4]"
          : "py-16 bg-white"
      }
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className={isPoster ? "mb-10 md:mb-12" : "text-center mb-10"}>
          {isPoster && <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />}
          <p
            className={
              isPoster
                ? "text-xs font-bold uppercase tracking-[0.35em] text-[#F26B4E] mb-3"
                : "text-[#F26B4E] font-semibold uppercase tracking-wider text-sm mb-3"
            }
          >
            {eyebrow}
          </p>
          <h2
            className={
              isPoster
                ? "font-display text-3xl md:text-5xl font-black text-[#1a365d] leading-[1.05] mb-4 tracking-tight"
                : "text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            }
          >
            {title}
          </h2>
          <p
            className={
              isPoster
                ? "font-serif text-lg md:text-xl text-[#1a365d]/80 max-w-2xl leading-relaxed"
                : "text-gray-600 text-lg max-w-2xl mx-auto"
            }
          >
            {intro}
          </p>
        </div>

        {/* Clubhouse artwork — visual anchor so the offer reads as a product,
            not just another block of text on a thank-you page. */}
        <div
          className={
            isPoster
              ? "max-w-2xl mb-8 md:mb-10"
              : "max-w-2xl mx-auto mb-8 md:mb-10"
          }
        >
          <Image
            src={clubhouse.image}
            alt={`Inside the ${clubhouse.name}`}
            width={1280}
            height={720}
            className={
              isPoster
                ? "w-full h-auto border-2 border-[#1a365d] shadow-[0_20px_50px_rgba(26,54,93,0.18)]"
                : "w-full h-auto rounded-2xl shadow-lg"
            }
          />
        </div>

        {/* What's included */}
        <div
          className={
            isPoster
              ? "bg-white border border-[#1a365d]/15 p-8 md:p-10 mb-8"
              : "bg-gray-50 rounded-2xl p-8 mb-8"
          }
        >
          <p
            className={
              isPoster
                ? "text-sm font-bold uppercase tracking-widest text-[#F26B4E] mb-6"
                : "text-sm font-bold uppercase tracking-wider text-gray-500 mb-6"
            }
          >
            What&apos;s inside the {clubhouse.name}:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {clubhouse.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                {isPoster ? (
                  <span
                    className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                ) : (
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span
                  className={
                    isPoster
                      ? "font-serif text-[#1a365d]/90 text-base leading-snug"
                      : "text-gray-700"
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price + CTAs */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {/* Monthly */}
          <a
            href={clubhouse.monthly.checkoutPath}
            className={
              isPoster
                ? "block bg-white border-2 border-[#1a365d] p-6 text-center hover:bg-[#1a365d] hover:text-[#f5ede0] transition-colors group"
                : "block bg-white border-2 border-gray-300 rounded-2xl p-6 text-center hover:border-gray-900 transition-colors"
            }
          >
            <p
              className={
                isPoster
                  ? "text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a365d]/60 group-hover:text-[#f5ede0]/70 mb-2"
                  : "text-gray-500 font-semibold uppercase tracking-wide text-xs mb-2"
              }
            >
              {clubhouse.monthly.label}
            </p>
            <p
              className={
                isPoster
                  ? "font-display text-4xl font-black text-[#1a365d] group-hover:text-[#f5ede0] leading-none"
                  : "text-4xl font-bold text-gray-900 leading-none"
              }
            >
              {clubhouse.monthly.price}
              <span
                className={
                  isPoster
                    ? "text-lg font-bold text-[#1a365d]/60 group-hover:text-[#f5ede0]/70"
                    : "text-lg text-gray-500 font-normal"
                }
              >
                {clubhouse.monthly.cadence}
              </span>
            </p>
            <p
              className={
                isPoster
                  ? "font-serif text-sm text-[#1a365d]/70 group-hover:text-[#f5ede0]/80 mt-3"
                  : "text-gray-500 text-sm mt-3"
              }
            >
              {clubhouse.monthly.note}
            </p>
            <p
              className={
                isPoster
                  ? "mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a365d] group-hover:text-[#f5ede0]"
                  : "mt-5 text-sm font-bold uppercase tracking-wider text-gray-900"
              }
            >
              Join Monthly &rarr;
            </p>
          </a>

          {/* Annual */}
          <a
            href={clubhouse.annual.checkoutPath}
            className={
              isPoster
                ? "relative block bg-[#1a365d] text-[#f5ede0] p-6 text-center border-2 border-[#1a365d] hover:bg-[#132a49] transition-colors"
                : "relative block bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            }
          >
            <span
              className={
                isPoster
                  ? "absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F26B4E] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 whitespace-nowrap"
                  : "absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F26B4E] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
              }
            >
              Best Value &mdash; Save {clubhouse.annualSavings}
            </span>
            <p
              className={
                isPoster
                  ? "text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5ede0]/70 mb-2 mt-2"
                  : "text-blue-200 font-semibold uppercase tracking-wide text-xs mb-2 mt-2"
              }
            >
              {clubhouse.annual.label}
            </p>
            <p
              className={
                isPoster
                  ? "font-display text-4xl font-black leading-none"
                  : "text-4xl font-bold leading-none"
              }
            >
              {clubhouse.annual.price}
              <span
                className={
                  isPoster
                    ? "text-lg font-bold text-[#f5ede0]/70"
                    : "text-lg text-blue-200 font-normal"
                }
              >
                {clubhouse.annual.cadence}
              </span>
            </p>
            <p
              className={
                isPoster
                  ? "font-serif text-sm text-[#f5ede0]/80 mt-3"
                  : "text-green-300 text-sm mt-3"
              }
            >
              {clubhouse.annual.note}
            </p>
            <p
              className={
                isPoster
                  ? "mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#F26B4E]"
                  : "mt-5 text-sm font-bold uppercase tracking-wider text-white"
              }
            >
              Join Annual &amp; Save &rarr;
            </p>
          </a>
        </div>

        {/* Bonus + learn-more */}
        <p
          className={
            isPoster
              ? "text-center mt-8 font-serif text-[#1a365d]/75 text-base"
              : "text-center mt-8 text-gray-600"
          }
        >
          Both plans include <strong>{clubhouse.bonus.name}</strong> (
          {clubhouse.bonus.value} course) free while you&apos;re a member.{" "}
          <a
            href={clubhouse.path}
            className={
              isPoster
                ? "text-[#F26B4E] font-bold hover:underline"
                : "text-[#F26B4E] font-semibold hover:underline"
            }
          >
            See everything inside &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
