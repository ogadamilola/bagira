"use client";
import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ArtworkSection from "@/components/ArtworkSection";
import CandCSection from "@/components/CandCSection";
import ShopSection from "@/components/ShopSection";
import GallerySection from "@/components/GallerySection";
import GalleryCircleSection from "@/components/GalleryCircleSection";
import LocationSection from "@/components/LocationSection";
import MuralsSection from "@/components/MuralsSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Wait for router to be ready and query parameters to be populated
    if (router.isReady) {
      const { scrollTo } = router.query || {}; // Safely destructure scrollTo

      if (scrollTo) {
        const handleScroll = () => {
          const targetLink = document.querySelector(`a[href="#${scrollTo}"]`);
          if (targetLink) {
            targetLink.scrollIntoView({ behavior: "smooth" });

            // Clean up the URL
            router.replace(router.pathname, undefined, { shallow: true });
          }
        };

        window.addEventListener("load", () => {
          setTimeout(handleScroll, 1000); // Adjust the delay as needed
        });

        return () => window.removeEventListener("load", handleScroll);
      }
    }
  }, [router.isReady, router.query, router]);

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="section-height">
          <div className="sticky-element">
            <div id="panels" className="track">
              <div id="panels-container" className="track-flex">
                <HomeSection />
                <AboutSection />
                <ArtworkSection />
                {/* <CandCSection /> */}
                <ShopSection />
                <GallerySection />
                {/* <GalleryCircleSection /> */}
                <LocationSection />
                <MuralsSection />
              </div>
            </div>
          </div>
        </section>
        <img
          className="ap-img-full-screen-1"
          src="/images/640623a27b5c66fa68701f66_apartment-1.webp"
          alt="BAGIRA"
          sizes="100vw"
          data-flip-id="1"
          loading="lazy"
          srcSet="/images/640623a27b5c66fa68701f66_apartment-1-p-500.webp 500w, images/640623a27b5c66fa68701f66_apartment-1-p-800.webp 800w, images/640623a27b5c66fa68701f66_apartment-1-p-1080.webp 1080w, images/640623a27b5c66fa68701f66_apartment-1-p-1600.webp 1600w, images/640623a27b5c66fa68701f66_apartment-1-p-2000.webp 2000w, images/640623a27b5c66fa68701f66_apartment-1.webp 2500w"
        />
        <img
          className="ap-img-full-screen-2"
          src="/images/640623a3a5bff942b070fac8_apartment-2.webp"
          alt="BAGIRA"
          sizes="100vw"
          data-flip-id="2"
          loading="lazy"
          srcSet="/images/640623a3a5bff942b070fac8_apartment-2-p-500.webp 500w, images/640623a3a5bff942b070fac8_apartment-2-p-800.webp 800w, images/640623a3a5bff942b070fac8_apartment-2-p-1080.webp 1080w, images/640623a3a5bff942b070fac8_apartment-2-p-1600.webp 1600w, images/640623a3a5bff942b070fac8_apartment-2-p-2000.webp 2000w, images/640623a3a5bff942b070fac8_apartment-2.webp 2500w"
        />
        <img
          className="ap-img-full-screen-3"
          src="/images/640623a3c2a727a3d26ebd2d_apartment-3.webp"
          alt="BAGIRA"
          sizes="100vw"
          data-flip-id="3"
          loading="lazy"
          srcSet="/images/640623a3c2a727a3d26ebd2d_apartment-3-p-500.webp 500w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-800.webp 800w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-1080.webp 1080w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-1600.webp 1600w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-2000.webp 2000w, images/640623a3c2a727a3d26ebd2d_apartment-3.webp 2500w"
        />
        <img
          className="ap-img-full-screen-4"
          src="/images/640623a37b5c66566c701f67_apartment-4.webp"
          alt="BAGIRA"
          sizes="100vw"
          data-flip-id="4"
          loading="lazy"
          srcSet="/images/640623a37b5c66566c701f67_apartment-4-p-500.webp 500w, images/640623a37b5c66566c701f67_apartment-4-p-800.webp 800w, images/640623a37b5c66566c701f67_apartment-4-p-1080.webp 1080w, images/640623a37b5c66566c701f67_apartment-4-p-1600.webp 1600w, images/640623a37b5c66566c701f67_apartment-4-p-2000.webp 2000w, images/640623a37b5c66566c701f67_apartment-4.webp 2500w"
        ></img>
        <div className="inquire-open close">
          <div className="inquire-wrap close">
            <div className="inquire-open-close">
              <a
                id="close-inquire"
                href="#"
                className="nav-link inquire-close max-w-full h-full inline-block"
              >
                <div className="josefin-400-13">close</div>

                <div className="nav-ball white"></div>
              </a>
            </div>

            <div className="inquire-open-component">
              <div className="inquire-open-left">
                <div className="inquire-open-title">
                  <h2 className="jost-300-122">
                    INQUIRE
                    <br />
                    NOW
                  </h2>
                </div>

                <div className="inquire-open-info">
                  <div className="inquire-open-info-top">
                    <div className="inquire-open-info-title">
                      <div className="josefin-400-13">WHERE</div>
                    </div>

                    <div className="inquire-open-info-links">
                      <a
                        href="https://maps.app.goo.gl/1FH2BbBcsGKJHYz39"
                        target="_blank"
                        className="jost-300-26 hover-links "
                      >
                        19 IJzerstraat, BAGIRA ARTIST AND GALLERY,
                        <br />
                        Willemstad, Curaçao
                      </a>
                    </div>
                  </div>

                  <div className="inquire-open-info-title">
                    <div className="josefin-400-13">CONTACTS</div>
                  </div>

                  <div className="inquire-open-info-links">
                    <div className="collection-numero w-dyn-list">
                      <div
                        role="list"
                        className="collection-numero w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-numero w-dyn-item"
                        >
                          <a
                            href="tel:+351291147686"
                            className="jost-300-26 hover-links "
                          >
                            +351 291 147 686
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mobile-frase">
                      <div className="josefin-400-10">
                        Local call, fees may apply
                      </div>
                    </div>

                    <div className="collection-numero w-dyn-list">
                      <div
                        role="list"
                        className="collection-numero w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-numero w-dyn-item"
                        >
                          <a
                            href="tel:+351967182444"
                            className="jost-300-26 hover-links "
                          >
                            +351 967 182 444
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mobile-frase">
                      <div className="josefin-400-10">
                        Local call, fees may apply
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inquire-open-right">
                {/* <div className="c-form_block w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    data-wt-fv-form="1"
                    className="form"
                    data-wf-page-id="6401e4efa043695c1e1b5ee1"
                    data-wf-element-id="fb5d3d5f-2dec-4a45-f3cd-6af4e0a6052d"
                  >
                    <div className="form-top">
                      <div className="form-heading">
                        <div className="form-heading-top">
                          <div className="form-interest">
                            <div className="ball-interest"></div>

                            <div className="josefin-400-13">
                              Register interest
                            </div>
                          </div>

                          <div className="form-required">
                            <div className="josefin-400-10">
                              *Required fields
                            </div>
                          </div>
                        </div>

                        <div className="horizontal-line-wrap">
                          <div className="horizontal-line"></div>
                        </div>
                      </div>

                      <div className="c-form_field left-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Fisrt-Name"
                          data-name="Fisrt Name"
                          placeholder="Fisrt Name*"
                          type="text"
                          id="Fisrt-Name"
                          required
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field right-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Last-Name"
                          data-name="Last Name"
                          placeholder="Last Name*"
                          type="text"
                          id="Last-Name"
                          required
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field left-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Email-Adress"
                          data-name="Email Adress"
                          placeholder="Email*"
                          type="email"
                          id="Email-Adress-2"
                          required
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field right-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Phone-Number"
                          data-name="Phone Number"
                          placeholder="Phone Number"
                          type="tel"
                          id="Phone-Number-2"
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field tex-field">
                        <textarea
                          id="Request-2"
                          name="Request"
                          maxLength={5000}
                          data-name="Request"
                          placeholder="Request*"
                          required
                          className="c-text-field is-text-area w-input"
                        ></textarea>

                        <div className="c-error-message cc-shown">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-accept">
                        <label className="w-checkbox form-check-box">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                          <input
                            id="Accept-the-Privacy-Policy"
                            type="checkbox"
                            name="Accept-the-Privacy-Policy"
                            data-name="Accept the Privacy Policy"
                            required
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span className="josefin-400-10 w-form-label">
                            I have read and accept the�&nbsp;
                            <a
                              href="#"
                              target="_blank"
                              className="form-politica-link"
                            >
                              privacy policy
                            </a>
                            .
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="form-button-wrapper">
                      <input
                        type="submit"
                        data-wait=""
                        className="form-botton text-white cursor-pointer bg-blue-500 rounded-none no-underline inline-block"
                        value="SUBMIT"
                      />
                    </div>
                  </form>

                  <div className="form-sucess-component w-form-done">
                    <div className="form-error-flex">
                      <div className="form-heading">
                        <div className="form-heading-top">
                          <div className="form-interest">
                            <div className="ball-interest"></div>

                            <div className="josefin-400-13">
                              WE RECEIVED YOUR �&nbsp;MESSAGE
                            </div>
                          </div>
                        </div>

                        <div className="horizontal-line-wrap">
                          <div className="horizontal-line"></div>
                        </div>
                      </div>

                      <div className="jost-300-98">THANK YOU</div>
                    </div>
                  </div>

                  <div className="error-message w-form-fail">
                    <div className="form-message-text form-error">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="form-please">
                <div className="form-please-wrap">
                  <div className="josefin-400-10">
                    PLEASE FILL IN THIS FIELD.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <section className="name-section">
          <div className="page-padding">
            <div className="name-component"></div>
          </div>
        </section> */}

        <div className="transition">
          <div className="transition-wrap">
            <div className="transition-component">
              <div className="transition-img-wrap">
                <img
                  src="/images/FullSizeRender.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="/images/FullSizeRender-p-500.webp 500w, images/FullSizeRender-p-800.webp 800w, images/FullSizeRender-p-1080.webp 1080w, images/FullSizeRender-p-1600.webp 1600w, images/FullSizeRender-p-2000.webp 2000w, images/FullSizeRender.webp 2161w"
                  alt="Edificio BAGIRA"
                  className="transition-img n1"
                />
                <img
                  src="/images/64061e47a47c5fe13ae8f44c_img-2.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="/images/64061e47a47c5fe13ae8f44c_img-2-p-500.webp 500w, images/64061e47a47c5fe13ae8f44c_img-2-p-800.webp 800w, images/64061e47a47c5fe13ae8f44c_img-2-p-1080.webp 1080w, images/64061e47a47c5fe13ae8f44c_img-2-p-1600.webp 1600w, images/64061e47a47c5fe13ae8f44c_img-2.webp 1662w"
                  alt="BAGIRA"
                  className="transition-img n2"
                />
                <img
                  src="/images/640623a27b5c66fa68701f66_apartment-1.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="/images/640623a27b5c66fa68701f66_apartment-1-p-500.webp 500w, images/640623a27b5c66fa68701f66_apartment-1-p-800.webp 800w, images/640623a27b5c66fa68701f66_apartment-1-p-1080.webp 1080w, images/640623a27b5c66fa68701f66_apartment-1-p-1600.webp 1600w, images/640623a27b5c66fa68701f66_apartment-1-p-2000.webp 2000w, images/640623a27b5c66fa68701f66_apartment-1.webp 2500w"
                  alt="BAGIRA"
                  className="transition-img n3"
                />
              </div>

              <div className="transition-bottom">
                <div className="transition-loading">
                  <div className="josefin-400-13">loading</div>

                  <div className="transition-point-1">
                    <div className="josefin-400-13">.</div>
                  </div>

                  <div className="transition-point-2">
                    <div className="josefin-400-13">.</div>
                  </div>

                  <div className="transition-point-3">
                    <div className="josefin-400-13">.</div>
                  </div>
                </div>

                <div className="transition-number">
                  <div className="jost-300-32" progress="text">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-w-id="46e54662-91a6-7c69-9b8c-5f6213f41109"
            className="transition-trigger"
          ></div>
        </div>
      </main>
      {/* <div className="design-system">
        <a href="tel:+351291147686" className="hover-links">
          +351 291 �&nbsp;147 686
          <br />
        </a>

        <div className="mb-block"></div>

        <div className="mb-none"></div>

        <div className="mb-line-h-1"></div>

        <div className="mb-line-h-1-23">
          This is some text inside of a div block.
        </div>
      </div> */}
      {/* <div className="combo-classes">
        <div className="form-field-label cc-error"></div>

        <div className="c-error-message cc-shown"></div>

        <div className="c-text-field cc-error"></div>

        <div className="c-text-field cc-valid"></div>

        <div className="form-field-label form-field-focused"></div>

        <div className="form-please-wrap error"></div>

        <div className="mouse hover"></div>

        <div className="mouse pressed"></div>

        <div className="mouse nav-hover"></div>

        <div className="glass-block expand"></div>

        <div className="mouse-wrap expand"></div>

        <div className="expand-text expand"></div>

        <div className="mouse expand"></div>

        <div className="expand-text-none expand"></div>

        <div className="mouse-outro hover"></div>

        <div className="mouse-outro nav-hover"></div>

        <div className="mouse-outro-2 hover"></div>

        <div className="mouse-outro-2 nav-hover"></div>

        <div className="mouse-outro-2 black"></div>

        <div className="mouse-outro black"></div>

        <div className="mouse black"></div>

        <div className="mouse black expand"></div>

        <div className="mouse black hover"></div>

        <div className="ap-img-full-screen-1 visible"></div>

        <div className="ap-img-full-screen-2 visible"></div>

        <div className="ap-img-full-screen-3 visible"></div>

        <div className="ap-img-full-screen-4 visible"></div>

        <div className="ap-img-full-close close"></div>

        <div className="mouse-wrap close"></div>

        <div className="inquire-open close"></div>

        <div className="inquire-wrap close"></div>

        <div className="transition-wrap close"></div>

        <div className="transition-bottom close"></div>

        <div className="murals-button grey"></div>
      </div> */}
    </div>
  );
}
