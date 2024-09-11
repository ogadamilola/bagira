import ScrollingBanner from "@/components/animations/ScrollingBanner";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function HeroSection({ shortDescription, tags, title, mainImage }: any) {
  const pathname = usePathname();

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
    <section className="relative flex flex-col lg:flex-row pt-[9.375rem] size-full h-screen bg-bagiRed">
      <div className="!absolute top-[0] left-[0] w-full h-full flex relative overflow-hidden">
        <div
          className="h-full w-full flex [-webkit-transform-style:inherit!important] brightness-[.5]"
          data-speed="1.1"
        >
          <div className="h-full w-full flex [-webkit-transform-style:inherit!important]">
            <div className="z-10 opacity-10 bg-[#E81D5A] size-[125%] min-h-[100vh] absolute pointer-events-none"></div>

            <img
              src={mainImage}
              className="absolute w-full max-w-full min-h-full block object-cover scale-125"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>

      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-end pt-[9.375rem] pb-[1.875rem] lg:pt-[6.875rem] text-white  size-full">
        {/* Project Description */}
        <h1 className="champagne-limos text-[1.375rem] leading-tight mb-[2.344rem] lg:max-w-[60vw] lg:text-[3.75rem] font-light">
          {shortDescription}
        </h1>
        <ul className="flex flex-wrap gap-[.4375rem] mb-[0.938rem]">
          {/* Map project tag */}
          {tags.map((tag: string, index: number) => (
            <li
              key={index}
              className="flex items-center text-center px-[1.406rem] py-[0] h-[1.875rem] border-[.08269rem] border-[solid] border-[hsla(0,0%,100%,.4)] rounded-[1.875rem] text-[.7125rem] lg:text-[1.641rem] lg:h-[3.531rem] capitalize"
            >
              {tag.replace(/-/g, " ")}
            </li>
          ))}
        </ul>
        <div className="champagne-limos relative w-screen left-2/4 -translate-x-1/2 overflow-hidden font-light leading-none text-[6.875rem] mx-[0] my-[.2em] px-[0] py-[.1em] select-none lg:pt-0 lg:m-0 lg:text-[17.344rem]">
          {/* Project Title */}
          <ScrollingBanner
            baseVelocity={-20}
            className="inline-block whitespace-nowrap pr-[.2em] align-top"
          >
            {title}
          </ScrollingBanner>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
