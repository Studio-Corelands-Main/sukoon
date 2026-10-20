import { H2, Text } from "@/app/components/Typography/Heading";
import TabView from "./TabView";

const ShowMenu = () => {
  return (
    <div className="px-7.5 md:px-container-25 bg-[#515227] pb-30 md:pb-0">
      <H2 className="pt-25 text-center font-charman-serif-light text-[38px] md:text-fluid-48 text-[#F4EDE2] leading-8">
        Where Flavour Meets Comfort
      </H2>
      <Text className="w-full md:max-w-298.75 md:w-298.75 font-instrument-regular text-base md:text-xl md:text-2xl pt-8 mx-auto text-center  text-[#F4EDE2]">
        Our menu is rooted in the flavours of India, brought to the table with
        warmth, balance and a thoughtful contemporary touch. Familiar dishes are
        prepared with care, allowing every plate to feel comforting, generous
        and full of character. At Sukoon, food is made to be shared, savoured
        and remembered.
      </Text>
      <div className="relative">
        <TabView />
      </div>
    </div>
  );
};

export default ShowMenu;
