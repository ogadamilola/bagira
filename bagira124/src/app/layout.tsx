import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "@/styles/bagira.css";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Mouse from "@/components/Mouse";
import BTS from "@/components/BTS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAGIRA | Visual Artist of Curaçao",
  description: "BAGIRA is a 28-year old Algerian – Hungarian self-taught artist who moved to Curaçao, discovered her talent at 21 years old, she quit her job 2 weeks later to pursue art full-time. Recently opening her own art gallery in Kura Hulanda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>BAGIRA | Visual Artist of Curaçao</title>
        <meta
          name="description"
          content="BAGIRA is a 28-year old Algerian – Hungarian self-taught artist who moved to Curaçao, discovered her talent at 21 years old, she quit her job 2 weeks later to pursue art full-time. Recently opening her own art gallery in Kura Hulanda."
        />
        <meta property="og:title" content="BAGIRA | Visual Artist of Curaçao" />
        <meta
          property="og:description"
          content="BAGIRA is a 28-year old Algerian – Hungarian self-taught artist who moved to Curaçao, discovered her talent at 21 years old, she quit her job 2 weeks later to pursue art full-time. Recently opening her own art gallery in Kura Hulanda."
        />
        <meta
          property="og:image"
          content="/images/63d3f9ba4c4c44c7c6346fb6_OpenGraph.webp"
        />
        <meta property="twitter:title" content="Bagira | Artist" />
        <meta
          property="twitter:description"
          content="BAGIRA is a 28-year old Algerian – Hungarian self-taught artist who moved to Curaçao, discovered her talent at 21 years old, she quit her job 2 weeks later to pursue art full-time. Recently opening her own art gallery in Kura Hulanda."
        />
        <meta
          property="twitter:image"
          content="/images/63d3f9ba4c4c44c7c6346fb6_OpenGraph.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Webflow" />

        {/* Stylesheets */}
        <link href="/styles/bagira.css" rel="stylesheet" type="text/css" />

        {/* Preconnects */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />

        {/* Favicon and Apple Touch Icon */}
        <link
          href="images/63d78ea31938080e242c1622_Favicon-2.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="images/63d78f0854c09d35688be1b5_Webclip-2.png"
          rel="apple-touch-icon"
        />

        {/* External Script */}
        <Script
          src="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/63d3ab88fb9a0285ad5a59c0_SplitText.min.txt"
          strategy="beforeInteractive"
        />

        {/* Inline Script for Initial Class Setting */}
        <Script
          id="initial-class-setting"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`,
          }}
          strategy="beforeInteractive"
        />

        {/* Inline Script for GSAP and Other Plugins */}
        <Script
          id="gsap-plugins"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `gsap.registerPlugin(ScrollTrigger, SplitText, Flip, ScrollToPlugin);  
        $("[split=words]").each(function (index) {
          $(this).addClass("split-words");
        });
        $("[split=lines]").each(function (index) {
          $(this).addClass("split-lines");
        });
        new SplitText(".split-lines", { type: "lines", linesClass: "lineChild" });
        new SplitText(".split-lines", { type: "lines", linesClass: "lineParent" });
        var mySplitText = new SplitText(".split-words", { type: "words,chars", wordsClass: "words", charsClass: "chars" });
        if (history.scrollRestoration) {
          history.scrollRestoration = 'manual';
        } else {
          window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
        }`,
          }}
          strategy="beforeInteractive"
        />
      </head>

      <body className={inter.className}>
        <Navbar />
        <Mouse />
        <BTS />
        {children}
        {/* Client-side only scripts */}
        <Script src="/scripts/bundle.v1.0.0.js" strategy="beforeInteractive" />
        <Script src="/scripts/fs-cc.js" strategy="beforeInteractive" />
        <Script
          src="/scripts/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/scripts/webflow.7341b0d66.js"
          strategy="beforeInteractive"
        />
        <Script src="/scripts/webfont.js" strategy="beforeInteractive" />
        <Script src="/scripts/gsap.min.js" strategy="beforeInteractive" />

        <Script
          src="/scripts/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/63d3ab88fb9a0285ad5a59c0_SplitText.min.txt"
          strategy="beforeInteractive"
        />

        <Script
          src="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6440fcdd9913381980813a0b_bagira.txt"
          strategy="beforeInteractive"
        />

        <Script src="/scripts/Flip.min.js" strategy="beforeInteractive" />
        <Script
          src="/scripts/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/scripts/CustomEase.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
