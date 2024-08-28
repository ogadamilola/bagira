import React from "react";

function IntroSection() {
  return (
    <section id="intro" className="relative size-full overflow-hidden pt-[5.625rem] px-[0] pb-10 lg:pt-[9.375rem] lg:px-[0] lg:pb-[3.75rem]">
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative">
        <h2 className="josefin-sans text-white text-[2rem] leading-[1.15] font-thin text-center lg:text-[5.25rem]">
          BAGI creative studio is a{" "}
          <span className="font-light uppercase text-[.5em] rounded-[1em] border-[.0625rem] border-[solid] align-middle px-[.4em] py-[.3em]">
            human-first
          </span>{" "}
          branding and technology agency, enabling companies to connect with
          their audience, extend their reach and enjoy greater{" "}
          <span className="font-light uppercase text-[.5em] rounded-[1em] border-[.0625rem] border-[solid] align-middle px-[.4em] py-[.3em]">
            commercial
          </span>{" "}
          success
        </h2>
      </div>
    </section>
  );
}

export default IntroSection;
