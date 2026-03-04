import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Warm-Up Is Ready | The Berman Method",
  description: "Follow along with the 5-minute senior golf warm-up that prevents injuries and adds distance.",
};

export default function WarmUpThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
