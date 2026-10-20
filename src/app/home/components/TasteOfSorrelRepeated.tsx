import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";
import Link from "next/link";

const TasteOfSorrelRepeated = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col lg:flex-row items-end  justify-between h-full pb-35.75">
      <div className="w-full">
        <H2 className=" text-[#DDB789] pb-10 pt-27.5 md:pt-0">
          Made with care.
          <br />
          Served with soul.
        </H2>

        <div>
          <img
            src="/images/behind-sukoon.png"
            alt="Behind Sukoon"
            className="w-94.5 md:w-151.75 h-142.75 md:h-211.25 "
          />
          <Text className="pt-5  text-[#DDB789]">Behind Sukoon</Text>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="hidden md:block ">
          <Text className="text-[#EBD2B1] w-[831px]">{content}</Text>
          <div className="mt-10 mb-8">
            <Button
              className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-white w-fit"
              color="#DDB789"
              label="OUR STORY"
              href="/about"
            />
          </div>
        </div>
        <div className="pt-10">
          <img src="/images/people.png" />
          <Text className="pt-5 text-[#DDB789]">The People of Sukoon</Text>
          <div className="md:hidden block pt-5 ">
            <Text className="text-[#EBD2B1]">{content}</Text>
            <div className="mt-10">
              <Button
                className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-white w-fit"
                color="#DDB789"
                label="OUR STORY"
                href="/about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasteOfSorrelRepeated;
