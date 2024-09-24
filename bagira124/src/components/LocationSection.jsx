import Image from "next/image";
import React from "react";
import ScrollingBanner from "./animations/ScrollingBanner";

const LocationSection = () => {
  return (
    <div id="location" className="location-section panel">
      <div className="location-trigger"></div>

      <div className="location-sticky">
        <div className="location-width"></div>

        <div className="location-marquee !overflow-visible">
          <div
            data-w-id="a69e3c76-4a04-0ceb-2f87-e329ebd28016"
            className="location-anda relative justify-center"
          >
            {/* <div className="location-track">
              <div className="location-marquee-repete">
                <div className="location-ball"></div>
                <div className="location-marquee-text">
                  <img
                    src="/images/6405cdaf4aff8b98974c7362_Logo-NVVV.png"
                    loading="lazy"
                    alt="Logo BAGIRA"
                  />
                </div>
              </div>

              <div className="location-marquee-repete">
                <div className="location-ball"></div>
                <div className="location-marquee-text">
                  <div className="jost-300-50 ">bagira</div>
                </div>
              </div>

              <div className="location-marquee-repete">
                <div className="location-ball"></div>
                <div className="location-marquee-text">
                  <div className="jost-300-50 ">art</div>
                </div>
              </div>

              <div className="location-marquee-repete">
                <div className="location-ball"></div>
                <div className="location-marquee-text">
                  <div className="jost-300-50 ">commissions</div>
                </div>
              </div>
            </div> */}

            <ScrollingBanner
              vertical
              baseVelocity={10000}
              className="jost-700-50 hidden lg:flex"
            >
              The world without art is just ‘meh’ —
            </ScrollingBanner>
            <ScrollingBanner
              baseVelocity={100}
              className="jost-700-50 flex lg:hidden"
            >
              The world without art is just ‘meh’ —
            </ScrollingBanner>
          </div>
        </div>

        <div className="location-update">
          <div className="vertical-line-wrap mb-none">
            <div className="vertical-line"></div>
          </div>

          <div className="horizontal-line-wrap mb-block">
            <div className="horizontal-line grey"></div>
          </div>

          <div className="location-update-line"></div>
        </div>

        <div className="location-info">
          <div className="location-info-component">
            <div className="location-info-wrap !w-full lg:w-[25rem] relative justify-center">
              <div className="location-sub-title h-full lg:h-auto flex flex-col items-center !mb-0">
                {/* <div className="josefin-400-13">location</div> */}
                <img
                  alt=""
                  src="/images/The_gallery_logo_black.webp"

                  className="object-cover h-[5rem] gallery-circle-image"
                />
                <div className="location-title mt-[1.5rem]">
                  <div className="josefin-300-25">Otrobanda, Curaçao</div>
                  <h3
                    anim="1"
                    split="words"
                    className="josefin-600-30 !text-[1.875rem] !normal-case text-nowrap mt-[1.3rem] z-10"
                  >
                    In Kura Hulanda Village
                    {/* <span className="main-color">curaçao</span> */}
                  </h3>
                </div>
              </div>

              <div className="location-info-anim !h-full lg:!h-auto">
                <div className="location-info-wrap n1">
                  <div className="location-paragraph">
                    <p className="josefin-300-25">
                      The gallery opened its doors in March 2024.
                    </p>
                  </div>

                  {/* <div className="location-background"></div> */}
                </div>

                <div className="location-info-wrap n2">
                  {/* <div className="location-title">
                    <h3 className="jost-300-50 ">
                      <span className="main-color">whiteglove delivery</span> to
                      Your <span className="main-color">doorstep</span>
                    </h3>
                  </div>

                  <div className="location-paragraph">
                    <p className="josefin-400-13">
                      Oftentimes clients request a special painting that would
                      fit in their interior and about. You can directly
                      collaborate with the artist to bring your about to
                      reality, whether it’s a personal portrait, a made up
                      person’s portrait, landscape or abstract piece.
                    </p>
                  </div> */}

                  <div className="location-paragraph">
                    <p className="josefin-300-25">
                      Bagira’s artworks can be seen exclusively at the gallery.
                    </p>
                  </div>

                  {/* <div className="location-background"></div> */}
                </div>

                <div className="location-info-wrap n3">
                  {/* <div className="location-title">
                    <h3 className="jost-300-50 ">
                      Comissions <span className="main-color">& murals</span>
                    </h3>
                  </div> */}

                  <div className="location-paragraph">
                    <p className="josefin-300-25">
                      Additionally, the artist curates solo exhibitions
                      featuring other artists a few times each year.
                    </p>
                  </div>

                  {/* <div className="location-background"></div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="location-cta mb-none">
            <div className="location-cta-wrap">
              <a
                href="https://tourmkr.com/F1bvPdKIKm/43774788p&232.52h&85.72t"
                target="_blank"
                className="cta-link max-w-full h-full inline-block"
              >
                <div
                  data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                  className="cta"
                >
                  <div className="cta-ball">
                    <div className="josefin-400-13 z-10 text-nowrap text-white">
                      Virtual Tour
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
        </div>

        <div className="location-big-img-wrap">
          <div className="img-background"></div>
          <img
            src="/images/gallery.webp"
            loading="lazy"
            sizes="100vw"
            srcSet="/images/gallery-p-500.webp 500w, images/gallery-p-800.webp 800w, images/gallery-p-1080.webp 1080w, images/gallery-p-1600.webp 1600w, images/gallery-p-2000.webp 2000w, images/gallery.webp 2161w"
            alt="EDIFICIO BAGIRA"
            className="location-big-img  w-full lg:w-[50vw] -ml-[5vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
