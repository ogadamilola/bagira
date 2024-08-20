// Data object for Available Collections
const suggestedShop = {
  gridColumns: 4,
  items: [
    {
      image: {
        src: "/images/Background",
        alt: "BAGIRA",
      },
      title: "'tur shimaruku ta hechu' 185 X 140 cm",
      price: "F 9.200",
      images: [
        {
          src: "/images/Background",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 22",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 23",
          alt: "BAGIRA",
        },
      ],
    },
    {
      image: {
        src: "/images/Background_1",
        alt: "BAGIRA",
      },
      title: "'Muhammad ali' 124 X 148 CM",
      price: "F 8.500",
      images: [
        {
          src: "/images/Background",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 22",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 23",
          alt: "BAGIRA",
        },
      ],
    },
    {
      image: {
        src: "/images/Background_2",
        alt: "BAGIRA",
      },
      title: "'SISTERS' 110 X 140 CM",
      price: "F 5.500",
      images: [
        {
          src: "/images/Background",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 22",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 23",
          alt: "BAGIRA",
        },
      ],
    },
    {
      image: {
        src: "/images/Background_3",
        alt: "BAGIRA",
      },
      title: "'SISTERS' 110 X 140 CM",
      price: "F 4.500",
      images: [
        {
          src: "/images/Background",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 22",
          alt: "BAGIRA",
        },
        {
          src: "/images/image 23",
          alt: "BAGIRA",
        },
      ],
    },
  ],
};

// Component using the data object
import React from "react";

const Body = () => {
  const suggestedShopElements = suggestedShop.items.map((item, index) => (
    <div
      key={index}
      className="justify-center items-center flex relative flex-col w-full h-full"
    >
      <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem]">
        <img
          className="cursor-pointer object-cover w-full h-full relative"
          src={`${item.image.src}.webp`}
          alt={item.image.alt}
          data-flip-id="1"
          img-anim="1"
          loading="lazy"
          srcSet={`${item.image.src}-p-500.webp 500w, ${item.image.src}-p-800.webp 800w, ${item.image.src}-p-1080.webp 1080w, ${item.image.src}-p-1600.webp 1600w, ${item.image.src}-p-2000.webp 2000w, ${item.image.src}.webp 2500w`}
        />
      </div>
      <div className="shop-title">
        <h2 anim="2" split="" className="josefin-400-13">
          {item.title}
          <br />
          {item.price}
        </h2>
      </div>
    </div>
  ));

  return (
    <div id="shop" className="page-section">
      <div className="relative flex-col justify-center items-start flex w-full">
        <div class="text-start mb-[1.875rem]">
          <a href="/artwork">
            <h2 class="josefin-400-20">
              {"<- Back to view all available artwork"}
            </h2>
          </a>
        </div>
        <div className="justify-center items-start flex relative flex-col xl:flex-row w-full h-full gap-x-[3.125rem]">
          <div className="justify-center items-start flex relative flex-col h-full gap-y-[2rem]">
            <div className="justify-center items-center flex relative flex-col w-[39.125rem] h-[39.125rem]">
              <img
                className="cursor-pointer object-cover w-full h-full relative"
                src={`${suggestedShop.items[0].image.src}.webp`}
                alt={suggestedShop.items[0].image.alt}
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                srcSet={`${suggestedShop.items[0].image.src}-p-500.webp 500w, ${suggestedShop.items[0].image.src}-p-800.webp 800w, ${suggestedShop.items[0].image.src}-p-1080.webp 1080w, ${suggestedShop.items[0].image.src}-p-1600.webp 1600w, ${suggestedShop.items[0].image.src}-p-2000.webp 2000w, ${suggestedShop.items[0].image.src}.webp 2500w`}
              />
            </div>
            <div className={`mb-[1.875rem] grid grid-flow-col gap-[1rem]`}>
              {suggestedShop.items[0].images.map((item, index) => (
                <div
                  key={index}
                  className="justify-center items-center flex relative flex-col w-[8.125rem] h-[8.125rem]"
                >
                  <img
                    className="cursor-pointer object-cover w-full h-full relative"
                    src={`${item.src}.webp`}
                    alt={item.alt}
                    data-flip-id="1"
                    img-anim="1"
                    loading="lazy"
                    srcSet={`${item.src}-p-500.webp 500w, ${item.src}-p-800.webp 800w, ${item.src}-p-1080.webp 1080w, ${item.src}-p-1600.webp 1600w, ${item.src}-p-2000.webp 2000w, ${item.src}.webp 2500w`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="justify-center items-start flex relative flex-col w-full h-full  mb-[1.875rem]">
            <div class="text-start relative mb-[1.875rem]">
              <div class="jost-300-122 text-ellipsis">{suggestedShop.items[0].title}</div>
            </div>
            <div className="justify-between items-start flex relative flex-col xl:flex-row mb-[1.875rem] w-full gap-y-[1.875rem]">
              <div className="justify-start items-center flex relative flex-row gap-x-[0.875rem]">
                <div class="text-center">
                  <h2 class="josefin-400-26">{suggestedShop.items[0].price}</h2>
                </div>
                <div class="justify-center items-center flex background-color-main rounded-full px-[1.25rem] py-[0.75rem]">
                  <div class="justify-center items-center flex relative">
                    <h2 class="josefin text-[0.8125rem] font-normal mt-[0.3rem] text-white">
                      SOLD
                    </h2>
                  </div>
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+59996863862"
                target="_blank"
                class="download-brochure-link max-w-full h-full inline-block"
              >
                <div
                  data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                  class="cta"
                >
                  <div class="josefin-400-13">
                    Message me on Whatsapp +5999 68 63 62
                  </div>

                  <div class="cta-ball">
                    <div class="seta-cta-wrap">
                      <div class="seta-cta-anda-1">
                        <img
                          src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                          loading="lazy"
                          alt=""
                          class="seta-cta"
                        />
                      </div>

                      <div class="seta-cta-anda-2">
                        <img
                          src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                          loading="lazy"
                          alt=""
                          class="seta-cta"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    data-w-id="5a2429a5-eb5f-a67f-523e-f06da6ab7913"
                    class="cta-hover-sticky"
                  ></div>
                </div>
              </a>
            </div>

            <div className="justify-center items-center flex relative flex-row">
              <div class="text-start">
                <h2 class="jost-300-16  mb-[0.75rem]">2023</h2>
                <h2 class="jost-300-16  mb-[0.75rem]">
                  145 x 255cm (57 x 100.4")
                </h2>
                <h2 class="jost-300-16  mb-[0.75rem]">
                  Acrylic on canvas, with black frame
                </h2>
                <h2 class="jost-300-16  mb-[0.75rem]">
                  Abstract piece inspired by jazz
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="text-start mb-[1.875rem]">
          <a href="/artwork">
            <h2 class="josefin-400-20">
              {"<- Back to view all available artwork"}
            </h2>
          </a>
        </div>
        <div class="horizontal-line-wrap mb-[1.875rem]">
          <div class="horizontal-line grey"></div>
        </div>
        <div
          className={`mb-[1.875rem] grid grid-cols-1 sm:grid-cols-4 gap-[1rem] w-full`}
        >
          {suggestedShopElements}
        </div>
      </div>
    </div>
  );
};

export default Body;
