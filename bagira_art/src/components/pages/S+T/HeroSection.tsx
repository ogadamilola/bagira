import ScrollingBanner from "@/components/animations/ScrollingBanner";
import React, { useEffect, useRef, useState } from "react";

function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      videoRef.current.play();
      videoRef.current.muted = false;
      document.body.style.overflow = "hidden";
    } else {
      videoRef.current.muted = true;
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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

  useEffect(() => {
    // Fix for id links
    document.querySelectorAll('a[href^="/#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const href = el.getAttribute("href");
        const id = href?.slice(2); // Slice to remove "/#"
        if (!href) return; // Check if href is null
        if (!id) return;

        const currentUrl = window.location.pathname;
        const targetUrl = href.split("#")[0] || "/";

        if (currentUrl === targetUrl) {
          // Target element is on the same page
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to the correct URL with the hash
          window.location.href = `${targetUrl}#${id}`;
        }
      });
    });

    // Check for anchor in URL on page load
    window.addEventListener("load", () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.slice(1); // Remove the "#"
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Adjust the delay as necessary
      }
    });
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row pt-[9.375rem] size-full">
      <div className=" z-10 mix-blend-difference text-[#fff] flex flex-col min-h-[60vh] lg:min-h-[70vh] justify-end flex-[0_0_50%] lg:max-w-[50%] [padding:0_1rem_2.5rem] lg:[padding:0_8.438rem_2.344rem]">
        <div className="jost relative w-screen -translate-x-[8.438rem] font-light leading-none text-[6.875rem] mx-[0] my-[.2em] px-[0] py-[.1em] select-none lg:text-[20.625rem] mt-[auto] mb-5 pointer-events-none z-10 lg:mx-[0] lg:my-[auto]">
          <ScrollingBanner
            baseVelocity={-20}
            className="inline-block whitespace-nowrap pr-[.2em] align-top"
          >
            Good design is good business*
          </ScrollingBanner>
        </div>
        <h1 className="font-light text-[1.125rem] leading-[1.2] mt-[0] mx-[0] mb-[1.875rem] tracking-[-.01em] max-w-[70%] lg:text-[2.25rem] lg:max-w-full lg:leading-[2.1875rem]">
          <span className="josefin-sans">
            Wondering about how the process goes or previous projects?
          </span>
        </h1>
        <div>
          <a
            href="/#intro"
            className="group josefin-sans inline-flex text-[1.219rem] [font-family:inherit] select-none appearance-none border-[none] outline-[none] [box-shadow:none] cursor-pointer relative items-center bg-none leading-[1.2] tracking-[-.02em] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:color] px-[0] py-[.5rem] gap-[.375rem] content-[''] before:absolute before:left-[0] before:bottom-[0] before:w-full before:h-[.0625rem] before:bg-current cursor-select-hover"
          >
            <span className="relative flex [transition:.4s_ease-in-out] [transition-property:background,color] ">
              <span className="relative flex flex-col overflow-hidden">
                <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                  Scroll + explore
                </span>
                <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                  Scroll + explore
                </span>
              </span>
            </span>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 9"
              className="w-[0.753em]"
            >
              <path
                d="M.603.902h6.808V7.71"
                stroke="currentColor"
                stroke-width=".851"
              ></path>
              <path
                d="m4.434 5.157 2.978 2.978 2.979-2.978"
                stroke="currentColor"
                stroke-width=".851"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        className={`relative transition-all duration-400 ease-in-out overflow-hidden ${
          isExpanded
            ? "flex-[0_0_100%] w-[100vw] z-[999]"
            : "flex-[0_0_50%] lg:max-w-[50%]"
        }`}
      >
        <div
          ref={containerRef}
          // className="relative overflow-hidden cursor-play-hover"
          className={`relative cursor-play-hover bg-black`}
          onClick={toggleExpanded}
        >
          <div
            className={`opacity-10 bg-[#E81D5A] size-full min-h-[100vh] absolute z-10 pointer-events-none ${
              isExpanded ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`size-full [@media(min-width:960px)]:min-h-[100vh] [@media(min-width:960px)]:-mt-[9.375rem] ${
              isExpanded
                ? "fixed inset-y-0 [@media(min-width:960px)]:mt-[0rem] [@media(min-width:960px)]:inset-x-[0] flex items-center bg-black bg-opacity-80 backdrop-blur-md"
                : ""
            }`}
            // data-speed="0.75"
          >
            <video
              src="/videos/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={`absolute object-cover transition-transform duration-500 h-[100vh] min-w-[50vw] ${
                isExpanded ? "hidden" : ""
              }`}
            />
            <video
              ref={videoRef}
              src="/videos/hero-video.mp4"
              autoPlay
              loop
              muted={!isExpanded}
              playsInline
              className={`object-cover transition-opacity [@media(min-width:960px)]:transition-all duration-500 ${
                isExpanded
                  ? "fixed scale-75 [@media(min-width:960px)]:inset-x-[0] [@media(min-width:960px)]:scale-100 opacity-100 z-50 max-h-screen max-w-screen [@media(min-width:960px)]:mx-auto"
                  : "h-[100vh] [@media(min-width:960px)]:min-w-[50vw] [@media(min-width:960px)]:translate-x-[50vw] opacity-0 -z-10"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
