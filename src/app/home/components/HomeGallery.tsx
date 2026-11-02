"use client";
import { H2, Text } from "@/app/components/Typography/Heading";
import "swiper/css";
import MarqueeGallery from "./MarqueeGallery";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
];

const HomeGallery = () => {
  return (
    <section className="bg-[#515227] aspect-1920/1020 md:aspect-auto md:min-h-255 ">
      <div className="py-25 md:py-37.5 px-7.5 sm:px-13">
        <H2 className="text-[#FFF9F0] text-center mb-8">
          Flavours That Comforts The Soul
        </H2>
        <Text className="text-[#FFF9F0] text-center w-full xl:w-287.75 mx-auto">
          Rich curries, smoky grills and fragrant rice dishes, each one layered
          with spice and cooked with patience. It is the kind of food that warms
          you from the inside and has you planning your next visit before the
          last plate is cleared.
        </Text>
      </div>
      <div className="pb-8 lg:pb-25 overflow-hidden ">
        <MarqueeGallery images={images} />
      </div>
    </section>
  );
};

export default HomeGallery;
