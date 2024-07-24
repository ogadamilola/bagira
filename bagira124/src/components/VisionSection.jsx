import React from "react";

const VisionSection = () => {
  return (
    <section id="vision" class="vision-section panel">
      <div class="vision-top">
        <div class="vision-sub-title">
          <h2 class="untitled-400-13">About the artist</h2>
        </div>

        <div class="vision-title">
          <div anim="1" split="words" class="tobias-300-40 mb-32">
            <span id="one24-img" class="vision-hover-text">
              BAGIRA
            </span>{" "}
            is a 28-year old Algerian – Hungarian{" "}
            <span id="one24-img" class="vision-hover-text">
              self-taught
            </span>{" "}
            artist who moved to Curaçao, discovered her{" "}
            <span id="one24-img" class="vision-hover-text">
              talent
            </span>{" "}
            at 21 years old, she quit her job 2 weeks later to pursue art
            full-time. Recently opening her own{" "}
            <span id="gallery-img" class="vision-hover-text">
              art gallery in Kura Hulanda
            </span>
            .
          </div>
        </div>
      </div>

      <div class="vision-bottom">
        <div class="vision-img-component">
          <div class="vision-img-brown"></div>

          <div class="vision-img-wrap">
            <img
              src="images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29.webp"
              loading="lazy"
              sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 21vw"
              srcset="images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-500.webp 500w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-800.webp 800w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-1080.webp 1080w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-1600.webp 1600w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29.webp 1920w"
              alt="ONE 24"
              class="vision-img n1"
            />
            <img
              src="images/640605b828c86d2a9487bb88_vision.webp"
              loading="lazy"
              alt="Ilha da Madeira"
              class="vision-img n2"
            />
          </div>
        </div>

        <div class="vision-text-wrap">
          <p class="untitled-400-13">
            BAGIRA IS NOW KNOWN AS AN ESTABLISHED ARTIST OF CURAÇAO, MOSTLY
            BECAUSE OF HER MURALS AND CAPTIVATING PORTRAITS. HER WORK CAN BE
            SEEN AROUND THE ISLAND, IN RESTAURANTS, HOTELS, BEACHES, IN THE
            CITY. PRIVATE HOMES, AND IN GOVERNMENT BUILDINGS. BEING SELF-TAUGHT.
            SHE EXPERIMENTS WITH DIFFERENT STYLES AND COLOR PALETTES BUT MANY
            STILL RECOGNIZE HER WORK.
          </p>
        </div>
      </div>

      <div class="horizontal-line-wrap mb-block">
        <div class="horizontal-line grey"></div>
      </div>
    </section>
  );
};

export default VisionSection;
