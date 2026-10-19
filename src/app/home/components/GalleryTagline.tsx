"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import NextIcon from "../../../../public/logo/NextIcon";
import PrevIcon from "../../../../public/logo/PrevIcon";

const images = [
  "/images/moment-1.png",
  "/images/moment-2.png",
  "/images/moment-3.png",
  "/images/moment-4.png",
  "/images/moment-5.png",
  "/images/moment-6.png",
];

const GalleryTagline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="bg-[#481904] flex flex-col lg:flex-row  gap-20 lg:gap-0 justify-between px-7.5 sm:px-13 lg:px-15 2xl:px-25 py-20 lg:py-45">
      <div className="lg:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-[#DDB789] text-[40px] lg:text-[84px] font-charman-serif-light leading-10 lg:leading-20 lg:max-w-[450px] 2xl:w-[450px]">
            A Glimpse Into Sukoon
          </h1>
          <p className="text-[#DDB789] text-xl md:text-2xl  font-instrument-regular leading-6 lg:leading-7 pt-8 pr-0 lg:pr-10 2xl:pr-50 lg:max-w-[850px] 2xl:w-[850px]">
            Step inside Sukoon through the details that shape the experience.
            From the warmth of the interiors to the food, the table and the
            moments shared around it, every frame captures a little of what
            Sukoon feels like.
          </p>
        </div>
        <div className="hidden md:block">
          <p className="text-xl md:text-2xl font-instrument-regular text-[#EBD2B1] lg:w-[320px]">
            See the spaces, details and moments that bring Sukoon to life.
          </p>
          <div className="pt-5">
            <Link
              href="#"
              className="inline-block border border-[#DDB789] rounded-full text-xs lg:text-base py-2.5 px-7.5 text-[#DDB789] font-instrument-regular"
            >
              VIEW GALLERY
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className=" min-w-0 flex justify-end">
          <div className="relative w-full min-w-0">
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence initial={false} mode="sync">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt={`Gallery image ${activeIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>

              <div className="h-[80vh] w-full" />

              <div className="absolute bottom-7.5 left-7.5 right-7.5 z-10 flex items-end justify-between">
                <div className="font-charman-serif-light text-[40px] text-[#DDB789]">
                  {activeIndex + 1}/{images.length}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="cursor-pointer"
                  >
                    <PrevIcon />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next image"
                    className="cursor-pointer"
                  >
                    <NextIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block pt-11">
          <p className="text-xl md:text-2xl font-instrument-regular text-[#EBD2B1] lg:w-[320px]">
            See the spaces, details and moments that bring Sukoon to life.
          </p>
          <div className="pt-5">
            <Link
              href="#"
              className="inline-block border border-[#DDB789] rounded-full text-xs lg:text-base py-2.5 px-7.5 text-[#DDB789] font-instrument-regular"
            >
              VIEW GALLERY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTagline;
