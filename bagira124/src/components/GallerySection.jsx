import React from "react";

const GallerySection = () => {
  return (
    <div id="island" class="island-section panel">
      <div class="island-component">
        <div class="island-cima">
          <div class="island-title">
            <h2 class="untitled-400-13">the gallery</h2>
          </div>

          <div class="island-sub-title">
            <div anim="1" split="words" class="tobias-300-122 mb-40">
              Experience the Best of Bagira
            </div>
          </div>
        </div>

        <div class="island-baixo">
          <div class="island-sub-title-2">
            <div anim="1" split="words" class="tobias-300-122 mb-40">
              VISIT THE GALLERY
            </div>
          </div>

          <div class="island-text">
            <p class="untitled-400-13">
              BAGIRA's collection are paintings she created based on her
              inspiration. These pieces are for sale and available at the
              Gallery in Kura Hulanda Village and can be shipped worldwide.
            </p>

            <p>Thinking about commissioning a painting?</p>

            <p>YES you can.</p>

            <p class="untitled-400-13">
              BAGIRA IS NOW KNOWN AS AN ESTABLISHED ARTIST OF CURACAO, MOSTLY
              BECAUSE OF HER MURALS AND CAPTIVATING PORTRAITS. HER WORK CAN BE
              SEEN AROUND THE ISLAND, IN RESTAURANTS, HOTELS, BEACHES, IN THE
              CITY. PRIVATE HOMES, AND IN GOVERNMENT BUILDINGS. BEING
              SELF-TAUGHT. SHE EXPERIMENTS WITH DIFFERENT STYLES AND COLOR
              PALETTES BUT MANY STILL RECOGNIZE HER WORK.
            </p>

            <p></p>

            <p class="untitled-400-12">
              {" "}
              With 8 years of artistic expertise, BAGIRA creates a digital
              version of the design so you can first see what to expect in terms
              of colors and size, and make changes before the painting work
              begins.
            </p>
          </div>
        </div>

        <div class="island-background">
          <div
            data-poster-url="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6407644d418722e08e114c7e_ilha-madeira-poster-00001.jpg"
            data-video-urls="https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6407644d418722e08e114c7e_ilha-madeira-transcode.mp4,https://assets-global.website-files.com/63d3a5c57af34837d7bbb1a0/6407644d418722e08e114c7e_ilha-madeira-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            class="island-background-video w-background-video w-background-video-atom"
          >
            <video
              id="6988ffef-990c-7d4a-a94f-500697e81823-video"
              autoplay=""
              loop=""
              // style={`"background-image:url(" https:="" assets-global.website-files.com="" 63d3a5c57af34837d7bbb1a0="" 6407644d418722e08e114c7e_ilha-madeira-poster-00001.jpg")"=""`}
              muted=""
              playsinline=""
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
  );
};

export default GallerySection;
