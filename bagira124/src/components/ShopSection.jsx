import React from "react";

const ShopSection = () => {
  return (
    <>
      <div className="vertical-line-wrap">
        <div className="vertical-line"></div>
      </div>
      <section id="shop" className="shop-section panel">
        {/* <div className="vertical-line-wrap">
        <div className="vertical-line"></div>
      </div> */}

        <div className="shop-component">
          {/* <div className="shop-info">

          <div className="ap-info-bottom">
            <div className="shop-sub-title">
              <div anim="3" split="words" className="jost-300-50 ">
                Collection
              </div>
            </div>

            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                BAGIRA's collection are paintings she created based on her
                inspiration. These pieces are for sale and available at the
                Gallery in Kura Hulanda Village and can be shipped worldwide.
              </h2>
            </div>

            <div className="shop-cta">
              <a href="#shop" className="cta-link artwork max-w-full h-full inline-block">
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
        </div> */}

          <a
            href={`/artwork/collection/tur-shimaruku-ta-hechu`}
            className="ap-img-wrap-shop"
          >
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8093-784x1024.webp 500w, images/IMG_8093-784x1024.webp 800w, images/IMG_8093-784x1024.webp 1080w, images/IMG_8093-784x1024.webp 1600w, images/IMG_8093-784x1024.webp 2000w, images/IMG_8093-784x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘tur shimaruku ta hechu’ 185 X 140 cm
                <br />F 9.200
              </h2>
            </div>
          </a>

          <a href={`/artwork/collection/muhammad-ali`} className="ap-img-wrap-shop">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background_1.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8093-784x1024.webp 500w, images/IMG_8093-784x1024.webp 800w, images/IMG_8093-784x1024.webp 1080w, images/IMG_8093-784x1024.webp 1600w, images/IMG_8093-784x1024.webp 2000w, images/IMG_8093-784x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘Muhammad ali’ 124 X 148 CM
                <br />F 8.500
              </h2>
            </div>
          </a>

          <a href={`/artwork/collection/sisters-2`} className="ap-img-wrap-shop">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background_2.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8093-784x1024.webp 500w, images/IMG_8093-784x1024.webp 800w, images/IMG_8093-784x1024.webp 1080w, images/IMG_8093-784x1024.webp 1600w, images/IMG_8093-784x1024.webp 2000w, images/IMG_8093-784x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘SISTERS’ 110 X 140 CM
                <br />F 5.500
              </h2>
            </div>
          </a>

          <a href={`/artwork/collection/sisters`} className="ap-img-wrap-shop">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background_3.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8093-784x1024.webp 500w, images/IMG_8093-784x1024.webp 800w, images/IMG_8093-784x1024.webp 1080w, images/IMG_8093-784x1024.webp 1600w, images/IMG_8093-784x1024.webp 2000w, images/IMG_8093-784x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘SISTERS’ 100 X 100 CM
                <br />F 4.500
              </h2>
            </div>
          </a>
        </div>

        <div className="shop-component">
          {/* <div className="shop-info-bottom">
          <div className="ap-info-bottom">
            <div className="shop-sub-title">
              <div anim="3" split="words" className="jost-300-50 ">
                Commission
              </div>
            </div>

            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                Custom paintings, in other words, commission are pieces that are
                created based on the client's request. These pieces are
                customizable based on design, material, color-scheme and size
                and can be shipped worldwide.
              </h2>
            </div>

            <div className="shop-cta">
              <a href="#shop" className="cta-link artwork max-w-full h-full inline-block">
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
        </div> */}

          <a href={`/artwork/collection/rooted-in-curacao`} className="ap-img-wrap-shop bottom">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background_4.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8080-892x1024.webp 500w, images/IMG_8080-892x1024.webp 800w, images/IMG_8080-892x1024.webp 1080w, images/IMG_8080-892x1024.webp 1600w, images/IMG_8080-892x1024.webp 2000w, images/IMG_8080-892x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘rOOTED IN CURACAO’ 110 X 140 CM
                <br />F 5.000
              </h2>
            </div>
          </a>

          <a href={`/artwork/collection/still-dreaming`} className="ap-img-wrap-shop bottom">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background_5.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8080-892x1024.webp 500w, images/IMG_8080-892x1024.webp 800w, images/IMG_8080-892x1024.webp 1080w, images/IMG_8080-892x1024.webp 1600w, images/IMG_8080-892x1024.webp 2000w, images/IMG_8080-892x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘STILL DREAMING’ 90 X 120 CM
                <br />F 4.000
              </h2>
            </div>
          </a>

          <a href={`/artwork/collection/eew-people`} className="ap-img-wrap-shop bottom">
            <div
              // data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              className="ap-img-1-shop"
            >
              {/* <div img-castanho="1" className="img-background"></div> */}
              <img
                className="ap-img-a-shop"
                src="/images/Background_6.webp"
                alt="BAGIRA"
                // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                // srcSet="/images/IMG_8080-892x1024.webp 500w, images/IMG_8080-892x1024.webp 800w, images/IMG_8080-892x1024.webp 1080w, images/IMG_8080-892x1024.webp 1600w, images/IMG_8080-892x1024.webp 2000w, images/IMG_8080-892x1024.webp 2500w"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘EEW, PEOPLE’ 145 X 255 CM
                <br />F 9.000
              </h2>
            </div>
          </a>

          <div className="ap-img-wrap-shop bottom">
            <div className="artwork-cta">
              <a
                href="/artwork/collection"
                className="cta-link artwork[x] max-w-full h-full inline-block"
              >
                <div
                  data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                  className="cta"
                >
                  <div className="josefin-400-13">
                    See All Available Artwork
                  </div>

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
      </section>
    </>
  );
};

export default ShopSection;
