import Link from "next/link";

const AboutMoment = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-y-8 md:gap-y-0 gap-x-8 h-full pb-25 md:pb-35.75 px-7.5 sm:px-13 md:px-container-25 bg-[#481904] pt-25 md:pt-60">
      <div className="md:w-[60%] flex flex-col justify-between  md:gap-20 md:gap-0">
        <div className=" ">
          <h2 className="text-[48px] md:text-fluid-84 font-charman-serif-light text-[#DDB789] leading-13 md:leading-18.75">
            A Glimpse
            <br /> Into Sukoon
          </h2>
          <p className="md:max-w-162.5 md:w-162.5 text-[18px] md:text-fluid-24 font-instrument-regular text-[#DDB789] pt-8 leading-7.5 ">
            From quiet corners and thoughtful details to the warmth that fills
            the room, every part of Sukoon has been shaped to create a sense of
            ease. Explore the spaces, moments and details that bring our story
            to life.
          </p>
        </div>
        <div className="hidden md:block w-full">
          <p className="max-w-100 text-[15px] md:text-fluid-20 font-instrument-regular text-[#EBD2B1]   ">
            Step inside Sukoon and discover the atmosphere behind the
            experience.
          </p>
          <div className="mt-8">
            <Link
              href="/gallery"
              className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] md:rounded-[31.25rem] py-2.5 px-8 uppercase"
            >
              View GALLERY
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-[40%] flex flex-col justify-between items-stretch h-full mt-3 md:mt-0">
        <img src="/images/feel-right.png" />
      </div>
      <div className="md:hidden w-full">
          <p className="max-w-100 text-[15px] md:text-fluid-20 font-instrument-regular text-[#EBD2B1]   ">
            Step inside Sukoon and discover the atmosphere behind the
            experience.
          </p>
          <div className="mt-8">
            <Link
              href="/gallery"
              className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] md:rounded-[31.25rem] py-2.5 px-8 uppercase"
            >
              View GALLERY
            </Link>
          </div>
        </div>
    </div>
  );
};

export default AboutMoment;
