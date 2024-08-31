import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Article } from "@/data/articles";

interface CarouselArticle {
  src: string;
  title: string;
  tags: string[];
  heading: string;
}

function WorkListSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] =
    useState<CarouselArticle[]>(Article);
  const [isLoading, setIsLoading] = useState(false);

  // Extract unique tags
  const uniqueTags = Array.from(
    new Set(Article.flatMap((article) => article.tags))
  );

  useEffect(() => {
    const applyFilter = async () => {
      setIsLoading(true);
      const tag = searchParams.get("tag");
      setSelectedTag(tag);

      // Simulate a delay to show the loading indicator
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (tag) {
        setFilteredArticles(
          Article.filter((article) => article.tags.includes(tag))
        );
      } else {
        setFilteredArticles(Article);
      }
      setIsLoading(false);
    };

    applyFilter();
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    const newTag = tag === selectedTag ? null : tag;
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (newTag) {
      newSearchParams.set("tag", newTag);
    } else {
      newSearchParams.delete("tag");
    }

    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  return (
    <section className="size-full relative pb-[3.75rem] [@media(min-width:1024px)]:pb-[9.375rem]">
      <div className="ml-auto mr-auto max-w-[105rem] relative px-5 py-0">
        <div className="grid gap-[2.8125rem] [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1024px)]:gap-[4.688rem]">
          {filteredArticles.map((article, index) => (
            <article
              key={index}
              className="group flex-[0_0_100%] max-w-full [@media(min-width:1024px)]:flex-[0_0_calc(50%_-_1.5625rem)] [@media(min-width:1024px)]:max-w-[calc(50% [@media(min-width:1024px)]:- [@media(min-width:1024px)]:1.5625rem)] cursor-view-hover"
            >
              <picture className="relative block rounded-[.625rem] mb-[1.5625rem] overflow-hidden">
                <img
                  src={article.src || "https://via.placeholder.com/465x433"}
                  alt={article.title}
                  className="w-full h-auto block [aspect-ratio:465/433] object-cover [transition:all_.6s_ease-in-out] bg-bagiRed group-hover:scale-125"
                />
                <ul className="flex flex-wrap gap-[.28125rem] absolute left-[1.125rem] bottom-[1.125rem] pr-[1.125rem]">
                  <li className="px-[0.938rem] py-[0] rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] bg-[#000] text-[#fff] capitalize h-[2.344rem] flex items-center">
                    {article.title}
                  </li>
                  {article.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="px-[0.938rem] py-[0] bg-[#d9d9d9] text-[#000] rounded-[1.875rem] text-[1.125rem] leading-[1.5625rem] capitalize h-[2.344rem] flex items-center"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </picture>
              <h6 className="text-white text-[2.25rem] leading-tight tracking-[-.01em] max-w-[40.313rem] font-thin text-ellipsis line-clamp-2">
                {article.heading}
              </h6>
            </article>
          ))}
        </div>
        {isLoading && (
          <div className="flex mx-[0] mb-[0] justify-center fixed top-[0] left-[0] w-full h-full text-[#fff] bg-[rgba(232,_29,_90,_.2)] m-0 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 45"
              stroke="currentColor"
              className="block w-[4.375rem] h-[4.375rem] opacity-[.7] m-auto"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke-width="2"
                transform="translate(1 1)"
              >
                <circle cx="22" cy="22" r="6" stroke="currentColor">
                  <animate
                    attributeName="r"
                    begin="1.5s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="6;22"
                  ></animate>
                  <animate
                    attributeName="stroke-opacity"
                    begin="1.5s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="1;0"
                  ></animate>
                  <animate
                    attributeName="stroke-width"
                    begin="1.5s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="2;0"
                  ></animate>
                </circle>
                <circle cx="22" cy="22" r="6" stroke="currentColor">
                  <animate
                    attributeName="r"
                    begin="3s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="6;22"
                  ></animate>
                  <animate
                    attributeName="stroke-opacity"
                    begin="3s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="1;0"
                  ></animate>
                  <animate
                    attributeName="stroke-width"
                    begin="3s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="2;0"
                  ></animate>
                </circle>
                <circle cx="22" cy="22" r="8">
                  <animate
                    attributeName="r"
                    begin="0s"
                    calcMode="linear"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="6;1;2;3;4;5;6"
                  ></animate>
                </circle>
              </g>
            </svg>
          </div>
        )}

        <div className="fixed left-[0] bottom-[.3125rem] right-[0] flex justify-center pt-10 lg:bottom-[.9375rem] z-[99]">
          <div className="[transition:background_.4s_ease-in-out] p-[1.875rem] rounded-[3.125rem] lg:bg-[#00000047] lg:p-[.46875rem] lg:backdrop-filter backdrop-blur-[.1875rem]">
            <ul className="flex flex-col overflow-hidden gap-[.375rem] lg:gap-[0.563rem] lg:flex-row">
              {uniqueTags.map((tag, index) => (
                <li key={index}>
                  <button
                    className={`pointer-events-auto appearance-none whitespace-nowrap border-[none] outline-[none] [font-family:inherit] px-5 py-[.75rem] text-[1.375rem] tracking-[-.01em] leading-none rounded-[1.875rem] ${
                      selectedTag === tag
                        ? "bg-bagiRed text-[#fff]"
                        : "bg-[#fff] text-[#232222]"
                    } [transition:.4s_ease-in-out] [transition-property:background,color] lg:px-[1.219rem] lg:py-[0.703rem] lg:text-[1.625rem] capitalize z-[999] hover:bg-bagiRed hover:text-[#fff] cursor-select-hover`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkListSection;
