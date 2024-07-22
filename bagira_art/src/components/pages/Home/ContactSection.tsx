import HorizontalScroll from "@/components/animations/HorizontalScroll";
import { getChars } from "@/components/animations/NavigationMenu";
import { FlipLink } from "@/components/animations/RevealLinks";
import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });
  const negativeY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const positiveY = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);

  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      let effectElements = gsap.utils.toArray("[data-speed]");
      effectElements.forEach((el: any) => {
        let speed = parseFloat(el.getAttribute("data-speed"));
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onRefresh: (self) => {
                let start = Math.max(0, self.start); // ensure no negative values
                let distance = self.end - start;
                let end = start + distance / speed;
                (self as any).setPositions(start, end);
                if (self.animation) {
                  // Check if self.animation is defined
                  (self as any).animation.vars.y = (end - start) * (1 - speed);
                  self.animation
                    .invalidate()
                    .progress(1)
                    .progress(self.progress);
                }
              },
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-black size-full flex flex-col items-center justify-center py-52"
    >
      <div className="bg-black flex flex-col items-center justify-center size-full px-20 z-10">
        <div className="flex flex-col items-center justify-center max-w-[50vw] text-white text-center">
          <p className="josefin-sans text-white text-xs mt-4 text-center max-w-[30ch] uppercase tracking-[0.3em]">
            Let's Talk
          </p>
          <h1 className="jost text-7xl font-black tracking-wide">
            I want my own BAGIRA piece.
          </h1>
          <p className="josefin-sans text-sm mt-4 text-center">
            Schedule a free consultation with our team and let's make things
            happen!
          </p>
          <div className="relative group flex mt-12 items-center justify-center text-white bg-black border border-white rounded-full transition-all duration-300">
            <Link
              href={"/contact"}
              className="josefin-sans font-semibold px-4 py-0.5 transition-all duration-300 uppercase"
              passHref
            >
              <FlipLink>{getChars("contact us")}</FlipLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
