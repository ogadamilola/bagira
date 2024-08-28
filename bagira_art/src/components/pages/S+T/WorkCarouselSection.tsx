import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CarouselArticle {
  src: string;
  title: string;
  tags: string[];
  heading: string;
}

const Article: CarouselArticle[] = [
  {
    src: "/images/article1.jpg",
    title: "Lorem",
    tags: ["branding", "web & digital", "energy & utilities"],
    heading:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
  {
    src: "/images/article2.jpg",
    title: "Lorem",
    tags: ["web & digital", "property"],
    heading:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
  {
    src: "/images/article3.jpg",
    title: "Lorem",
    tags: ["web & digital", "SaaS"],
    heading:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
  {
    src: "/images/article4.jpg",
    title: "Lorem",
    tags: ["energy & utilities", "branding"],
    heading:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
  {
    src: "/images/article5.jpg",
    title: "Lorem",
    tags: ["investments"],
    heading:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
];

function WorkCarouselSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      console.log(distanceToScroll);

      // Set the container height to match the carousel width
      gsap.set(carouselRef, { height: totalWidth });

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "-70 0",
          end: () => `+=${900 * Article.length}rem`,
          pin: !0,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
          onUpdate: (self) => {
            gsap.to(carousel, {
              x: -distanceToScroll * self.progress,
              ease: "none",
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
      if (window.innerWidth < 960) {
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
  }, [Article.length]);

  return (
    <section className="relative size-full pt-10 px-[0] pb-20 [@media(min-width:960px)]:pt-[5.625rem] [@media(min-width:960px)]:px-[0] [@media(min-width:960px)]:pb-[12.656rem] max-w-[100vw]">
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative">
        <div className="mb-10 [@media(min-width:960px)]:flex [@media(min-width:960px)]:justify-between [@media(min-width:960px)]:items-end [@media(min-width:960px)]:mb-20">
          <h2 className="text-[6.875rem] tracking-[-.03em] leading-[.81] m-0 [@media(min-width:960px)]:text-[18.75rem] [@media(min-width:960px)]:tracking-[-.02em]">
            <span className="jost font-light text-white">Our Work</span>
            <em className="jost text-white inline-block overflow-hidden text-[1.125rem] tracking-[-.04em] not-italic align-middle -mt-[4.1em] ml-[1em] [@media(min-width:960px)]:-mt-[13.5em]">
              [
              {Article.length > 10
                ? Article.length
                : Article.length.toString().padStart(2, "0")}
              ]
            </em>
          </h2>
          <a
            className="group hidden lg:inline-flex text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover"
            href="/case-study"
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
          </a>
        </div>

        <div ref={sectionRef} className="sticky top-0 flex flex-row gap-10">
          <div ref={carouselRef} className="flex flex-col lg:flex-row gap-10">
            {Article.map((article, index) => (
              <article
                key={index}
                className="group lg:flex-[0_0_75vh] max-w-[55.109rem] cursor-view-hover"
              >
                <picture className="relative block rounded-[.625rem] mb-[1.5625rem] overflow-hidden">
                  <img
                    src={article.src || "https://via.placeholder.com/465x433"}
                    alt={article.title}
                    className="w-full h-auto block [aspect-ratio:465/433] object-cover [transition:all_.6s_ease-in-out] bg-red-500 group-hover:scale-125"
                  />
                  <ul className="flex flex-wrap gap-[.28125rem] absolute left-[1.125rem] bottom-[1.125rem] pr-[1.125rem]">
                    <li className="px-[0.938rem] py-[0] rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] bg-[#000] text-[#fff] capitalize h-[2.344rem] flex items-center">
                      {article.title}
                    </li>
                    {article.tags.map((tag, tagIndex) => (
                      <li
                        key={tagIndex}
                        className="px-[0.938rem] py-[0] bg-[#d9d9d9] text-[#000] rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] capitalize h-[2.344rem] flex items-center"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </picture>
                <h6 className="text-white text-[2.25rem] leading-tight tracking-[-.01em] max-w-[40.313rem] font-thin text-ellipsis line-clamp-2">
                  {article.heading}
                </h6>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkCarouselSection;
