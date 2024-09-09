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
import { MetadataTitle, MetadataDescription } from "@/contexts/MetadataContext";
import { CaseStudyProvider } from "@/contexts/CaseStudyContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let metadataTitle = MetadataTitle;
  let metadataDescription = MetadataDescription;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{`${metadataTitle}`}</title>
        <meta property="og:title" content={`${metadataTitle}`} />
        <meta name="description" content={`${metadataDescription}`} />
        <meta property="og:description" content={`${metadataDescription}`} />

        <meta property="og:image" content="/images/BAGI-FullSizeRender.webp" />
        <meta property="twitter:title" content={`${metadataTitle}`} />
        <meta
          property="twitter:description"
          content={`${metadataDescription}`}
        />
        <meta
          property="twitter:image"
          content="/images/BAGI-FullSizeRender.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link href="/styles/main.css" rel="stylesheet" type="text/css" /> */}
        <link href="/svgs/m.svg" rel="shortcut icon" type="image/x-icon" />
        <link href="/svgs/m.svg" rel="apple-touch-icon" />
      </head>
      <body className={`${inter.className}`}>
        <CaseStudyProvider>
          <PreloaderProvider>
            {/* <Header navigation={NavLinks} /> */}

            <PageAnimatePresence>{children}</PageAnimatePresence>

            {/* <Footer /> */}
          </PreloaderProvider>
        </CaseStudyProvider>
      </body>
    </html>
  );
}
