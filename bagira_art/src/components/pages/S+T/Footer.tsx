import React from "react";

function Footer() {
  return (
    <div
      className="relative overflow-hidden h-[100dvh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="fixed top-[0] left-[0] w-screen min-h-screen pt-[1.5625rem] px-[0] pb-[2.1875rem] bg-[#f6f6f3] text-[#0E0F11] pt-[calc(var(--header-primary-height) + 1.875rem)]">
        <div className="px-5 py-[0] ml-auto mr-auto max-w-[105rem] relative">
          <div className="mb-10 flex items-end justify-between">
            <div className="jost overflow-hidden mt-[0] mx-[0] mb-5 tracking-[-.04em] leading-none text-[4.5rem] lg:text-[17.625rem] lg:m-0 lg:translate-y-[.12em] font-light">
              Let&apos;s Talk
            </div>
            <a
              className="group hidden lg:inline-flex text-[1.031rem] text-[#f6f6f3] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover"
              href="/contact"
            >
              <span className="relative flex px-[2.344rem] py-[0] bg-[#0E0F11] leading-[1.2] rounded-full items-center h-[4.219rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
                <span className="relative flex flex-col overflow-hidden">
                  <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                    Start a project
                  </span>
                  <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                    Start a project
                  </span>
                </span>
              </span>
              <i className="flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-[#0E0F11] [transition:.4s_ease-in-out] [transition-property:background,color]">
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
          <div className="lg:flex lg:justify-between lg:items-start lg:mt-[3.4375rem]">
            <nav className="text-[1.25rem] leading-[-.01em] mb-[3.125rem] text-[#0E0F11] lg:text-[2.25rem]">
              <ul>
                <li>
                  <a className="cursor-select-hover">Work</a>
                </li>
                <li>
                  <a className="cursor-select-hover">Services</a>
                </li>
                <li>
                  <a className="cursor-select-hover">Careers</a>
                </li>
              </ul>
            </nav>
            <div className="grid gap-[2.8125rem_2.1875rem] grid-cols-[repeat(2,1fr)] lg:flex-[0_0_51.094rem] lg:max-w-[51.094rem]">
              <div className="text-[.625rem] leading-normal lg:text-[1.125rem]">
                <div className="mb-[1.125rem] text-[#0E0F11]">
                  Head Office Curacao
                </div>
                {/* <div className="opacity-[.6]">
                  <p className="mb-[1.5em]">
                    Regent House, 13-15 Albert Street,Harrogate, North
                    Yorkshire, HG1 1JX
                  </p>
                  <p>+44 (0)1423 313237</p>
                </div> */}
              </div>
              <div className="text-[.625rem] leading-normal lg:text-[1.125rem]">
                <div className="mb-[1.125rem] text-[#0E0F11]">Willemstad</div>
                <div className="opacity-[.6]">
                  <p>
                    Kurá Hulanda Village, ijzerstraat 19a, Willemstad, Curaçao
                  </p>
                </div>
              </div>
              {/* <div className="text-[.625rem] leading-normal lg:text-[1.125rem]">
                <div className="mb-[1.125rem] text-[#0E0F11]">Cambridge</div>
                <div className="opacity-[.6]">
                  <p>
                    Bradfield centre, 184 Cambridge Science Park Rd, Milton,
                    Cambridge CB4 0GA
                  </p>
                </div>
              </div> */}
              <div className="text-[.625rem] leading-normal lg:text-[1.125rem]">
                <div className="mb-[1.125rem] text-[#0E0F11]">
                  Connect with us
                </div>
                <div className="flex items-center gap-[.9375rem] text-[1.0625rem]">
                  <a
                    className="cursor-select-hover"
                    href="https://www.instagram.com/bagicreativestudio/"
                    target="_blank"
                  >
                    <svg
                      className="block h-[1em] fill-current [transition:fill_.4s_ease-in-out]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M512.001 0C373.057 0 355.585.64 300.993 3.072c-54.592 2.56-91.776 11.136-124.353 23.808a250.711 250.711 0 0 0-90.689 59.071A251.334 251.334 0 0 0 26.88 176.64C14.208 209.152 5.568 246.399 3.072 300.8.64 355.52 0 372.928 0 512.065c0 139.007.64 156.416 3.072 211.006 2.56 54.528 11.136 91.715 23.808 124.291 13.12 33.666 30.592 62.205 59.071 90.686 28.416 28.483 56.96 46.017 90.624 59.07 32.64 12.674 69.759 21.316 124.288 23.809 54.656 2.436 72.064 3.072 211.136 3.072 139.075 0 156.417-.635 211.075-3.072 54.46-2.561 91.772-11.135 124.348-23.809a250.539 250.539 0 0 0 90.624-59.07c28.483-28.483 45.955-57.02 59.077-90.686 12.606-32.576 21.248-69.763 23.803-124.291 2.436-54.59 3.072-72 3.072-211.07 0-139.072-.635-156.481-3.072-211.137-2.555-54.464-11.197-91.712-23.803-124.223a251.332 251.332 0 0 0-59.077-90.689 250.279 250.279 0 0 0-90.686-59.071C814.722 14.209 777.472 5.569 723.006 3.073 668.354.641 651.006.001 511.872.001h.127zm-45.888 92.288h45.953c136.706 0 152.894.448 206.848 2.944 49.917 2.24 77.053 10.624 95.105 17.599 23.871 9.28 40.957 20.416 58.877 38.336s28.993 34.945 38.272 58.88c7.042 17.984 15.366 45.121 17.602 95.039 2.498 53.952 3.009 70.144 3.009 206.784 0 136.643-.511 152.894-3.009 206.848-2.236 49.917-10.624 76.991-17.602 95.043a158.126 158.126 0 0 1-38.334 58.815c-17.921 17.921-34.944 28.993-58.877 38.272-17.921 7.042-45.057 15.36-95.043 17.665-53.955 2.43-70.143 3.003-206.848 3.003-136.704 0-152.961-.573-206.913-3.003-49.921-2.306-76.992-10.624-95.039-17.665a158.588 158.588 0 0 1-58.88-38.272 158.725 158.725 0 0 1-38.4-58.883c-6.975-17.983-15.361-45.119-17.599-95.036-2.433-53.955-2.944-70.143-2.944-206.915 0-136.704.512-152.832 2.944-206.784 2.304-49.921 10.624-77.056 17.664-95.105 9.28-23.872 20.416-40.96 38.336-58.88s34.944-28.992 58.88-38.272c18.048-7.039 45.12-15.361 95.039-17.664 47.232-2.175 65.537-2.816 160.96-2.88v.128zm319.23 84.993a61.435 61.435 0 0 0-56.758 37.929c-3.091 7.454-4.68 15.443-4.68 23.512s1.589 16.058 4.68 23.512c3.085 7.454 7.608 14.228 13.315 19.933s12.481 10.231 19.933 13.319a61.442 61.442 0 0 0 84.954-56.763 61.44 61.44 0 0 0-61.444-61.44zm-273.278 71.807a262.983 262.983 0 0 0-188.599 75.547 262.962 262.962 0 0 0-58.068 288.979 262.98 262.98 0 0 0 144.777 142.534 262.984 262.984 0 0 0 285.186-59.625 262.965 262.965 0 0 0 75.576-184.494 262.972 262.972 0 0 0-258.872-262.945zm0 92.225c45.27 0 88.685 17.984 120.692 49.994 32.015 32.01 49.998 75.425 49.998 120.695s-17.983 88.684-49.998 120.695a170.693 170.693 0 0 1-241.387 0 170.688 170.688 0 0 1 0-241.39 170.69 170.69 0 0 1 120.695-49.994z"></path>
                    </svg>
                  </a>
                  <a
                    className="cursor-select-hover"
                    href="https://www.linkedin.com/in/giornic-n-ab9a57aa/"
                    target="_blank"
                  >
                    <svg
                      className="block h-[1em] fill-current [transition:fill_.4s_ease-in-out]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M380.364 356.814H570.52v94.72c27.392-54.477 97.638-103.424 203.163-103.424C975.972 348.11 1024 456.55 1024 655.516v368.482H819.201V700.824c0-113.303-27.396-177.2-97.128-177.2-96.718 0-136.91 68.863-136.91 177.151v323.224H380.364V356.815zM29.185 1015.292h204.799V348.11H29.185v667.182zm234.137-884.731a129.545 129.545 0 0 1-38.554 92.262 131.74 131.74 0 0 1-93.183 38.297 132.603 132.603 0 0 1-93.081-38.246A130.454 130.454 0 0 1 .001 130.561c0-34.663 13.823-67.84 38.553-92.312A132.25 132.25 0 0 1 131.635.002c34.918 0 68.403 13.773 93.133 38.247 24.678 24.472 38.553 57.651 38.553 92.312z"></path>
                    </svg>
                  </a>
                  {/* <a
                    href="https://www.awwwards.com/showandtell/"
                    target="_blank"
                  >
                    <svg
                      className="block h-[1em] fill-current [transition:fill_.4s_ease-in-out]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1600 1024"
                    >
                      <path d="M977.648 86.932l-148.929 576.763-140.593-576.763h-191.864l-140.644 576.763-148.826-576.763h-206.795l266.304 840.147h181.982l143.886-543.449 143.938 543.449h181.982l266.251-840.147h-206.689zM1316.11 797.059c0 80.018 59.51 140.009 138.943 140.009 79.381 0 138.943-60.043 138.943-140.009 0-80.018-59.51-140.059-138.943-140.059s-138.943 60.040-138.943 140.059z"></path>
                    </svg>
                  </a>
                  <a href="https://clutch.co/profile/show-tell" target="_blank">
                    <svg
                      className="block h-[1em] fill-current [transition:fill_.4s_ease-in-out]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M607.996 819.196c70.996 0 136.366-24.083 188.391-64.525l131.617 157.023c-87.651 70.268-198.923 112.305-320.007 112.305-282.77 0-511.999-229.232-511.999-512.001S325.227-.001 607.997-.001c117.941 0 226.566 39.879 313.132 106.888l-134.19 155.381c-50.391-36.171-112.18-57.469-178.942-57.469-169.662 0-307.2 137.538-307.2 307.2s137.538 307.197 307.2 307.197zm.067-127.992c98.969 0 179.202-80.229 179.202-179.199s-80.233-179.2-179.202-179.2-179.2 80.229-179.2 179.2 80.23 179.199 179.2 179.199z"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[1.5625rem] pt-[1.875rem] border-t-[.0625rem_solid_hsla(0,0%,96%,.11)] text-center text-[1.031rem] lg:flex lg:justify-between lg:pt-[3.75rem] lg:pb-[1.875rem]">
            <div className="flex gap-[.5em] text-[1.0315rem] justify-center mb-[.875rem] lg:m-0">
              <a href="/privacy-cookies-policy" className="cursor-select-hover">
                Privacy & Cookies
              </a>
            </div>
            <div>©BagiCreatives 2024. All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
