import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import SukoonGlimpse from "./components/SukoonGlimpse";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Moments"
        secondTitle="of Sukoon"
        subTitle="Step inside Sukoon through the spaces, details and moments that shape the experience. From warm interiors to thoughtful touches, every frame reflects the feeling behind the brand."
        image="/images/hero-image.png"
      />
      <SukoonGlimpse />
      <SlowDown/>
    </div>
  );
};

export default page;
