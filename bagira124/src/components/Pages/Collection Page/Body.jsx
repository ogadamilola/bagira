// Data object for Available Collections
const availableCollections = {
  title: "Available for purchase",
  subtitle: "Paintings",
  gridColumns: 4,
  items: [
    {
      image: {
        src: "/images/IMAGE_2.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_2-p-500.webp 500w, /images/IMAGE_2-p-800.webp 800w, /images/IMAGE_2-p-1080.webp 1080w, /images/IMAGE_2-p-1600.webp 1600w, /images/IMAGE_2-p-2000.webp 2000w, /images/IMAGE_2.webp 2500w",
      },
      title: "'tur shimaruku ta hechu' 185 X 140 cm",
      price: "F 9.200",
    },
    {
      image: {
        src: "/images/IMAGE_3.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_3-p-500.webp 500w, /images/IMAGE_3-p-800.webp 800w, /images/IMAGE_3-p-1080.webp 1080w, /images/IMAGE_3-p-1600.webp 1600w, /images/IMAGE_3-p-2000.webp 2000w, /images/IMAGE_3.webp 2500w",
      },
      title: "'Muhammad ali' 124 X 148 CM",
      price: "F 8.500",
    },
    {
      image: {
        src: "/images/IMAGE_4.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_4-p-500.webp 500w, /images/IMAGE_4-p-800.webp 800w, /images/IMAGE_4-p-1080.webp 1080w, /images/IMAGE_4-p-1600.webp 1600w, /images/IMAGE_4-p-2000.webp 2000w, /images/IMAGE_4.webp 2500w",
      },
      title: "'SISTERS' 110 X 140 CM",
      price: "F 5.500",
    },
    {
      image: {
        src: "/images/IMAGE_5.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_5-p-500.webp 500w, /images/IMAGE_5-p-800.webp 800w, /images/IMAGE_5-p-1080.webp 1080w, /images/IMAGE_5-p-1600.webp 1600w, /images/IMAGE_5-p-2000.webp 2000w, /images/IMAGE_5.webp 2500w",
      },
      title: "'SISTERS' 110 X 140 CM",
      price: "F 4.500",
    },
    {
      image: {
        src: "/images/IMAGE_2.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_2-p-500.webp 500w, /images/IMAGE_2-p-800.webp 800w, /images/IMAGE_2-p-1080.webp 1080w, /images/IMAGE_2-p-1600.webp 1600w, /images/IMAGE_2-p-2000.webp 2000w, /images/IMAGE_2.webp 2500w",
      },
      title: "'tur shimaruku ta hechu' 185 X 140 cm",
      price: "F 9.200",
    },
    {
      image: {
        src: "/images/IMAGE_3.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_3-p-500.webp 500w, /images/IMAGE_3-p-800.webp 800w, /images/IMAGE_3-p-1080.webp 1080w, /images/IMAGE_3-p-1600.webp 1600w, /images/IMAGE_3-p-2000.webp 2000w, /images/IMAGE_3.webp 2500w",
      },
      title: "'Muhammad ali' 124 X 148 CM",
      price: "F 8.500",
    },
    {
      image: {
        src: "/images/IMAGE_4.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_4-p-500.webp 500w, /images/IMAGE_4-p-800.webp 800w, /images/IMAGE_4-p-1080.webp 1080w, /images/IMAGE_4-p-1600.webp 1600w, /images/IMAGE_4-p-2000.webp 2000w, /images/IMAGE_4.webp 2500w",
      },
      title: "'SISTERS' 110 X 140 CM",
      price: "F 5.500",
    },
    {
      image: {
        src: "/images/IMAGE_5.webp",
        alt: "BAGIRA",
        srcSet: "/images/IMAGE_5-p-500.webp 500w, /images/IMAGE_5-p-800.webp 800w, /images/IMAGE_5-p-1080.webp 1080w, /images/IMAGE_5-p-1600.webp 1600w, /images/IMAGE_5-p-2000.webp 2000w, /images/IMAGE_5.webp 2500w",
      },
      title: "'SISTERS' 110 X 140 CM",
      price: "F 4.500",
    },
  ],
};

// Component using the data object
import React from "react";

const Body = () => {
  const artworkElements = availableCollections.items.map((artwork, index) => (
    <div
      key={index}
      className="justify-center items-center flex relative flex-col w-full h-full"
    >
      <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem]">
        <img
          className="cursor-pointer object-cover w-full h-full relative"
          src={artwork.image.src}
          alt={artwork.image.alt}
          data-flip-id="1"
          img-anim="1"
          loading="lazy"
          srcSet={artwork.image.srcSet}
        />
      </div>
      <div className="shop-title">
        <h2 anim="2" split="" className="josefin-400-13">
          {artwork.title}
          <br />
          {artwork.price}
        </h2>
      </div>
    </div>
  ));

  return (
    <div id="shop" className="page-section">
      <section id="shop" className="page-section">
        <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
          <div className="text-center mb-[1.875rem]">
            <h2 className="josefin-400-26">{availableCollections.title}</h2>
          </div>
          <div className="page-hero-title mb-[1.875rem]">
            <h1 className="jost-700-122">{availableCollections.subtitle}</h1>
          </div>
          <div className={`mb-[1.875rem] grid grid-cols-4 gap-[1rem] w-full`}>
            {artworkElements}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;