"use client";

import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";
import { useCallback, useEffect, useState } from "react";
import NextIcon from "../../../../public/logo/NextIcon";
import PrevIcon from "../../../../public/logo/PrevIcon";
import { GallerySlider } from "./GallerySlider";

const images = [
  "/images/moment-1.png",
  "/images/moment-2.png",
  "/images/moment-3.png",
  "/images/moment-4.png",
  "/images/moment-5.png",
  "/images/moment-6.png",
];

const GalleryTagline = () => {
  // [current index, direction] — direction: 1 = next, -1 = previous
  const [[activeIndex, direction], setSlide] = useState<[number, number]>([
    0, 1,
  ]);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setSlide(([i]) => [(i + 1) % images.length, 1]);
  }, []);

  const handlePrev = useCallback(() => {
    setSlide(([i]) => [(i - 1 + images.length) % images.length, -1]);
  }, []);

  // Autoplay: pauses on hover, and restarts the timer after every change
  // so a manual click isn't followed by a quick auto-slide
  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const timeout = setTimeout(handleNext, 3000);
    return () => clearTimeout(timeout);
  }, [isHovered, activeIndex, handleNext]);

  return (
    <section className="bg-[#481904] flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between px-7.5 sm:px-13 container-px py-15 lg:py-37.5">
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <H2 className="text-[#DDB789]">A Glimpse</H2>
          <H2 className="text-[#DDB789]">Into Sukoon</H2>
          <Text className="text-[#DDB789] pt-8 pr-0 lg:pr-50 lg:max-w-212.5">
            Step inside Sukoon through the details that shape the experience.
            From the warmth of the interiors to the food, the table and the
            moments shared around it, every frame captures a little of what
            Sukoon feels like.
          </Text>
        </div>
        <div className="hidden md:block">
          <Text className="text-[#EBD2B1] md:w-80">
            See the spaces, details and moments that bring Sukoon to life.
          </Text>
          <div className="pt-5">
            <Button
              className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904]"
              color="#DDB789"
              label="VIEW GALLERY"
              href="/gallery"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="relative w-full min-w-0">
          {/* Height lives here now, so the slider (h-full) can fill it */}
          <div
            className="relative h-[50vh] lg:h-[80vh] w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <GallerySlider
              images={images}
              activeIndex={activeIndex}
              direction={direction}
            />

            <div className="absolute bottom-7.5 left-7.5 right-7.5 z-10 flex items-end justify-between">
              <div className="font-charman-serif-light text-[40px] md:text-fluid-40 text-[#DDB789]">
                {activeIndex + 1}/{images.length}
              </div>

              <div className="flex gap-4 md:[&>button>svg]:size-6.25">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="cursor-pointer"
                >
                  <PrevIcon />
                </button>
                <button
                  type="button"
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

        <div className="md:hidden block pt-11">
          <Text className="text-[#EBD2B1] md:w-80">
            See the spaces, details and moments that bring Sukoon to life.
          </Text>
          <div className="pt-5">
            <Button
              className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904]"
              color="#DDB789"
              label="VIEW GALLERY"
              href="/gallery"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTagline;
