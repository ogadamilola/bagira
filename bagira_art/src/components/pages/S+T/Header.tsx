"use client";
import { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlipLink } from "@/components/animations/RevealLinks";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
};

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
};

const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};

const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

interface NavProps {
  links: LinkDetails[];
}

interface BodyProps {
  links: LinkDetails[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
}

interface FooterProps {}

interface ImageProps {
  src: string;
  isActive: boolean;
}

interface HeaderProps {
  navigation: LinkDetails[];
}

export const getChars = (word: string) => {
  let chars: JSX.Element[] = [];
  word.split("").forEach((char, i) => {
    chars.push(
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    );
  });
  return chars;
};

const Nav: React.FC<NavProps> = ({ links }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden flex flex-row items-start justify-end size-full text-white px-[1rem] lg:px-[2.813rem] absolute bg-[#0E0F11] top-[4.063rem] lg:top-[9.375rem] z-[-10]"
    >
      <div className="flex flex-col items-end justify-between size-full">
        <div className="flex flex-wrap mt-10 justify-end">
          {links.map((link, index) => (
            <Link key={`l_${index}`} href={link.href} passHref>
              <motion.p
                onMouseOver={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
                className="m-0 flex overflow-hidden large-text sm:text-[10vw] md:text-[3vw] pl-8 pt-2 font-light "
              >
                {getChars(link.title)}
              </motion.p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
      {links[selectedLink.index].src && (
        <div className="flex relative w-[30vw] h-[300px]">
          <ImageModal
            src={links[selectedLink.index].src || ""}
            isActive={selectedLink.isActive}
          />
        </div>
      )}
    </motion.div>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap mt-10 mb-20 small-text uppercase gap-10 text-white">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <span className="font-extrabold mr-2">Made by:</span>{" "}
          @relaydigitalmktg
        </motion.li>
      </ul>
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <Link
            href="/privacy-policy"
            aria-label="Visit Privacy Policy Page"
            passHref
          >
            Privacy Policy
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <Link
            href="/terms"
            aria-label="Visit Terms and Conditions Page"
            passHref
          >
            Terms & Conditions
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

const ImageModal: React.FC<ImageProps> = ({ src, isActive }) => {
  return (
    <>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          className=" inset-0 -z-10"
        >
          <img
            src={`/img/${src}`}
            alt="Selected link image"
            className="size-full object-cover"
          />
        </motion.div>
      )}
    </>
  );
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const [showHeader, setShowHeader] = useState(true); // New state to manage header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll down and past a threshold (100px)
        setShowHeader(false);
      } else {
        // Scroll up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Fix for id links
    document.querySelectorAll('a[href^="/#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const href = el.getAttribute("href");
        const id = href?.slice(2); // Slice to remove "/#"
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
    <div
      id="header"
      className={`${
        isActive
          ? "sticky top-0 -mt-[9.375rem]"
          : `sticky top-0 -mt-[9.375rem] ${
              showHeader
                ? "transform translate-y-0"
                : "transform -translate-y-full"
            }`
      } jost z-[999] flex flex-col size-full h-auto bg-[#0E0F11] text-white transition-transform duration-500 ${
        isActive ? "" : "mix-blend-differences"
      }`}
    >
      <div className="relative flex size-full items-center justify-between gap-[1.875rem] px-[1rem] lg:px-[2.813rem] h-[4.063rem] lg:h-[9.375rem]">
        <Link href={"/"} className="mr-auto overflow-hidden cursor-select-hover" passHref>
          <img src="/svgs/m.svg" alt="Loading" className="w-[1.844rem] lg:w-[3.469rem]" />
        </Link>

        <div
          className={`${
            isActive ? "opacity-0 pointer-events-none" : ""
          } hidden transition-all duration-1000 md:flex gap-[1.5625rem]`}
        >
          {navigation.map((nav, index) => (
            <div
              key={index}
              className="text-[1.313rem] font-normal text-white text-nowrap  transition-all duration-300 mx-4 cursor-select-hover"
            >
              {/* <a href={nav.href}>{nav.title}</a> */}
              <Link key={`l_${index}`} href={nav.href} passHref>
                {/* <motion.p
                    onMouseOver={() =>
                      setSelectedLink({ isActive: true, index })
                    }
                    onMouseLeave={() =>
                      setSelectedLink({ isActive: false, index })
                    }
                    variants={blur}
                    animate={
                      selectedLink.isActive && selectedLink.index !== index
                        ? "open"
                        : "closed"
                    }
                    className="m-0 flex overflow-hidden font-light "
                  > */}
                <FlipLink>{getChars(nav.title)}</FlipLink>
                {/* </motion.p> */}
              </Link>
            </div>
          ))}
        </div>
        <Link
          href={"/contact"}
          className="group hidden lg:inline-flex text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline cursor-select-hover"
          passHref
        >
          <span className="relative flex px-[2.344rem] py-[0] bg-white leading-[1.2] rounded-full items-center h-[4.219rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
            <span className="relative flex flex-col overflow-hidden">
              <span className="group-hover:-translate-y-[1.4875rem] [transition:transform_.2s_ease-in-out]">
                Start a project
              </span>
              <span className="absolute translate-y-[1.4875rem] group-hover:translate-y-[0] [transition:transform_.2s_ease-in-out]">
                Start a project
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
        </Link>

        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="group flex md:hidden text-[1.031rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 [font-family:inherit] !no-underline"
        >
          <div className="relative flex px-[1.5625rem] py-[0] bg-white leading-[1.2] rounded-[1.875rem] items-center h-[2.8125rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color]">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="absolute m-0"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className="m-0"
            >
              Close
            </motion.p>
          </div>
          <i className="relative flex flex-col justify-center items-center text-[2.8125rem] w-[1em] h-[1em] rounded-[50%] bg-white">
            <svg
              className={`w-20 h-20 cursor-pointer ham8 fill-none ${
                isActive ? "[transform:rotate(45deg)]" : ""
              }`}
              viewBox="0 0 100 100"
            >
              <path
                className={`[transition:stroke-dasharray_400ms,_stroke-dashoffset_400ms] stroke-[.1875rem] [stroke-linecap:round] stroke-current [stroke-dasharray:40_160] ${
                  isActive ? "[stroke-dashoffset:-64px]" : ""
                }`}
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              />
              <path
                className={`[stroke-dasharray:40_142] [transform-origin:50%] stroke-[.1875rem] [stroke-linecap:round] stroke-current [transition:transform_400ms] ${
                  isActive ? "[transform:rotate(90deg)]" : ""
                }`}
                d="m 30,50 h 40"
              />
              <path
                className={`[stroke-dasharray:40_85] [transform-origin:50%] stroke-[.1875rem] [stroke-linecap:round] stroke-current [transition:transform_400ms,_stroke-dashoffset_400ms] ${
                  isActive ? "[stroke-dashoffset:-64px]" : ""
                }`}
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              />
            </svg>
          </i>
        </button>
      </div>
      {/* <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="absolute bg-transparent backdrop-blur-lg opacity-50 size-full top-full left-0"
      /> */}
      <AnimatePresence>
        {isActive && <Nav links={navigation} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
