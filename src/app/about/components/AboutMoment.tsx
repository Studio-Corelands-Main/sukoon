import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";

const AboutMoment = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-y-8 md:gap-y-0 gap-x-8 h-full pb-25 md:pb-35.75 px-7.5 sm:px-13  container-px bg-[#481904] pt-25 md:pt-60">
      <div className="md:w-[60%] flex flex-col justify-between  md:gap-20 md:gap-0">
        <div className=" ">
          <H2 className="text-[#DDB789]">
            See It
            <br /> For Yourself
          </H2>
          <Text className="md:max-w-162.5 md:w-162.5 text-[#DDB789] pt-8 ">
            Words can only say so much. The room, the plates and the people
            behind them tell the rest of our story, and our gallery shows them
            up close.
          </Text>
        </div>
        <div className="hidden md:block w-full">
          <Text className="max-w-100 text-[#EBD2B1]   ">
            Take a look around before your first visit.
          </Text>
          <div className="mt-8">
            <Button
              className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904]"
              color="#DDB789"
              label="VIEW GALLERY"
              href="/gallery"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[40%] flex flex-col justify-between items-stretch h-full mt-3 md:mt-0">
        <img src="/images/feel-right.png" />
      </div>
      <div className="md:hidden w-full">
        <p className="max-w-100 text-[15px] md:text-fluid-20 font-instrument-regular text-[#EBD2B1]   ">
          Take a look around before your first visit.
        </p>
        <div className="mt-8">
          <Button
            className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904]"
            color="#DDB789"
            label="VIEW GALLERY"
            href="/gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMoment;
