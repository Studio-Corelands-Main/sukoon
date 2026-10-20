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
    <section className="bg-[#481904] flex flex-col md:flex-row  gap-20 md:gap-0 justify-between px-7.5 sm:px-13 md:px-container-25 py-20 md:py-37.5">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-[#DDB789] text-[40px] md:text-fluid-84 font-charman-serif-light leading-10 md:leading-20 md:max-w-112.5 md:w-112.5">
            A Glimpse Into Sukoon
          </h1>
          <p className="text-[#DDB789] text-xl md:text-2xl  font-instrument-regular leading-6 md:leading-7 pt-8 pr-0 md:pr-50 md:max-w-212.5 md:w-212.5">
            Step inside Sukoon through the details that shape the experience.
            From the warmth of the interiors to the food, the table and the
            moments shared around it, every frame captures a little of what
            Sukoon feels like.
          </p>
        </div>
        <div className="hidden md:block">
          <p className="text-xl md:text-2xl font-instrument-regular text-[#EBD2B1] md:w-80">
            See the spaces, details and moments that bring Sukoon to life.
          </p>
          <div className="pt-5">
            <Link
              href="#"
              className="inline-block border border-[#DDB789] rounded-full text-xs md:text-base py-2.5 px-7.5 text-[#DDB789] font-instrument-regular"
            >
              VIEW GALLERY
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
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
                <div className="font-charman-serif-light text-[40px] md:text-fluid-40 text-[#DDB789]">
                  {activeIndex + 1}/{images.length}
                </div>

                <div className="flex gap-4 md:[&>button>svg]:size-6.25">
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
          <p className="text-xl md:text-2xl font-instrument-regular text-[#EBD2B1] md:w-80">
            See the spaces, details and moments that bring Sukoon to life.
          </p>
          <div className="pt-5">
            <Link
              href="#"
              className="inline-block border border-[#DDB789] rounded-full text-xs md:text-base py-2.5 px-7.5 text-[#DDB789] font-instrument-regular"
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
