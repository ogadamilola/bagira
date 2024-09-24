import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section panel">
      <div className="about-top">
        {/* <div className="about-sub-title">
          <h2 className="josefin-400-13">About the artist</h2>
        </div> */}

        <div className="about-bottom">
          <div className="about-img-component w-full">
            <div className="about-img-brown z-0 w-full h-full absolute top-0 bottom-0 left-0 right-0"></div>

            <div className="about-img-wrap min-h-[32.883rem]">
              <img
                src="/images/profile_image_bagira.webp"
                loading="lazy"
                sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 21vw"
                srcSet="/images/profile_image_bagira-p-500.webp 500w, images/profile_image_bagira-p-800.webp 800w, images/profile_image_bagira-p-1080.webp 1080w, images/profile_image_bagira-p-1600.webp 1600w, images/profile_image_bagira.webp 1920w"
                alt="BAGIRA"
                className="about-img n1"
              />
              <img
                src="/images/640605b828c86d2a9487bb88_vision.webp"
                loading="lazy"
                alt="Ilha da Madeira"
                className="about-img n2"
              />
            </div>
          </div>

          {/* <div className="about-text-wrap">
          <p className="josefin-400-13">
            BAGIRA IS NOW KNOWN AS AN ESTABLISHED ARTIST OF CURAÇAO, MOSTLY
            BECAUSE OF HER MURALS AND CAPTIVATING PORTRAITS. HER WORK CAN BE
            SEEN AROUND THE ISLAND, IN RESTAURANTS, HOTELS, BEACHES, IN THE
            CITY. PRIVATE HOMES, AND IN GOVERNMENT BUILDINGS. BEING SELF-TAUGHT.
            SHE EXPERIMENTS WITH DIFFERENT STYLES AND COLOR PALETTES BUT MANY
            STILL RECOGNIZE HER WORK.
          </p>
        </div> */}
        </div>
      </div>

      <div className="about-title ap-info-bottom">
        <div anim="1" split="words" className="jost-700-24">
          <span id="bagira-img" className="about-hover-text">
            BAGIRA
          </span>{" "}
          is a 28-year old Algerian – Hungarian{" "}
          <span id="bagira-img" className="about-hover-text">
            self-taught
          </span>{" "}
          artist who moved to Curaçao, discovered her{" "}
          <span id="bagira-img" className="about-hover-text">
            talent
          </span>{" "}
          at 21 years old, she quit her job 2 weeks later to pursue art
          full-time. Recently opening her own{" "}
          <span id="gallery-img" className="about-hover-text">
            art gallery in Kura Hulanda
          </span>
          .
        </div>
      </div>

      <div className="artwork-cta ap-info-bottom w-full justify-end flex items-end">
        <a
          href="/about"
          className="cta-link artwork[x] max-w-full h-full inline-block"
        >
          <div data-w-id="e458047e-b02a-b003-344d-013e414fafd4" className="cta">
            <div className="cta-ball">
              <div className="josefin-400-13 z-10 text-nowrap text-white">Learn More</div>
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

      <div className="horizontal-line-wrap mb-block">
        <div className="horizontal-line grey"></div>
      </div>
    </section>
  );
};

export default AboutSection;
