// components/FlowScript.js
"use client";
import { useEffect } from "react";

const FlowScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts/flow.7341b0d66.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default FlowScript;
