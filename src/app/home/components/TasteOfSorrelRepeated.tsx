import Link from "next/link";

const TasteOfSorrelRepeated = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-end  justify-between h-full pb-35.75">
      <div className="w-full">
        <h2 className="text-[40px] md:text-fluid-40 font-charman-serif-light text-[#DDB789] leading-10  pb-10  pt-[110px] md:pt-0">
          Made with care.
          <br />
          Served with soul.
        </h2>

        <div>
          <img
            src="/images/behind-sukoon.png"
            alt="Behind Sukoon"
            className="w-94.5 md:w-151.75 h-142.75 md:h-211.25 "
          />
          <p className="pt-5 font-instrument-regular text-xl text-[#DDB789]">
            Behind Sukoon
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="hidden md:block ">
          <p className="font-instrument-regular text-[#EBD2B1] leading-6 text-[14px] w-[831px]">
            {content}
          </p>
          <div className="mt-10 mb-8">
            <Link
              href={"#"}
              className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] md:rounded-[31.25rem] py-2.5 px-8 uppercase"
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
          <div className="md:hidden block pt-5 ">
            <p className="text-[12px] md:text-fluid-20 font-instrument-regular text-[#EBD2B1] leading-6  ">
              {content}
            </p>
            <div className="mt-10">
              <Link
                href={"#"}
                className="text-base font-instrument-regular text-[#DDB789] border border-[#DDB789] rounded-[500px] md:rounded-[31.25rem] py-2.5 px-8 uppercase"
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
