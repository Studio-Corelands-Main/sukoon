import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { gallerySchema } from "@/lib/schema";
import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import { TabsVertical } from "./components/TabsVertical";

export const metadata: Metadata = {
  title: "Gallery | Sukoon Indian Restaurant | Ascot Vale",
  description:
    "Take a look inside Sukoon: our Ascot Vale dining room, Indian dishes and the Tikki Bar. See the food and setting before your first visit.",
};

const page = () => {
  return (
    <div>
      <JsonLd data={gallerySchema} />
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
