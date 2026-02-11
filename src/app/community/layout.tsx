import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berman Golf Community | Monthly Membership - $47/mo",
  description: "Join the Berman Golf Community for monthly live calls, exclusive content, and ongoing support from Dr. Jake.",
  openGraph: {
    title: "Berman Golf Community | Monthly Membership",
    description: "Monthly live calls, exclusive content, and ongoing support for senior golfers.",
    type: "website",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
