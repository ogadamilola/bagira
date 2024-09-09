import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHandleClick } from "@/contexts/HandleNavigation";
import { Article } from "@/data/articles";
import { useCaseStudy } from "@/contexts/CaseStudyContext";
import { CaseStudy } from "@/data/CaseStudyType";

gsap.registerPlugin(ScrollTrigger);

interface CarouselArticle {
  src: string;
  title: string;
  tags: string[];
  heading: string;
}

function WorkCarouselSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleClick = useHandleClick();
    const { caseStudies, loading, error } = useCaseStudy() as { caseStudies: CaseStudy[] | null; loading: boolean; error: any }; // Fetch case studies context // Fetch case studies context

  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;

    if (!section || !carousel) return;

    let ctx: gsap.Context;
    let scrollTriggerInstance: { kill: () => void };

    const setupAnimation = () => {
      const totalWidth = carousel.scrollWidth;
      const windowWidth = window.innerWidth;
      const distanceToScroll = totalWidth - windowWidth / 1.17;

      // Set the container height to match the carousel width
      gsap.set(carouselRef, { height: totalWidth });

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "-70 0",
          end: () => `+=${900 * 4}rem`,
          pin: !0,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
          onUpdate: (self) => {
            gsap.to(carousel, {
              x: -distanceToScroll * self.progress,
              ease: "power2.out",
              duration: 0.75,
            });
          },
        });
      }, section);
    };
    const removeAnimation = () => {
      if (ctx) {
        ctx.revert();
      }
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      gsap.set(carousel, { height: "auto", x: 0 });
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        removeAnimation();
      } else {
        removeAnimation(); // Clear any existing animation
        setupAnimation(); // Set up the animation again
      }
    };

    // Initial setup
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      removeAnimation();
      window.removeEventListener("resize", handleResize);
    };
  }, [caseStudies?.length]);

  return (
    <section
      id="work"
      className="relative size-full pt-10 px-[0] pb-20 [@media(min-width:1024px)]:pt-[5.625rem] [@media(min-width:1024px)]:px-[0] [@media(min-width:1024px)]:pb-[12.656rem] max-w-[100vw]"
    >
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative">
        <div className="mb-10 [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:justify-between [@media(min-width:1024px)]:items-end [@media(min-width:1024px)]:mb-20">
          <h2 className="text-[6.875rem] tracking-[-.03em] leading-[.81] m-0 [@media(min-width:1024px)]:text-[18.75rem] [@media(min-width:1024px)]:tracking-[-.02em]">
            <span className="champagne-limos font-light text-white">
              Our Work
            </span>
            <em className="champagne-limos text-white inline-block overflow-hidden text-[1.125rem] tracking-[-.04em] not-italic align-middle -mt-[4.1em] ml-[1em] [@media(min-width:1024px)]:-mt-[13.5em]">
              ({caseStudies?.length.toString().padStart(2, "0")})
            </em>
          </h2>
          <Link
            href={""}
            className="group hidden lg:inline-flex text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover"
            onClick={handleClick("/work")}
            passHref
          >
            <span className="relative flex px-[2.344rem] py-[0] bg-white leading-[1.2] rounded-full items-center h-[4.219rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
              <span className="relative flex flex-col overflow-hidden">
                <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                  View all
                </span>
                <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                  View all
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

        <div ref={sectionRef} className="sticky top-0 flex flex-row gap-10">
          <div
            ref={carouselRef}
            className="flex flex-col [@media(min-width:1024px)]:flex-row gap-10"
          >
            {caseStudies &&
              caseStudies.slice(0, 5).map((article: any, index: number) => (
                <Link
                  key={index}
                  href={""}
                  className="group [@media(min-width:1024px)]:flex-[0_0_75vh] [@media(min-width:1024px)]:max-w-[55.109rem] cursor-view-hover"
                  onClick={handleClick(
                    `/work/${article.slug.current}`
                  )}
                  passHref
                >
                  <picture className="relative block rounded-[.625rem] mb-[1.5625rem] overflow-hidden">
                    <img
                      src={article.mainImage.asset.url || "https://via.placeholder.com/465x433"}
                      alt={article.title}
                      className="w-full h-auto block [aspect-ratio:465/433] object-cover [transition:all_.6s_ease-in-out] bg-red-500 group-hover:scale-125"
                    />
                    <ul className="flex flex-wrap gap-[.28125rem] absolute left-[1.125rem] bottom-[1.125rem] pr-[1.125rem] opacity-50 lg:opacity-100">
                      <li className="px-[0.938rem] py-[0] rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] bg-[#000] text-[#fff] capitalize h-[2.344rem] flex items-center">
                        {article.title}
                      </li>
                      {article.tags.map((tag: string, tagIndex: number) => (
                        <li
                          key={tagIndex}
                          className="px-[0.938rem] py-[0] bg-[#d9d9d9] text-[#000] rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] capitalize h-[2.344rem] flex items-center"
                        >
                          {tag.replace(/-/g, " ")}
                        </li>
                      ))}
                    </ul>
                  </picture>
                  <h6 className="text-white text-[2.25rem] leading-tight tracking-[-.01em] max-w-[40.313rem] font-thin text-ellipsis line-clamp-2">
                    {article.shortDescription}
                  </h6>
                </Link>
              ))}
          </div>
        </div>
        <Link
            href={""}
            className="group lg:hidden inline-flex text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover mt-[2.5rem]"
            onClick={handleClick("/work")}
            passHref
          >
            <span className="relative flex px-[1.5625rem] py-[0] bg-white leading-[1.2] rounded-full items-center h-[2.8125rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
              <span className="relative flex flex-col overflow-hidden">
                <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                  View all
                </span>
                <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                  View all
                </span>
              </span>
            </span>
            <i className="flex justify-center items-center text-[2.8125rem] w-[1em] h-[1em] rounded-[50%] bg-white [transition:.4s_ease-in-out] [transition-property:background,color]">
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
    </section>
  );
}

export default WorkCarouselSection;
