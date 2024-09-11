import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import React from "react";

function OverviewSection({ heading, content }: any) {
  return (
    <section className="text-[#fff] size-full relative overflow-hidden">
      <div className="justify-between px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative pt-[2.1875rem] pb-[2.1875rem] flex flex-col lg:flex-row gap-[3.75rem] lg:pt-[7.8125rem] lg:pb-[7.8125rem]">
        <div className="lg:max-w-[43.594rem]">
          <LetterRevealOnScroll>
            <h2 className="text-[1.125rem] tracking-[-.01em] opacity-[.4] leading-[1.3] overflow-hidden lg:text-[1.5rem]">
              Overview
            </h2>
            <h6 className="mt-[1.4375rem] text-[1.75rem] leading-[1.1] lg:text-[4.031rem] lg:mt-[1.0625rem] font-light">
              {heading}
            </h6>
          </LetterRevealOnScroll>
        </div>
        <div className="size-full text-[1.0625rem] leading-[1.605] lg:max-w-[42.188rem] lg:text-[1.5rem] lg:mt-[2.8125rem] font-extralight">
          <OpacityOnScroll start={100} end={90}>
            <p>{content}</p>
          </OpacityOnScroll>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
