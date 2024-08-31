import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import React from "react";

// Custom hook for handleClick
export const useHandleClick = () => {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // If the href contains a hash and is on the same page
      if (href.includes("#")) {
        const [path, hash] = href.split("#");

        if (pathname === path) {
          // Same page, scroll to the anchor
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
          return; // No need to push the router
        }
      }

      // If it's a different page or no hash, use router.push
      router.push(href, { scroll: false });

      // Use setTimeout to ensure this runs after navigation is complete
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
    },
    [router] // Dependencies array
  );
};
