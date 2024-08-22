// ArtworkContext.js
"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { getArtwork } from "../../sanity/sanity-utils";

export const ArtworkContext = createContext();

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const ArtworkProvider = ({
  children,
  isLayout = false,
  isHomePage = false,
}) => {
  const parentContext = useContext(ArtworkContext);
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const storedArtwork = localStorage.getItem("artwork");
        const storedTimestamp = localStorage.getItem("artworkTimestamp");
        const currentTime = Date.now();

        if (isHomePage) {
          // Fetch from CMS on homepage
          console.log("HomePage: Fetching artwork from CMS");
          const response = await getArtwork();
          setArtwork(response);
          localStorage.setItem("artwork", JSON.stringify(response));
          localStorage.setItem("artworkTimestamp", currentTime.toString());
        } else if (isLayout) {
          // For layout, use cached data or fetch if expired
          if (
            storedArtwork &&
            currentTime - parseInt(storedTimestamp) < CACHE_DURATION
          ) {
            console.log("Layout: Using valid cached artwork data");
            setArtwork(JSON.parse(storedArtwork));
          } else {
            console.log(
              "Layout: Fetching artwork from CMS (cache expired or not found)"
            );
            const response = await getArtwork();
            setArtwork(response);
            localStorage.setItem("artwork", JSON.stringify(response));
            localStorage.setItem("artworkTimestamp", currentTime.toString());
          }
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Only fetch if there's no parent context (to avoid double fetching)
    if (!parentContext) {
      fetchArtwork();
    } else if (isHomePage) {
      fetchArtwork();
    } else {
      // If there's a parent context, use its values
      setArtwork(parentContext.artwork);
      setLoading(parentContext.loading);
      setError(parentContext.error);
    }
  }, [isLayout, isHomePage, parentContext]);

  // If it's the home page, skip the layout's provider logic
  if (isHomePage && isLayout) {
    return <>{children}</>;
  }

  // If there's a parent context, just pass through its values
  if (parentContext) {
    return <>{children}</>;
  }

  return (
    <ArtworkContext.Provider value={{ artwork, loading, error }}>
      {children}
    </ArtworkContext.Provider>
  );
};
