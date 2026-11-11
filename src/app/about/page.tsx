import type { Metadata } from "next";
import SlowDown from "../home/components/SlowDown";
import AboutMoment from "./components/AboutMoment";
import FeelingSection from "./components/FeelingSection";
import HeroSection from "./components/HeroSection";
import SlowDownSection from "./components/SlowDownSection";

export const metadata: Metadata = {
  title: "Our Story | Sukoon Indian Restaurant, Ascot Vale",
  description:
    "The story behind Sukoon, an Indian restaurant in Ascot Vale inspired by Jai Ho's success. Classic recipes, a calm modern setting and warm hospitality.",
};

const page = () => {
  return (
    <div className="">
      <HeroSection
        title="A Story Rooted "
        secondTitle="in Comfort"
        subTitle="Every place has a beginning. Ours started with a simple wish: to
          open a restaurant where guests feel looked after, well fed and in good
          company."
        image="/images/hero-image.png"
      />
      <SlowDownSection />
      <FeelingSection />
      <SlowDown />
      <AboutMoment />
    </div>
  );
};

export default page;
