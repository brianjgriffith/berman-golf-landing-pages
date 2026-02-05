import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Free Workshop | Berman Golf - Add 10+ Yards to Your Drive",
  description: "Join Dr. Jake Berman for a free workshop designed specifically for senior golfers who want to move better, generate more power, and play pain-free.",
  openGraph: {
    title: "Free Workshop | Berman Golf",
    description: "Add 10+ yards to your drive without swinging harder. Free workshop for senior golfers.",
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
