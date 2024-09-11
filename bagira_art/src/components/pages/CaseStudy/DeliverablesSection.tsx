import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import React from "react";

function DeliverablesSection({ deliverables }: any) {
  // console.log(deliverables);
  return (
    <section className="text-[#fff] size-full relative overflow-hidden">
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative pt-[2.1875rem] pb-[2.1875rem] lg:flex flex-col lg:pt-[7.8125rem] lg:pb-[7.8125rem]">
        <LetterRevealOnScroll>
          <h2 className="text-[1.125rem] tracking-[-.01em] opacity-[.4] leading-[1.3] overflow-hidden lg:text-[1.5rem]">
            What we delivered
          </h2>
          <div className="mt-[1.4375rem] text-[1.75rem] leading-[1.3] lg:text-[4.031rem] lg:mt-[2.156rem] font-light">
            {deliverables.heading}
          </div>
        </LetterRevealOnScroll>
        <div className="grid gap-[3.4375rem] grid-cols-[1fr] lg:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] mt-[3.4375rem] lg:mt-[5.9375rem]">
          {deliverables.items.map(
            (item: { subheading: string; content: string }, index: number) => (
              <div key={index} className="">
                <OpacityOnScroll start={100} end={90}>
                  <h6 className="text-[2.063rem] mb-[2.4375rem] lg:mb-[2.4375rem] font-light">
                    {item.subheading}
                  </h6>
                  <p className="font-extralight">{item.content}</p>
                </OpacityOnScroll>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default DeliverablesSection;
