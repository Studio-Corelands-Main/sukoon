import type { Metadata } from "next";
import React from "react";
import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import ShowMenu from "./components/ShowMenu";

export const metadata: Metadata = {
  title: "Sukoon Menu | Indian Food, Drinks and Tikki Bar | Melbourne",
  description:
    "See the Sukoon menu in Ascot Vale: vegetarian, non-vegetarian and vegan Indian dishes, Tikki Bar small plates and drinks. Order online or book a table.",
};

const page = () => {
  return (
    <div>
      <HeroSection
        title="Flavours Made  to Feel Familiar"
        subTitle="The dishes you know by heart, cooked the way you remember them, alongside a few new ones worth discovering. Take your time and order for the table."
        image="/images/menu-hero.jpg"
        className="menu-hero"
      />
      <ShowMenu/>
      <SlowDown/>
    </div>
  );
};

export default page;
