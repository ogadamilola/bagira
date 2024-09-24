import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArtworkContext } from "@/contexts/ArtworkContext";
import { Skeleton } from "@/components/ui/skeleton";

// Component using the data object
const Body = ({
  title,
  price,
  year,
  size,
  description,
  availability,
  image,
  images,
}) => {
  const { artwork, loading, error } = useContext(ArtworkContext);
  const [suggestedShop, setSuggestedShop] = useState(null);
  const [selectedImage, setSelectedImage] = useState(image); // Initialize with the primary image

  useEffect(() => {
    // Check if the artwork data is in localStorage
    if (artwork) {
      // Shuffle the artwork array and select 4 random items
      const randomArtworks = artwork
        .sort(() => 0.5 - Math.random()) // Shuffle the array
        .slice(0, 4); // Pick the first 4 items

      setSuggestedShop(
        randomArtworks.map((item, index) => (
          <Link
            key={index}
            href={`/artwork/collection/${encodeURIComponent(item.id)}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default Next.js behavior
              window.location.href = `/artwork/collection/${encodeURIComponent(item.id)}`; // Trigger full page reload
            }}
            className="justify-center items-center flex relative flex-col w-full h-full transition-all duration-200 hover:brightness-[110%]"
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
    } else {
      // Display skeleton elements by default
      setSuggestedShop(
        Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="justify-center items-center flex relative flex-col w-full h-full"
          >
            <div className="justify-center items-center flex relative flex-col w-full h-[23.125rem]">
              <Skeleton className="w-full h-full relative rounded bg-[#e81d5a]" />
            </div>
            <div className="shop-title">
              <Skeleton className="w-full h-[20px] rounded bg-[#e81d5a]" />
            </div>
          </div>
        ))
      );
    }
  }, [artwork]);

  return (
    <>
      <Head>
        <title>{title} | BAGIRA | Visual Artist of Curaçao</title>
        <meta
          property="og:title"
          content={`${title} | BAGIRA | Visual Artist of Curaçao`}
        />
      </Head>
      <div id="shop" className="page-section">
        <div className="relative flex-col justify-center items-start flex w-full">
          <div className="text-start mb-[1.875rem]">
            <a href="/artwork/collection">
              <h2 className="josefin-400-20">
                {"<- Back to view all available artwork"}
              </h2>
            </a>
          </div>
          <div className="justify-center items-start flex relative flex-col xl:flex-row w-full h-full gap-x-[3.125rem] xl:min-h-[45.797rem]">
            <div className="justify-center items-start flex relative flex-col max-w-full h-full gap-y-[2rem]">
              <div className="justify-center items-center flex relative flex-col max-w-full w-[39.125rem] h-[39.125rem]">
                <img
                  className="object-cover w-full h-full relative"
                  src={`${selectedImage}`}
                  alt={title}
                  data-flip-id="1"
                  img-anim="1"
                  loading="lazy"
                />
              </div>
              <div
                className={`mb-[1.875rem] grid grid-flow-col gap-[1rem] max-w-full overflow-scroll`}
              >
                {images ? (
                  <>
                    <div
                      className={`justify-center items-center flex relative flex-col w-[8.125rem] h-[8.125rem] ${selectedImage === image ? "border-4 border-[#0F1211]" : ""} transition-all duration-200 hover:brightness-[110%] image-selection`}
                      onClick={() => setSelectedImage(image)} // Update selected image on click
                    >
                      <img
                        className="cursor-pointer object-cover w-full h-full relative image-selection"
                        src={`${image}`}
                        alt={title}
                        data-flip-id="1"
                        img-anim="1"
                        loading="lazy"
                      />
                    </div>
                    {images.map((item, index) => (
                      <div
                        key={index}
                        className={`justify-center items-center flex relative flex-col w-[8.125rem] h-[8.125rem] 
                      ${selectedImage === item ? "border-4 border-[#0F1211]" : ""}
                      transition-all duration-200 hover:brightness-[110%] image-selection`}
                        onClick={() => setSelectedImage(item)} // Update selected image on click
                      >
                        <img
                          className="cursor-pointer object-cover w-full h-full relative image-selection"
                          src={`${item}`}
                          alt={title}
                          data-flip-id="1"
                          img-anim="1"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <div
                    className={`justify-center items-center flex relative flex-col w-[8.125rem] h-[8.125rem] ${selectedImage === image ? "border-4 border-[#0F1211]" : ""} transition-all duration-200 hover:brightness-[110%] image-selection`}
                  >
                    <img
                      className="cursor-pointer object-cover w-full h-full relative image-selection"
                      src={`${image}`}
                      alt={title}
                      data-flip-id="1"
                      img-anim="1"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="justify-center items-start flex relative flex-col w-full h-full  mb-[1.875rem]">
              <div className="text-start relative mb-[1.875rem] md:mb-[1.875rem]">
                <div className="jost-700-48 text-ellipsis">'{title}'</div>
              </div>
              <div className="justify-between items-start flex relative flex-col mb-[1.875rem] w-full gap-y-[1.875rem]">
                <div className="justify-start items-center flex relative flex-row gap-x-[0.875rem]">
                  <div className="text-center">
                    <h2 className="josefin-400-26">ƒ {price.toFixed(3)}</h2>
                  </div>
                  {!availability && (
                    <div className="justify-center items-center flex background-color-main px-[1.25rem] py-[0.75rem]">
                      <div className="justify-center items-center flex relative">
                        <h2 className="josefin text-[0.8125rem] font-normal mt-[0.3rem] text-white">
                          SOLD
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="jost-300-18 mt-[2rem]">I'm Interested In This Piece...</h2>
                <div className="flex gap-[1.5rem]">
                  <a
                    href="https://api.whatsapp.com/send?phone=+59996863862"
                    target="_blank"
                    className=" max-w-full h-full inline-block"
                  >
                    <div
                      data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                      className="cta"
                    >
                      <div className="cta-ball">
                        <div className="josefin-400-13 z-10 text-nowrap text-white">
                          e-mail
                        </div>
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
                  <a
                    href="https://api.whatsapp.com/send?phone=+59996863862"
                    target="_blank"
                    className=" max-w-full h-full inline-block"
                  >
                    <div
                      data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                      className="cta"
                    >
                      <div className="cta-ball">
                        <div className="josefin-400-13 z-10 text-nowrap text-white">
                          WhatsApp
                        </div>
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
              </div>

              <div className="justify-center items-center flex relative flex-row">
                <div className="text-start">
                  <h2 className="jost-300-16  mb-[0.75rem]">{year}</h2>
                  <h2 className="jost-300-16  mb-[0.75rem]">{size}</h2>
                  <h2 className="jost-300-16  mb-[0.75rem]">{description}</h2>
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
            className={`mb-[1.875rem] grid grid-cols-1 sm:grid-cols-4 gap-[1rem] w-full xl:min-h-[22.65rem]`}
          >
            {suggestedShop}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
