"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { getCaseStudy } from "../../sanity/sanity-utils";

// Provide a default value for the context
const defaultContextValue = {
  caseStudies: null,
  loading: true,
  error: null,
};

export const CaseStudyContext = createContext(defaultContextValue);

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const CaseStudyProvider = ({ children, isHomePage = false }) => {
  const [caseStudies, setCaseStudies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const storedCaseStudies = localStorage.getItem("caseStudies");
        const storedTimestamp = localStorage.getItem("caseStudiesTimestamp");
        const currentTime = Date.now();

        if (
          !storedCaseStudies ||
          currentTime - parseInt(storedTimestamp) >= CACHE_DURATION ||
          isHomePage ||
          !caseStudies
        ) {
          console.log("Fetching case studies from CMS");
          const response = await getCaseStudy();
          console.log("Case studies fetched");
          setCaseStudies(response);
          localStorage.setItem("caseStudies", JSON.stringify(response));
          localStorage.setItem("caseStudiesTimestamp", currentTime.toString());
        } else {
          console.log("Using cached case studies data");
          // console.log("Cached data:", storedCaseStudies);
          setCaseStudies(JSON.parse(storedCaseStudies));
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        console.error("Error fetching case studies:", err);
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, [isHomePage]);

  return (
    <CaseStudyContext.Provider value={{ caseStudies, loading, error }}>
      {children}
    </CaseStudyContext.Provider>
  );
};

// Custom hook for using the CaseStudyContext
export const useCaseStudy = () => {
  const context = useContext(CaseStudyContext);
  if (context === undefined) {
    throw new Error("useCaseStudy must be used within a CaseStudyProvider");
  }
  return context;
};
