import ScrollingBanner from "@/components/animations/ScrollingBanner";
import { useHandleClick } from "@/contexts/HandleNavigation";
import Link from "next/link";
import React, { useEffect } from "react";

function BrandingSection() {
  const handleClick = useHandleClick();
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
    <section className="text-[#fff] size-full pt-[7.8125rem] pb-[3.125rem] overflow-hidden lg:pt-[6.5625rem] lg:pb-[18.75rem]">
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative">
        <div className="jost relative w-screen left-2/4 -translate-x-1/2 overflow-hidden font-light leading-none text-[6.875rem] mx-[0] my-[.2em] px-[0] py-[.1em] select-none lg:text-[25.313rem]">
          <ScrollingBanner
            baseVelocity={-20}
            className="inline-block whitespace-nowrap pr-[.2em] align-top"
          >
            Branding —
          </ScrollingBanner>
        </div>
        <div className="mt-[4.688rem] ml-[4.688rem] mb-[4.688rem] lg:ml-auto lg:max-w-[72rem]">
          <div className="text-[.875rem] leading-[1.31] lg:text-[1.688rem] lg:[column-count:2] lg:gap-x-[3.4375rem]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
            sagittis a massa netus pretium quis quisque tellus torquent. Dis
            maecenas dis nascetur rhoncus, eleifend conubia a. Lorem ipsum odor
            amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus
            pretium quis quisque tellus torquent. Dis maecenas dis nascetur
            rhoncus, eleifend conubia a.
          </div>
          <div className="mt-[1.875rem] text-right">
            <Link
              className="group inline-flex text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover"
              href="/contact"
              onClick={handleClick("/contact")}
            >
              <span className="relative flex px-[2.344rem] py-[0] bg-white leading-[1.2] rounded-full items-center h-[4.219rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
                <span className="relative flex flex-col overflow-hidden">
                  <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                    Our Studio
                  </span>
                  <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                    Our Studio
                  </span>
                </span>
              </span>
              <i className="flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-white [transition:.4s_ease-in-out] [transition-property:background,color]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="fill-current w-[1.219rem] h-[1.219rem] [transition:transform_.2s_ease-in-out] rotate-[135deg] group-hover:rotate-[180deg]"
                >
                  <path d="M142.147 472.846 567.912 47.081 520.831 0 20.603 500.228 544.372 1024l47.081-47.086-437.489-437.486h849.431v-66.581H142.148z"></path>
                </svg>
              </i>
            </Link>
          </div>
        </div>
        <div className="lg:flex lg:items-start lg:gap-[8.125rem]">
          <div className="mb-[.8125rem] max-w-[45vw] lg:m-0 lg:w-[27vw] lg:max-w-[31.313rem] overflow-hidden">
            <div className="size-full" data-speed="1.1">
              <img
                src="/images/article1.webp"
                className="w-full scale-125 translate-y-[7.5vh] lg:translate-y-[6vh] block object-cover"
              />
            </div>
          </div>
          <div className="lg:mt-[8.125rem] lg:w-[43vw] lg:max-w-[49.219rem]  overflow-hidden">
            <div className="size-full" data-speed="0.9">
              <img
                src="/images/article2.webp"
                className="w-full scale-125 -translate-y-[7.5vh] lg:-translate-y-[6vh] block object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandingSection;
