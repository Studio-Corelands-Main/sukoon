"use client";
import "swiper/css";
import ExperinceSection from "./home/components/ExperinceSection";
import GalleryTagline from "./home/components/GalleryTagline";

import HomeGallery from "./home/components/HomeGallery";
import HomeHero from "./home/components/HomeHero";
import SlowDown from "./home/components/SlowDown";
import { TasteOfSukoon } from "./home/components/TasteOfSorrel";
import TasteOfSorrelRepeated from "./home/components/TasteOfSorrelRepeated";

const content =
  "Sukoon is designed with deep love for Indian cuisine family traditions and the joy of bringing people together over memorable food. With a passion for hospitality and a vision to create something truly special we set out to build a space where authentic Indian flavours meet contemporary dining. Inspired by our journey and the success of Jai Ho in Hoppers Crossing Sukoon is our next chapter – a reflection of our roots,  a place to pause and enjoy the authentic flavors . Behind every dish is a passionate kitchen team dedicated to fresh ingredients, traditional recipes and heartfelt hospitality. At Sukoon, we don’t just serve food we create experiences that comfort the soul.";

const images = [
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
];
export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeGallery />
      <ExperinceSection />
      {/* <Tradition /> */}
      <SlowDown />
      <GalleryTagline />
      {/* <TasteOfSorrel /> */}
      <TasteOfSukoon />
      <TasteOfSorrelRepeated content={content} />
      <div className="bg-[#481904] container-px">
        <div className="h-px bg-[#DDB789]" />
      </div>
    </>
  );
}
