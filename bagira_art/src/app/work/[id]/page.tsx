"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCaseStudy } from "@/contexts/CaseStudyContext";
import Page from "@/components/layout/page";
import Body from "@/components/pages/WorkPage/Work";
import { CaseStudy } from "@/data/CaseStudyType";

export default function CaseStudyPage() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname?.split("/")[2]; // Extract case study slug from URL
  const { caseStudies, loading, error } = useCaseStudy() as { caseStudies: CaseStudy[] | null; loading: boolean; error: any }; // Fetch case studies context
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  

  // console.log(caseStudies); // Log the caseStudies data to check if it's being populated
  // console.log(id); // Log the id to verify slug extraction

  useEffect(() => {
    // Don't run effect if case studies are still loading
    if (caseStudies && id) {
      const matchedCaseStudy = caseStudies.find(
        (item: { slug: { current: string; }; }) => item.slug.current === id
      );
      if (matchedCaseStudy) {
        setCaseStudy(matchedCaseStudy);
        // console.log(matchedCaseStudy); // Log to confirm the matched case study
      } else {
        console.error(`No case study found with slug: ${id}`);
        router.push("/work"); // Redirect if no matching case study
      }
    } else if (!caseStudies) {
      console.error("No case studies available");
      router.push("/work"); // Redirect if no case studies exist
    }
  }, [id, caseStudies, loading, router]); // Include router as dependency

  return (
    <Page>
      {/* Render Body only when caseStudy is available */}
      {caseStudy ? <Body caseStudy={caseStudy} /> : <p>No case study available</p>}
    </Page>
  );
}
