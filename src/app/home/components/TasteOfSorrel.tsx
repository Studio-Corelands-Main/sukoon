import DishGallery from "./DishGallery";
import TasteOfSorrelRepeated from "./TasteOfSorrelRepeated";

const TasteOfSorrel = () => {
  return (
    <section className="relative bg-[#481904] px-7.5 md:px-container-25">
      <DishGallery
        header={
          <>
            <div className="flex flex-col justify-between pt-20 pb-10 md:pt-0 md:flex-row md:items-center">
              <h2 className="font-charman-serif-light text-[40px] md:text-fluid-40 leading-10 text-[#DDB789] md:w-1/2">
                A Taste of Sukoon
              </h2>

              <p className="pt-8 font-instrument-regular text-xl leading-6 text-[#EBD2B1] md:pt-0 md:text-2xl md:ml-30 md:w-1/2">
                Rooted in the flavours of India and guided by a contemporary
                hand, our menu brings together comfort, character and
                thoughtful detail.
              </p>
            </div>

            <div className="mb-10 h-px bg-[#DDB789]" />
          </>
        }
      />

      <TasteOfSorrelRepeated content="Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured." />
    </section>
  );
};

export default TasteOfSorrel;
