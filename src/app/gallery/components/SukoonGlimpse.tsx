"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { galleryFilters, menulist } from "../../../../constants/menu/list";
import { motion } from "motion/react";

// How many times the image set repeats before scrolling stops loading more
const MAX_PAGES = 5;

export default function SukoonGlimpse() {
  const [activeTab, setActiveTab] = useState(galleryFilters[0].tag);
  const [pages, setPages] = useState(1);
  const activeFilter = galleryFilters.find((item) => item.tag === activeTab);

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
      <div className="px-7.5 sm:px-14 md:px-13 lg:px-15 2xl:px-25 bg-[#F4EDE2]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center  pt-25 pb-8 gap-8">
          <div className="lg:w-[50%]">
            <h1 className="font-charman-serif-light text-[48px] lg:text-[40px] text-[#777A35] w-60 lg:w-58 leading-10">
              A Glimpse Into Sukoon 
            </h1>
          </div>
          <div className="lg:w-[50%] flex justify-end">
            <p className="text-[24px] lg:text-[20px] font-instrument-regular text-[#0B0B0B] lg:max-w-[800px] 2xl:w-[800px] leading-6.5">
              {" "}
              Some details are felt before they are noticed. The light, the
              textures, the table, the quiet corners and the moments shared
              between them all come together to create the Sukoon
              experience.{" "}
            </p>
          </div>
        </div>
        <div className="h-[.75px] bg-black lg:block hidden"></div>
       
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full pt-15 pb-15 lg:pb-0 flex-col lg:flex-row"
          orientation="vertical"
        >
          <div className="lg:w-[30%] relative">
            <div className="sticky top-12 bottom-20  ">
              <TabsList className=" flex flex-col items-start justify-between  lg:gap-y-[420px] w-full px-0 h-full  ">
                {/* Below lg the filters become a full-bleed, horizontally scrollable pill strip */}
                <div className="flex gap-5 overflow-x-auto no-scrollbar self-stretch bg-[#474806] -mx-7.5 px-7.5 py-5 sm:-mx-14 sm:px-14 md:-mx-13 md:px-13 lg:block lg:self-auto lg:overflow-visible lg:bg-transparent lg:mx-0 lg:p-0">
                  {galleryFilters.map((item) => (
                    <TabsTrigger
                      key={item.id}
                      value={item.tag}
                      className="opacity-50 data-active:opacity-100 data-active:bg-transparent group-data-[variant=default]/tabs-list:data-active:shadow-none px-0 max-lg:flex-none max-lg:group-data-vertical/tabs:w-auto max-lg:rounded-full max-lg:border-[#F4EDE2] max-lg:px-8 max-lg:py-2.5 max-lg:opacity-100 max-lg:data-active:border-[#777A35] max-lg:data-active:bg-[#777A35]"
                    >
                      <h1 className="text-[16px] lg:text-[32px] lg:font-charman-serif-light text-[#474806] -mt-2 max-lg:mt-0 max-lg:text-base max-lg:font-instrument-regular max-lg:text-[#F4EDE2]">
                        {item.title}
                      </h1>
                    </TabsTrigger>
                  ))}
                </div>
                <p className="  bottom-20 text-[#0B0B0B] text-[14px] font-instrument-regular my-10 lg:my-0 lg:mb-25 lg:max-w-[351px] 2xl:w-[351px]">
                  {activeFilter?.description}
                </p>
              </TabsList>
            </div>
          </div>

          {galleryFilters.map((record) => (
            <TabsContent
              key={record.id}
              value={record.tag}
              className=" sm:mb-25 w-70%"
            >
              <div className="flex flex-col gap-3.5 lg:gap-7.5">
                {Array.from({ length: pages }, (_, index) => (
                  <div key={index}>
                    <img src="/images/hero-image.png" alt="" />
                    <div className="flex flex-row gap-3.5 lg:gap-7.5 mt-3 lg:mt-7.5">
                      <div className="w-[50%]">
                        <img src="/images/hero-image.png" alt="" />
                      </div>
                      <div className="w-[50%]">
                        <img src="/images/hero-image.png" alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Keyed by page so the check runs again after each load */}
              {pages < MAX_PAGES && <div key={pages} ref={loadMoreRef} />}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
