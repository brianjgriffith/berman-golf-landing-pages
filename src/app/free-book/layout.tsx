import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Book | The Berman Method - Senior Golf Performance",
  description: "Get Dr. Jake Berman's free book on the biomechanics-first approach to senior golf performance.",
  openGraph: {
    title: "Free Book | The Berman Method",
    description: "Learn the secrets to gaining distance and playing pain-free golf.",
    type: "website",
  },
};

export default function FreeBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
