import SlowDown from "../home/components/SlowDown";
import AboutMoment from "./components/AboutMoment";
import FeelingSection from "./components/FeelingSection";
import HeroSection from "./components/HeroSection";
import SlowDownSection from "./components/SlowDownSection";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <SlowDownSection />
      <FeelingSection />
      <SlowDown />
      <AboutMoment />
    </div>
  );
};

export default page;
