import React, { useEffect, useState } from "react";
import FooterSection from "@/components/FooterSection";

const MuralsSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const res = await fetch("/api/instagram");
        const data = await res.json();
        setPosts(data.data); // Assuming Instagram Graph API returns an array in data.data
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    }

    fetchInstagramPosts();
  }, []);
  return (
    <div id="murals" className="murals-section panel">
      <div className="murals-scroll-absolute"></div>

      <div className="murals-anda">
        <div className="murals-scroll">
          <div className="scroll-track">
            <div className="scroll-track-margin">
              <div className="murals-component !items-center min-h-[75vh]">
                <div className="murals-title !mb-[5rem]">
                  <h2 className="josefin-400-20 tracking-[0.5125rem]">Mural Mission</h2>
                </div>

                <div className="murals-sub-title !mb-[5rem]">
                  <h3
                    anim="1"
                    split="words"
                    className="jost-700-40  mb-line-h-1 tracking-[1.25rem] text-center"
                  >
                    Transforming Spaces
                    <br />
                    Elevating Brands
                  </h3>
                </div>

                <div className="murals-title">
                  <h2 className="jost-300-24 tracking-[0.21rem] text-center">
                    Marketing and impactful murals that people connect with
                  </h2>
                </div>

                <div className="horizontal-line-wrap">
                  <div className="horizontal-line grey"></div>
                </div>

                <div className="murals-cta-component">
                  <a
                    href="/murals"
                    // target="_blank"
                    className=" max-w-full h-full inline-block"
                  >
                    <div
                      data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                      className="cta"
                    >
                      {/* <div className="josefin-400-13">
                        Message me on Whatsapp +5999 68 63 62
                      </div> */}

                      <div className="cta-ball">
                        <div className="josefin-400-13 z-10 text-nowrap text-white">
                          More information about murals
                        </div>
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

                  {/* <div className="murals-cta-space">
                    <div className="cta-black">
                      <a
                        href="#"
                        className="cta-link inquire max-w-full h-full inline-block"
                      >
                        <div
                          data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                          className="cta"
                        >
                          <div className="josefin-400-13">SHOP THE GALLErY</div>

                          <div className="cta-ball">
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

                  <div className="murals-cta-space">
                    <a
                      href="https://www.instagram.com/theonlybagirayouknow/"
                      target="_blank"
                      className="cta-link inquire max-w-full h-full inline-block"
                    >
                      <div
                        data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                        className="cta"
                      >
                        <div className="josefin-400-13">
                          follow me on instagram
                        </div>

                        <div className="cta-ball">
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

                  <div className="murals-cta-space">
                    <div className="cta-black">
                      <a
                        href="#"
                        className="cta-link inquire max-w-full h-full inline-block"
                      >
                        <div
                          data-w-id="e458047e-b02a-b003-344d-013e414fafd4"
                          className="cta"
                        >
                          <div className="josefin-400-13">send me an email</div>

                          <div className="cta-ball">
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
                  </div> */}
                </div>
                {/* Instagram Horizontal Row with last 6 Posts */}
                <div className="mt-[1.875rem] instagram-feed">
                  <div className="instagram-posts-wrapper flex justify-center space-x-4">
                    {posts.length > 0 ? (
                      posts.map((post) => (
                        <div key={post.id} className="instagram-post">
                          <a
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.media_type === "IMAGE" ||
                            post.media_type === "CAROUSEL_ALBUM" ? (
                              <img
                                src={post.media_url}
                                alt={post.caption || "Instagram post"}
                                className="instagram-post-img"
                              />
                            ) : post.media_type === "VIDEO" ? (
                              <video src={post.media_url} controls />
                            ) : null}
                          </a>
                        </div>
                      ))
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              </div>

              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuralsSection;
