import React from "react";
import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import ShowMenu from "./components/ShowMenu";

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
