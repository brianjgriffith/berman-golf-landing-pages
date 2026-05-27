import type { Metadata } from "next";
import { Inter, Anton, Source_Serif_4, Archivo_Black, Alfa_Slab_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
});

const alfaSlab = Alfa_Slab_One({
  subsets: ["latin"],
  variable: "--font-alfa-slab",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Berman Golf | The Berman Method for Senior Golfers",
  description: "Dr. Jake Berman's biomechanics-first approach to help senior golfers gain distance, improve consistency, and play more frequently.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
      <body className={`${inter.variable} ${anton.variable} ${sourceSerif.variable} ${archivoBlack.variable} ${alfaSlab.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
