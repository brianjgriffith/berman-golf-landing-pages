import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | 30-Day Distance Breakthrough - Berman Golf",
  description: "Complete your enrollment in the 30-Day Distance Breakthrough. 4 live weekly sessions with Dr. Jake for just $97.",
  openGraph: {
    title: "Checkout | 30-Day Distance Breakthrough",
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
