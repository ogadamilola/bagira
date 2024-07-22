"use client";
import React, { useEffect, useRef, useState } from "react";
import CharByCharOnScroll from "./animations/CharByCharOnScroll";
import Link from "next/link";
import { FlipLink } from "./animations/RevealLinks";
import { getChars } from "./animations/NavigationMenu";

interface ComponentProps {
  className?: string;
}

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Use 'America/Denver' for Mountain Standard Time (MST)
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Denver", // Adjust if necessary for your specific region within MST
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit", // Include seconds
        hour12: false,
      });

      setCurrentTime(now);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return <span>{currentTime}</span>;
};

export default function Footer({ className }: ComponentProps) {
  const formRef = useRef<HTMLFormElement>(null); // Initialize with null

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <footer
      className={`${className} relative flex flex-col size-full items-start justify-between bg-black overflow-hidden border-t-2 border-white`}
    >
      <div className="flex flex-col size-full items-start justify-end text-white p-4 sm:p-20">
        <ul className="relative grid grid-cols-2 gap-x-[7vw] gap-y-[15vw] md:flex md:flex-row items start justify-between w-full h-full font-medium small-text">
          {/* Site description */}
          <li className="flex flex-col items-start justify-end flex-grow max-w-[25vw] h-auto gap-y-[8vw] sm:gap-y-[2vw]">
            <p className="josefin-sans text-sm mt-4 text-start max-w-[22ch]">
              Visual artist and muralist of Curacao
            </p>

            <p className="josefin-sans text-[10px] mt-4 text-start">
              ©2024BAGIRA All Rights Reserved
            </p>
            {/* <div className="relative flex flex-col gap-y-[5vw] sm:gap-y-0">
              <span>Site By</span>
              <a
                href="https://relaydigital.agency"
                className="bottom-0 flex flex-row items-center group hover:font-bold duration-100"
                aria-label="Visit RelayDigital Agency website"
              >
                <div className="hidden md:block absolute w-[1.5vw] h-[1.5vw] md:w-[0.5vw] md:h-[0.5vw] bg-white -ml-4 duration-100 transform scale-x-0 group-hover:scale-x-100 origin-right"></div>
                RelayDigital® Agency
              </a>
            </div> */}
          </li>
          {/* Quick links */}
          <li className="flex flex-col items-start justify-start flex-grow w-auto h-auto gap-y-[5vw] sm:gap-y-[1vw] text-nowrap">
            {/* <div className="flex items-end justify-end md:justify-start w-full">
              <CurrentTime />
            </div> */}
            <h3 className="josefin-sans text-sm max-w-[40vw] font-semibold">
              Quick Links
            </h3>
            <div className="text-[10px] font-normal text-white transition-all duration-300">
              <Link href={"/paintings"} passHref>
                <FlipLink>{getChars("Paintings")}</FlipLink>
              </Link>
              <Link href={"/murals"} passHref>
                <FlipLink>{getChars("Murals")}</FlipLink>
              </Link>
              <Link href={"/contact"} passHref>
                <FlipLink>{getChars("Contact Us")}</FlipLink>
              </Link>
            </div>
          </li>
          {/* Contact info */}
          <li className="flex flex-col items-start justify-start flex-grow w-auto h-auto gap-y-[5vw] sm:gap-y-[1vw] text-nowrap">
            <h3 className="josefin-sans text-sm max-w-[40vw] font-semibold">
              Contact info
            </h3>
            <div className="text-[10px] font-normal text-white transition-all duration-300 w-full">
              <ul className="flex flex-col items-start justify-start gap-1">
                <li className="flex flex-row gap-2 size-full h-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-[10px]"
                  >
                    <path
                      d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Kura Hulanda Village, Curacao</p>
                </li>
                <li className="h-[1px] w-full bg-white mt-1" />

                <li className="flex flex-row gap-2 size-full h-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-[10px]"
                  >
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>@theonlybagirayouknow</p>
                </li>
                <li className="h-[1px] w-full bg-white mt-1" />

                <li className="flex flex-row gap-2 size-full h-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-[10px]"
                  >
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>+5999 686 38 62</p>
                </li>
                <li className="h-[1px] w-full bg-white mt-1" />

                <li>Tue - Wed : 2pm - 7pm</li>
                <li>Thu - Fri : 2pm - 8pm</li>
                <li>Sat : 10am - 8pm</li>
              </ul>
            </div>
          </li>
          {/* Newsletter */}
          <li className="flex flex-col items-start justify-start flex-grow max-w-[25vw] w-auto h-auto gap-y-[5vw] sm:gap-y-[1vw]">
            {/* <div className="flex items-end justify-end md:justify-start w-full">
              <CurrentTime />
            </div> */}
            <h3 className="josefin-sans text-lg max-w-[40vw] font-semibold">
              join our Newsletter
            </h3>
            <p className="text-[10px] font-normal text-white transition-all duration-300">
              Sign up for our newsletter to get invitation to special expo
              events at the gallery in Kura Hulanda.
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-row items-center justify-between w-full gap-8"
            >
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="w-full border text-[10px] border-neutral-700 bg-white p-2 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
              />
              <button
                type="submit"
                className="relative group hidden md:flex items-center justify-end bg-[#6C6C6C] border-2 border-white hover:brightness-150 rounded-full transition-all duration-300"
              >
                <div className="size-full text-[10px] px-4 py-2 capitalize text-white transition-all duration-300">
                  {getChars("Sign Me Up")}
                </div>
              </button>
            </form>
            <div className="flex flex-row items-center justify-end size-full mt-6">
              <ul className="flex flex-row items-center gap-[1vw]">
                {/* Facebook */}
                <li>
                  <a
                    className="followerchangetest"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-[10vw] md:w-[1vw] h-[10vw] md:h-[1vw] text-light-primary dark:text-dark-primary"
                    >
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                {/* LinkedIn */}
                <li>
                  <a
                    className="followerchangetest"
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-[10vw] md:w-[1vw] h-[10vw] md:h-[1vw] text-light-primary dark:text-dark-primary"
                    >
                      <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                {/* Instagram */}
                <li>
                  <a
                    className="followerchangetest"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[10vw] md:w-[1vw] h-[10vw] md:h-[1vw] text-light-primary dark:text-dark-primary"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.1111 0H8.88889C3.9797 0 0 3.9797 0 8.88889V23.1111C0 28.0203 3.9797 32 8.88889 32H23.1111C28.0203 32 32 28.0203 32 23.1111V8.88889C32 3.9797 28.0203 0 23.1111 0ZM28.8889 23.1111C28.8791 26.298 26.298 28.8791 23.1111 28.8889H8.88889C5.70196 28.8791 3.12087 26.298 3.11111 23.1111V8.88889C3.12087 5.70196 5.70196 3.12087 8.88889 3.11111H23.1111C26.298 3.12087 28.8791 5.70196 28.8889 8.88889V23.1111ZM24.4444 9.33333C25.4263 9.33333 26.2222 8.53739 26.2222 7.55556C26.2222 6.57372 25.4263 5.77778 24.4444 5.77778C23.4626 5.77778 22.6667 6.57372 22.6667 7.55556C22.6667 8.53739 23.4626 9.33333 24.4444 9.33333ZM16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24.0048 13.8768 23.1634 11.8392 21.662 10.3379C20.1607 8.8366 18.1232 7.99527 16 8ZM11.1111 16C11.1111 18.7001 13.2999 20.8889 16 20.8889C18.7001 20.8889 20.8889 18.7001 20.8889 16C20.8889 13.2999 18.7001 11.1111 16 11.1111C13.2999 11.1111 11.1111 13.2999 11.1111 16Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
