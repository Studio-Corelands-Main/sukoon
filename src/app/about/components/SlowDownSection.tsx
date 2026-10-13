const SlowDownSection = () => {
  return (
    <>
      <div className="pt-15 lg:pt-24 lg:px-15 2xl:px-25 pb-[80px] lg:pb-[150px] bg-[#F4EDE2]">
        <p className="lg:max-w-[1000px] 2xl:w-[1000px] mx-auto font-charman-serif-light text-[28px] lg:text-[40px] text-center leading-10 text-[#474806] px-5 lg:px-0">
          Rooted in the warmth of Indian culture, shaped for today and created
          for moments that deserve to be savoured.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-10 px-5 lg:px-0 lg:pr-15 2xl:pr-25 bg-[#F4EDE2] relative">
        <div className="w-full">
          <img src="/images/about-image.png" />
        </div>
        <div className="lg:w-[40%] relative ">
          <div className="sticky top-10 pb-10">
            <p className="text-black font-instrument-regular text-xl pb-4">
              The name speaks to a sense of ease, comfort and quiet contentment.
              That feeling became the starting point for everything we wanted
              Sukoon to be.
            </p>
            <p className="text-black font-instrument-regular text-xl pb-4">
              We wanted to create a space where Indian food could be enjoyed
              without rush. Where familiar flavours could retain their soul
              while being expressed with a thoughtful, contemporary approach.
              And where hospitality felt genuine rather than rehearsed. From the
              dishes we prepare to the atmosphere around the table, every detail
              has been considered with the same intention: to make people feel
              welcome, comfortable and present.{" "}
            </p>
            <p className="text-black font-instrument-regular text-xl">
              Sukoon is our interpretation of Indian dining today. Rooted in
              what we know and love, yet open to new ideas, new expressions and
              new memories.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlowDownSection;
