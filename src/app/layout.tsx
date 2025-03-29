import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "@/styles/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason Robinson - Portfolio",
  description: "Showcasing Data Science, AI, & Analytics Excellence",
  icons: {
    icon: [
      { url: "/jr-favicon.ico", type: "image/x-icon", sizes: "any" }, // fallback
      { url: "/jr-logo.svg", type: "image/svg+xml" }, // optional SVG
    ],
    apple: "/jr-favicon.ico",
    shortcut: "/jr-favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ECEFF4]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
