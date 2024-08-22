"use client";
import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Body from "@/components/Pages/Shop Page/Body";
import PagesFooterSection from "@/components/PagesFooterSection";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Mouse from "@/components/Mouse";
import { ArtworkContext, ArtworkProvider } from "@/contexts/ArtworkContext";

export default function Home({ params }) {
  const router = useRouter();

  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const { artwork, loading, error } = useContext(ArtworkContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (artwork) {
      const matchedProduct = artwork.find((item) => item.id === id); // Ensure exact match with id
      if (matchedProduct) {
        setProduct(matchedProduct);
      } else {
        router.push("/artwork/collection");
        console.error(`No product found with id: ${id}`);
      }
    }
  }, [id, artwork]);

  const flattenRichText = (richTextData) => {
    let flattenedText = "";

    const traverse = (node) => {
      if (Array.isArray(node)) {
        node.forEach(traverse);
      } else if (typeof node === "object") {
        if (node && node.children) {
          traverse(node.children);
        }
        if (node && node.text) {
          flattenedText += node.text;
        }
      }
    };

    traverse(richTextData);
    return flattenedText.trim();
  };

  return (
    <>
      <SmoothScrolling>
        <div id="shop" className="page-wrapper">
          <Navbar />
          <Mouse />
          <main className="main-wrapper">
            <section className="collection-page section-width">
              <a
                href="/"
                className="z-[1000] flex fixed top-0 bottom-auto mix-blend-difference w-full left-0 logo-section"
              >
                <img
                  src="/images/6405cdaf4aff8b98974c7362_Logo-NV.webp"
                  loading="lazy"
                  alt="Logo BAGIRA"
                  className="absolute top-0 bottom-auto left-0 right-auto ml-[1rem] sm:ml-[2.5rem] w-auto h-[5.75rem] sm:w-[7.6875rem]"
                />
              </a>
              <div className="page-element page-padding trackX">
                {product && (
                  <Body
                    title={product.title}
                    price={product.price}
                    year={product.year}
                    size={product.size}
                    description={flattenRichText(product.description)}
                    availability={product.availability}
                    image={product.image}
                    images={product.images}
                  />
                )}
              </div>

              <PagesFooterSection />
            </section>
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
                      <h2 className="jost-300-122 ">
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
                                href="tel:+59996863862"
                                className="jost-300-26 hover-links "
                              >
                                +5999 68 63862
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </SmoothScrolling>
    </>
  );
}
