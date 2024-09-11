"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { getCaseStudy } from "../../sanity/sanity-utils"; // Replace with actual CMS fetching utility

// Default context values
const defaultContextValue = {
  caseStudies: null,
  loading: true,
  error: null,
};

// Create Case Study Context
export const CaseStudyContext = createContext(defaultContextValue);

// Cache duration (24 hours)
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Utility function to get cached data from localStorage
const getCachedData = (key) => {
  if (typeof window === "undefined") return null; // Avoid SSR issues
  const cachedData = localStorage.getItem(key);
  const cachedTimestamp = localStorage.getItem(`${key}Timestamp`);
  const isValidCache =
    cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < CACHE_DURATION;
  try {
    return isValidCache ? JSON.parse(cachedData) : null;
  } catch (err) {
    console.error("Failed to parse cached data", err);
    return null;
  }
};

// Utility function to store data in localStorage
const setCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem(`${key}Timestamp`, Date.now().toString());
};

export const CaseStudyProvider = ({ children, isHomePage = false }) => {
  const [caseStudies, setCaseStudies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        // Check localStorage for cached case studies
        const cachedData = getCachedData("caseStudies");

        // If cached data exists and the user is not on the homepage, use it
        if (cachedData && !isHomePage) {
          console.log("Using cached case studies data");
          setCaseStudies(cachedData);
        } else {
          // Otherwise, fetch new data from the CMS
          console.log("Fetching case studies from CMS");
          const response = await getCaseStudy();
          setCaseStudies(response);

          // Cache the new data in localStorage
          setCachedData("caseStudies", response);
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setCaseStudies(null); // Reset case studies on error
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

// Custom hook to access the Case Study context
export const useCaseStudy = () => {
  const context = useContext(CaseStudyContext);
  if (context === undefined) {
    throw new Error("useCaseStudy must be used within a CaseStudyProvider");
  }
  return context;
};
