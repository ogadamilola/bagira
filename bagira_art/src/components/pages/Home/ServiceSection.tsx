import HorizontalScroll from "@/components/animations/HorizontalScroll";
import { getChars } from "@/components/animations/NavigationMenu";
import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlipLink } from "@/components/animations/RevealLinks";

function ServiceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });
  const negativeY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const positiveY = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);

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
      ref={ref}
      className="bg-black size-full flex flex-col items-center justify-center pt-24 py-12"
    >
      <div className="bg-black flex flex-col items-start justify-end size-full px-20 pb-12 z-10">
        <div className="flex flex-col max-w-[50vw] text-white">
          <h1 className="jost text-7xl">Our Service</h1>
          <h3 className="josefin-sans text-xl max-w-[40vw] mt-8">
            Visual artist, Muralist, Graphic designer, Commissions
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-2 w-[100vw] h-auto px-5 text-white">
        <div className="bg-bagiOrange flex flex-col items-center justify-center size-full h-[600px] border border-[#323232] gap-12">
          <div className="flex flex-col items-center justify-center h-2/3">
            <div className="flex flex-col items-center justify-center size-3/12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64zM160 352c0-17.7 14.3-32 32-32l0-16c0-44.2 35.8-80 80-80l144 0c17.7 0 32-14.3 32-32l0-32 0-90.5c37.3 13.2 64 48.7 64 90.5l0 32c0 53-43 96-96 96l-144 0c-8.8 0-16 7.2-16 16l0 16c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="jost text-4xl mt-2 text-center leading-normal max-w-[10ch]">
              Murals
            </h2>
            <p className="josefin-sans text-xl mt-8 text-center max-w-[30ch]">
              Murals and more information on how it benefits businesses.
            </p>
          </div>
          <div className="relative group hidden md:flex items-center justify-end text-black bg-white transition-all duration-300">
            <FlipLink className="px-6 py-3" inside="25">
              <Link
                href={"/murals"}
                className="josefin-sans font-semibold size-full capitalize transition-all duration-300"
                passHref
              >
                {getChars("Learn More")}
              </Link>
            </FlipLink>
          </div>
        </div>
        <div className="bg-black flex flex-col items-center justify-center size-full h-[600px] border border-[#323232] gap-12">
          <div className="flex flex-col items-center justify-center h-2/3">
            <div className="flex flex-col shrink-0 items-center justify-center size-3/12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192c0 0 0 0 0 0s0 0 0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496l0-55.4c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1l0 55.4c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="jost text-4xl mt-2 text-center leading-normal max-w-[10ch]">
              Graphic Design
            </h2>
            <p className="josefin-sans text-xl mt-8 text-center max-w-[30ch]">
              BAGI, an innovative graphic design studio.
            </p>
          </div>
          <div className="relative group hidden md:flex items-center justify-end text-black bg-white transition-all duration-300">
            <FlipLink className="px-6 py-3" inside="25">
              <Link
                href={"/bagi"}
                className="josefin-sans font-semibold size-full capitalize transition-all duration-300"
                passHref
              >
                {getChars("Learn More")}
              </Link>
            </FlipLink>
          </div>
        </div>
        <div className="bg-black flex flex-col items-center justify-center size-full h-[600px] border border-[#323232] gap-12">
          <div className="flex flex-col items-center justify-center h-2/3">
            <div className="flex flex-col items-center justify-center size-3/12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448L64 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="jost text-4xl mt-2 text-center leading-normal max-w-[10ch]">
              Paintings
            </h2>
            <p className="josefin-sans text-xl mt-8 text-center max-w-[30ch]">
              Commission process and latest custom pieces.
            </p>
          </div>
          <div className="relative group hidden md:flex items-center justify-end text-black bg-white transition-all duration-300">
            <FlipLink className="px-6 py-3" inside="25">
              <Link
                href={"/paintings"}
                className="josefin-sans font-semibold size-full capitalize transition-all duration-300"
                passHref
              >
                {getChars("Learn More")}
              </Link>
            </FlipLink>
          </div>
        </div>
        <div className=" bg-bagiBlue flex flex-col items-center justify-center size-full h-[600px] border border-[#323232] gap-12">
          <div className="flex flex-col items-center justify-center h-2/3">
            <div className="flex flex-col items-center justify-center size-3/12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="jost text-4xl mt-2 text-center leading-normal max-w-[10ch]">
              Shop
            </h2>
            <p className="josefin-sans text-xl mt-8 text-center max-w-[30ch]">
              Available paintings and artworks for sale.
            </p>
          </div>
          <div className="relative group hidden md:flex items-center justify-end text-black bg-white transition-all duration-300">
            <FlipLink className="px-6 py-3" inside="25">
              <Link
                href={"/shop"}
                className="josefin-sans font-semibold size-full capitalize transition-all duration-300"
                passHref
              >
                {getChars("Learn More")}
              </Link>
            </FlipLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
