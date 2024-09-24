import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ArtworkContext } from "@/contexts/ArtworkContext";

const Body = () => {
  const { artwork, loading, error } = useContext(ArtworkContext);
  const [paintings, setPaintings] = useState(null);

  // useEffect(() => {
  //   if (artwork) {
  //     console.log("Artwork data: ", artwork);
  //   }
  // }, [artwork]);

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
    <div id="shop" className="page-section">
      <div className="flex size-full -mx-[1rem] w-[100vw]">
        <img
          src="/images/murals-hero.png"
          loading="lazy"
          alt="BAGIRA"
          className="size-full"
        />
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="text-center mb-[1.875rem]">
          <h2 className="josefin-400-26">ART IN CURAÇAO</h2>
        </div>
        <div className="text-center normal-case mb-[1.875rem]">
          <h1 className="jost-700-122 ">The power of murals</h1>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="flex-col justify-center items-center flex size-full">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pt-[115px]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[30px]">
              <p className="flex-grow-0 flex-shrink-0 text-[57.88671875px] font-bold text-left text-black">
                commercial murals
              </p>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative pb-[30px]">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                <span className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  Transforming spaces, elevating brands
                </span>
                <br />
                <br />
                <span className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  We specialize in crafting bespoke mural experiences that
                  transcend conventional aesthetics.
                </span>
                <br />
                <span className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  Elevate your business with our expertly designed and executed
                  murals.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[60px]">
            <div className="flex flex-col justify-start items-center flex-grow gap-[19px]">
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                <img
                  src="/images/IMG_8054-884x1024.png"
                  loading="lazy"
                  alt="BAGIRA"
                  className="size-full"
                />
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pb-1">
                <div className="flex flex-col justify-start items-start flex-grow w-[572.48px]">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[572.48px] text-[15px] font-light text-left text-black">
                      Lions Dive Beach Resort
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-start flex-grow gap-[3.75rem]">
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-[3.75rem]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      First impressions
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Murals create a memorable first impression, turning your
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        business facade into a unique and inviting landmark. Set
                        the
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        tone for a positive customer experience right from the
                        street.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      Community
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Become an integral part of the community by
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        commissioning a mural. It sparks conversations, fosters
                        a
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        sense of pride, and positions your business as a
                        community
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        supporter. Strengthen local ties and customer loyalty.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      social Media buzz
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Murals are inherently shareable. Customers love to share
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        their experiences with visually appealing surroundings.
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Boost your online presence and reach a broader audience
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        effortlessly.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-[3.75rem]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[362.88px] gap-3">
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                          Atmosphere
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                            Murals transform bland walls into dynamic, inspiring
                            spaces.
                          </span>
                          <br />
                          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                            Elevate the overall atmosphere within your
                            establishment,
                          </span>
                          <br />
                          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                            providing customers with a unique and immersive
                          </span>
                          <br />
                          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                            environment that encourages longer stays.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      Attract people
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Murals have the power to attract attention not only from
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        locals but also from visitors and tourists. Gain
                        recognition on
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        a broader scale, positioning your business as a
                        destination
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        with a distinctive visual identity.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      Brand identity
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Our custom-designed murals seamlessly integrate your
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        brand elements, colors, and values, reinforcing your
                        identity.
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Strengthen brand recall and foster a strong connection
                        with
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        your audience.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pt-[115px]">
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[30px]">
              <p className="flex-grow-0 flex-shrink-0 text-[57.88671875px] font-bold text-left text-black">
                quality &amp; design
              </p>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative pb-[30px]">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                <span className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  Elevate your business with a mural that goes beyond aesthetics
                  – a masterpiece that resonates
                </span>
                <br />
                <span className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  with quality, durability, and the unique spirit of your
                  brand.&nbsp;
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[60px]">
            <div className="flex flex-col lg:flex-row justify-start items-start flex-grow gap-[30px]">
              <div className="flex flex-col justify-start items-start flex-grow gap-[30px]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[257.14px] w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      Durable
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        Our murals are not just fleeting masterpieces; they are
                        built
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        to withstand the test of time. Using high-quality,
                        weather-
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        resistant paint and protective coatings, we ensure that
                        your
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        mural remains vibrant and captivating for years to come.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[257.14px] w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      Customization
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        No two businesses are alike, and neither should their
                        murals
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        be. We work closely with you to understand your brand,
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        values, and aesthetic preferences. The result is a
                        tailor-made
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        mural that seamlessly integrates with your identity,
                        telling
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        your unique story.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-[30px]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[257.14px] w-[362.88px] gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-xl font-semibold text-left capitalize text-black">
                      Collaboration
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        We believe in collaboration as the key to creating
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        exceptional murals. Our design process involves
                        continuous
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        communication with you, incorporating your feedback to
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        guarantee that the final artwork aligns seamlessly with
                        your
                      </span>
                      <br />
                      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[362.88px] text-base text-left text-black">
                        expectations and business objectives.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow gap-5">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[478.13px] relative overflow-hidden">
                <img
                  src="/images/6405d4c052dec18e7d8789b9_hero-p-2000.webp"
                  loading="lazy"
                  alt="BAGIRA"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-black">
                  DUCTH, Pietermaai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[60px] pt-[115px]">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-5">
            <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[600px] relative overflow-hidden">
              <img
                src="/images/F5EFFDF3-1C82-442D-A277-56901DDC41C1-768x960.png"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[820px] text-base font-light text-left text-black">
                RPM Crossfit Curacao
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center self-stretch flex-grow overflow-hidden gap-[30px]">
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[30px]">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[301px] text-3xl font-bold text-left lowercase text-black">
                  elevate your business
                </p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[228px] text-base text-left lowercase text-black">
                  CONTACT US IF YOU WISH TO HAVE A MURAL!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-[30px]">
              <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 px-[30px] py-[15px] rounded-tl-[1px] bg-black">
                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white">
                      email
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 px-[30px] py-[15px] rounded-tl-[1px] bg-black">
                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white">
                      whatsapp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[1920px] relative px-[95px]">
          <div className="flex-grow w-[1730px] relative">
            <div className="flex flex-col justify-center items-start w-[1730px]  left-1.5 top-[24.26px] px-[7px] pt-4 pb-2.5">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pl-[677.8800048828125px] pr-[677.8699951171875px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[98px] font-black text-center text-black">
                    reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start w-[1730px]  left-0 top-[126px]">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative px-[801.5599975585938px]">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[126.88px] text-[21px] font-bold text-center text-black">
                    MURALS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start w-[1730px]  left-0 top-[202px] px-[3px] pt-[5px] pb-[3px]">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative px-[347.55999755859375px]">
                  <div className="flex-grow-0 flex-shrink-0 w-[1028.88px] h-[509.56px] relative overflow-hidden">
                    <div className="flex justify-start items-start w-[2084px] h-[469.56px]  left-[-1042px] top-0 pl-[1042px]">
                      <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 w-[1042px] pr-[13px]">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[469.56px] w-[1029px] overflow-hidden p-5">
                          <div className="flex flex-col-reverse justify-start items-start flex-grow-0 flex-shrink-0 w-[1009px] space-y-[-0.6000000238418579px] space-y-reverse">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[25px]">
                              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pl-[32.91999816894531px] pr-[32.93000030517578px] pb-[0.5899999737739563px]">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[943.15px] text-[20.799999237060547px] italic text-center text-black">
                                  Bagira was really able to capture the essence
                                  of the concept and brought this project to
                                  life by a one of a kind mural!
                                </p>
                              </div>
                              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pl-[416.3900146484375px] pr-[416.3999938964844px]">
                                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[176.21px] text-[57.88671875px] font-bold text-center text-black">
                                    Caleo
                                  </p>
                                </div>
                                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pl-[464.1300048828125px] pr-[464.1199951171875px]">
                                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[80.75px] text-xl font-semibold text-center capitalize text-black">
                                    Khalid
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-6">
                              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 px-[394.5px]">
                                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative pb-[7px]">
                                  <img
                                    src="/images/IMG_8383.png"
                                    loading="lazy"
                                    alt="BAGIRA"
                                    className="size-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1724px]  left-0 top-[480.56px] gap-3 px-[814px] pt-[11px] pb-[7px]">
                    <div className="flex-grow-0 flex-shrink-0 w-1.5 h-1.5 rounded-[3px] bg-black" />
                    <div className="flex-grow-0 flex-shrink-0 w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="flex-grow-0 flex-shrink-0 w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="flex-grow-0 flex-shrink-0 w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="flex-grow-0 flex-shrink-0 w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="flex-grow-0 flex-shrink-0 w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
