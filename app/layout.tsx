import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto dark:bg-blackish bg-whitish flex flex-col min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
