const SlowDownSection = () => {
  return (
    <>
      <div className="pt-24 pb-[150px] bg-[#F4EDE2]">
        <p className="w-[1000px] mx-auto font-charman-serif-light text-[40px] text-center leading-10 text-[#474806]">
          Rooted in the warmth of Indian culture, shaped for today and created
          for moments that deserve to be savoured.
        </p>
      </div>
      <div className="flex justify-start gap-10 pr-25 bg-[#F4EDE2] relative">
        <div className="w-full">
          <img src="/images/about-image.png" />
        </div>
        <div className="w-[40%] relative ">
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
