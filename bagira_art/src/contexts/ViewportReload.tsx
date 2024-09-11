"use client";
import { useEffect } from "react";

const MOBILE_BREAKPOINT = 1024;

const ViewportReload: React.FC = () => {
  useEffect(() => {
    let previousWidth = window.innerWidth;
    console.log("Viewport width: " + window.innerWidth);

    const handleResize = () => {
      const newWidth = window.innerWidth;

      if (
        (previousWidth < MOBILE_BREAKPOINT && newWidth >= MOBILE_BREAKPOINT) ||
        (previousWidth >= MOBILE_BREAKPOINT && newWidth < MOBILE_BREAKPOINT)
      ) {
        console.log("Crossing breakpoint, reloading page...");
        window.location.reload();
      }

      previousWidth = newWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default ViewportReload;
