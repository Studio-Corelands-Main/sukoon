import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import { TabsVertical } from "./components/TabsVertical";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Moments"
        secondTitle="of Sukoon"
        subTitle="Snapshots from our kitchen, our dining room and the evenings in between. Browse the food, the drinks and the atmosphere that make Sukoon what it is."
        image="/images/hero-image.png"
      />
      <TabsVertical />
      {/* <SukoonGlimpse /> */}
      <SlowDown />
    </div>
  );
};

export default page;
