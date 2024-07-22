import HorizontalScroll from "@/components/animations/HorizontalScroll";
import { getChars } from "@/components/animations/NavigationMenu";
import { FlipLink } from "@/components/animations/RevealLinks";
import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function PaintingSection() {
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
      className="bg-black size-full flex flex-col items-center justify-center pt-24 py-12"
    >
      <div className="flex flex-row items-center justify-between size-full px-20 ">
        <div className="flex flex-col items-start justify-between w-1/2">
          <Image
            alt=""
            src="/images/The_gallery_logo_white.png"
            objectFit="cover"
            height={150}
            width={150}
            className="group-hover:opacity-0 transition-all duration-500"
          />
          <p className="josefin-sans text-white text-xs mt-4 text-center max-w-[30ch] uppercase tracking-[0.3em]">
            At Kura Hulanda
          </p>
        </div>
        <div className="flex flex-col items-center justify-between w-1/2 text-white">
          <h2 className="jost text-4xl mt-2 text-center leading-normal max-w-[10ch] font-bold uppercase">
            Now Open!
          </h2>
          <p className="josefin-sans text-white text-xs mt-3 text-center max-w-[40ch] uppercase tracking-[0.3em]">
            From Tuesday to Saturday
          </p>
          <p className="josefin-sans text-white text-xs mt-3 text-center max-w-[30ch] uppercase tracking-[0.3em]">
            2 PM - 8:30 PM
          </p>
          <div className="relative group hidden md:flex mt-3 items-center justify-end text-black bg-white transition-all duration-300">
            <Link
              href={"/the-gallery"}
              className="josefin-sans font-semibold size-full px-6 py-1 transition-all duration-300 uppercase"
              passHref
            >
              <FlipLink>{getChars("MORE INFO")}</FlipLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaintingSection;
