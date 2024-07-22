import HorizontalScroll from "@/components/animations/HorizontalScroll";
import { getChars } from "@/components/animations/NavigationMenu";
import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function WorkSection() {
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
      <div className="bg-black flex flex-col items-start justify-end size-full px-20 pb-12 z-10">
        <div className="flex flex-col max-w-[50vw] text-white">
          <h1 className="jost text-7xl">Our Works</h1>
          <h3 className="josefin-sans text-xl max-w-[40vw] mt-8">
            Wondering about how the process goes or previous projects? Take a
            look at our wide range of services with art in many shapes and
            forms.
          </h3>
        </div>
      </div>
      <div></div>
      <div className="relative group mt-24 hidden md:flex items-center justify-end bg-[#333333] border-2 border-black hover:brightness-150 rounded-full transition-all duration-300">
        <Link
          href={"/shop"}
          className="size-full px-5 py-1.5 capitalize text-white transition-all duration-300"
          passHref
        >
          {getChars("Shop Our Collection")}
        </Link>
      </div>
    </section>
  );
}

export default WorkSection;
