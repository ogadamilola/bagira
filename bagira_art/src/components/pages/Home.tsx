"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./Home/HeroSection";
import AboutSection from "./Home/AboutSection";
import TheGallerySection from "./Home/TheGallerySection";
import WorkSection from "./Home/WorkSection";
import ServiceSection from "./Home/ServiceSection";
import PaintingSection from "./Home/PaintingSection";
import ContactSection from "./Home/ContactSection";

export default function Body() {
  return (
    <div className="relative flex w-[100vw] min-h-screen flex-col items-center justify-start overflow-hidden">
      <HeroSection />
      <TheGallerySection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <PaintingSection />
      <ContactSection />
    </div>
  );
}
