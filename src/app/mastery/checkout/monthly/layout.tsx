import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Membership | Senior Golf Mastery - $199/mo",
  description: "Join Senior Golf Mastery: the complete curriculum, monthly group coaching with Dr. Jake, and the Berman Clubhouse community.",
  robots: { index: false, follow: false },
};

export default function MasteryMonthlyCheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
