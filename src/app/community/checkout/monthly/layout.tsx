import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Membership | Berman Clubhouse - $47/mo",
  description: "Join the Berman Clubhouse monthly membership. Get live coaching calls, community access, and Tee Shot Transformation course included.",
  openGraph: {
    title: "Monthly Membership | Berman Clubhouse",
    description: "Join Dr. Jake's private virtual Clubhouse for $47/month. Cancel anytime.",
    type: "website",
  },
};

export default function MonthlyCheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
