const SlowDownSection = () => {
  return (
    <>
      <div className="pt-15 sm:pt-25 md:pt-24 px-7.5 sm:px-13 md:px-25 sm:pb-10 pb-20 md:pb-37.5 bg-[#F4EDE2]">
        <p className="sm:w-149 md:max-w-250 md:w-250 mx-auto font-charman-serif-light text-[28px] sm:text-[48px] md:text-fluid-40 text-center leading-10 text-[#474806]  md:px-0">
          Rooted in the warmth of Indian culture, shaped for today and created
          for moments that deserve to be savoured.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-10  md:px-0 md:pr-25 bg-[#F4EDE2] relative">
        <div className="w-full">
          <img src="/images/about-image.png" className="md:w-283.75" />
        </div>
        <div className="md:w-[40%] relative px-7.5 sm:px-13 md:px-0">
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
