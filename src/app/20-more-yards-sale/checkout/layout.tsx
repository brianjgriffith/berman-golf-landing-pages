import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Senior Golf Mastery + Clubhouse — $997",
  description:
    "Complete your enrollment: the full Senior Golf Mastery course plus a year in the Berman Clubhouse for $997. Secure checkout, 100% money-back guarantee.",
};

export default function SaleCheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
