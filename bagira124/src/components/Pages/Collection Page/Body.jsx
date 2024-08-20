// Data object for Available Collections
const availableCollections = {
  title: "Available for purchase",
  subtitle: "Paintings",
  gridColumns: 4,
  items: [
    {
      id: "tur-shimaruku-ta-hechu",
    },
    {
      id: "muhammad-ali",
    },
    {
      id: "sisters-2",
    },
    {
      id: "sisters",
    },
    {
      id: "rooted-in-curacao",
    },
    {
      id: "still-dreaming",
    },
    {
      id: "eew-people",
    },
  ],
};

import Link from "next/link";
import { products } from "@/data/products";
// Component using the data object
import React from "react";

const Body = () => {
  const artworkElements = availableCollections.items.map((item, index) => (
    <Link
      key={index}
      href={`/artwork/collection/${encodeURIComponent(item.id)}`}
      className="justify-center items-center flex relative flex-col w-full h-full"
    >
      <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem]">
        <img
          className="cursor-pointer object-cover w-full h-full relative"
          src={`${products[item.id].image.src}.webp`}
          alt={products[item.id].image.alt}
          data-flip-id="1"
          img-anim="1"
          loading="lazy"
          srcSet={`${products[item.id].image.src}-p-500.webp 500w, ${products[item.id].image.src}-p-800.webp 800w, ${products[item.id].image.src}-p-1080.webp 1080w, ${products[item.id].image.src}-p-1600.webp 1600w, ${products[item.id].image.src}-p-2000.webp 2000w, ${products[item.id].image.src}.webp 2500w`}
        />
      </div>
      <div className="shop-title">
        <h2 anim="2" split="" className="josefin-400-13">
          '{products[item.id].title}' {products[item.id].size}
          <br />
          {products[item.id].price}
        </h2>
      </div>
    </Link>
  ));

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
          {artworkElements}
        </div>
        <div className="text-start mb-[1.875rem]">
          <a href="/artwork">
            <h2 className="josefin-400-20">
              {"<- Back to artwork"}
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
