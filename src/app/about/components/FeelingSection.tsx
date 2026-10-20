import { H2, Text } from "@/app/components/Typography/Heading";

const FeelingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-x-8 h-full pb-[80px] md:pb-35.75  px-7.5 sm:px-13 md:px-container-25 bg-[#F4EDE2] pt-[80px] md:pt-60">
      <div className="md:w-[50%] flex flex-col justify-between  ">
        <div className=" ">
          <H2 className=" sm:w-70 md:max-w-125 md:w-125  text-[#474806]">
            A Feeling
            <br/>
            Called Sukoon
          </H2>
          <div className="mt-8 md:hidden">
            <img src="/images/feel-right.png" />
          </div>
          <Text className="md:max-w-184.5 font-instrument-regular text-[#0B0B0B] py-8 md:py-0 md:pt-8">
            Sukoon is the feeling of being completely at ease. It is found in
            familiar flavours, warm surroundings, unhurried conversations and
            the comfort of simply being present. That idea shapes everything we
            create, from the food we serve to the space that surrounds it.
          </Text>
        </div>
        <div className="w-full">
          <img src="/images/about-dish.png" className="w-full" />
        </div>
      </div>
      <div className="hidden md:w-[50%] md:flex flex-col justify-between items-stretch h-full">
        <img src="/images/feel-right.png" />
      </div>
    </div>
  );
};

export default FeelingSection;
