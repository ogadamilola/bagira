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
        if (storedArtwork) {
          console.log("Got 'artwork' from localStorage");
          setArtwork(JSON.parse(storedArtwork));
          setLoading(false);
          return;
        }

        // Fetch the artwork data from the CMS
        const response = await getArtwork();
        setArtwork(response);
        console.log("Fetch CMS: ", response);

        // Store the artwork data in localStorage
        localStorage.setItem("artwork", JSON.stringify(response));

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Fetch the artwork data only once
    fetchArtwork();
  }, []);

  return (
    <ArtworkContext.Provider value={{ artwork, loading, error }}>
      {children}
    </ArtworkContext.Provider>
  );
};
