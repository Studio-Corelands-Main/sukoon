import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";

const TasteOfSorrelRepeated = ({ content }: { content: string }) => {
  return (
    <div className="bg-[#481904] lg:pt-37.5 lg:pb-35.75 pb-8">
      <div className="flex flex-col lg:flex-row items-end gap-10 justify-between h-full  container-px px-8">
        <div className="w-full lg:w-1/2">
          <H2 className=" text-[#DDB789] pb-10 pt-27.5 md:pt-0">
            Made with care.
            <br />
            Served with soul.
          </H2>

          <div>
            <img
              src="/images/behind-sukoon.png"
              alt="Behind Sukoon"
              className="w-94.5 md:w-151.75 h-full lg:h-211.25 "
            />
            <Text className="pt-5  text-[#DDB789]">Behind Sukoon</Text>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full lg:w-1/2">
          <div className="hidden md:block ">
            <Text className="text-[#EBD2B1]  ">{content}</Text>
            <div className="mt-10 mb-8">
              <Button
                className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904] w-fit"
                color="#DDB789"
                label="OUR STORY"
                href="/about"
              />
            </div>
          </div>
          <div className="lg:pt-10">
            <img src="/images/people.png" />
            <Text className="pt-5 text-[#DDB789]">The People of Sukoon</Text>
            <div className="md:hidden block pt-5 ">
              <Text className="text-[#EBD2B1]">{content}</Text>
              <div className="mt-10">
                <Button
                  className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904] w-fit"
                  color="#DDB789"
                  label="OUR STORY"
                  href="/about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasteOfSorrelRepeated;
