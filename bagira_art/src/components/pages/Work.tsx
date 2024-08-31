"use client";
import React from "react";
import HeroSection from "@/components/pages/Work/HeroSection";
import WorkListSection from "@/components/pages/Work/WorkListSection";

export default function Body() {
  return (
    <div className="relative flex w-[100vw] min-h-screen flex-col items-center justify-start bg-[#0E0F11]">
      <HeroSection />
      <WorkListSection />
    </div>
  );
}
