import React from "react";

const AboutSection = () => {
  return (
    <section id="about" class="about-section panel">
      <div class="about-top">
        <div class="about-sub-title">
          <h2 class="josefin-400-13">About the artist</h2>
        </div>

        <div class="about-title">
          <div anim="1" split="words" class="jost-300-40 mb-32">
            <span id="bagira-img" class="about-hover-text">
              BAGIRA
            </span>{" "}
            is a 28-year old Algerian – Hungarian{" "}
            <span id="bagira-img" class="about-hover-text">
              self-taught
            </span>{" "}
            artist who moved to Curaçao, discovered her{" "}
            <span id="bagira-img" class="about-hover-text">
              talent
            </span>{" "}
            at 21 years old, she quit her job 2 weeks later to pursue art
            full-time. Recently opening her own{" "}
            <span id="gallery-img" class="about-hover-text">
              art gallery in Kura Hulanda
            </span>
            .
          </div>
        </div>
      </div>

      <div class="about-bottom">
        <div class="about-img-component">
          <div class="about-img-brown"></div>

          <div class="about-img-wrap">
            <img
              src="images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29.webp"
              loading="lazy"
              sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, 21vw"
              srcset="images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-500.webp 500w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-800.webp 800w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-1080.webp 1080w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29-p-1600.webp 1600w, images/6411a4b4d1a0ba3eb1887e64_one-24%20%281%29.webp 1920w"
              alt="ONE 24"
              class="about-img n1"
            />
            <img
              src="images/640605b828c86d2a9487bb88_vision.webp"
              loading="lazy"
              alt="Ilha da Madeira"
              class="about-img n2"
            />
          </div>
        </div>

        <div class="about-text-wrap">
          <p class="josefin-400-13">
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

export default AboutSection;
