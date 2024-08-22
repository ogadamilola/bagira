// ArtworkContext.js
"use client";
import React, { createContext, useState, useEffect } from "react";
import { getArtwork } from "../../sanity/sanity-utils";

export const ArtworkContext = createContext();

export const ArtworkProvider = ({ children }) => {
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        // Check if the artwork data is in localStorage
        const storedArtwork = localStorage.getItem("artwork");
        const storedTimestamp = localStorage.getItem("artworkTimestamp");
        
        if (storedArtwork && storedTimestamp) {
          console.log("Got 'artwork' from localStorage");
          setArtwork(JSON.parse(storedArtwork));
          setLoading(false);
        }

        // Fetch the artwork data from the CMS
        const response = await getArtwork();
        
        // Check if the CMS data is different from the stored data
        if (JSON.stringify(response) !== storedArtwork) {
          console.log("Updating artwork from CMS");
          setArtwork(response);
          localStorage.setItem("artwork", JSON.stringify(response));
          localStorage.setItem("artworkTimestamp", Date.now().toString());
        } else {
          console.log("Artwork is up to date");
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Fetch the artwork data
    fetchArtwork();

    // Set up an interval to check for updates (e.g., every 5 minutes)
    const intervalId = setInterval(fetchArtwork, 5 * 60 * 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ArtworkContext.Provider value={{ artwork, loading, error }}>
      {children}
    </ArtworkContext.Provider>
  );
};