import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function AboutSection() {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   // target: ref,
  //   offset: ["start start", "end start"],
  // });
  // const negativeY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  // const positiveY = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);

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
          <h1 className="jost text-7xl">About Us</h1>
          <h3 className="josefin-sans text-xl max-w-[40vw] mt-8">
            Wondering about how the process goes or previous projects
          </h3>
        </div>
      </div>
      <div
        className="relative bg-black size-full flex flex-col items-center justify-end min-h-[70vh] followerchangetext overflow-hidden"
        data-follower-text="View"
      >
        <a href="/about" className="flex size-full">
          <div
            className="size-full absolute h-[250%] -bottom-[5%]"
            data-speed="0.5"
          >
            <Image src="/images/IMG_4263.jpg" alt="" objectFit="cover" fill />
          </div>
          <div className="absolute bg-gradient-to-b from-transparent from-0% via-black/70 via-50% to-black to-90% size-full top-0 left-0" />
          <div className="flex flex-col items-start justify-end size-full p-20 z-10">
            <div className="flex flex-col max-w-[60vw] text-white">
              <h2 className="jost text-5xl">
                MDA came to Jacknife wanting to mark a significant
              </h2>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
