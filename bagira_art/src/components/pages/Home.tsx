"use client";
import React, { useEffect, useState } from "react";
// import HeroSection from "./Home/HeroSection";
// import AboutSection from "./Home/AboutSection";
// import TheGallerySection from "./Home/TheGallerySection";
// import WorkSection from "./Home/WorkSection";
// import ServiceSection from "./Home/ServiceSection";
// import PaintingSection from "./Home/PaintingSection";
// import ContactSection from "./Home/ContactSection";
import HeroSection from "@/components/pages/S+T/HeroSection";
import IntroSection from "./S+T/IntroSection";
import WorkCarouselSection from "./S+T/WorkCarouselSection";
import ServiceCarouselSection from "./S+T/ServiceCarouselSection";
import BrandingSection from "./S+T/BrandingSection";

export default function Body() {
  return (
    <div className="relative flex w-[100vw] min-h-screen flex-col items-center justify-start bg-[#0E0F11]">
      <HeroSection />
      <IntroSection />
      <WorkCarouselSection />
      <ServiceCarouselSection />
      <BrandingSection />
      {/* <TheGallerySection /> */}
      {/* <AboutSection /> */}
      {/* <WorkSection /> */}
      {/* <ServiceSection /> */}
      {/* <PaintingSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}
