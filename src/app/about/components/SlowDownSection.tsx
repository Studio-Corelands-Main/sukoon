import { H2, Text } from "@/app/components/Typography/Heading";

const SlowDownSection = () => {
  return (
    <>
      <div className="pt-15 sm:pt-25 md:pt-24 px-7.5 sm:px-13  sm:pb-10 pb-20 md:pb-37.5 bg-[#F4EDE2]">
        <H2 className=" lg:max-w-250   mx-auto text-center text-[#474806] ">
          Rooted in the warmth of Indian culture, shaped for today and created
          for moments that deserve to be savoured.
        </H2>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-10  bg-[#F4EDE2] relative">
        <div className="w-full">
          <img src="/images/about-image.webp" className="md:w-283.75" />
        </div>
        <div className="md:w-[40%] relative px-7.5 sm:px-13 md:px-0 container-pr">
          <div className="sticky top-10 pb-10">
            <Text className="text-black   pb-4">
              The name speaks to a sense of ease, comfort and quiet contentment.
              That feeling became the starting point for everything we wanted
              Sukoon to be.
            </Text>
            <Text className="text-black pb-4">
              We wanted to create a space where Indian food could be enjoyed
              without rush. Where classic recipes could retain their soul while
              being expressed with a thoughtful, contemporary approach. And
              where hospitality felt genuine rather than rehearsed. From the
              dishes we prepare to the atmosphere around the table, everything
              has been guided by the same intention: to make people feel
              welcome, comfortable and present.{" "}
            </Text>
            <Text className="text-black">
              Sukoon is our interpretation of Indian dining today. Grounded in
              what we know and love, yet open to new ideas, new expressions and
              new memories.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlowDownSection;
