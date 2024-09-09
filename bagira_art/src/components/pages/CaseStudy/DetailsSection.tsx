import React from "react";

function DetailsSection({ title, services, longDescription }: any) {
  return (
    <section className="text-[#fff] size-full relative overflow-hidden">
      <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative pt-[2.1875rem] pb-[2.1875rem] lg:flex lg:gap-[3.75rem] lg:pt-[7.8125rem] lg:pb-[7.8125rem]">
        <div className="flex text-[.875rem] leading-[1.78] flex-col gap-9 mb-[2.8125rem] lg:min-w-[16.875rem] lg:text-[1.125rem] lg:gap-5 lg:m-0">
          <div className="ProjectDetails_metaItem__U0Vwm">
            <h6 className="text-[0.75rem] opacity-[.34] mb-[.15625rem]">
              Client
            </h6>
            <div>{title}</div>
          </div>
          <div className="ProjectDetails_metaItem__U0Vwm capitalize">
            <h6 className="text-[0.75rem] opacity-[.34] mb-[.15625rem]">
              Services
            </h6>
            <ul>
              {services.map((service: string, index: number) => (
                <li key={index}>→ {service.replace(/-/g, " ")}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:max-w-[60rem] lg:mx-[auto] lg:my-[0]">
          <div className="text-[1.125rem] leading-[1.45] lg:text-[1.969rem] font-extralight">
            {longDescription.split("\n").map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <a
            className="mt-[3.75rem] group hidden lg:inline-flex text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover"
            href=""
          >
            <span className="inter relative flex px-[2.344rem] py-[0] bg-white leading-[1.2] rounded-full items-center h-[4.219rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
              <span className="relative flex flex-col overflow-hidden">
                <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                  Visit site
                </span>
                <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                  Visit site
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
      </div>
    </section>
  );
}

export default DetailsSection;
