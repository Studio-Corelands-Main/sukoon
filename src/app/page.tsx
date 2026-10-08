"use client";
import "swiper/css";
import ExperinceSection from "./home/components/ExperinceSection";
import GalleryTagline from "./home/components/GalleryTagline";

import HomeGallery from "./home/components/HomeGallery";
import HomeHero from "./home/components/HomeHero";
import SlowDown from "./home/components/SlowDown";
import TasteOfSorrel from "./home/components/TasteOfSorrel";

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
      <TasteOfSorrel />
    </>
  );
}
