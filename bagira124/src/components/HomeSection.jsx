import React from "react";

const HomeSection = () => {
  return (
    <div id="home" className="hero-section panel">
      <div className="page-padding">
        <div className="hero-component">
          <div className="absolute hidden lg:block w-[100vw] left-0 -translate-x-[2.5rem] h-[94px] from-black to-transparent bg-gradient-to-b z-10 pointer-events-none" />
          <img
            src="/images/6405cdaf4aff8b98974c7362_Logo-NV.webp"
            loading="lazy"
            alt="Logo BAGIRA"
            className="hero-logo z-10"
          />

          <div className="hero-title-component">
            <div className="hero-title">
              <h1 load="anim" split="words" className="jost-700-122 ">
                The world without art is just ‘meh’
              </h1>
            </div>

            <div className="hero-sub-title">
              <h2 className="josefin-400-26 ">
                BAGIRA , visual artist of Curaçao
              </h2>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-bottom-left">
              {/* Social Media Icons */}
              <div className="social-icons">
                <a href="https://www.instagram.com/theonlybagirayouknow/" target="_blank" rel="noopener noreferrer">
                  <img src="images/instagramIcon.svg" alt="Instagram" className="icon-image" />
                </a>
                <a href="https://wa.me/+59996863862" target="_blank" rel="noopener noreferrer">
                  <img src="/images/whatsappIcon.svg" alt="WhatsApp" className="icon-image" />
                </a>
                <a href="https://maps.app.goo.gl/THwn6N8VuZWE1TBH6" target="_blank" rel="noopener noreferrer">
                  <img src="/images/locationIcon.svg" alt="Location" className="icon-image" />
                </a>
              </div>
{/* 
              <div className="hero-contactos-wrap">
                <div className="josefin-400-13">CONTACT US TODAY</div>
                <a href="tel:+59996863862" className="josefin-400-13">
                  +5999 686 38 62
                </a>
                <div className="mobile-frase">
                  <div className="josefin-400-10">Kura Hulanda Village, Curaçao</div>
                </div>
              </div> */}
            </div>

            <div className="hero-scroll">
              <a
                href="#about"
                className="big-cta about max-w-full h-full inline-block"
              >
                <div className="big-cta-text z-10">
                  <div className="josefin-600-20">scroll</div>
                </div>
                <div className="big-cta-hover"></div>
                <div className="big-cta-sticky"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/FullSizeRender.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="/images/FullSizeRender-p-500.webp 500w, images/FullSizeRender-p-800.webp 800w, images/FullSizeRender-p-1080.webp 1080w, images/FullSizeRender-p-1600.webp 1600w, images/FullSizeRender-p-2000.webp 2000w, images/FullSizeRender.webp 2161w"
        alt="BAGIRA"
        className="hero-img-background"
      />
      <div className="hero-img-gradient"></div>
    </div>
  );
};

export default HomeSection;
