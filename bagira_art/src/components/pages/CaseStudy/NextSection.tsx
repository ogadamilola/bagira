import ScrollingBanner from "@/components/animations/ScrollingBanner";
import Link from "next/link";
import React from "react";
import { useHandleClick } from "@/contexts/HandleNavigation";
import { Article } from "@/data/articles";

function NextSection({ slug }: any) {
  const handleClick = useHandleClick();

  return (
    <section className="relative size-full overflow-hidden px-[0] py-[3.4375rem] lg:px-[0] lg:py-[9.375rem] lg:mt-[6.25rem]">
      <div className="-z-10 absolute champagne-limos w-screen -translate-x-1/2 overflow-hidden font-light leading-none text-[6.875rem] mx-[0] my-[.2em] px-[0] py-[.1em] select-none m-0  top-[0] transform-none lg:top-[12.5rem] lg:text-[27.188rem] text-white mix-blend-difference">
        <ScrollingBanner
          baseVelocity={-20}
          className="inline-block whitespace-nowrap pr-[.2em] align-top"
        >
          Up Next
        </ScrollingBanner>
      </div>
      {Article.slice(1, 2).map((article, index) => (
        <Link
          key={index}
          href={""}
          className="group flex flex-col w-[17.5rem] mx-[auto] my-[0] lg:w-[50.3125rem] cursor-view-hover"
          onClick={handleClick(
            `/work/${article.title.replace(/\s+/g, "-").toLowerCase()}`
          )}
          passHref
        >
          <picture className="block mb-[1.625rem] overflow-hidden">
            <img
              className="block [aspect-ratio:1/1] object-cover [transition:all_.6s_ease-in-out] group-hover:scale-125"
              width="1211"
              height="1211"
              alt="an image"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={article.src}
            />
          </picture>
          <ul className="flex flex-wrap gap-[.28125rem] mb-[0.938rem]">
            {article.tags.map((tag, tagIndex) => (
              <li
                key={tagIndex}
                className="px-[0.938rem] py-[0] bg-white/10 text-white mix-blend-difference rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] h-[2.344rem] flex items-center capitalize"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h2 className="text-[2.25rem] text-white mix-blend-difference">
            {article.title}
          </h2>
        </Link>
      ))}
    </section>
  );
}

export default NextSection;
