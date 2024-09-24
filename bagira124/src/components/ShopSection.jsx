import React, { useEffect, useState } from "react";
import { getArtwork } from "../../sanity/sanity-utils";
import Link from "next/link";

const ShopSection = () => {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArtwork();
      setArtwork(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (artwork) {
      // console.log(artwork); // This will log the artwork data after it has been fetched and state is updated.
    }
  }, [artwork]);

  return (
    <>
      <div className="vertical-line-wrap">
        <div className="vertical-line"></div>
      </div>

      <section id="shop" className="shop-section panel">
        {/* <div className="h-full w-full grid grid-cols-1 lg:grid-cols-4 justify-start gap-x-[3.25em] py-[1.125em] px-[1em] lg:py-[0] lg:pr-[7.1875em] lg:pl-[1.25em]">
          {artwork &&
            artwork.slice(0, 7).map((item, index) => (
              <Link
                key={index}
                href={`/artwork/collection/${encodeURIComponent(item.id)}`}
                className={`justify-center items-center flex relative flex-col h-full ${index > 3 ? `pb-[1em] py-[0] lg:py-[0]` : `pb-[1em] pt-[0] lg:pb-[0] lg:pt-[7.25em]`}`}
              >
                <div className="ap-img-1-shop">
                  <img
                    className="ap-img-a-shop"
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
                    <br />
                    {item.price.toFixed(3)}
                  </h2>
                </div>
              </Link>
            ))}
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
        </div> */}
        <div className="shop-component xl:min-w-[108.65292825768667642752562225476vw]">
          {artwork &&
            artwork.slice(0, 4).map((item, index) => (
              <Link
                key={index}
                href={`/artwork/collection/${encodeURIComponent(item.id)}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default Next.js behavior
                  window.location.href = `/artwork/collection/${encodeURIComponent(item.id)}`; // Trigger full page reload
                }}
                className="ap-img-wrap-shop transition-all duration-200 hover:brightness-[110%] image-selection"
              >
                <div className="ap-img-1-shop">
                  <img
                    className="ap-img-a-shop"
                    src={`${item.image}`}
                    alt={item.title}
                    // data-flip-id="1"
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
            ))}
          {/* <a
            href={`/artwork/collection/tur-shimaruku-ta-hechu`}
            className="ap-img-wrap-shop"
          >
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘tur shimaruku ta hechu’ 185 X 140 cm
                <br />F 9.200
              </h2>
            </div>
          </a>

          <a
            href={`/artwork/collection/muhammad-ali`}
            className="ap-img-wrap-shop"
          >
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background_1.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘Muhammad ali’ 124 X 148 CM
                <br />F 8.500
              </h2>
            </div>
          </a>

          <a
            href={`/artwork/collection/sisters-2`}
            className="ap-img-wrap-shop"
          >
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background_2.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
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
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background_3.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘SISTERS’ 100 X 100 CM
                <br />F 4.500
              </h2>
            </div>
          </a> */}
        </div>

        <div className="shop-component xl:min-w-[108.65292825768667642752562225476vw]">
          {artwork &&
            artwork.slice(4, 7).map((item, index) => (
              <Link
                key={index}
                href={`/artwork/collection/${encodeURIComponent(item.id)}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default Next.js behavior
                  window.location.href = `/artwork/collection/${encodeURIComponent(item.id)}`; // Trigger full page reload
                }}
                className="ap-img-wrap-shop bottom transition-all duration-200 hover:brightness-[110%] image-selection"
              >
                <div className="ap-img-1-shop">
                  <img
                    className="ap-img-a-shop"
                    src={`${item.image}`}
                    alt={item.title}
                    // data-flip-id="1"
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
            ))}
          {/* <a
            href={`/artwork/collection/rooted-in-curacao`}
            className="ap-img-wrap-shop bottom"
          >
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background_4.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘rOOTED IN CURACAO’ 110 X 140 CM
                <br />F 5.000
              </h2>
            </div>
          </a>

          <a
            href={`/artwork/collection/still-dreaming`}
            className="ap-img-wrap-shop bottom"
          >
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background_5.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘STILL DREAMING’ 90 X 120 CM
                <br />F 4.000
              </h2>
            </div>
          </a>

          <a
            href={`/artwork/collection/eew-people`}
            className="ap-img-wrap-shop bottom"
          >
            <div className="ap-img-1-shop">
              <img
                className="ap-img-a-shop"
                src="/images/Background_6.webp"
                alt="BAGIRA"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
              />
            </div>
            <div className="shop-title">
              <h2 anim="2" split="" className="josefin-400-13">
                ‘EEW, PEOPLE’ 145 X 255 CM
                <br />F 9.000
              </h2>
            </div>
          </a> */}

          <div className="ap-img-wrap-shop bottom xl:w-[20vw]">
            <div className="artwork-cta">
              <a
                href="/artwork/collection"
                className="cta-link artwork[x] max-w-full h-full inline-block"
              >
                <div
                  data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                  className="cta"
                >
                  <div className="cta-ball">
                    <div className="josefin-400-13 z-10 text-nowrap text-white">
                      See All Available Artwork
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
        </div>
      </section>
    </>
  );
};

export default ShopSection;
