import React from "react";

const HomeSection = () => {
  return (
    <div id="home" className="hero-section panel">
      <div className="page-padding">
        <div className="hero-component">
          <div className="absolute hidden lg:block w-[100vw] left-0 -translate-x-[2.5rem] h-[94px] from-black to-transparent bg-gradient-to-b z-10 pointer-events-none" />
          <img
            src="/images/6405cdaf4aff8b98974c7362_Logo-NV.webp"
            loading="lazy"
            alt="Logo BAGIRA"
            className="hero-logo z-10"
          />

          <div className="hero-title-component">
            <div className="hero-title">
              <h1 load="anim" split="words" className="jost-700-122 ">
                The world without art is just ‘meh’
              </h1>
            </div>

            <div className="hero-sub-title">
              <h2 className="josefin-400-26 ">
                BAGIRA , visual artist of Curaçao
              </h2>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-bottom-left">
              <div className="hero-call-wrap">
                <div className="hero-call-bola"></div>

                <div className="josefin-400-13">contact us today</div>
              </div>

              <div className="hero-left-left">
                <div className="hero-contactos-wrap">
                  <div
                    data-w-id="0d6ae4b5-432f-a94f-2236-ad270b9bed79"
                    className="small-links"
                  >
                    <div className="collection-numero w-dyn-list">
                      <div
                        role="list"
                        className="collection-numero w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-numero w-dyn-item"
                        >
                          <a
                            href="tel:+5999 686 38 62"
                            className="josefin-400-13"
                          >
                            +5999 686 38 62
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      data-w-id="09a4298e-c598-4700-e316-d7965799be14"
                      className="nav-ball"
                    ></div>
                  </div>

                  <div className="mobile-frase">
                    <div className="josefin-400-10">
                      Kura Hulanda Village, Curaçao
                    </div>
                  </div>

                  <div className="small-links">
                    <div className="collection-numero w-dyn-list">
                      <div
                        role="list"
                        className="collection-numero w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-numero w-dyn-item"
                        >
                          <a href="tel:" className="josefin-400-13">
                            Message Me on whatsapp
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="nav-ball"></div>
                  </div>

                  <div className="mobile-frase">
                    <div className="josefin-400-10"></div>
                  </div>
                </div>

                <div className="hero-energia">
                  <img
                    src="/images/64380da380fc5a66db7f00d4_energia.svg"
                    loading="lazy"
                    alt=""
                    className="image-energia"
                  />
                </div>
              </div>
            </div>

            <div className="hero-scroll">
              <a
                data-w-id="cd947534-154b-d008-a35f-bce9f4afa8aa"
                href="#about"
                className="big-cta about max-w-full h-full inline-block"
              >
                <div className="big-cta-text z-10">
                  <div className="josefin-600-20">scroll</div>
                </div>

                <div className="big-cta-hover"></div>

                <div
                  data-w-id="65cef19a-0440-5f3f-adcc-8c93f997466a"
                  className="big-cta-sticky"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/FullSizeRender.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="/images/FullSizeRender-p-500.webp 500w, images/FullSizeRender-p-800.webp 800w, images/FullSizeRender-p-1080.webp 1080w, images/FullSizeRender-p-1600.webp 1600w, images/FullSizeRender-p-2000.webp 2000w, images/FullSizeRender.webp 2161w"
        alt="BAGIRA"
        className="hero-img-background"
      />

      <div
        data-w-id="ecb77a20-c4eb-e3f3-474f-cce4b1522386"
        className="hero-img-gradient"
      ></div>
    </div>
  );
};

export default HomeSection;
