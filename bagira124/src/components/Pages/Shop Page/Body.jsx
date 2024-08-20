// Data object for Available Collections
const suggestedShop = {
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
  ],
};

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
// Component using the data object
import React from "react";

const Body = ({ product }) => {
  const suggestedShopElements = suggestedShop.items.map((item, index) => (
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
          srcSet={`${products[item.id].image.src}-p-500.webp 500w, ${
            products[item.id].image.src
          }-p-800.webp 800w, ${
            products[item.id].image.src
          }-p-1080.webp 1080w, ${
            products[item.id].image.src
          }-p-1600.webp 1600w, ${
            products[item.id].image.src
          }-p-2000.webp 2000w, ${products[item.id].image.src}.webp 2500w`}
        />
      </div>
      <div className="shop-title">
        <h2 anim="2" split="" className="josefin-400-13">
          &apos;{products[item.id].title}&apos; {products[item.id].size}
          <br />
          {products[item.id].price}
        </h2>
      </div>
    </Link>
  ));

  return (
    <div id="shop" className="page-section">
      <div className="relative flex-col justify-center items-start flex w-full">
        <div className="text-start mb-[1.875rem]">
          <a href="/artwork/collection">
            <h2 className="josefin-400-20">
              {"<- Back to view all available artwork"}
            </h2>
          </a>
        </div>
        <div className="justify-center items-start flex relative flex-col xl:flex-row w-full h-full gap-x-[3.125rem]">
          <div className="justify-center items-start flex relative flex-col max-w-full h-full gap-y-[2rem]">
            <div className="justify-center items-center flex relative flex-col max-w-full w-[39.125rem] h-[39.125rem]">
              <img
                className="cursor-pointer object-cover w-full h-full relative"
                src={`${product.image.src}.webp`}
                alt={product.image.alt}
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                srcSet={`${product.image.src}-p-500.webp 500w, ${product.image.src}-p-800.webp 800w, ${product.image.src}-p-1080.webp 1080w, ${product.image.src}-p-1600.webp 1600w, ${product.image.src}-p-2000.webp 2000w, ${product.image.src}.webp 2500w`}
              />
            </div>
            <div
              className={`mb-[1.875rem] grid grid-flow-col gap-[1rem] max-w-full overflow-scroll`}
            >
              {product.images.map((item, index) => (
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
            <div className="text-start relative mb-[1.875rem] md:mb-[10.875rem]">
              <div className="jost-300-122 text-ellipsis">{product.title}</div>
            </div>
            <div className="justify-between items-start flex relative flex-col mb-[1.875rem] w-full gap-y-[1.875rem]">
              <div className="justify-start items-center flex relative flex-row gap-x-[0.875rem]">
                <div className="text-center">
                  <h2 className="josefin-400-26">{product.price}</h2>
                </div>
                {product.availability === "sold" && (
                  <div className="justify-center items-center flex background-color-main rounded-full px-[1.25rem] py-[0.75rem]">
                    <div className="justify-center items-center flex relative">
                      <h2 className="josefin text-[0.8125rem] font-normal mt-[0.3rem] text-white">
                        SOLD
                      </h2>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+59996863862"
                target="_blank"
                className=" max-w-full h-full inline-block"
              >
                <div
                  data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                  className="cta"
                >
                  <div className="josefin-400-13">
                    Message me on Whatsapp +5999 68 63 62
                  </div>

                  <div className="cta-ball">
                    <div className="seta-cta-wrap">
                      <div className="seta-cta-anda-1">
                        <img
                          src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                          loading="lazy"
                          alt=""
                          className="seta-cta"
                        />
                      </div>

                      <div className="seta-cta-anda-2">
                        <img
                          src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                          loading="lazy"
                          alt=""
                          className="seta-cta"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    data-w-id="5a2429a5-eb5f-a67f-523e-f06da6ab7913"
                    className="cta-hover-sticky"
                  ></div>
                </div>
              </a>
            </div>

            <div className="justify-center items-center flex relative flex-row">
              <div className="text-start">
                <h2 className="jost-300-16  mb-[0.75rem]">{product.year}</h2>
                <h2 className="jost-300-16  mb-[0.75rem]">{product.size}</h2>
                <h2 className="jost-300-16  mb-[0.75rem]">
                  {product.description}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="text-start mb-[1.875rem]">
          <a href="/artwork/collection">
            <h2 className="josefin-400-20">
              {"<- Back to view all available artwork"}
            </h2>
          </a>
        </div>
        <div className="horizontal-line-wrap mb-[1.875rem]">
          <div className="horizontal-line grey"></div>
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
