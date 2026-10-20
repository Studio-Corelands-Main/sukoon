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
    <section className="bg-[#515227] aspect-1920/1020 md:aspect-auto md:min-h-255">
      <div className="py-25 md:py-37.5 px-7.5 sm:px-13">
        <H2 className="text-[#FFF9F0] text-center mb-8">
          Flavours That Comforts The Soul
        </H2>
        <Text className="text-[#FFF9F0] text-center w-full lg:w-287.75 mx-auto">
          Sukoon brings together the warmth of Indian hospitality with a
          quieter, more considered way of dining. Familiar flavours are
          approached with care, while every detail is shaped to make you feel
          comfortable from the moment you arrive. It is food, space and
          hospitality coming together with one purpose: to leave you with a
          little more comfort than you came with.
        </Text>
      </div>
      <div className="pb-8 lg:pb-25  ">
        <MarqueeGallery images={images} />
      </div>
    </section>
  );
};

export default HomeGallery;
