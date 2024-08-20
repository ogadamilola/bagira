import React from "react";
import GalleryCircleSection from "./GalleryCircleSection";

const GallerySection = () => {
  return (
    <div class="gallery-full-section">
      <div id="gallery" class="gallery-section panel">
        <div class="gallery-component">
          <div class="gallery-top">
            {/* <div class="gallery-title">
            <h2 class="josefin-400-13">the gallery</h2>
          </div> */}

            <div class="gallery-sub-title">
              <div anim="1" split="words" class="jost-300-122 ">
                {/* THE GALLERY */}
                <img
                  class="ap-img-a-candc"
                  src="/images/the-gallery.webp"
                  alt="BAGIRA"
                  // sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 54vw"
                  data-flip-id="1"
                  img-anim="1"
                  loading="lazy"
                  // srcset="/images/IMG_8093-784x1024.webp 500w, images/IMG_8093-784x1024.webp 800w, images/IMG_8093-784x1024.webp 1080w, images/IMG_8093-784x1024.webp 1600w, images/IMG_8093-784x1024.webp 2000w, images/IMG_8093-784x1024.webp 2500w"
                />
              </div>
            </div>
          </div>

          <div class="gallery-bottom">
            <div class="gallery-sub-title-2">
              <div anim="1" split="words" class="jost-300-122 ">
                IN KURA HULANDA
              </div>
            </div>

            {/* <div class="gallery-text">
            <p class="josefin-400-13">
              BAGIRA&apos;s collection are paintings she created based on her
              inspiration. These pieces are for sale and available at the
              Gallery in Kura Hulanda Village and can be shipped worldwide.
            </p>

            <p>Thinking about commissioning a painting?</p>

            <p>YES you can.</p>

            <p class="josefin-400-13">
              BAGIRA IS NOW KNOWN AS AN ESTABLISHED ARTIST OF CURAÇAO, MOSTLY
              BECAUSE OF HER MURALS AND CAPTIVATING PORTRAITS. HER WORK CAN BE
              SEEN AROUND THE ISLAND, IN RESTAURANTS, HOTELS, BEACHES, IN THE
              CITY. PRIVATE HOMES, AND IN GOVERNMENT BUILDINGS. BEING
              SELF-TAUGHT. SHE EXPERIMENTS WITH DIFFERENT STYLES AND COLOR
              PALETTES BUT MANY STILL RECOGNIZE HER WORK.
            </p>

            <p></p>

            <p class="josefin-400-12">
              {" "}
              With 8 years of artistic expertise, BAGIRA creates a digital
              version of the design so you can first see what to expect in terms
              of colors and size, and make changes before the painting work
              begins.
            </p>
          </div> */}
          </div>

          <div class="gallery-background">
            <div
              // data-poster-url="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6407644d418722e08e114c7e_ilha-madeira-poster-00001.jpg"
              // data-video-urls="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6407644d418722e08e114c7e_ilha-madeira-transcode.mp4,https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6407644d418722e08e114c7e_ilha-madeira-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              class="gallery-background-video w-background-video w-background-video-atom"
            >
              <video
                id="6988ffef-990c-7d4a-a94f-500697e81823-video"
                autoplay="true"
                loop="true"
                // style={`"background-image:url(" https:="" assets-global.website-files.com="" 63d3a5c57af34837d7bbb1a0="" 6407644d418722e08e114c7e_ilha-madeira-poster-00001.jpg")"=""`}
                src="media/6407644d418722e08e114c7e_ilha-madeira-transcode.mp4"
                muted
                playsinline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="media/6407644d418722e08e114c7e_ilha-madeira-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="media/6407644d418722e08e114c7e_ilha-madeira-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <GalleryCircleSection />
    </div>
  );
};

export default GallerySection;
