"use client";

import { H2, Text } from "@/app/components/Typography/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useElementHeight } from "@/hooks/useElementHeight";
import type { CSSProperties } from "react";
import { memo, useCallback, useState, useSyncExternalStore } from "react";
import {
  filteredImages,
  galleryFilters,
} from "../../../../constants/menu/list";

// Images per page: one full-width hero followed by two half-width images
const IMAGES_PER_PAGE = 3;

// Each filter's images, split into pages for infinite scroll
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
// Matches Tailwind's `lg` breakpoint. Server render assumes mobile.
// ---------------------------------------------------------------------------
const LG_QUERY = "(min-width: 1024px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(LG_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(LG_QUERY).matches,
    () => false,
  );
}

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
        <div className="mt-3 flex flex-row gap-3.5 md:mt-7.5 md:gap-7.5">
          {rest.map((src, i) => (
            <div key={i} className="w-1/2">
              <img
                src={src}
                alt=""
                className="object-cover"
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
  const [activeTab, setActiveTab] = useState(galleryFilters[0].tag);
  const [tabsListRef, tabsListHeight] = useElementHeight<HTMLDivElement>();
  const [pages, setPages] = useState(1);
  const isDesktop = useIsDesktop();

  // Measured header height, used as the sticky offset for the desktop tab list
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>();

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value);
    setPages(1);
  }, []);

  // Stable ref callback: the observer is created once per sentinel mount
  // (the sentinel is re-keyed per page so it re-fires if it stays in view)
  const loadMoreRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPages((count) => count + 1);
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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

        {/* Tabs: a single tree for all breakpoints */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          orientation={isDesktop ? "vertical" : "horizontal"}
          className="relative container-px max-lg:px-8 md:flex items-start md:gap-10 pb-20 lg:pb-0"
        >
          <TabsList
            ref={tabsListRef}
            className="sticky top-0 z-10 max-lg:w-full max-lg:border-2 max-lg:border-[#F4EDE2] max-lg:bg-[#F4EDE2] max-lg:py-15 lg:top-(--header-h) lg:h-fit lg:w-[30%] self-start "
          >
            {galleryFilters.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.tag}
                className="px-0 opacity-50 data-active:opacity-100 group-data-[variant=default]/tabs-list:data-active:shadow-none max-md:flex-none max-md:px-8 rounded-full hover:text-[#777A35] hover:bg-white lg:hover:bg-transparent  data-active:text-white lg:data-active:text-[#777A35] py-5 lg:pt-0 max-md:opacity-100  data-active:border-[#777A35]  data-active:bg-[#777A35] lg:data-active:bg-transparent max-md:group-data-vertical/tabs:w-auto border-0 "
              >
                <span className="text-[16px] lg:text-[48px] font-instrument-regular lg:font-charman-serif-light! cursor-pointer">
                  {item.title}
                </span>
              </TabsTrigger>
            ))}

            <div></div>
          </TabsList>

          <div className="min-w-0 flex-1">
            {galleryFilters.map((record) => (
              <TabsContent
                key={record.id}
                value={record.tag}
                className="mt-0 sm:mb-25"
              >
                <div className="flex flex-col gap-3.5 md:gap-7.5">
                  {pagesByTag[record.tag]
                    .slice(0, pages)
                    .map((images, index) => (
                      <GalleryPage
                        key={index}
                        images={images}
                        eager={index === 0}
                      />
                    ))}
                </div>

                {pages < pagesByTag[record.tag].length && (
                  <div key={pages} ref={loadMoreRef} />
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
