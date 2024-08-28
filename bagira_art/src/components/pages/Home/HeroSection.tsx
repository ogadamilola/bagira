import ScrollingBanner from "@/components/animations/ScrollingBanner";
import Image from "next/image";
import React, { useEffect } from "react";

function HeroSection() {
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
    <div className="relative flex flex-col size-full min-h-[70dvh] justify-end">
      <div className="size-full absolute -z-[1]" data-speed="0.5">
        {/* <video
          src="/videos/IMG_6271.mov"
          autoPlay
          loop
          muted // Ensure video element starts muted
          playsInline // Ensure video plays inline
          className="size-full object-cover pointer-events-none"
        /> */}
        <Image
          src="/images/hero.png"
          alt=""
          objectFit="cover"
          fill
          className="-z-10"
        />
      </div>
      <div className="absolute bg-gradient-to-b from-transparent from-0% via-black/70 via-50% to-black to-90% size-full top-0 left-0" />
      <div className="flex flex-col items-start justify-end size-full p-20 z-10">
        <div className="flex flex-col max-w-[50vw] text-white">
          <h1 className="jost text-7xl">Life Without Art is just &quot;Meh&quot;</h1>
          <h3 className="josefin-sans text-xl max-w-[40vw] mt-8">
            Wondering about how the process goes or previous projects
          </h3>
        </div>
      </div>
      {/* <div className="size-full items-center z-10">
        <h1 className="jost  xl-text font-black text-center italic text-white justify-self-end">
          <ScrollingBanner baseVelocity={100} slowOnHover>
            Life without art is just 'meh' -{" "}
          </ScrollingBanner>
        </h1>
      </div> */}
    </div>
  );
}

export default HeroSection;
