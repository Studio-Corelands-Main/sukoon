import SlowDown from "../home/components/SlowDown";
import AboutMoment from "./components/AboutMoment";
import FeelingSection from "./components/FeelingSection";
import HeroSection from "./components/HeroSection";
import SlowDownSection from "./components/SlowDownSection";

const page = () => {
  return (
    <div className="">
      <HeroSection 
        title="A Story Rooted "
        secondTitle="in Comfort"
        subTitle="Good food tastes even better when it’s shared. Reserve your table at
          Sukoon and settle in for soulful Indian flavours, warm hospitality and
          moments made to be savoured." image="/images/hero-image.png"/>
      <SlowDownSection />
      <FeelingSection />
      <SlowDown />
      <AboutMoment />
    </div>
  );
};

export default page;
