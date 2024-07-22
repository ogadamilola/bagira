import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function TheGallerySection() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleMouseEnter = () => {
    if (svgRef.current) {
      svgRef.current.classList.remove("spin-slow");
      svgRef.current.classList.add("spin-fast");
    }
  };

  const handleMouseLeave = () => {
    if (svgRef.current) {
      svgRef.current.classList.remove("spin-fast");
      svgRef.current.classList.add("spin-slow");
    }
  };

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
    <section className="bg-black bg-cover size-full flex items-center justify-center z-10">
      <div className="flex flex-col items-start justify-start size-full p-20">
        <div
          className="absolute group self-end flex flex-col items-center justify-center w-[15vw] h-[15vw] rounded-full transform-gpu -mt-24"
          data-speed="1.2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute size-[160%] spin-slow group-hover:size-[140%] transition-all duration-500"
            style={{ transformOrigin: "center" }}
          >
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
            />
            <text
              className="josefin-sans tracking-[0.5em] text-[8px]"
              fill="white"
            >
              <textPath
                href="#circlePath"
                textAnchor="middle"
                startOffset="50%"
              >
                Life Without Art is just &quot;Meh&quot; -
              </textPath>
            </text>
          </svg>

          <a
            href="/the-gallery"
            className="absolute flex size-full items-center justify-center bg-bagiOrange hover:bg-transparent transition-all duration-500 rounded-full overflow-hidden"
          >
            <Image
              alt=""
              src="/images/The_gallery_logo_white.png"
              objectFit="cover"
              height={100}
              width={100}
              className="group-hover:opacity-0 transition-all duration-500"
            />
            <video
              src="/videos/BagiraGallery Opening Event.mov"
              autoPlay
              loop
              muted
              className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
            />
          </a>
        </div>

        <div className="size-full josefin-sans text-white text-5xl font-thin max-w-[75vw] mt-20">
          <WordByWordOnScroll
            shadow={true}
            lineStyles={{
              marginTop: "1.2ch", // Custom line height
              marginRight: "0.4ch", // Custom character spacing
            }}
          >
            BAGIRA's vibrant Instagram page unveils a self-taught artist
            blossoming on the sunny shores of Curacao. With a bold artistic
            spirit discovered at 21, she left her job behind just two weeks
            later to fully embrace her newfound passion. Her work thrives on a
            kaleidoscope of colors, strong lines, and whimsical imagery.
          </WordByWordOnScroll>
        </div>
      </div>
    </section>
  );
}

export default TheGallerySection;
