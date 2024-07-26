import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// import "@/styles/bagira.css";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Mouse from "@/components/Mouse";
import BTS from "@/components/BTS";
import { NextScript } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAGIRA | Visual Artist of Curaçao",
  description:
    "BAGIRA is a 28-year old Algerian – Hungarian self-taught artist who moved to Curaçao, discovered her talent at 21 years old, she quit her job 2 weeks later to pursue art full-time. Recently opening her own art gallery in Kura Hulanda.",
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
        <link href="/styles/bagira.css" rel="stylesheet" type="text/css" />

        <style
          dangerouslySetInnerHTML={{
            __html: `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="7fb9b671-cea2-61c8-1f36-8c4c088a28c1"] {opacity:0.3;}html.w-mod-js:not(.w-mod-ix) [data-w-id="ecb77a20-c4eb-e3f3-474f-cce4b1522386"] {opacity:0.4;}html.w-mod-js:not(.w-mod-ix) [data-w-id="fa49143a-6785-adfe-02c0-b78a7e2e1b1b"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="6a4cb653-2432-a39b-d379-1d855ae2f630"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="0531396c-cab0-e7ad-82dc-25ddb9b5efa5"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9220f8e5-6b50-26ed-4c11-097c7b82ac90"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="2017f6d2-be53-45d8-fd19-0621beaef914"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="a69e3c76-4a04-0ceb-2f87-e329ebd28016"] {-webkit-transform:translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="09a4298e-c598-4700-e316-d7965799be14"] {-webkit-transform:translate3d(-250%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-250%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-250%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-250%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="a69e3c76-4a04-0ceb-2f87-e329ebd28016"] {-webkit-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="a69e3c76-4a04-0ceb-2f87-e329ebd28016"] {-webkit-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="a69e3c76-4a04-0ceb-2f87-e329ebd28016"] {-webkit-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, nullem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}`,
          }}
        ></style>

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <Script
          src="/scripts/webfont.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>
        <Script type="text/javascript" strategy="beforeInteractive">
          {`WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});`}
        </Script>
        <Script type="text/javascript" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
        <link
          href="images/63d78ea31938080e242c1622_Favicon-2.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="images/63d78f0854c09d35688be1b5_Webclip-2.png"
          rel="apple-touch-icon"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `  
            /* Page Transition */
            body .transition {display: block}
            .w-editor .transition {display: none;}
            .no-scroll-transition {overflow: hidden; position: relative;}
            
            /* Change Text Selection Color */
            ::-moz-selection { /* Code for Firefox */
              color: white;
              background: black;
            }
            ::selection {
              color: white;
              background: black;
            }
            
            /* Form Auto Preenchimento */
            /* Change the white to any color */
            input:-webkit-autofill,
            input:-webkit-autofill:hover, 
            input:-webkit-autofill:focus, 
            input:-webkit-autofill:active{
                -webkit-box-shadow: 0 0 0 30px black inset !important;
            }
            /* Change text in autofill textbox*/
            input:-webkit-autofill{
                -webkit-text-fill-color: white !important;
            }
            
            /* Scroll Bar */
            /*width*/
            ::-webkit-scrollbar {
              width:0px;
            }
            
            
              
          `,
          }}
        ></style>

        <style
          dangerouslySetInnerHTML={{
            __html: `[load="anim"] .chars{
              opacity: 0;
            }

            [inquire="text"] .chars{
              opacity: 0;
            }

            .inquire-section .nav-ball{
              background-color: white!important;
            }

            /* EDITOR CODE */
            .w-editor .sticky-element {
              overflow: scroll!important;
            }

            .w-editor .murals-anda {
              overflow: scroll!important;
            }
            .w-editor .shop-info-wrap.n1{
              position: relative!important;
              opacity: 1!important;
            }
            .w-editor .shop-info-wrap.n2{
              position: relative!important;
              opacity: 1!important;
            }
            .w-editor .shop-info-wrap.n3{
              position: relative!important;
              opacity: 1!important;
            }

            .w-editor .shop-info-anim {
              z-index: 30!important;
              display: flex!important;
              flex-direction: row!important;
              justify-content: flex-start!important;
              align-items: flex-start!important;
            }

            .w-editor .shop-background {
              width: 100%;
            }
            /* END EDITOR CODE */`,
          }}
        ></style>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Make text look crisper and more legible in all browsers */
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
            }

            /* Focus state style for keyboard navigation for the focusable elements */
            *[tabindex]:focus-visible,
              input[type="file"]:focus-visible {
              outline: 0.125rem solid #4d65ff;
              outline-offset: 0.125rem;
            }

            /* Get rid of top margin on first element in any rich text element */
            .w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
              margin-top: 0 !important;
            }

            /* Get rid of bottom margin on last element in any rich text element */
            .w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
              margin-bottom: 0 !important;
            }

            /* Prevent all click and hover interaction with an element */
            .pointer-events-off, .form-please, .nav-ball, .mouse-anda, .ap-img-description, .mouse-outro, .mouse-outro-2, .murals-button.grey {
              pointer-events: none;
            }

            /* Enables all click and hover interaction with an element */
            .pointer-events-on, .form-please-wrap {
              pointer-events: auto;
            }

            /* Create a class of .div-square which maintains a 1:1 dimension of a div */
            .div-square::after {
              content: "";
              display: block;
              padding-bottom: 100%;
            }

            /* Make sure containers never lose their center alignment */
            .container-medium,.container-small, .container-large {
              margin-right: auto !important;
              margin-left: auto !important;
            }

            /* 
            Make the following elements inherit typography styles from the parent and not have hardcoded values. 
            Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
            Uncomment this CSS to use it in the project. Leave this message for future hand-off.
            */
            /*
            a,
            .w-input,
            .w-select,
            .w-tab-link,
            .w-nav-link,
            .w-dropdown-btn,
            .w-dropdown-toggle,
            .w-dropdown-link {
              color: inherit;
              text-decoration: inherit;
              font-size: inherit;
            }
            */

            /* Apply "..." after 3 lines of text */
            .text-style-3lines {
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }

            /* Apply "..." after 2 lines of text */
            .text-style-2lines {
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            /* Adds inline flex display */
            .display-inlineflex {
              display: inline-flex;
            }

            /* These classes are never overwritten */
            .hide {
              display: none !important;
            }

            @media screen and (max-width: 991px) {
                .hide, .hide-tablet {
                    display: none !important;
                }
            }
              @media screen and (max-width: 767px) {
                .hide-mobile-landscape{
                  display: none !important;
                }
            }
              @media screen and (max-width: 479px) {
                .hide-mobile{
                  display: none !important;
                }
            }

            /*Reset buttons, and links styles*/
            a {
              color: inherit;
              text-decoration: inherit;
              font-size: inherit;
            }

          `,
          }}
        ></style>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Media Queries */
            /* Max Font Size */
            @media screen and (min-width:1440px) {
            body {font-size: 14.769230769230772px;}
            }

            /* Min-width PC*/
            @media only screen and (max-width: 1440px) and (min-width: 992px)  {
              body {
              font-size: 1.0256410256410258vw;
              }
            }

            /* Min Max Width - Tablets */
            @media only screen and (max-width: 991px) and (min-width: 768px)  {
              body {
              font-size: 3vw;
              }
            }

            /* Max Width - Mobile Landscape 1 - Experiencia qualquer coisa mudar */
            @media only screen and (max-width: 767px) and (min-width: 600px)  {
              body {
              font-size: 3.4vw;
              }
            }

            /* Max Width - Mobile Landscape 2 - Experiencia qualquer coisa mudar */
            @media only screen and (max-width: 599px) and (min-width: 480px)  {
              body {
              font-size: 3.4vw;
              }
            }

            /* Max Width - Mobile Protait font-size: 3.45vw;*/
            @media only screen and (max-width: 479px)  {
              body {
              font-size: 4.3vw;
              }
            }

            /* Container Max Width */
            .container {
              max-width: 1920px;
            }

            .cta-black .cta{
              color: #120902;
            }
            .cta-black .cta .cta-ball{
              background-color: #120902;
            }

            /* Mouse Opacity */
            body:hover .mouse-anda { 
              opacity: 1.0;
            }

            body:hover .mouse-outro { 
              opacity: 0.5;
            }
            body:hover .mouse-outro-2 { 
              opacity: 0.7;
            }

            .mouse-outro-2.hover { 
              opacity: 0!important;
            }
            .mouse-outro-2.nav-hover { 
              opacity: 0!important;
            }
            .mouse-outro.hover { 
              opacity: 0.2!important;
            }
            .mouse-outro.nav-hover { 
              opacity: 0!important;
            }
            .nav-ball.white{
              background-color: white!important;
            }

            .transition-img-wrap{
              clip-path: circle(10% at 50% 50%);
            }

            .about-img.n1{
              clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
            }

            .about-img.n2{
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            }

          `,
          }}
        ></style>

        {/* <Script
          type="text/javascript"
          src="/scripts/CustomAnimations.js"
        ></Script> */}

        {/* <Script src="/scripts/bundle.v1.0.0.js" strategy="beforeInteractive" />
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

        <Script src="/scripts/Flip.min.js" strategy="beforeInteractive" />
        <Script
          src="/scripts/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/scripts/CustomEase.min.js" strategy="beforeInteractive" /> */}

        {/* --------------------------- */}

        <Script
          src="/scripts/jquery-3.5.1.min.dc5e7f18c8.js"
          type="text/javascript"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/scripts/webflow.7341b0d66.js"
          type="text/javascript"
        ></Script>

        {/* Place all used libraries here */}

        <Script
          src="/scripts/gsap.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="/scripts/ScrollTrigger.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/63d3ab88fb9a0285ad5a59c0_SplitText.min.txt"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="/scripts/Flip.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="/scripts/ScrollToPlugin.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="/scripts/CustomEase.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        {/* SCRIPT GENERAL */}

        <Script type="text/javascript">
          {`// Initiate GSAP
            gsap.registerPlugin(ScrollTrigger, SplitText, Flip, ScrollToPlugin);  
            
            // Initiate Line Split
            $("[split=words]").each(function (index) {
              $(this).addClass("split-words");
            });
            $("[split=lines]").each(function (index) {
              $(this).addClass("split-lines");
            });
            // Initiate Line Split
            new SplitText(".split-lines", { type: "lines", linesClass: "lineChild" });
            new SplitText(".split-lines", { type: "lines", linesClass: "lineParent" });
            // Splite Words Chars
            var mySplitText = new SplitText(".split-words", { type: "words,chars", wordsClass: "words", charsClass: "chars" });

            // Scroll Back To Top On Load -->
            if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
            } else {
                window.onbeforeunload = function () {
                    window.scrollTo(0, 0);
                }
            }
          `}
        </Script>

        {/* Finsweet Cookie Consent */}

        {/* <Script
          async
          src="/scripts/fs-cc.js"
          fs-cc-mode="opt-in"
          strategy="beforeInteractive"
        ></Script> */}

        {/* Libraries */}

        <Script
          src="/scripts/bundle.v1.0.0.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>

        {/* SCRIPT */}

        <Script type="text/javascript">
          {`$(document).ready(function() {$(".w-webflow-badge").removeClass("w-webflow-badge").empty(); });`}
        </Script>

        {/* JAVASCRIPT CODE - TO EDIT DOWNLOAD THE DOCUMENT IN WEBFLOW, EDIT AND UPLOAD AGAIN */}

        <Script
          src="/scripts/CustomAnimations.js"
          type="text/javascript"
          // strategy="beforeInteractive"
        ></Script>
      </head>

      <body className={inter.className}>
        {/* <NextScript/> */}
        <Navbar />
        <Mouse />
        <BTS />
        {children}
      </body>
    </html>
  );
}
