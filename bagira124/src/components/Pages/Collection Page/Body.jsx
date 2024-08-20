// Data object for Available Collections
const availableCollections = {
  title: "Available for purchase",
  subtitle: "Paintings",
};

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getArtwork } from "../../../../sanity/sanity-utils";

const Body = () => {
  const [artwork, setArtwork] = useState(null);
  const [paintings, setPaintings] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArtwork();
      setArtwork(response);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (artwork) {
  //     console.log("Artwork data: ", artwork);
  //   }
  // }, [artwork]);

  useEffect(() => {
    if (artwork) {
      setPaintings(
        artwork.map((item, index) => (
          <Link
            key={index}
            href={`/artwork/collection/${encodeURIComponent(item.id)}`}
            className="justify-center items-center flex relative flex-col w-full h-full"
          >
            <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem]">
              <img
                className="cursor-pointer object-cover w-full h-full relative"
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
    }
  }, [artwork]);

  return (
    <div id="shop" className="page-section">
      <div className="relative overflow-hidden flex-col justify-center items-start flex w-full">
        <div className="text-center w-full mb-[1.875rem]">
          <h2 className="josefin-400-26">{availableCollections.title}</h2>
        </div>
        <div className="text-center normal-case w-full mb-[1.875rem]">
          <h1 className="jost-700-122">{availableCollections.subtitle}</h1>
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
