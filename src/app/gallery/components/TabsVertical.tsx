"use client";

import { H2, Text } from "@/app/components/Typography/Heading";
import { useElementHeight } from "@/hooks/useElementHeight";
import type { CSSProperties } from "react";
import { memo, useEffect, useRef, useState } from "react";
import {
  filteredImages,
  galleryFilters,
} from "../../../../constants/menu/list";

// Images per page: one full-width hero followed by two half-width images
const IMAGES_PER_PAGE = 3;

// Matches Tailwind's `lg` breakpoint, where the header is sticky
const LG_QUERY = "(min-width: 1024px)";

// Each category's images, split into hero + pair groups
const pagesByTag: Record<string, string[][]> = Object.fromEntries(
  galleryFilters.map(({ tag }) => {
    const images = filteredImages
      .filter((image) => image.tag === tag)
      .map((image) => image.imagePath);
    const pages = [];
    for (let i = 0; i < images.length; i += IMAGES_PER_PAGE) {
      pages.push(images.slice(i, i + IMAGES_PER_PAGE));
    }
    return [tag, pages];
  }),
);

// ---------------------------------------------------------------------------
// One "page" of images: a full-width hero followed by two half-width images
// ---------------------------------------------------------------------------
const GalleryPage = memo(function GalleryPage({
  images,
  eager,
}: {
  images: string[];
  eager: boolean;
}) {
  const [hero, ...rest] = images;
  const loading = eager ? "eager" : "lazy";

  return (
    <div>
      <img
        src={hero}
        alt=""
        className="w-full"
        loading={loading}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
      />

      {rest.length > 0 && (
        <div className="mt-7.5 flex flex-row gap-3.5 md:mt-7.5 md:gap-7.5">
          {rest.map((src, i) => (
            <div key={i} className="w-1/2">
              <img
                src={src}
                alt=""
                className="object-cover "
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export function TabsVertical() {
  const [activeTag, setActiveTag] = useState(galleryFilters[0].tag);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Measured header height, used as the sticky offset for the desktop nav
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>();
  // Measured nav height, used as the scroll offset for the mobile pill strip
  const [navRef, navHeight] = useElementHeight<HTMLDivElement>();

  // Highlights the section currently passing a line ~40% down the viewport
  useEffect(() => {
    const handleScroll = () => {
      const line = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current = galleryFilters[0].tag;
      for (const { tag } of galleryFilters) {
        const section = sectionRefs.current[tag];
        if (section && section.getBoundingClientRect().top <= line) {
          current = tag;
        }
      }
      if (atBottom) current = galleryFilters[galleryFilters.length - 1].tag;
      setActiveTag(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Scrolls a section to just below whatever is pinned at the top
  const scrollToSection = (tag: string) => {
    const section = sectionRefs.current[tag];
    if (!section) return;
    const offset = window.matchMedia(LG_QUERY).matches
      ? headerHeight
      : navHeight;
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="bg-[#F4EDE2]"
      style={{ "--header-h": `${headerHeight}px` } as CSSProperties}
    >
      <div className="relative">
        {/* Header */}
        <div ref={headerRef} className="lg:sticky top-0 z-30 ">
          <div className="flex w-full flex-col justify-between gap-8 bg-[#F4EDE2] px-8 pt-25 pb-8 md:flex-row md:items-center lg:px-0 container-px">
            <div className="md:w-1/2">
              <H2 className="w-60 text-[36px]! text-[#777A35] md:w-58">
                The Details We Love
              </H2>
            </div>
            <div className="flex justify-end md:w-1/2">
              <Text className="text-[#0B0B0B] md:w-200">
                Some details are felt before they are noticed. The light, the
                textures, the quiet corners and the care on every plate all add
                up to the Sukoon experience.
              </Text>
            </div>
          </div>
          <div className="lg:pb-15">
            <div className="h-[.75px] bg-black" />
          </div>
        </div>

        <div className="relative container-px max-lg:px-8 lg:flex items-start lg:gap-10 pb-20 lg:pb-0">
          {/* Section nav: pill strip on mobile, sticky vertical list on desktop */}
          <div
            ref={navRef}
            className="sticky top-0 z-10 flex gap-3 overflow-x-auto no-scrollbar bg-[#F4EDE2] py-6 max-lg:-mx-8 max-lg:px-8 lg:top-(--header-h) lg:h-fit lg:w-[30%] lg:flex-col lg:items-start lg:gap-4 lg:overflow-visible lg:py-0 self-start"
          >
            {galleryFilters.map((item) => {
              const active = item.tag === activeTag;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={active ? "true" : undefined}
                  onClick={() => scrollToSection(item.tag)}
                  className={`flex-none cursor-pointer rounded-full px-8 py-2.5 transition-colors lg:rounded-none lg:px-0 lg:py-0 ${
                    active
                      ? "bg-[#777A35] text-white lg:bg-transparent lg:text-[#777A35]"
                      : "text-[#474806] hover:bg-white hover:text-[#777A35] lg:opacity-50 lg:hover:bg-transparent lg:hover:opacity-100"
                  }`}
                >
                  <span className="text-[16px] lg:text-[48px] font-instrument-regular lg:font-charman-serif-light!">
                    {item.title}
                  </span>
                </button>
              );
            })}

            <p className="hidden md:block md:mt-60 text-[14px] text-[#0B0B0B] font-instrument-regular md:w-120 ">
              {galleryFilters.find((f) => f.tag === activeTag)?.description}
            </p>
          </div>

          {/* Sections: one per category, all shown in order */}
          <div className="min-w-0 flex-1">
            {galleryFilters.map((section, sectionIndex) => (
              <section
                key={section.id}
                id={`gallery-${section.tag}`}
                ref={(node) => {
                  sectionRefs.current[section.tag] = node;
                }}
                className="mb-7  "
              >
                <div className="mb-6 md:mb-10">
                  {/* <h3 className="text-[28px] md:text-[40px] font-charman-serif-light text-[#474806]">
                    {section.title}
                  </h3> */}
                  {/* <p className="mt-2 text-[14px] text-[#0B0B0B] font-instrument-regular md:w-120">
                    {section.description}
                  </p> */}
                </div>
                <div className="flex flex-col gap-3.5 md:gap-7.5 ">
                  {pagesByTag[section.tag].map((images, index) => (
                    <GalleryPage
                      key={index}
                      images={images}
                      eager={sectionIndex === 0 && index === 0}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
