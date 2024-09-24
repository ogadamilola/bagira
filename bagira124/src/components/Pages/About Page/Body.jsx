import React from "react";

const Body = () => {
  return (
    <div id="shop" className="page-section">
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="text-center normal-case mb-[1.875rem]">
          <h1 className="jost-700-122 ">About the Artist</h1>
        </div>
        <img
          src="/images/IMG_8061.webp"
          loading="lazy"
          sizes="60vh"
          srcSet="/images/IMG_8061-p-500.webp 500w, images/IMG_8061-p-800.webp 800w, images/IMG_8061-p-1080.webp 1080w, images/IMG_8061-p-1600.webp 1600w, images/IMG_8061-p-2000.webp 2000w, images/IMG_8061.webp 2161w"
          alt="BAGIRA"
          className="mb-[1.875rem]"
        />
        <div className="gallery-sub-title-2 mb-[1.875rem]">
          <div anim="1" split="words" className="jost-300-122 ">
            BAGIRA
          </div>
        </div>
        <div className="text-center mb-[1.875rem]">
          <div anim="1" split="words" className="jost-300-40  normal-case">
            BAGIRA is a 28 year-old selftaught artist based in Curaçao. She quit
            job as a sales agent at an accountant firm 2 weeks after she
            discovered her talent and decided to paint full time based on
            portrait commission work. After a while she started giving classes
            and discovered her love for murals. Within her carreer of just 8
            years as an independent artist, she is now one of the most renowned
            artists of Curaçao. Painting mostly portraits of imaginary and real
            people, she captures the beauty in a sense that leaves most viewers
            in awe. BAGIRA grew up all around the world, being born to Hunagrian
            mother and Algerian father, before she turned 19 and moved to
            Curaçao to live with her big sister, she lived in the Netherlands,
            Hungary, Algeria and Belgium which had a huge effect on the way she
            views people and cultures, especially being Kabyle, an Indigenous
            North-African. When life got tough and she found herself living on
            her own when she was only 16 years old, she had no other option than
            to become independent in many ways, which led to her fearless
            character.
          </div>
        </div>
      </div>
      <div className="horizontal-line-wrap mb-[1.875rem]">
        <div className="horizontal-line grey"></div>
      </div>
      <div className="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div className="text-center mb-[1.875rem]">
          <h2 className="josefin-400-26">Let’s Talk</h2>
        </div>
        <div className="text-center normal-case mb-[1.875rem]">
          <h1 className="jost-700-122 ">I WANT MY OWN BAGIRA PIECE</h1>
        </div>
        <div className="text-center mb-[1.875rem]">
          <h2 className="josefin-400-20">
            Schedule a free consultation with our team and let’s make things
            happen!
          </h2>
        </div>
        <div className=" mb-[1.875rem]">
          <div className="">
            <a
              href="https://api.whatsapp.com/send?phone=+59996863862"
              target="_blank"
              className="cta-link max-w-full h-full inline-block"
            >
              <div
                data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                className="cta"
              >
                <div className="cta-ball">
                  <div className="josefin-400-13 z-10 text-nowrap text-white">contact us</div>
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
    </div>
  );
};

export default Body;
