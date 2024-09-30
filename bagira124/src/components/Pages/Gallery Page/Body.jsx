import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ArtworkContext } from "@/contexts/ArtworkContext";

// Object for Recently Sold Artwork
const recentlySoldArtwork = {
  title: "Artwork",
  subtitle: "Recently sold",
  gridColumns: 3,
  items: [
    {
      id: "tur-shimaruku-ta-hechu",
      image: {
        src: "/images/IMAGE",
        alt: "BAGIRA",
      },
    },
    {
      id: "muhammad-ali",
      image: {
        src: "/images/IMAGE_1",
        alt: "BAGIRA",
      },
    },
    {
      id: "tur-shimaruku-ta-hechu",
      image: {
        src: "/images/IMAGE_2",
        alt: "BAGIRA",
      },
    },
    {
      id: "muhammad-ali",
      image: {
        src: "/images/IMAGE_3",
        alt: "BAGIRA",
      },
    },
    {
      id: "tur-shimaruku-ta-hechu",
      image: {
        src: "/images/IMAGE_4",
        alt: "BAGIRA",
      },
    },
    {
      id: "muhammad-ali",
      image: {
        src: "/images/IMAGE_5",
        alt: "BAGIRA",
      },
    },
    {
      id: "tur-shimaruku-ta-hechu",
      image: {
        src: "/images/IMAGE_6",
        alt: "BAGIRA",
      },
    },
    {
      id: "muhammad-ali",
      image: {
        src: "/images/IMAGE_7",
        alt: "BAGIRA",
      },
    },
    {
      id: "tur-shimaruku-ta-hechu",
      image: {
        src: "/images/IMAGE_8",
        alt: "BAGIRA",
      },
    },
    // ... Add more items as needed, up to 9 for the given layout
  ],
};

const Body = () => {
  const { artwork, loading, error } = useContext(ArtworkContext);
  const [paintings, setPaintings] = useState(null);

  // useEffect(() => {
  //  if (artwork) {
  //   console.log("Artwork data: ", artwork);
  //  }
  // }, [artwork]);

  // Map for Recently Sold Artwork
  const soldArtworkGrid = recentlySoldArtwork.items.map((item, index) => (
    <div
      key={index}
      className="justify-center items-center flex relative flex-col w-full h-[32.5rem] overflow-hidden"
    >
      <img
        className="object-cover w-full h-full relative"
        src={`${item.image.src}.png`}
        alt={item.image.alt}
        data-flip-id={item.id}
        img-anim="1"
        loading="lazy"
      />
    </div>
  ));

  useEffect(() => {
    if (artwork) {
      setPaintings(
        artwork.map((item, index) => (
          <Link
            key={index}
            href={`/artwork/collection/${encodeURIComponent(item.id)}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default Next.js behavior
              window.location.href = `/artwork/collection/${encodeURIComponent(item.id)}`; // Trigger full page reload
            }}
            className="justify-center items-center flex relative flex-col w-full h-[32.5rem] transition-all duration-200 hover:brightness-[110%] image-selection"
          >
            <img
              className=" object-cover w-full h-full relative image-selection"
              src={`${item.image}`}
              alt={item.title}
              // data-flip-id="1"
              img-anim="1"
              loading="lazy"
            />
          </Link>
        ))
      );
    }
  }, [artwork]);

  return (
    <div id="shop" className="page-section josefin-400-20">
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="text-center mb-[1.875rem]">
          <h2 className="josefin-400-26">OTROBANDA, CURAÇAO</h2>
        </div>
        <div className="text-center normal-case mb-[1.875rem]">
          <h1 className="jost-700-122 ">The Gallery</h1>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center self-stretch gap-[2rem] pt-[115px]">
          <div className="flex w-full flex-col justify-start items-start lg:max-w-[50%]">
            <div className="flex w-full flex-col justify-start items-center relative pb-[30px]">
              <p className="jost-700-58 w-full lowercase self-stretch text-[58px] font-bold text-left text-black">
                the gallery is now open
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch relative pb-[30px]">
              <p className="self-stretch text-lg text-left text-black">
                We opened our doors March 23, 2024. A beautiful space dedicated
                to showcasing the beauty and diversity of contemporary art.
              </p>
            </div>
            <div className="w-full flex">
              <a
                href="/"
                className="cta-link artwork[x] max-w-full h-full inline-block"
              >
                <div
                  data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                  className="cta"
                >
                  <div className="cta-ball">
                    <div className="josefin-400-13 z-10 text-nowrap text-white">
                      Stay Updated
                    </div>
                    <div className="seta-cta-wrap">
                      <div className="seta-cta-anda-1">
                        <img
                          src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                          loading="lazy"
                          alt=""
                          className="seta-cta-redirect"
                        />
                      </div>

                      <div className="seta-cta-anda-2">
                        <img
                          src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                          loading="lazy"
                          alt=""
                          className="seta-cta-redirect"
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
          <div className="flex flex-col justify-center items-start h-[600px] relative overflow-hidden lg:max-w-[50%]">
            <img
              src="/images/IMG_9527-1-scaled.png"
              loading="lazy"
              alt="BAGIRA"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center self-stretch gap-[2rem] pt-[115px]">
          <div className="flex flex-col justify-center items-center h-[600px] relative overflow-hidden lg:max-w-[50%]">
            <img
              src="/images/IMG_7906-2.png"
              loading="lazy"
              alt="BAGIRA"
              className="size-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-start items-start gap-4 pt-2 lg:max-w-[50%]">
            <div className="flex flex-col justify-start items-center self-stretch relative pb-[30px]">
              <p className="self-stretch text-[62px] font-black text-left text-black">
                <span className="jost-700-58 normal-case self-stretch text-[62px] font-black text-left text-black">
                  Hidden gem in
                  <br />
                  Otrobanda
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch relative">
              <p className="self-stretch text-xl text-left text-black">
                The gallery is located in the heart of Otrobanda, Curacao,
                specifically in Kura Hulanda Village. We are open mainly in the
                afternoon through the evening, take a stroll in the Village,
                have drinks and a nice dinner and come by to admire the
                artworks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div
          className={`mb-[1.875rem] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[1rem] w-full`}
        >
          {soldArtworkGrid}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209891.860030689!2d-69.10004626271494!3d12.1751977801652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8483ed0b48af5f%3A0xb5aabb708ccb68de!2sBAGIRA%20ARTIST%20AND%20GALLERY!5e0!3m2!1sen!2sca!4v1727131026489!5m2!1sen!2sca"
          className="w-full h-[37.5rem]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <iframe
          src="https://tourmkr.com/F1bvPdKIKm/43774788p&232.52h&85.72t"
          className="w-full h-[37.5rem]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Body;
