import React, { useEffect } from "react";

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
    <section className="size-full overflow-hidden [@media(min-width:960px)]:flex [@media(min-width:960px)]:flex-wrap">
      <div className="flex flex-col flex-[1] bg-[#F7F4EF] text-[#0E0F11] cursor-pointer">
        <picture className="[@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] [@media(min-width:960px)]:[will-change:clip-path] [@media(min-width:960px)]:order-2 [@media(min-width:960px)]:[clip-path:polygon(50%_0,_50%_0,_50%_100%,_50%_100%)] overflow-hidden bg-bagiRed max-h-[35vh]">
          <div className="size-full" data-speed="0.9">
            <img
              src="/images/murals.jpg"
              className="w-full scale-125 -translate-y-[7.5vh] lg:scale-100 lg:translate-y-0 block [aspect-ratio:360/240] object-cover [@media(min-width:960px)]:max-h-[30vh]"
            />
          </div>
        </picture>
        <div className="relative flex flex-col px-5 py-[2.8125rem] min-h-[22.1875rem] flex-grow [@media(min-width:960px)]:pt-[7.313rem] [@media(min-width:960px)]:px-[5.813rem] [@media(min-width:960px)]:pb-[3.75rem] [@media(min-width:960px)]:justify-end">
          <div className="size-full mt-[1.0625rem] text-[.875rem] leading-[1.45] tracking-[-.01em] max-w-[19.538rem] flex-grow [@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] [@media(min-width:960px)]:[will-change:clip-path] [@media(min-width:960px)]:flex [@media(min-width:960px)]:m-0 [@media(min-width:960px)]:pt-[1.875rem] [@media(min-width:960px)]:pb-[.375rem] [@media(min-width:960px)]:flex-col [@media(min-width:960px)]:justify-end [@media(min-width:960px)]:text-[.9375rem] [@media(min-width:960px)]:[clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
            sagittis a massa netus pretium quis quisque tellus torquent. Dis
            maecenas dis nascetur rhoncus, eleifend conubia a.
          </div>
          <div className="leading-none [@media(min-width:960px)]:relative">
            <em className="block text-[.938rem] not-italic tracking-[-.04em] mb-[.938rem] [@media(min-width:960px)]:absolute [@media(min-width:960px)]:top-[0] [@media(min-width:960px)]:right-full [@media(min-width:960px)]:mr-[1.313rem]">
              01
            </em>
            <h6 className="text-[1.75rem] tracking-[-.02em] uppercase leading-[.9] m-0 [@media(min-width:960px)]:text-[3.563rem]">
              Commercial
              <br /> Murals
            </h6>
          </div>
          <div className="pt-[1.875rem]">
            <a
              className="group text-[#F7F4EF] flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-[#0E0F11] [transition:.4s_ease-in-out] [transition-property:background,color]"
              href="/branding"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="fill-current w-[1.219rem] h-[1.219rem] [transition:transform_.2s_ease-in-out] rotate-[135deg] group-hover:rotate-[180deg]"
              >
                <path d="M142.147 472.846 567.912 47.081 520.831 0 20.603 500.228 544.372 1024l47.081-47.086-437.489-437.486h849.431v-66.581H142.148z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-[1] bg-[#F7F4EF] text-[#0E0F11] cursor-pointer">
        <picture className="[@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] [@media(min-width:960px)]:[will-change:clip-path] [@media(min-width:960px)]:order-2 [@media(min-width:960px)]:[clip-path:polygon(50%_0,_50%_0,_50%_100%,_50%_100%)] overflow-hidden bg-bagiRed max-h-[35vh]">
          <div className="size-full" data-speed="0.9">
            <img
              src="/images/branding.jpg"
              className="w-full scale-125 -translate-y-[7.5vh] lg:scale-100 lg:translate-y-0 block [aspect-ratio:360/240] object-cover [@media(min-width:960px)]:max-h-[30vh]"
            />
          </div>
        </picture>
        <div className="relative flex flex-col px-5 py-[2.8125rem] min-h-[22.1875rem] flex-grow [@media(min-width:960px)]:pt-[7.313rem] [@media(min-width:960px)]:px-[5.813rem] [@media(min-width:960px)]:pb-[3.75rem] [@media(min-width:960px)]:justify-end">
          <div className="size-full mt-[1.0625rem] text-[.875rem] leading-[1.45] tracking-[-.01em] max-w-[19.538rem] flex-grow [@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] [@media(min-width:960px)]:[will-change:clip-path] [@media(min-width:960px)]:flex [@media(min-width:960px)]:m-0 [@media(min-width:960px)]:pt-[1.875rem] [@media(min-width:960px)]:pb-[.375rem] [@media(min-width:960px)]:flex-col [@media(min-width:960px)]:justify-end [@media(min-width:960px)]:text-[.9375rem] [@media(min-width:960px)]:[clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
            sagittis a massa netus pretium quis quisque tellus torquent. Dis
            maecenas dis nascetur rhoncus, eleifend conubia a.
          </div>
          <div className="leading-none [@media(min-width:960px)]:relative">
            <em className="block text-[.938rem] not-italic tracking-[-.04em] mb-[.938rem] [@media(min-width:960px)]:absolute [@media(min-width:960px)]:top-[0] [@media(min-width:960px)]:right-full [@media(min-width:960px)]:mr-[1.313rem]">
              02
            </em>
            <h6 className="text-[1.75rem] tracking-[-.02em] uppercase leading-[.9] m-0 [@media(min-width:960px)]:text-[3.563rem]">
              Business
              <br /> Branding
            </h6>
          </div>
          <div className="pt-[1.875rem]">
            <a
              className="group text-[#F7F4EF] flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-[#0E0F11] [transition:.4s_ease-in-out] [transition-property:background,color]"
              href="/branding"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="fill-current w-[1.219rem] h-[1.219rem] [transition:transform_.2s_ease-in-out] rotate-[135deg] group-hover:rotate-[180deg]"
              >
                <path d="M142.147 472.846 567.912 47.081 520.831 0 20.603 500.228 544.372 1024l47.081-47.086-437.489-437.486h849.431v-66.581H142.148z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-[1] bg-[#F7F4EF] text-[#0E0F11] cursor-pointer">
      <picture className="[@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] [@media(min-width:960px)]:[will-change:clip-path] [@media(min-width:960px)]:order-2 [@media(min-width:960px)]:[clip-path:polygon(50%_0,_50%_0,_50%_100%,_50%_100%)] overflow-hidden bg-bagiBlack max-h-[35vh]">
          <div className="size-full" data-speed="0.9">
            <img
              src="/images/dev.jpg"
              className="w-full scale-110 -translate-y-[7.5vh] lg:scale-100 lg:translate-y-0 block [aspect-ratio:360/240] object-cover [@media(min-width:960px)]:max-h-[30vh]"
            />
          </div>
        </picture>
        <div className="relative flex flex-col px-5 py-[2.8125rem] min-h-[22.1875rem] flex-grow [@media(min-width:960px)]:pt-[7.313rem] [@media(min-width:960px)]:px-[5.813rem] [@media(min-width:960px)]:pb-[3.75rem] [@media(min-width:960px)]:justify-end">
          <div className="size-full mt-[1.0625rem] text-[.875rem] leading-[1.45] tracking-[-.01em] max-w-[19.538rem] flex-grow [@media(min-width:960px)]:[transition:clip-path_.4s_ease-in-out] [@media(min-width:960px)]:[will-change:clip-path] [@media(min-width:960px)]:flex [@media(min-width:960px)]:m-0 [@media(min-width:960px)]:pt-[1.875rem] [@media(min-width:960px)]:pb-[.375rem] [@media(min-width:960px)]:flex-col [@media(min-width:960px)]:justify-end [@media(min-width:960px)]:text-[.9375rem] [@media(min-width:960px)]:[clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
            sagittis a massa netus pretium quis quisque tellus torquent. Dis
            maecenas dis nascetur rhoncus, eleifend conubia a.
          </div>
          <div className="leading-none [@media(min-width:960px)]:relative">
            <em className="block text-[.938rem] not-italic tracking-[-.04em] mb-[.938rem] [@media(min-width:960px)]:absolute [@media(min-width:960px)]:top-[0] [@media(min-width:960px)]:right-full [@media(min-width:960px)]:mr-[1.313rem]">
              03
            </em>
            <h6 className="text-[1.75rem] tracking-[-.02em] uppercase leading-[.9] m-0 [@media(min-width:960px)]:text-[3.563rem]">
              Webdev
              <br /> &
              <br /> Digital
              <br /> Marketing
            </h6>
          </div>
          <div className="pt-[1.875rem]">
            <a
              className="group text-[#F7F4EF] flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-[#0E0F11] [transition:.4s_ease-in-out] [transition-property:background,color]"
              href="/branding"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="fill-current w-[1.219rem] h-[1.219rem] [transition:transform_.2s_ease-in-out] rotate-[135deg] group-hover:rotate-[180deg]"
              >
                <path d="M142.147 472.846 567.912 47.081 520.831 0 20.603 500.228 544.372 1024l47.081-47.086-437.489-437.486h849.431v-66.581H142.148z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCarouselSection;
