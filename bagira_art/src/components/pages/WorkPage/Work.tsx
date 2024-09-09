"use client";
import React from "react";
import HeroSection from "@/components/pages/CaseStudy/HeroSection";
import DetailsSection from "@/components/pages/CaseStudy/DetailsSection";
import MediaSection from "@/components/pages/CaseStudy/MediaSection";
import OverviewSection from "@/components/pages/CaseStudy/OverviewSection";
import DeliverablesSection from "@/components/pages/CaseStudy/DeliverablesSection";
import NextSection from "@/components/pages/CaseStudy/NextSection";

export default function Body({ caseStudy }: any) {
  console.log(caseStudy);
  // console.log(caseStudy.mediaContent[0].asset.url);
  return (
    <div className="champagne-limos relative flex w-[100vw] min-h-screen flex-col items-center justify-start bg-[#0E0F11] z-10">
      <HeroSection
        shortDescription={caseStudy.shortDescription}
        tags={caseStudy.tags}
        title={caseStudy.title}
        mainImage={caseStudy.mainImage.asset.url}
      />
      {caseStudy.title &&
        caseStudy.services &&
        caseStudy.longDescription &&
        caseStudy.longDescription.length > 0 && (
          <DetailsSection
            title={caseStudy.title}
            services={caseStudy.services}
            longDescription={caseStudy.longDescription[0].children[0].text}
          />
        )}
      {caseStudy.mediaContent && caseStudy.mediaContent.length > 0 && (
        <MediaSection mediaContent={caseStudy.mediaContent[0].asset.url} />
      )}
      {caseStudy.overview && (
        <OverviewSection
          heading={caseStudy.overview.heading}
          content={caseStudy.overview.content}
        />
      )}

      {/* <MediaSection mediaContent={caseStudy.mediaContent[1].asset.url} /> */}
      {caseStudy.deliverables && (
        <DeliverablesSection deliverables={caseStudy.deliverables} />
      )}
      {/* <MediaSection mediaContent={caseStudy.mediaContent[1].asset.url} /> */}
      {/* <NextSection slug={caseStudy.slug} /> */}
    </div>
  );
}
