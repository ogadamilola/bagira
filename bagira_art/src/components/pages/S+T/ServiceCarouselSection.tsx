import React, { useEffect } from "react";

interface ServiceCard {
  src: string;
  title: string;
  href: string;
  description: string;
}

const Card: ServiceCard[] = [
  {
    src: "/images/murals.jpg",
    title: "Commercial Murals",
    href: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
  {
    src: "/images/branding.jpg",
    title: "Business Branding",
    href: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
  {
    src: "/images/dev.jpg",
    title: "Webdev & Digital Marketing",
    href: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate sagittis a massa netus pretium quis quisque tellus torquent. Dis maecenas dis nascetur rhoncus, eleifend conubia a.",
  },
];

function ServiceCarouselSection() {
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
    [@media(min-width:960px)]:grid
    [@media(min-width:960px)]:grid-cols-3 
    [@media(min-width:960px)]:min-h-[100vh]"
    >
      {Card.map((card, index) => (
        <div
          key={index}
          className="relative group flex flex-col flex-[1] text-[#0E0F11] bg-[#F7F4EF] cursor-pointer 
          [@media(min-width:960px)]:min-h-[100vh]
          [@media(min-width:960px)]:bg-transparent"
          onClick={() => (window.location.href = card.href)}
        >
          {/* Left peeling part */}
          <div
            className="hidden absolute inset-y-0 left-0 w-1/2 bg-[#F7F4EF] 
            [@media(min-width:960px)]:block
            [@media(min-width:960px)]:[transition:transform_.4s_ease-in-out] 
            origin-left group-hover:scale-x-0 pointer-events-none"
          />

          {/* Right peeling part */}
          <div
            className="hidden absolute inset-y-0 right-0 w-1/2 bg-[#F7F4EF] 
            [@media(min-width:960px)]:block
            [@media(min-width:960px)]:[transition:transform_.4s_ease-in-out] origin-right group-hover:scale-x-0 pointer-events-none"
          />
          <picture
            className="
          [@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] 
          [@media(min-width:960px)]:[will-change:clip-path] 
          [@media(min-width:960px)]:order-2 
          [@media(min-width:960px)]:[clip-path:polygon(50%_0,_50%_0,_50%_100%,_50%_100%)]
          group-hover:[@media(min-width:960px)]:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] 
          overflow-hidden max-h-[35vh]
          "
          >
            <div
              className="size-full [@media(min-width:960px)]:h-[30vh]"
              data-speed="0.9"
            >
              <img
                src={card.src}
                className="w-full scale-125 -translate-y-[7.5vh] lg:-translate-y-[6vh] block [aspect-ratio:360/240] object-cover [@media(min-width:960px)]:max-h-[30vh]"
              />
            </div>
          </picture>
          <div
            className="relative flex flex-col px-5 py-[2.8125rem] min-h-[22.1875rem] flex-grow 
          [@media(min-width:960px)]:pt-[7.313rem] 
          [@media(min-width:960px)]:px-[5.813rem] 
          [@media(min-width:960px)]:pb-[3.75rem] 
          [@media(min-width:960px)]:justify-end"
          >
            <div
              className="
            size-full mt-[1.0625rem] text-[.875rem] leading-[1.45] tracking-[-.01em] max-w-[19.538rem] flex-grow
            [@media(min-width:960px)]:translate-y-[7.126rem] 
            [@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out]
            [@media(min-width:960px)]:[will-change:clip-path]
            [@media(min-width:960px)]:flex
            [@media(min-width:960px)]:m-0
            [@media(min-width:960px)]:pt-[1.875rem]
            [@media(min-width:960px)]:pb-[.375rem]
            [@media(min-width:960px)]:flex-col
            [@media(min-width:960px)]:justify-end
            [@media(min-width:960px)]:text-[.9375rem]
            [@media(min-width:960px)]:[clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]
            group-hover:[@media(min-width:960px)]:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] 
            [@media(min-width:960px)]:text-white 
            [@media(min-width:960px)]:mix-blend-difference
            "
            >
              {card.description}
            </div>
            <div
              className="leading-none jost 
            [@media(min-width:960px)]:font-light 
          [@media(min-width:960px)]:text-white 
            [@media(min-width:960px)]:mix-blend-difference 
            [@media(min-width:960px)]:relative 
            group-hover:[@media(min-width:960px)]:-translate-y-[30vh] 
            [@media(min-width:960px)]:[transition:transform_.4s_ease-in-out]
            "
            >
              <em
                className="block text-[.938rem] not-italic tracking-[-.04em] mb-[.938rem] 
              [@media(min-width:960px)]:absolute 
              [@media(min-width:960px)]:top-[0] 
              [@media(min-width:960px)]:right-full 
              [@media(min-width:960px)]:mr-[1.313rem]"
              >
                {(index + 1).toString().padStart(2, "0")}
              </em>
              <h6 className="text-[1.75rem] tracking-[-.02em] uppercase leading-[.9] m-0 [@media(min-width:960px)]:text-[3.563rem]">
                {card.title}
              </h6>
            </div>
            <div className="pt-[1.875rem]">
              <a
                className="group text-[#F7F4EF] flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-white mix-blend-difference [transition:.4s_ease-in-out] [transition-property:background,color] cursor-select-hover"
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
