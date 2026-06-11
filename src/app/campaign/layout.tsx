import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "20 More Yards — Email Campaign Plan",
  description: "Internal campaign overview.",
  robots: { index: false, follow: false },
};

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
