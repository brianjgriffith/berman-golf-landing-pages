import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Golf Mastery + Clubhouse | $997 — Your Way In After the Challenge",
  description:
    "Missed the live cohort? Get the complete Senior Golf Mastery system PLUS a full year in the Berman Clubhouse for $997. Self-paced, lifetime access, 100% money-back guarantee.",
  openGraph: {
    title: "Senior Golf Mastery + Clubhouse — $997",
    description:
      "The self-paced path: Dr. Jake's complete 7-step biomechanics system plus a year of live monthly coaching in the Berman Clubhouse.",
    type: "website",
  },
};

export default function TwentyMoreYardsSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
