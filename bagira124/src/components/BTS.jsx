import React from "react";

const BTS = () => {
  return (
    <div>
      <div className="global-links">
        <div className="global-links-collection-list-wrap w-dyn-list">
          <div role="list" className="global-links-collection-list w-dyn-items">
            <div
              role="listitem"
              className="global-links-collection-item w-dyn-item"
            >
              <a
                id="privacidade"
                href="https://cdn.prod.website-files.com/63d3a5c57af3481dbebbb1a2/6422b19e9dfab9e106a3c1e6_Privacy%20Policy.pdf"
                target="_blank"
                className="privacidade max-w-full h-full inline-block"
              ></a>
              <a
                id="privacidadePT"
                href="https://cdn.prod.website-files.com/63d3a5c57af3481dbebbb1a2/6422b19e9dfab9e106a3c1e6_Privacy%20Policy.pdf"
                target="_blank"
                className="privacidade-pt max-w-full h-full inline-block"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div className="cookies">
        <div fs-cc="banner" className="fs-cc-banner2_component">
          <div className="fs-cc-banner2_container">
            <div className="fs-cc-banner2_text">
              <div className="josefin-400-10">
                We use cookies to make things better.&nbsp;
                <br />
                <a href="#" privacy="link" target="_blank" className="cookies-link">
                  Privacy policy
                </a>
              </div>
            </div>

            <div className="accept">
              <div
                fs-cc="allow"
                data-w-id="d6075ca9-8cd1-4e0e-8dd4-e23067d34e67"
                className="small-links-cookie"
              >
                <a href="#" className="josefin-400-10">
                  accept
                </a>

                <div className="nav-ball cookie"></div>
              </div>
            </div>

            <div fs-cc="deny" className="decline">
              <a href="#" className="josefin-400-10">
                decline
              </a>
            </div>
          </div>

          <div fs-cc="interaction" className="cookie-iteraction"></div>

          <div className="glass-block expand-cookie"></div>
        </div>
      </div>
    </div>
  );
};

export default BTS;
