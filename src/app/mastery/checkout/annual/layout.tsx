import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Membership | Senior Golf Mastery - $1,997/yr",
  description: "Join Senior Golf Mastery: the complete curriculum, monthly group coaching with Dr. Jake, and the Berman Clubhouse community.",
  robots: { index: false, follow: false },
};

export default function MasteryAnnualCheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
