import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Senior Golf Mastery - Berman Golf",
  description: "Complete your enrollment in Senior Golf Mastery. Instant access to the 7-step system.",
  openGraph: {
    title: "Checkout | Senior Golf Mastery",
    description: "Complete your enrollment and start gaining distance today.",
    type: "website",
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
