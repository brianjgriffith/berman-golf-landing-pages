import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Berman Golf | The Berman Method for Senior Golfers",
  description: "Dr. Jake Berman's biomechanics-first approach to help senior golfers gain distance, improve consistency, and play more frequently.",
  openGraph: {
    title: "Berman Golf | The Berman Method",
    description: "The biomechanics-first approach for senior golfers to gain distance and play their best golf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
