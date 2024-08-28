"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

interface AnimationProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: AnimationProps) {
  const lenis = useLenis();

  useEffect(() => {
    function scrollToElement(target: any) {
      const targetElement = document.querySelector(target);
      if (targetElement && lenis) {
        lenis.scrollTo(targetElement);
      }
    }

    // Handle anchor links globally
    const handleAnchorClick = (e: any) => {
      const target = e.target.getAttribute("href");
      if (target && target.startsWith("#")) {
        e.preventDefault();
        scrollToElement(target);
      }
    };

    // Attach event listener to the entire document
    document.addEventListener("click", handleAnchorClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 5 }}>
      {children}
    </ReactLenis>
  );
}
