import ScrollingBanner from "@/components/animations/ScrollingBanner";
import React from "react";

function HeroSection() {
  return (
    <section className="size-full relative overflow-hidden text-[#f4f4f4]">
      <div className="!absolute top-[0] left-[0] w-full h-full flex relative overflow-hidden">
        <div className="h-full w-full flex [-webkit-transform-style:inherit!important]">
          <div className="h-full w-full flex [-webkit-transform-style:inherit!important]">
            <div className="opacity-10 bg-[#E81D5A] size-full min-h-[100vh] absolute z-10 pointer-events-none"></div>

            <img
              src="/images/article1.webp"
              className="absolute max-w-full block object-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative min-h-screen flex flex-col justify-end pt-[9.375rem] pb-[1.875rem] lg:pt-[6.875rem]">
        <h1 className="text-[1.375rem] leading-tight mb-[1.5625rem] max-w-[31.25rem] lg:text-[2.5rem]"></h1>
        <ul className="flex flex-wrap gap-[.4375rem] mb-[.625rem]">
          {/* Map project tag */}
          <li className="flex items-center text-center px-[.9375rem] py-[0] h-[1.875rem] border-[.08269rem] border-[solid] border-[hsla(0,0%,100%,.4)] rounded-[1.875rem] text-[.7125rem] lg:text-[1.09375rem] lg:h-[2.4375rem]">
            Project tag
          </li>
        </ul>
        <div className="jost relative w-screen -translate-x-[8.438rem] font-light leading-none text-[6.875rem] mx-[0] my-[.2em] px-[0] py-[.1em] select-none lg:text-[17.344rem] mt-[auto] mb-5 pointer-events-none z-10 lg:mx-[0] lg:my-[auto]">
          <ScrollingBanner
            baseVelocity={-20}
            className="inline-block whitespace-nowrap pr-[.2em] align-top"
          >
            Title of Project
          </ScrollingBanner>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
