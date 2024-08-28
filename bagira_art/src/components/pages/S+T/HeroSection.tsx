import { FlipLink } from "@/components/animations/RevealLinks";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
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
    <section className="relative flex flex-col lg:flex-row pt-[9.375rem] size-full">
      <div className=" z-10 mix-blend-difference text-[#fff] flex flex-col min-h-[60vh] lg:min-h-[70vh] justify-end flex-[0_0_50%] lg:max-w-[50%] [padding:0_1rem_2.5rem] lg:[padding:0_8.438rem_2.344rem]">
        <div className="jost relative w-screen -translate-x-[8.438rem] font-light leading-none text-[6.875rem] mx-[0] my-[.2em] px-[0] py-[.1em] select-none lg:text-[20.625rem] mt-[auto] mb-5 pointer-events-none z-10 lg:mx-[0] lg:my-[auto]">
          <ScrollingBanner
            baseVelocity={-20}
            className="inline-block whitespace-nowrap pr-[.2em] align-top"
          >
            Life Without Art is Just &quot;Meh&quot;
          </ScrollingBanner>
        </div>
        <h1 className="font-light text-[1.125rem] leading-[1.2] mt-[0] mx-[0] mb-[1.875rem] tracking-[-.01em] max-w-[70%] lg:text-[2.25rem] lg:max-w-full lg:leading-[2.1875rem]">
          <span className="josefin-sans">
            Wondering about how the process goes or previous projects?
          </span>
        </h1>
        <div>
          <button className="group josefin-sans inline-flex text-[1.219rem] [font-family:inherit] select-none appearance-none border-[none] outline-[none] [box-shadow:none] cursor-pointer relative items-center bg-none leading-[1.2] tracking-[-.02em] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:color] px-[0] py-[.5rem] gap-[.375rem] content-[''] before:absolute before:left-[0] before:bottom-[0] before:w-full before:h-[.0625rem] before:bg-current cursor-select-hover">
            <span className="relative flex [transition:.4s_ease-in-out] [transition-property:background,color] ">
              <span className="relative flex flex-col overflow-hidden">
                <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                  Scroll + explore
                </span>
                <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                  Scroll + explore
                </span>
              </span>
            </span>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 9"
              className="w-[0.753em]"
            >
              <path
                d="M.603.902h6.808V7.71"
                stroke="currentColor"
                stroke-width=".851"
              ></path>
              <path
                d="m4.434 5.157 2.978 2.978 2.979-2.978"
                stroke="currentColor"
                stroke-width=".851"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-[0_0_50%] lg:max-w-[50%]">
        <div className="relative overflow-hidden">
          <div className="opacity-15 bg-[#E81D5A] size-full min-h-[100vh] -mt-[9.375rem] absolute z-10"></div>
          <div
            className="size-full min-h-[100vh] -mt-[9.375rem]"
            data-speed="0.75"
          >
            <img
              src="/images/hero.png"
              className="h-[100vh] object-cover"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
