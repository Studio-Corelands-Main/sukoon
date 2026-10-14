import Link from "next/link";

const TasteOfSorrelRepeated = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-x-20 2xl:gap-x-90 h-full pb-35.75">
      <div className="lg:w-[40%]   ">
        <h2 className="text-[40px] font-charman-serif-light text-[#DDB789] leading-10  pb-10  pt-[110px] lg:pt-0">
          Made with care.
          <br />
          Served with soul.
        </h2>

        <div>
          <img
            src="/images/behind-sukoon.png"
            alt="Behind Sukoon"
            className="w-[378px] lg:w-[559px] h-[571px] lg:h-[845px] "
          />
          <p className="pt-5 font-instrument-regular text-xl text-[#DDB789]">
            Behind Sukoon
          </p>
        </div>
      </div>
      <div className="lg:w-[60%] flex flex-col justify-between">
        <div className="hidden lg:block ">
          <p className="lg:max-w-200 2xl:w-200 text-[20px] font-instrument-regular text-[#EBD2B1] leading-6  ">
            {content}
          </p>
          <div className="mt-10">
            <Link
              href={"#"}
              className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] py-2.5 px-8 uppercase"
            >
              OUR STORY
            </Link>
          </div>
        </div>
        <div className="pt-10">
          <img src="/images/people.png" />
          <p className="pt-5 font-instrument-regular text-xl text-[#DDB789]">
            The People of Sukoon
          </p>
          <div className="lg:hidden block pt-5 ">
            <p className="lg:max-w-200 2xl:w-200 text-base lg:text-[20px] font-instrument-regular text-[#EBD2B1] leading-6  ">
              {content}
            </p>
            <div className="mt-10">
              <Link
                href={"#"}
                className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] py-2.5 px-8 uppercase"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasteOfSorrelRepeated;
