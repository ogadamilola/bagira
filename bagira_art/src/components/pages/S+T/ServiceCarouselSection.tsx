import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import { Service } from "@/data/services";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface ServiceCard {
  src: string;
  title: string;
  href: string;
  description: string;
}

function ServiceCarouselSection() {
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
    <section
      id="services"
      className="size-full overflow-hidden 
    lg:grid
    lg:grid-cols-3 
    lg:min-h-[100vh]"
    >
      {Service.map((card, index) => (
        <div
          key={index}
          className="relative group flex flex-col flex-[1] text-[#0E0F11] bg-[#F7F4EF] cursor-pointer 
          lg:min-h-[100vh]
          lg:bg-transparent"
          onClick={() => (window.location.href = card.href)}
        >
          {/* Left peeling part */}
          <div
            className="z-10 hidden absolute inset-y-0 left-0 w-[51%] bg-[#F7F4EF] 
            lg:block
            lg:[transition:transform_.4s_ease-in-out] 
            origin-left group-hover:scale-x-0 pointer-events-none"
          />

          {/* Right peeling part */}
          <div
            className="z-10 hidden absolute inset-y-0 right-0 w-[51%] bg-[#F7F4EF] 
            lg:block
            lg:[transition:transform_.4s_ease-in-out] 
            origin-right group-hover:scale-x-0 pointer-events-none"
          />
          <picture
            className={`
          lg:[transition:clip-path_.4s_ease-in-out] 
          lg:[will-change:clip-path] 
          lg:order-2 
          ${
            /*lg:[clip-path:polygon(50%_0,_50%_0,_50%_100%,_50%_100%)]
          group-hover:lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] */ ""
          }
          overflow-hidden max-h-[35vh]
          `}
          >
            <div className="size-full lg:h-[30vh]" data-speed="0.9">
              <img
                src={card.src}
                className="w-full scale-125 -translate-y-[7.5vh] lg:-translate-y-[6vh] block [aspect-ratio:360/240] object-cover lg:min-h-[30vh]"
              />
            </div>
          </picture>
          <div
            className="z-10 relative flex flex-col px-5 pt-[2.8125rem] lg:min-h-[22.1875rem] lg:flex-grow 
          lg:pt-[7.313rem] 
          lg:px-[5.813rem] 
          lg:justify-end
          lg:text-white 
            lg:mix-blend-difference"
          >
            <div
              className="
            size-full my-[1.0625rem] text-[.875rem] leading-[1.45] tracking-[-.01em] max-w-[19.538rem] flex-grow
            lg:bottom-0
            lg:[transition:clip-path_.4s_ease-in-out]
            lg:[will-change:clip-path]
            lg:flex
            lg:m-0
            lg:pt-[1.875rem]
            lg:pb-[.375rem]
            lg:flex-col
            lg:justify-end
            lg:text-[.9375rem]
            lg:[clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]
            group-hover:lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] 
            "
            >
              {card.description}
            </div>
            <div
              className="leading-none champagne-limos 
            lg:font-light 
          lg:text-white 
            lg:mix-blend-difference 
            lg:absolute 
            group-hover:lg:-translate-y-[30vh] 
            lg:[transition:transform_.4s_ease-in-out]
            "
            >
              <em
                className="block text-[.938rem] not-italic tracking-[-.04em] mb-[.938rem] 
              lg:absolute 
              lg:top-[0] 
              lg:right-full 
              lg:mr-[1.313rem]"
              >
                {(index + 1).toString().padStart(2, "0")}
              </em>
              <LetterRevealOnScroll
                className="relative"
                staggerDuration={0.005}
              >
                <h6 className="text-[1.75rem] tracking-[-.02em] uppercase leading-[.9] m-0 lg:text-[3.563rem]">
                  {card.title}
                </h6>
              </LetterRevealOnScroll>
            </div>
          </div>
          <div
            className="z-10 relative flex flex-col px-5 pb-[2.8125rem]
          lg:px-[5.813rem] 
          lg:pb-[3.75rem] 
          lg:justify-end
          lg:text-white 
            lg:mix-blend-difference"
          >
            <div className="pt-[1.875rem]">
              <a
                className="group text-[#F7F4EF] flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-[#0E0F11] lg:bg-white mix-blend-difference [transition:.4s_ease-in-out] [transition-property:background,color] cursor-select-hover"
                href={card.href}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="fill-current w-[1.219rem] h-[1.219rem] [transition:transform_.2s_ease-in-out] rotate-[135deg] group-hover:rotate-[180deg] mix-blend-difference"
                >
                  <path d="M142.147 472.846 567.912 47.081 520.831 0 20.603 500.228 544.372 1024l47.081-47.086-437.489-437.486h849.431v-66.581H142.148z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ServiceCarouselSection;
