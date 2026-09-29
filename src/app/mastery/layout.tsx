import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Golf Mastery Membership | Berman Golf",
  description:
    "The complete Senior Golf Mastery curriculum, monthly group coaching with Dr. Jake, and the Berman Clubhouse community. $199/month or $1,997/year.",
  openGraph: {
    title: "Senior Golf Mastery Membership | Berman Golf",
    description:
      "The 7-step Berman Method plus ongoing coaching and community for senior golfers.",
    type: "website",
  },
};

export default function MasteryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
