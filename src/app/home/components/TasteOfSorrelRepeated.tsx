import Link from "next/link";

const TasteOfSorrelRepeated = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-x-90 h-full pb-35.75">
      <div className="lg:w-[40%] flex flex-col gap-10 lg:gap-0 justify-between items-stretch h-full">
        <h2 className="  text-[40px] font-charman-serif-light text-[#DDB789] leading-10">
          Made with care.
          <br />
          Served with soul.
        </h2>
        <div className="pt-18.75">
          <img src="/images/behind-sukoon.png" />
          <p className="pt-5 font-instrument-regular text-xl text-[#DDB789]">
            Behind Sukoon
          </p>
        </div>
      </div>
      <div className="lg:w-[60%] flex flex-col justify-between  ">
        <div className=" ">
          <p className="lg:w-200 text-[20px] font-instrument-regular text-[#EBD2B1] leading-6  ">
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
        <div className="pt-10 lg:pt-0">
          <img src="/images/people.png" />
          <p className="pt-5 font-instrument-regular text-xl text-[#DDB789]">
            The People of Sukoon
          </p>
        </div>
      </div>
    </div>
  );
};

export default TasteOfSorrelRepeated;
