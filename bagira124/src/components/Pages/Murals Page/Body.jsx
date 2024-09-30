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
    <div id="shop" className="page-section josefin-400-20">
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
        <div className="flex flex-col justify-start items-start self-stretch pt-[115px]">
          <div className="flex flex-col justify-start items-start self-stretch">
            <div className="flex flex-col justify-start items-start relative pb-[30px]">
              <p className="jost-700-58 lowercase font-bold text-left text-black">
                commercial murals
              </p>
            </div>
            <div className="flex flex-col justify-center items-start relative pb-[30px]">
              <p className="text-base text-left text-black">
                <span className="text-base text-left text-black">
                  Transforming spaces, elevating brands
                </span>
                <br />
                <br />
                <span className="text-base text-left text-black">
                  We specialize in crafting bespoke mural experiences that
                  transcend conventional aesthetics.
                </span>
                <br />
                <span className="text-base text-left text-black">
                  Elevate your business with our expertly designed and executed
                  murals.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch gap-[60px]">
            <div className="flex flex-col w-full justify-start items-center flex-grow gap-[19px] lg:max-w-[50%]">
              <div className="flex flex-col w-full justify-center items-start self-stretch relative overflow-hidden">
                <img
                  src="/images/IMG_8054-884x1024.png"
                  loading="lazy"
                  alt="BAGIRA"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-start self-stretch pb-1">
                <div className="flex flex-col justify-start items-start flex-grow">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch text-[15px] font-light text-left text-black">
                      Lions Dive Beach Resort
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[2rem] items-start flex-grow lg:max-w-[50%]">
              <div className="flex flex-col justify-center items-start gap-[3.75rem] lg:max-w-[50%]">
                <div className="flex flex-col justify-start items-start  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="jost-700-32 self-stretch  text-xl font-semibold text-left capitalize text-black">
                      First impressions
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      Murals create a memorable first impression, turning your
                      business facade into a unique and inviting landmark. Set
                      the tone for a positive customer experience right from the
                      street.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="jost-700-32 self-stretch  text-xl font-semibold text-left capitalize text-black">
                      Community
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      Become an integral part of the community by commissioning
                      a mural. It sparks conversations, fosters a sense of
                      pride, and positions your business as a community
                      supporter. Strengthen local ties and customer loyalty.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="jost-700-32 self-stretch  text-xl font-semibold text-left capitalize text-black">
                      social Media buzz
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      Murals are inherently shareable. Customers love to share
                      their experiences with visually appealing surroundings.
                      Boost your online presence and reach a broader audience
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-[3.75rem] lg:max-w-[50%]">
                <div className="flex flex-col justify-start items-start  gap-3">
                  <div className="flex flex-col justify-center items-start self-stretch">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                      <div className="flex flex-col justify-start items-start self-stretch relative">
                        <p className="jost-700-32 self-stretch  text-xl font-semibold text-left capitalize text-black">
                          Atmosphere
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                      <div className="flex flex-col justify-start items-start self-stretch relative">
                        <p className="self-stretch  text-base text-left text-black">
                          Murals transform bland walls into dynamic, inspiring
                          spaces. Elevate the overall atmosphere within your
                          establishment, providing customers with a unique and
                          immersive environment that encourages longer stays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="jost-700-32 self-stretch  text-xl font-semibold text-left capitalize text-black">
                      Attract people
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      Murals have the power to attract attention not only from
                      locals but also from visitors and tourists. Gain
                      recognition on a broader scale, positioning your business
                      as a destination with a distinctive visual identity.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="jost-700-32 self-stretch  text-xl font-semibold text-left capitalize text-black">
                      Brand identity
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      Our custom-designed murals seamlessly integrate your brand
                      elements, colors, and values, reinforcing your identity.
                      Strengthen brand recall and foster a strong connection
                      with your audience.
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
        <div className="flex flex-col justify-start items-start self-stretch pt-[115px]">
          <div className="flex flex-col justify-start items-end self-stretch">
            <div className="flex flex-col justify-start items-start relative pb-[30px]">
              <p className="jost-700-58 lowercase font-bold text-left text-black">
                quality &amp; design
              </p>
            </div>
            <div className="flex flex-col justify-center items-start relative pb-[30px]">
              <p className="text-base text-left text-black">
                <span className="text-base text-left text-black">
                  Elevate your business with a mural that goes beyond aesthetics
                  – a masterpiece that resonates
                </span>
                <br />
                <span className="text-base text-left text-black">
                  with quality, durability, and the unique spirit of your
                  brand.&nbsp;
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch gap-[60px]">
            <div className="flex flex-col lg:flex-row justify-start items-start flex-grow gap-[30px] lg:max-w-[50%]">
              <div className="flex flex-col justify-start items-start flex-grow gap-[30px]">
                <div className="flex flex-col justify-start items-start h-[257.14px]  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-xl font-semibold text-left capitalize text-black">
                      Durable
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      Our murals are not just fleeting masterpieces; they are
                      built to withstand the test of time. Using high-quality,
                      weather- resistant paint and protective coatings, we
                      ensure that your mural remains vibrant and captivating for
                      years to come.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start h-[257.14px]  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-xl font-semibold text-left capitalize text-black">
                      Customization
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      No two businesses are alike, and neither should their
                      murals be. We work closely with you to understand your
                      brand, values, and aesthetic preferences. The result is a
                      tailor-made mural that seamlessly integrates with your
                      identity, telling your unique story.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-[30px]">
                <div className="flex flex-col justify-start items-start h-[257.14px]  gap-3">
                  <div className="flex flex-col justify-start items-start self-stretch relative">
                    <p className="self-stretch  text-xl font-semibold text-left capitalize text-black">
                      Collaboration
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch relative">
                    <p className="self-stretch  text-base text-left text-black">
                      We believe in collaboration as the key to creating
                      exceptional murals. Our design process involves continuous
                      communication with you, incorporating your feedback to
                      guarantee that the final artwork aligns seamlessly with
                      your expectations and business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow gap-5 lg:max-w-[50%]">
              <div className="flex flex-col justify-start items-start self-stretch h-[478.13px] relative overflow-hidden">
                <img
                  src="/images/6405d4c052dec18e7d8789b9_hero-p-2000.webp"
                  loading="lazy"
                  alt="BAGIRA"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-end self-stretch relative">
                <p className="text-base font-light text-left text-black">
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
        <div className="flex flex-col lg:flex-row justify-start items-start self-stretch gap-[60px] pt-[115px]">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-5 lg:max-w-[50%]">
            <div className="flex flex-col justify-center items-center self-stretch h-[600px] relative overflow-hidden">
              <img
                src="/images/F5EFFDF3-1C82-442D-A277-56901DDC41C1-768x960.png"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start self-stretch relative">
              <p className="self-stretch text-base font-light text-left text-black">
                RPM Crossfit Curacao
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center self-stretch flex-grow overflow-hidden gap-[30px] lg:max-w-[50%]">
            <div className="flex flex-col justify-center items-start self-stretch">
              <div className="flex flex-col justify-start items-start relative pb-[30px]">
                <p className="self-stretch text-3xl font-bold text-left lowercase text-black">
                  elevate your business
                </p>
              </div>
              <div className="flex flex-col justify-start items-start relative">
                <p className="self-stretch text-base text-left lowercase text-black">
                  CONTACT US IF YOU WISH TO HAVE A MURAL!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch gap-[30px]">
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
                        Email
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
                        Whatsapp
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
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="flex flex-col justify-center items-center relative px-[95px]">
          <div className="flex-grow relative">
            <div className="flex flex-col justify-center items-start left-1.5 top-[24.26px] px-[7px] pt-4 pb-2.5">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                <div className="flex flex-col justify-start items-center self-stretch relative pl-[677.8800048828125px] pr-[677.8699951171875px]">
                  <p className="jost-700-122 normal-case font-black text-center text-black">
                    Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start left-0 top-[126px]">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                <div className="flex flex-col justify-start items-center self-stretch relative px-[801.5599975585938px]">
                  <p className="self-stretch text-[21px] font-bold text-center text-black">
                    MURALS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start left-0 top-[202px] px-[3px] pt-[5px] pb-[3px]">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow">
                <div className="flex flex-col justify-start items-center self-stretch relative px-[347.55999755859375px]">
                  <div className="h-[509.56px] relative overflow-hidden">
                    <div className="flex justify-start items-start h-[469.56px]  left-[-1042px] top-0">
                      <div className="flex flex-col justify-center items-start self-stretch pr-[13px]">
                        <div className="flex flex-col justify-start items-start h-[469.56px] overflow-hidden p-5">
                          <div className="flex flex-col-reverse justify-start items-start space-y-[-0.6000000238418579px] space-y-reverse">
                            <div className="flex flex-col justify-start items-start self-stretch gap-[25px]">
                              <div className="flex flex-col justify-start items-center self-stretch relative pl-[32.91999816894531px] pr-[32.93000030517578px] pb-[0.5899999737739563px]">
                                <p className="self-stretch text-[20.799999237060547px] italic text-center text-black">
                                  Bagira was really able to capture the essence
                                  of the concept and brought this project to
                                  life by a one of a kind mural!
                                </p>
                              </div>
                              <div className="flex flex-col justify-start items-start self-stretch">
                                <div className="flex flex-col justify-start items-center self-stretch relative pl-[416.3900146484375px] pr-[416.3999938964844px]">
                                  <p className="self-stretch font-bold text-center text-black">
                                    Caleo
                                  </p>
                                </div>
                                <div className="flex flex-col justify-start items-center self-stretch relative pl-[464.1300048828125px] pr-[464.1199951171875px]">
                                  <p className="self-stretch text-xl font-semibold text-center capitalize text-black">
                                    Khalid
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch pb-6">
                              <div className="flex justify-center items-center self-stretch px-[394.5px]">
                                <div className="flex flex-col justify-start items-center relative pb-[7px]">
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
                  <div className="flex justify-start items-start left-0 top-[480.56px] gap-3 px-[814px] pt-[11px] pb-[7px]">
                    <div className="w-1.5 h-1.5 rounded-[3px] bg-black" />
                    <div className="w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
                    <div className="w-1.5 h-1.5 opacity-20 rounded-[3px] bg-black" />
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
