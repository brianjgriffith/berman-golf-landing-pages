import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Membership | Berman Clubhouse - $297/yr (Save $267)",
  description: "Join the Berman Clubhouse annual membership and save $267. Get live coaching calls, community access, and Tee Shot Transformation course included.",
  openGraph: {
    title: "Annual Membership | Berman Clubhouse - Best Value",
    description: "Join Dr. Jake's private virtual Clubhouse for $297/year. Save 47% vs monthly.",
    type: "website",
  },
};

export default function AnnualCheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
