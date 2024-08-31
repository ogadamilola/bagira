import { Article } from "@/data/articles";
import React from "react";

interface CarouselArticle {
  src: string;
  title: string;
  tags: string[];
  heading: string;
}

function HeroSection() {
  return (
    <section className="size-full relative flex pt-[14.6875rem] px-[0] pb-[2.375rem] min-h-[70vh] items-end lg:pt-[8.125rem] lg:px-[0] lg:pb-10 lg:min-h-[75vh]">
      <div className="ml-auto mr-auto max-w-[105rem] relative px-5 py-0 w-full">
        <h1 className="text-[6.875rem] leading-none tracking-[-.03em] mt-auto overflow-hidden lg:text-[33.75rem]">
          <span className="jost font-light text-white">Work</span>
          <em className="jost text-white inline-block overflow-hidden text-[1.125rem] tracking-[-.04em] not-italic align-middle -mt-[4.1em] ml-[1em] [@media(min-width:1024px)]:-mt-[13.5em]">
            ({Article.length.toString().padStart(2, "0")})
          </em>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
