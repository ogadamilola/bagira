// Data object for Available Collections
const availableCollections = {
  title: "Available for purchase",
  subtitle: "Paintings",
};

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Body = ({ artwork }) => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    // Check if the artwork data is in localStorage
    const storedArtwork = localStorage.getItem("artwork");
    if (storedArtwork) {
      const artworkData = JSON.parse(storedArtwork);
      setPaintings(
        artworkData.map((item, index) => (
          <Link
            key={index}
            href={`/artwork/collection/${encodeURIComponent(item.id)}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default Next.js behavior
              window.location.href = `/artwork/collection/${encodeURIComponent(item.id)}`; // Trigger full page reload
            }}
            className="justify-center items-center flex relative flex-col w-full h-full image-selection"
          >
            <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem] transition-all duration-200 hover:brightness-[110%] image-selection">
              <img
                className="cursor-pointer object-cover w-full h-full relative image-selection"
                src={`${item.image}`}
                alt={item.title}
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                &apos;{item.title}&apos; {item.size}
                <br />ƒ {item.price.toFixed(3)}
              </h2>
            </div>
          </Link>
        ))
      );
    } else {
      // Display skeleton elements by default
      setPaintings(
        Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="justify-center items-center flex relative flex-col w-full h-full"
          >
            <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem]">
              <Skeleton className="w-full h-[23.125rem] rounded bg-[#e81d5a]" />
            </div>
            <div className="shop-title">
              <Skeleton className="w-full h-[20px] rounded bg-[#e81d5a]" />
            </div>
          </div>
        ))
      );
    }
  }, []);

  return (
    <div id="shop" className="page-section">
      <div className="relative overflow-hidden flex-col justify-center items-start flex w-full">
        <div className="text-center w-full mb-[1.875rem]">
          {availableCollections.title ? (
            <h2 className="josefin-400-26">{availableCollections.title}</h2>
          ) : (
            <Skeleton className="w-full h-[26px] rounded bg-[#e81d5a]" />
          )}
        </div>
        <div className="text-center normal-case w-full mb-[1.875rem]">
          {availableCollections.subtitle ? (
            <h1 className="jost-700-122">{availableCollections.subtitle}</h1>
          ) : (
            <Skeleton className="w-full h-[122px] rounded bg-[#e81d5a]" />
          )}
        </div>
        <div
          className={`mb-[1.875rem] grid grid-cols-1 sm:grid-cols-4 gap-[1rem] w-full`}
        >
          {paintings}
        </div>
        <div className="text-start mb-[1.875rem]">
          <a href="/artwork">
            <h2 className="josefin-400-20">{"<- Back to artwork"}</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
