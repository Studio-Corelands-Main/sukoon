"use client";
import { H2, Text } from "@/app/components/Typography/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useElementHeight } from "@/hooks/useElementHeight";
import { useState } from "react";
import { galleryFilters } from "../../../../constants/menu/list";

// How many times the image set repeats before scrolling stops loading more
const MAX_PAGES = 5;

export default function SukoonGlimpse() {
  const [activeTab, setActiveTab] = useState(galleryFilters[0].tag);
  const [pages, setPages] = useState(1);
  const activeFilter = galleryFilters.find((item) => item.tag === activeTab);
  // Images start below the pinned header, so track its height
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setPages(1);
  };

  // Loads the next image set when the marker below the images scrolls into view
  const loadMoreRef = (node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPages((count) => Math.min(count + 1, MAX_PAGES));
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  };

  return (
    <>
      <div className="px-7.5 sm:px-14 container-px bg-[#F4EDE2]">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full pb-15 md:pb-0 flex-col md:gap-0"
          orientation="vertical"
        >
          {/* PINNED FRAME — header and filters stay put while the images scroll beneath */}
          <div className="md:pointer-events-none md:sticky md:top-0 md:z-10 md:h-screen">
            <div
              ref={headerRef}
              className="pointer-events-auto bg-[#F4EDE2] pb-15"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center  pt-25 pb-8 gap-8">
                <div className="md:w-[50%]">
                  <H2 className="text-[#777A35] text-[36px]! w-60 md:w-58 ">
                    A Glimpse Into Sukoon
                  </H2>
                </div>
                <div className="md:w-[50%] flex justify-end">
                  <Text className="font-instrument-regular text-[#0B0B0B] md:w-200">
                    {" "}
                    Some details are felt before they are noticed. The light,
                    the textures, the table, the quiet corners and the moments
                    shared between them all come together to create the Sukoon
                    experience.{" "}
                  </Text>
                </div>
              </div>
              {/* Hairline stays 0.75px so it doesn't vanish when scaled down */}
              <div className="h-[.75px] bg-black md:block hidden"></div>
            </div>

            <div className="pointer-events-auto md:w-[30%]">
              <TabsList className=" flex flex-col items-start justify-between md:gap-y-72.5 w-full px-0  ">
                {/* Below md the filters become a full-bleed, horizontally scrollable pill strip.
                    md:text-fluid-16 scales the line height the inline tabs sit on */}
                <div className="flex gap-5 overflow-x-auto no-scrollbar self-stretch bg-[#474806] -mx-7.5 px-7.5 py-5 sm:-mx-14 sm:px-14 md:block md:self-auto md:overflow-visible md:bg-transparent md:mx-0 md:p-0 md:text-fluid-16">
                  {galleryFilters.map((item) => (
                    <TabsTrigger
                      key={item.id}
                      value={item.tag}
                      className="opacity-50 data-active:opacity-100 data-active:bg-transparent group-data-[variant=default]/tabs-list:data-active:shadow-none px-0 max-md:flex-none max-md:group-data-vertical/tabs:w-auto max-md:rounded-full max-md:border-[#F4EDE2] max-md:px-8 max-md:py-2.5 max-md:opacity-100 max-md:data-active:border-[#777A35] max-md:data-active:bg-[#777A35]"
                    >
                      <h1 className="text-[16px] md:text-fluid-32 md:font-charman-serif-light text-[#474806] -mt-2 max-md:mt-0 max-md:text-base max-md:font-instrument-regular max-md:text-[#F4EDE2]">
                        {item.title}
                      </h1>
                    </TabsTrigger>
                  ))}
                </div>
                <p className="  bottom-20 text-[#0B0B0B] text-[14px] md:text-fluid-14 font-instrument-regular my-10 md:my-0 md:mb-25 md:w-87.75">
                  {activeFilter?.description}
                </p>
              </TabsList>
            </div>
          </div>

          {/* IMAGES — scroll underneath the pinned frame */}
          <div className="md:mt-[calc(5.375rem-100vh)] md:ml-auto md:w-[70%] md:pl-2 md:pt-(--glimpse-header-h)">
            {galleryFilters.map((record) => (
              <TabsContent
                key={record.id}
                value={record.tag}
                className=" sm:mb-25"
              >
                <div className="flex flex-col gap-3.5 md:gap-7.5">
                  {Array.from({ length: pages }, (_, index) => (
                    <div key={index}>
                      <img src="/images/hero-image.png" alt="" />
                      <div className="flex flex-row gap-3.5 md:gap-7.5 mt-3 md:mt-7.5">
                        <div className="w-[50%]">
                          <img
                            src="/images/gallery.png"
                            alt=""
                            className="md:w-157.5 md:h-189.5"
                          />
                        </div>
                        <div className="w-[50%]">
                          <img
                            src="/images/gallery.png"
                            alt=""
                            className="md:w-157.5 md:h-189.5"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Keyed by page so the check runs again after each load */}
                {pages < MAX_PAGES && <div key={pages} ref={loadMoreRef} />}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
}
