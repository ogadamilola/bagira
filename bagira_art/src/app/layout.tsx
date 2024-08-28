// RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import CustomCursor from "@/components/animations/CustomCursor";
import Header from "@/components/animations/NavigationMenu";
import { NavLinks } from "@/data/navLinks";
import Footer from "@/components/Footer";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/styles/main.css" rel="stylesheet" type="text/css" />
      </head>
      <body className={`${inter.className} cursor-none`}>
        <div className="hidden md:block z-[99999999]">
          <CustomCursor />
        </div>
        <PreloaderProvider>
          {/* <Header navigation={NavLinks} /> */}
          <SmoothScrolling>
            <PageAnimatePresence>{children}</PageAnimatePresence>
          </SmoothScrolling>
          {/* <Footer /> */}
        </PreloaderProvider>
      </body>
    </html>
  );
}
