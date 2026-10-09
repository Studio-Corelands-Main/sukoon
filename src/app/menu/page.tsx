import React from "react";
import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import ShowMenu from "./components/ShowMenu";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Flavours Made  to Feel Familiar"
        subTitle="A thoughtful expression of Indian food, rooted in comfort and made to be shared. Discover familiar flavours, considered combinations and dishes created to be savoured at your own pace."
        image="/images/menu.png"
      />
      <ShowMenu/>
      <SlowDown/>
    </div>
  );
};

export default page;
