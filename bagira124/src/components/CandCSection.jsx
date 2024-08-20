import React from "react";

const CandCSection = () => {
  return (
    <>
      <div className="vertical-line-wrap">
        <div className="vertical-line"></div>
      </div>
      <section className="candc-section panel">
        <div className="candc-component-top">
          <div className="candc-info">
            <div className="ap-info-bottom">
              <div className="candc-sub-title">
                <div anim="3" split="words" className="jost-300-50 ">
                  Collection
                </div>
              </div>

              <div className="candc-title">
                <h2 anim="2"  className="josefin-400-13">
                  BAGIRA&apos;s collection are paintings she created based on
                  her inspiration. These pieces are for sale and available at
                  the Gallery in Kura Hulanda Village and can be shipped
                  worldwide.
                </h2>
              </div>

              <div className="candc-cta">
                <a href="/artwork" className="cta-link artwork[x] max-w-full h-full inline-block">
                  <div
                    data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                    className="cta"
                  >
                    <div className="josefin-400-13">Learn More</div>

                    <div className="cta-ball">
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
          </div>

          <div className="ap-img-wrap-candc">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-candc"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-candc"
                src="/images/IMG_8093-784x1024.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8093-784x1024.webp 500w, images/IMG_8093-784x1024.webp 800w, images/IMG_8093-784x1024.webp 1080w, images/IMG_8093-784x1024.webp 1600w, images/IMG_8093-784x1024.webp 2000w, images/IMG_8093-784x1024.webp 2500w"
              />
            </div>
          </div>
        </div>

        <div className="candc-component">
          <div className="candc-info-bottom">
            <div className="ap-info-bottom">
              <div className="candc-sub-title">
                <div anim="3" split="words" className="jost-300-50 ">
                  Commission
                </div>
              </div>

              <div className="candc-title">
                <h2 anim="2"  className="josefin-400-13">
                  Custom paintings, in other words, commission are pieces that
                  are created based on the client&apos;s request. These pieces
                  are customizable based on design, material, color-scheme and
                  size and can be shipped worldwide.
                </h2>
              </div>

              <div className="candc-cta">
                <a href="/artwork" className="cta-link artwork[x] max-w-full h-full inline-block">
                  <div
                    data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                    className="cta"
                  >
                    <div className="josefin-400-13">Learn More</div>

                    <div className="cta-ball">
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
          </div>

          <div className="ap-img-wrap-candc bottom">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-candc"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-candc"
                src="/images/IMG_8080-892x1024.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8080-892x1024.webp 500w, images/IMG_8080-892x1024.webp 800w, images/IMG_8080-892x1024.webp 1080w, images/IMG_8080-892x1024.webp 1600w, images/IMG_8080-892x1024.webp 2000w, images/IMG_8080-892x1024.webp 2500w"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandCSection;
