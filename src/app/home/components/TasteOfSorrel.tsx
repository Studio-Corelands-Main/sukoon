import DishGallery from "./DishGallery";
import TasteOfSorrelRepeated from "./TasteOfSorrelRepeated";

const TasteOfSorrel = () => {
  return (
    <section className="px-7.5 lg:px-15 2xl:px-25 bg-[#481904]">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center pb-10  pt-20 md:pt-0">
        <h2 className="lg:w-[50%] lg:text-[40px] font-charman-serif-light text-[#DDB789] leading-10 text-[40px] text-[#DDB789] leading-10">
          A Taste of Sukoon
        </h2>
        <p className="lg:w-[50%] text-xl md:text-2xl font-instrument-regular text-[#EBD2B1] leading-6 lg:ml-30 pt-8 md:pt-0">
          Rooted in the flavours of India and guided by a contemporary hand, our
          menu brings together comfort, character and thoughtful detail.
        </p>
      </div>
      <div className="h-[1px] bg-[#DDB789] mb-10"></div>
      <DishGallery />
      <TasteOfSorrelRepeated content="Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured." />
    </section>
  );
};

export default TasteOfSorrel;
