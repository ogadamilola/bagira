import React, { useEffect, useRef, useState } from "react";

function MediaSection({ mediaContent }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
      document.body.style.overflow = "hidden";
    } else {
      if (videoRef.current) videoRef.current.muted = true;
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="z-10 size-full relative overflow-hidden px-[0] py-[1.875rem] lg:px-[0] lg:py-[3.125rem]">
      <div className="py-[0] ml-auto mr-auto  relative flex gap-5 flex-wrap lg:gap-[3.125rem] max-w-full p-0">
        <div className="relative flex-[0_0_100%] max-w-full bg-[#151515] lg:flex-[0_0_100%] lg:max-w-full">
          {!mediaContent.match(/\.(mp4|webm|ogg|avi|mov)$/i) && (
            <img
              className="[aspect-ratio:1/1] object-cover lg:[aspect-ratio:1780_/_920]"
              alt="an image"
              loading="lazy"
              width="1780"
              height="920"
              decoding="async"
              data-nimg="1"
              src={mediaContent}
            />
          )}
          <div
            ref={containerRef}
            className={`relative cursor-play-hover bg-black`}
            onClick={toggleExpanded}
          >
            <div
              className={`size-full ${
                isExpanded
                  ? "fixed inset-y-0 [@media(min-width:1024px)]:mt-[0rem] [@media(min-width:1024px)]:inset-x-[0] flex items-center bg-black bg-opacity-80 backdrop-blur-md"
                  : ""
              }`}
            >
              <video
                src={mediaContent}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute top-[0] left-[0] w-full h-full object-cover ${
                  isExpanded ? "hidden" : ""
                }`}
              />
              <video
                ref={videoRef}
                src={mediaContent}
                autoPlay
                loop
                muted={!isExpanded}
                playsInline
                className={`z-[999] object-cover transition-opacity [@media(min-width:1024px)]:transition-all duration-500 ${
                  isExpanded
                    ? "fixed scale-75 [@media(min-width:1024px)]:inset-x-[0] [@media(min-width:1024px)]:scale-100 opacity-100 z-50 max-h-screen max-w-screen [@media(min-width:1024px)]:mx-auto"
                    : "h-[100vh] [@media(min-width:1024px)]:min-w-[50vw] [@media(min-width:1024px)]:translate-x-[50vw] opacity-0 -z-10"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
