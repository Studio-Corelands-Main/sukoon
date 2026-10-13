import Link from "next/link";

const AboutMoment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-y-8 lg:gap-y-0 gap-x-8 h-full pb-25 lg:pb-35.75 px-5 lg:px-15 2xl:px-25 bg-[#481904] pt-30 lg:pt-60">
      <div className="lg:w-[60%] flex flex-col justify-between  gap-20 lg:gap-0">
        <div className=" ">
          <h2 className="text-[60px] lg:text-[84px] font-charman-serif-light text-[#DDB789] leading-18.75">
            Sukoon,
            <br /> in Moments
          </h2>
          <p className="lg:w-162.5 text-[18px] lg:text-[24px] font-instrument-regular text-[#DDB789] pt-8 leading-7.5 ">
            From quiet corners and thoughtful details to the warmth that fills
            the room, every part of Sukoon has been shaped to create a sense of
            ease. Explore the spaces, moments and details that bring our story
            to life.
          </p>
        </div>
        <div className="w-full">
          <p className="w-100 text-[15px] lg:text-[20px] font-instrument-regular text-[#EBD2B1]   ">
            Step inside Sukoon and discover the atmosphere behind the
            experience.
          </p>
          <div className="mt-8">
            <Link
              href={"#"}
              className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] py-2.5 px-8 uppercase"
            >
              View GALLERY
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] flex flex-col justify-between items-stretch h-full">
        <img src="/images/feel-right.png" />
      </div>
    </div>
  );
};

export default AboutMoment;
