"use client";
import "swiper/css";
import ExperinceSection from "./home/components/ExperinceSection";
import GalleryTagline from "./home/components/GalleryTagline";

import HomeGallery from "./home/components/HomeGallery";
import HomeHero from "./home/components/HomeHero";
import SlowDown from "./home/components/SlowDown";
import { TasteOfSukoon } from "./home/components/TasteOfSorrel";
import TasteOfSorrelRepeated from "./home/components/TasteOfSorrelRepeated";

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
      <TasteOfSorrelRepeated content="Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured." />
      <div className="bg-[#481904] container-px">
        <div className="h-px bg-[#DDB789] " />
      </div>
    </>
  );
}
