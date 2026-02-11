import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Golf Mastery | The Berman Method - Gain 30+ Yards",
  description: "The complete 7-step system used by 1,000+ senior golfers to gain distance, improve consistency, and play more frequently.",
  openGraph: {
    title: "Senior Golf Mastery | The Berman Method",
    description: "Join the 50-Yard Club. The biomechanics-first approach for senior golfers.",
    type: "website",
  },
};

export default function SeniorGolfMasteryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
