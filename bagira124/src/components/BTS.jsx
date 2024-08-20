import React from "react";

const BTS = () => {
  return (
    <div>
      <div class="global-links">
        <div class="global-links-collection-list-wrap w-dyn-list">
          <div role="list" class="global-links-collection-list w-dyn-items">
            <div
              role="listitem"
              class="global-links-collection-item w-dyn-item"
            >
              <a
                id="privacidade"
                href="https://cdn.prod.website-files.com/63d3a5c57af3481dbebbb1a2/6422b19e9dfab9e106a3c1e6_Privacy%20Policy.pdf"
                target="_blank"
                class="privacidade max-w-full h-full inline-block"
              ></a>
              <a
                id="privacidadePT"
                href="https://cdn.prod.website-files.com/63d3a5c57af3481dbebbb1a2/6422b19e9dfab9e106a3c1e6_Privacy%20Policy.pdf"
                target="_blank"
                class="privacidade-pt max-w-full h-full inline-block"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div class="cookies">
        <div fs-cc="banner" class="fs-cc-banner2_component">
          <div class="fs-cc-banner2_container">
            <div class="fs-cc-banner2_text">
              <div class="josefin-400-10">
                We use cookies to make things better.&nbsp;
                <br />
                <a href="#" privacy="link" target="_blank" class="cookies-link">
                  Privacy policy
                </a>
              </div>
            </div>

            <div class="accept">
              <div
                fs-cc="allow"
                data-w-id="d6075ca9-8cd1-4e0e-8dd4-e23067d34e67"
                class="small-links-cookie"
              >
                <a href="#" class="josefin-400-10">
                  accept
                </a>

                <div class="nav-ball cookie"></div>
              </div>
            </div>

            <div fs-cc="deny" class="decline">
              <a href="#" class="josefin-400-10">
                decline
              </a>
            </div>
          </div>

          <div fs-cc="interaction" class="cookie-iteraction"></div>

          <div class="glass-block expand-cookie"></div>
        </div>
      </div>
    </div>
  );
};

export default BTS;
