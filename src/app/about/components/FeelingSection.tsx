const FeelingSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-x-8 h-full pb-[80px] lg:pb-[143px]  px-5 lg:px-15 2xl:px-25 bg-[#F4EDE2] pt-[80px] lg:pt-[240px]">
      <div className="lg:w-[50%] flex flex-col justify-between  ">
        <div className=" ">
          <h2 className="lg:w-[500px] text-[60px] lg:text-[84px] font-charman-serif-light text-[#474806] leading-[75px]  ">
            A Feeling Called Sukoon
          </h2>
          <p className="lg:w-200 text-[20px] font-instrument-regular text-[#0B0B0B] pt-8 pb-[100px] lg:pb-[266px]  ">
            Sukoon is the feeling of being completely at ease. It is found in
            familiar flavours, warm surroundings, unhurried conversations and
            the comfort of simply being present. That idea shapes everything we
            create, from the food we serve to the space that surrounds it.
          </p>
        </div>
        <div className="w-full">
          <img src="/images/about-dish.png" className="w-full" />
        </div>
      </div>
      <div className="hidden lg:w-[50%] lg:flex flex-col justify-between items-stretch h-full">
        <img src="/images/feel-right.png" />
      </div>
    </div>
  );
};

export default FeelingSection;
