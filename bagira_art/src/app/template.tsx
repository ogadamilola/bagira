"use client";
import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Inner from "@/components/layout/transitions/inner";
import { usePathname } from "next/navigation";
// import Header from "@/components/animations/NavigationMenu";
import Header from "@/components/pages/S+T/Header";
import { NavLinks } from "@/data/navLinks";
// import Footer from "@/components/Footer";
import Footer from "@/components/pages/S+T/Footer";
import ProjectSection from "@/components/pages/S+T/ProjectSection";
import StickyFooter from "@/components/animations/StickyFooter";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import { CaseStudyProvider } from "@/contexts/CaseStudyContext";

export const perspective = {
  initial: {
    scale: 1,
    y: "0vh",
  },
  enter: {
    scale: 1,
    y: "0vh",
  },
  exit: {
    scale: 0.9,
    y: "-10vh",
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: "0vh",
  },
};

export const exitSlide = {
  initial: {
    y: "0vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: "0vh",
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isEnter, setIsEnter] = useState(false);
  const [isExit, setIsExit] = useState(false);

  const isAdminPage = pathname.startsWith("/admin");

  return (
      <div
        id="template"
        className={`${!isAdminPage && "cursor-none"} relative size-full bg-bagiBlack`}
      >
        {/* <motion.div
        className="w-full h-full fixed left-0 top-0 bg-bagiBlack z-[9999999] cursor-wait"
        variants={slide}
        initial={slide.initial}
        exit={slide.exit}
        animate={slide.enter}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
      /> */}
        {/* <motion.div
        variants={perspective}
        initial={perspective.initial}
        exit={perspective.exit}
        animate={perspective.enter}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      > */}
        {/* <motion.div
          className="relative"
          variants={opacity}
          initial={opacity.initial}
          exit={opacity.exit}
          animate={opacity.enter}
          transition={{
            duration: 0.2,
          }}
        > */}
        {!isAdminPage ? (
          <>
            <motion.div
              className="w-full h-full fixed left-0 top-0 bg-[#0E0F11] z-[9999999] cursor-wait"
              variants={exitSlide}
              initial={exitSlide.initial}
              exit={exitSlide.exit}
              animate={exitSlide.enter}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            <div className="hidden md:block z-[99999999]">
              <CustomCursor />
            </div>
            <Header
              navigation={NavLinks}
              setIsEnter={setIsEnter}
              setIsExit={setIsExit}
            />
            <ProjectSection
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              isExit={isExit}
              setIsExit={setIsExit}
              isEnter={isEnter}
              setIsEnter={setIsEnter}
            />
            <SmoothScrolling>{children}</SmoothScrolling>
            <StickyFooter className="relative z-0" marginBottom={10}>
              <Footer setIsEnter={setIsEnter} setIsExit={setIsExit} />
            </StickyFooter>
          </>
        ) : (
          <>{children}</>
        )}
        {/* </motion.div> */}
        {/* </motion.div> */}
      </div>
  );
};

export default Template;
