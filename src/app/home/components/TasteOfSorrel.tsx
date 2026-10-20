import { H2, Text } from "@/app/components/Typography/Heading";
import DishGallery from "./DishGallery";
import TasteOfSorrelRepeated from "./TasteOfSorrelRepeated";

const TasteOfSorrel = () => {
  return (
    <section className="relative bg-[#481904] px-7.5 container-px">
      <DishGallery
        header={
          <>
            <div className="flex flex-col justify-between pt-20 pb-10 md:pt-0 md:flex-row md:items-center">
              <H2 className="text-[#DDB789] md:w-1/2 text-[36px]!">
                A Taste of Sukoon
              </H2>

              <Text className="pt-8 text-[#EBD2B1] md:pt-0  md:ml-30 md:w-1/2">
                Rooted in the flavours of India and guided by a contemporary
                hand, our menu brings together comfort, character and thoughtful
                detail.
              </Text>
            </div>

            <div className="mb-10 h-px bg-[#DDB789]" />
          </>
        }
      />

      <TasteOfSorrelRepeated content="Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured." />
    </section>
  );
};

export default TasteOfSorrel;
