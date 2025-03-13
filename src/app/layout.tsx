import { ReactNode } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "@/app/globals.css";  // Ensure this is included


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow bg-secondary p-8 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
