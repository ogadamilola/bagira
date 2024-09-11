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
  const { caseStudies, loading, error } = useCaseStudy() as {
    caseStudies: CaseStudy[] | null;
    loading: boolean;
    error: any;
  };
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isCheckingSlug, setIsCheckingSlug] = useState(true); // To prevent premature redirection

  useEffect(() => {
    // Check if the case studies are loaded
    if (!loading && caseStudies) {
      const matchedCaseStudy = caseStudies.find(
        (item: { slug: { current: string } }) => item.slug.current === id
      );

      if (matchedCaseStudy) {
        setCaseStudy(matchedCaseStudy);
      } else {
        console.error(`No case study found with slug: ${id}`);
        router.push("/work"); // Redirect if no matching case study
      }

      setIsCheckingSlug(false); // Stop checking once case studies are processed
    }
  }, [id, caseStudies, loading, router]);

  if (loading || isCheckingSlug) {
    // Show loading state while fetching case studies or checking the slug
    return (
      <div className="flex mx-[0] mb-[0] justify-center fixed top-[0] left-[0] w-full h-full text-[#fff] bg-[rgba(232,_29,_90,_.2)] m-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45 45"
          stroke="currentColor"
          className="block w-[4.375rem] h-[4.375rem] opacity-[.7] m-auto"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke-width="2"
            transform="translate(1 1)"
          >
            <circle cx="22" cy="22" r="6" stroke="currentColor">
              <animate
                attributeName="r"
                begin="1.5s"
                calcMode="linear"
                dur="3s"
                repeatCount="indefinite"
                values="6;22"
              ></animate>
              <animate
                attributeName="stroke-opacity"
                begin="1.5s"
                calcMode="linear"
                dur="3s"
                repeatCount="indefinite"
                values="1;0"
              ></animate>
              <animate
                attributeName="stroke-width"
                begin="1.5s"
                calcMode="linear"
                dur="3s"
                repeatCount="indefinite"
                values="2;0"
              ></animate>
            </circle>
            <circle cx="22" cy="22" r="6" stroke="currentColor">
              <animate
                attributeName="r"
                begin="3s"
                calcMode="linear"
                dur="3s"
                repeatCount="indefinite"
                values="6;22"
              ></animate>
              <animate
                attributeName="stroke-opacity"
                begin="3s"
                calcMode="linear"
                dur="3s"
                repeatCount="indefinite"
                values="1;0"
              ></animate>
              <animate
                attributeName="stroke-width"
                begin="3s"
                calcMode="linear"
                dur="3s"
                repeatCount="indefinite"
                values="2;0"
              ></animate>
            </circle>
            <circle cx="22" cy="22" r="8">
              <animate
                attributeName="r"
                begin="0s"
                calcMode="linear"
                dur="1.5s"
                repeatCount="indefinite"
                values="6;1;2;3;4;5;6"
              ></animate>
            </circle>
          </g>
        </svg>
      </div>
    );
  }

  if (!caseStudy) {
    // Display a fallback if no case study is found (just in case)
    return <p>No case study available.</p>;
  }

  return (
    <Page>
      {/* Render Body only when caseStudy is available */}
      {caseStudy ? (
        <Body caseStudy={caseStudy} />
      ) : (
        <p>No case study available</p>
      )}
    </Page>
  );
}
