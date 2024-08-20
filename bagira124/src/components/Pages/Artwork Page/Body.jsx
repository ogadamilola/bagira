import React from "react";

// Object for Available Collections
const availableCollections = {
  title: "Available for purchase",
  subtitle: "Collection",
  gridColumns: 4,
  items: [
    {
      src: "/images/IMAGE_2",
      alt: "Collection Item 1",
    },
    {
      src: "/images/IMAGE_3",
      alt: "Collection Item 2",
    },
    {
      src: "/images/IMAGE_4",
      alt: "Collection Item 1",
    },
    {
      src: "/images/IMAGE_5",
      alt: "Collection Item 2",
    },
    {
      src: "/images/IMAGE_6",
      alt: "Collection Item 1",
    },
    {
      src: "/images/IMAGE_7",
      alt: "Collection Item 2",
    },
    {
      src: "/images/IMAGE_8",
      alt: "Collection Item 1",
    },
    {
      src: "/images/IMAGE_9",
      alt: "Collection Item 2",
    },
    // ... Add more items as needed, up to 8 for the given layout
  ],
  cta: {
    text: "explore collection",
    href: "/artwork/collection",
  },
};

// Object for Recently Sold Artwork
const recentlySoldArtwork = {
  title: "Artwork",
  subtitle: "Recently sold",
  gridColumns: 3,
  items: [
    {
      src: "/images/IMAGE_10",
      alt: "Sold Artwork 1",
    },
    {
      src: "/images/IMAGE_11",
      alt: "Sold Artwork 2",
    },
    {
      src: "/images/IMAGE_12",
      alt: "Sold Artwork 2",
    },
    {
      src: "/images/IMAGE_13",
      alt: "Sold Artwork 1",
    },
    {
      src: "/images/IMAGE_14",
      alt: "Sold Artwork 2",
    },
    {
      src: "/images/IMAGE_15",
      alt: "Sold Artwork 2",
    },
    {
      src: "/images/IMAGE_16",
      alt: "Sold Artwork 1",
    },
    {
      src: "/images/IMAGE_17",
      alt: "Sold Artwork 2",
    },
    {
      src: "/images/IMAGE_18",
      alt: "Sold Artwork 2",
    },
    // ... Add more items as needed, up to 9 for the given layout
  ],
};

const Body = () => {
  // Map for Available Collections
  const collectionGrid = availableCollections.items.map((item, index) => (
    <div
      key={index}
      className="justify-center items-center flex relative flex-col w-full h-[32.5rem]"
    >
      <img
        className="cursor-pointer object-cover w-full h-full relative"
        src={`${item.src}.webp`}
        alt={item.alt}
        data-flip-id="1"
        img-anim="1"
        loading="lazy"
        srcSet={`${item.src}-p-500.webp 500w, ${item.src}-p-800.webp 800w, ${item.src}-p-1080.webp 1080w, ${item.src}-p-1600.webp 1600w, ${item.src}-p-2000.webp 2000w, ${item.src}.webp 2500w`}
      />
    </div>
  ));

  // Map for Recently Sold Artwork
  const soldArtworkGrid = recentlySoldArtwork.items.map((item, index) => (
    <div
      key={index}
      className="justify-center items-center flex relative flex-col w-full h-[32.5rem]"
    >
      <img
        className="cursor-pointer object-cover w-full h-full relative"
        src={`${item.src}.webp`}
        alt={item.alt}
        data-flip-id="1"
        img-anim="1"
        loading="lazy"
        srcSet={`${item.src}-p-500.webp 500w, ${item.src}-p-800.webp 800w, ${item.src}-p-1080.webp 1080w, ${item.src}-p-1600.webp 1600w, ${item.src}-p-2000.webp 2000w, ${item.src}.webp 2500w`}
      />
    </div>
  ));

  return (
    <div id="shop" class="page-section">
      <div class="relative overflow-hidden flex-col justify-center items-center flex w-full sm:mb-[3.875rem]">
        <div class="text-center mb-[1.875rem]">
          <h2 class="josefin-400-26">Commission Pieces</h2>
        </div>
        <div class="page-hero-title mb-[1.875rem]">
          <h1 class="jost-700-122 ">How does it work?</h1>
        </div>
        <div class="mb-[1.875rem] page-row">
          <h2 class="josefin-400-20  page-multi sm:max-w-[80vw]">
            Thinking about commissioning a painting? YES you can.
            <br />
            <br />
            BAGIRA’s commission paintings offer a unique opportunity to own a
            piece of art tailored exclusively for you.
            <br />
            <br />
            Oftentimes clients request a special painting that would fit in
            their interior and vision. You can directly collaborate with the
            artist to bring your vision to reality, whether it’s a personal
            portrait, a made up person’s portrait, landscape or abstract piece.
            If unsure, there is a digital gallery available that can be accessed
            on request, of more than 3000 designs created by BAGIRA.
            <br />
            <br />
            With 8 years of artistic expertise, BAGIRA creates a digital version
            of the design so you can first see what to expect in terms of colors
            and size, and make changes before the painting work begins.
          </h2>
        </div>
      </div>
      <div class="horizontal-line-wrap mb-[1.875rem]">
        <div class="horizontal-line grey"></div>
      </div>
      <div class="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div class="text-center mb-[1.875rem]">
          <h2 class="josefin-400-26">Recent Commission Pieces</h2>
        </div>
        <div class="flex-row justify-start flex mb-[1.875rem] gap-[1rem]">
          <div class="justify-start items-center flex relative _2">
            <div
              data-w-id="a73df8eb-83c9-2dec-9465-c9e49a05816c"
              class="justify-center items-center h-full flex relative"
            >
              <div img-castanho="1" class="img-background"></div>
              <img
                class="cursor-pointer object-cover w-full h-full relative"
                src="/images/640623a27b5c66fa68701f66_apartment-1.webp"
                alt="BAGIRA"
                sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="1"
                img-anim="1"
                loading="lazy"
                srcset="/images/640623a27b5c66fa68701f66_apartment-1-p-500.webp 500w, /images/640623a27b5c66fa68701f66_apartment-1-p-800.webp 800w, /images/640623a27b5c66fa68701f66_apartment-1-p-1080.webp 1080w, /images/640623a27b5c66fa68701f66_apartment-1-p-1600.webp 1600w, /images/640623a27b5c66fa68701f66_apartment-1-p-2000.webp 2000w, /images/640623a27b5c66fa68701f66_apartment-1.webp 2500w"
              />
            </div>
          </div>

          <div class="justify-start items-center flex relative">
            <div class="flex-col justify-between items-stretch h-full flex relative gap-[1rem]">
              <div class="flex-row flex h-[50%]">
                <div
                  data-w-id="f4d26d49-92af-d486-a74b-7d193be0f3cf"
                  class="w-full relative"
                >
                  <div img-castanho="1" class="img-background"></div>
                  <img
                    class="cursor-pointer object-cover w-full h-full relative"
                    src="/images/640623a3a5bff942b070fac8_apartment-2.webp"
                    alt="BAGIRA"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 36vw"
                    data-flip-id="2"
                    img-anim="1"
                    loading="lazy"
                    srcset="/images/640623a3a5bff942b070fac8_apartment-2-p-500.webp 500w, /images/640623a3a5bff942b070fac8_apartment-2-p-800.webp 800w, /images/640623a3a5bff942b070fac8_apartment-2-p-1080.webp 1080w, /images/640623a3a5bff942b070fac8_apartment-2-p-1600.webp 1600w, /images/640623a3a5bff942b070fac8_apartment-2-p-2000.webp 2000w, /images/640623a3a5bff942b070fac8_apartment-2.webp 2500w"
                  />
                </div>
              </div>

              <div class="flex-row flex h-[50%]">
                <div
                  data-w-id="8723ecf7-b2b8-e2e7-b748-04bad19eb8c8"
                  class="w-full relative"
                >
                  <div img-castanho="1" class="img-background"></div>
                  <img
                    class="cursor-pointer object-cover w-full h-full relative"
                    src="/images/640623a3c2a727a3d26ebd2d_apartment-3.webp"
                    alt="BAGIRA"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 36vw"
                    data-flip-id="3"
                    img-anim="1"
                    loading="lazy"
                    srcset="/images/640623a3c2a727a3d26ebd2d_apartment-3-p-500.webp 500w, /images/640623a3c2a727a3d26ebd2d_apartment-3-p-800.webp 800w, /images/640623a3c2a727a3d26ebd2d_apartment-3-p-1080.webp 1080w, /images/640623a3c2a727a3d26ebd2d_apartment-3-p-1600.webp 1600w, /images/640623a3c2a727a3d26ebd2d_apartment-3-p-2000.webp 2000w, /images/640623a3c2a727a3d26ebd2d_apartment-3.webp 2500w"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="justify-start items-center flex relative">
            <div
              data-w-id="7f46befa-00a7-d96f-bd9d-84f4ae6e2e2c"
              class="pages-img-4"
            >
              <div img-castanho="1" class="img-background"></div>
              <img
                class="pages-img-a-4"
                src="/images/640623a37b5c66566c701f67_apartment-4.webp"
                alt="BAGIRA"
                sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                data-flip-id="4"
                img-anim="1"
                loading="lazy"
                srcset="/images/640623a37b5c66566c701f67_apartment-4-p-500.webp 500w, /images/640623a37b5c66566c701f67_apartment-4-p-800.webp 800w, /images/640623a37b5c66566c701f67_apartment-4-p-1080.webp 1080w, /images/640623a37b5c66566c701f67_apartment-4-p-1600.webp 1600w, /images/640623a37b5c66566c701f67_apartment-4-p-2000.webp 2000w, /images/640623a37b5c66566c701f67_apartment-4.webp 2500w"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal-line-wrap mb-[1.875rem]">
        <div class="horizontal-line grey"></div>
      </div>
      <div class="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div class="text-center mb-[1.875rem]">
          <h2 class="josefin-400-26">Available for purchase</h2>
        </div>
        <div class="page-hero-title mb-[1.875rem]">
          <h1 class="jost-700-122 ">Collection</h1>
        </div>
        <div
          class={`mb-[1.875rem] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[1rem] w-full`}
        >
          {collectionGrid}
        </div>
        <div class=" mb-[1.875rem]">
          <div class="">
            <a
              href="/artwork/collection"
              // target="_blank"
              class="cta-link max-w-full h-full inline-block"
            >
              <div data-w-id="e458047e-b02a-b003-344d-013e414fafd4" class="cta">
                <div class="josefin-400-13">explore collection</div>

                <div class="cta-ball">
                  <div class="seta-cta-wrap">
                    <div class="seta-cta-anda-1">
                      <img
                        src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                        loading="lazy"
                        alt=""
                        class="seta-cta-redirect"
                      />
                    </div>

                    <div class="seta-cta-anda-2">
                      <img
                        src="/images/64061c1e2a3bfa6e8bc74d9c_seta-cta.svg"
                        loading="lazy"
                        alt=""
                        class="seta-cta"
                      />
                    </div>
                  </div>
                </div>

                <div
                  data-w-id="5a2429a5-eb5f-a67f-523e-f06da6ab7913"
                  class="cta-hover-sticky"
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="horizontal-line-wrap mb-[1.875rem]">
        <div class="horizontal-line grey"></div>
      </div>
      <div class="relative overflow-hidden flex-col justify-center items-center flex w-full">
        <div class="text-center mb-[1.875rem]">
          <h2 class="josefin-400-26">Artwork</h2>
        </div>
        <div class="page-hero-title mb-[1.875rem]">
          <h1 class="jost-700-122 ">Recently sold</h1>
        </div>
        <div
          class={`mb-[1.875rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] xl:gap-x-[10rem] md:gap-x-[5rem] w-full`}
        >
          {soldArtworkGrid}
        </div>
      </div>
    </div>
  );
};

export default Body;
