import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// Load the Roboto font
const roboto = Roboto({ subsets: ["latin"], weight: ["300","400","500","700"] });

export const metadata: Metadata = {
  title: "Tanvi Reddy - Portfolio",
  description: "A showcase of my work and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts (kept for compatibility) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${roboto.className} dark:bg-blackish bg-whitish flex flex-col min-h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
