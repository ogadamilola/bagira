"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null); // Define type for cursorRef
  const innerDotRef = useRef(null);
  const followerTextRef = useRef<HTMLSpanElement | null>(null); // Define type for followerTextRef

  useEffect(() => {
    // Initialize cursor hidden and centered
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: 150 });
    }
    if (innerDotRef.current) {
      gsap.set(innerDotRef.current, { xPercent: -50, yPercent: 1920 });
    }

    // Smoothly follow the mouse
    const xTo = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.25,
        ease: "power3.out",
      }),
      yTo = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.25,
        ease: "power3.out",
      });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      // Move inner dot instantly
      if (innerDotRef.current) {
        gsap.set(innerDotRef.current, { x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { autoAlpha: 0 });
      }
      if (innerDotRef.current) {
        gsap.to(innerDotRef.current, { autoAlpha: 0 });
      }
    }); // Hide cursor on mouse leave

    // Hover over elements that change the cursor (scale & background color)
    document
      .querySelectorAll<HTMLElement>(".cursor-select-hover")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const scale = el.getAttribute("data-scale") || "0.4"; // Default scale or custom

          gsap.to(cursorRef.current, {
            scale: parseFloat(scale), // Use the custom scale
            backgroundColor: "white",
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.4,
            overwrite: "auto",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            scale: 1, // Revert to original size
            backgroundColor: "transparent", // Revert background color
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.4,
            overwrite: "auto",
          });
        });
      });

    // Hover over elements that change the cursor (scale & background color & text)
    document
      .querySelectorAll<HTMLElement>(".cursor-view-hover")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.getAttribute("data-follower-text") || "View"; // Fallback text
          const scale = el.getAttribute("data-scale") || "1.7"; // Default scale or custom
          if (followerTextRef.current) {
            followerTextRef.current.innerHTML = `${text}`; // Set text
          }
          gsap.to(cursorRef.current, {
            scale: parseFloat(scale), // Use the custom scale
            backgroundColor: "white",
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.4,
            overwrite: "auto",
          });
          gsap.to(innerDotRef.current, {
            ease: "power3.out",
            autoAlpha: 0,
            duration: 0.4,
            overwrite: "auto",
          });
        });

        el.addEventListener("mouseleave", () => {
          if (followerTextRef.current) {
            followerTextRef.current.innerHTML = ""; // Clear text
          }
          gsap.to(cursorRef.current, {
            scale: 1, // Revert to original size
            backgroundColor: "transparent", // Revert background color
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.4,
            overwrite: "auto",
          });
          gsap.to(innerDotRef.current, {
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.4,
            overwrite: "auto",
          });
        });
      });

    // Hover over elements that change the cursor (scale)
    document
      .querySelectorAll<HTMLElement>(".followerchangetext")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.getAttribute("data-follower-text") || ""; // Fallback text
          const scale = el.getAttribute("data-scale") || "1.5"; // Default scale or custom
          if (followerTextRef.current) {
            followerTextRef.current.innerHTML = `
            <div class="relative size-full flex flex-row items-center justify-center border-2 rounded-full p-10">
              <div class="absolute flex flex-row gap-1 items-center justify-center rotate-[45deg]">
                ${text}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>`; // Set text
          }
          gsap.to(cursorRef.current, {
            scale: parseFloat(scale), // Use the custom scale
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.2,
            overwrite: "auto",
          });
        });

        el.addEventListener("mouseleave", () => {
          if (followerTextRef.current) {
            followerTextRef.current.innerHTML = ""; // Clear text
          }
          gsap.to(cursorRef.current, {
            scale: 1, // Revert to original size
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.2,
            overwrite: "auto",
          });
        });
      });

    // Hover over elements that change the cursor shape (text fields)
    document
      .querySelectorAll<HTMLElement>(".text-field-hover")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, {
            width: "5px", // Width of the rectangle
            height: "36px", // Height of the rectangle
            borderRadius: "3px", // Adjust for slightly rounded corners
            ease: "power3.out",
            autoAlpha: 0.5,
            duration: 0.2,
            overwrite: "auto",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            width: "24px", // Original width of the cursor
            height: "24px", // Original height of the cursor
            borderRadius: "50%", // Back to circle shape
            ease: "power3.out",
            autoAlpha: 1,
            duration: 0.2,
            overwrite: "auto",
          });
        });
      });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none flex items-center justify-center rounded-full text-white border border-white mix-blend-difference size-[4.688rem]"
        style={{ zIndex: 9999 }}
      >
        <span
          ref={followerTextRef}
          className="absolute josefin-sans text-lg text-white mix-blend-difference"
        ></span>
        {/* Dynamic text */}
      </div>
      <div
        ref={innerDotRef}
        className="fixed pointer-events-none rounded-full bg-white mix-blend-difference size-[0.469rem]"
        style={{ zIndex: 1000 }}
      ></div>
    </>
  );
}
