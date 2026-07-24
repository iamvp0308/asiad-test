import type { Metadata } from "next";
import { Rajdhani, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASIAD — Engineered Motorcycle Gear",
  description:
    "ASIAD builds premium motorcycle accessories — seats, guards, and carbon trim engineered for riders who take the long way. Configure your build in real time.",
  keywords: ["motorcycle accessories", "bike seat cover", "crash guard", "ASIAD"],
  openGraph: {
    title: "ASIAD — Engineered Motorcycle Gear",
    description: "Premium motorcycle accessories. Configure your build in 3D.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-base-950 text-ash-100 antialiased">
        <div className="noise-overlay" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
