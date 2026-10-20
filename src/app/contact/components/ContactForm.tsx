import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";

export default function ContactForm() {
  return (
    <div className="pt-25 md:pt-38 pb-50 bg-[#F4EDE2] px-7.5 sm:px-13 container-px ">
      <div className="flex flex-col items-center gap-8 pb-25 sm:pb-37.5 md:pb-44.75">
        <H2 className="text-[#515227] text-[35px] sm:text-[48px] md:text-fluid-48 font-charman-serif-light leading-12">
          Need a little help? We’re here.
        </H2>
        <Text className="text-[#0B0B0B]  md:w-234.75 text-[18px] sm:text-[24px] md:text-fluid-24 font-instrument-regular text-center leading-8 w-full">
          From reservations and dining enquiries to celebrations and special
          requests, our team is here to make things simple. Tell us what you
          need and we will be happy to guide you.
        </Text>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-15 md:gap-0">
        <div className="md:w-[50%]">
          <H2 className="text-[#252600] text-[48px] md:text-fluid-84 font-charman-serif-light leading-15 sm:mb-4 mb-6">
            Contact Us
          </H2>
          <Text className="text-[20px] sm:text-[24px] md:text-fluid-24 font-instrument-regular sm:w-85 md:w-90 mb-15 md:mb-18.75">
            Let’s talk. Whatever you need, we’re ready to help.
          </Text>
          <div className="hidden md:block">
            <Text className="font-instrument-regular text-[16px] md:text-fluid-20 text-[#0B0B0B]">
              EMAIL: <span className="underline">email@domain.com.au</span>
            </Text>
            <Text className="font-instrument-regular  text-[16px] md:text-fluid-20 text-[#0B0B0B] mb-10  md:mb-16">
              PHONE: <span className="underline"> 04 000 0000</span>
            </Text>
            <Text className="font-instrument-regular text-[16px] md:text-fluid-20 text-[#0B0B0B] mb-2">
              ADDRESS
            </Text>
            <Text className="w-[235px] md:w-58.75 text-[#0B0B0B] font-charman-serif-light text-[24px] md:text-fluid-32 leading-7">
              128 Euede Rivoli, 4th Melburne
            </Text>
          </div>
        </div>
        <div className="md:w-[50%] gap-8 md:gap-12.5 flex flex-col items-start">
          <div className="flex flex-row gap-10 w-full">
            <input
              type="text"
              className="w-full border-b border-0 focus:outline-none text-[16px] md:text-fluid-20 font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black/50"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full border-b border-0 focus:outline-none text-[16px] md:text-fluid-20 font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black/50"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="w-full border-b border-0 focus:outline-none text-[16px] md:text-fluid-20 font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black/50"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="w-full border-b border-0 focus:outline-none text-[16px] md:text-fluid-20 font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black/50"
            placeholder="Your phone no"
          />
          <textarea
            className="w-full h-20 border-b border-0 focus:outline-none text-[16px] md:text-fluid-20 font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black/50"
            placeholder="Your Message"
          />

          <Button
            className="text-[#777A35] cursor-pointer mt-7.5 bg-transparent hover:bg-[#777A35] hover:text-white"
            color="#777A35"
            label="SEND MESSAGE"
          />
        </div>
        <div className="md:hidden mt-45">
          <Text className="font-instrument-regular text-[16px] md:text-fluid-20 text-[#0B0B0B]">
            EMAIL: <span className="underline">email@domain.com.au</span>
          </Text>
          <Text className="font-instrument-regular  text-[16px] md:text-fluid-20 text-[#0B0B0B] mb-10  md:mb-16">
            PHONE: <span className="underline"> 04 000 0000</span>
          </Text>
          <Text className="font-instrument-regular text-[16px] md:text-fluid-20 text-[#0B0B0B] mb-2">
            ADDRESS
          </Text>
          <Text className="w-[180px] text-[#0B0B0B] font-charman-serif-light text-[24px] md:text-fluid-32 leading-7">
            128 Euede Rivoli, 4th Melburne
          </Text>
        </div>
      </div>
    </div>
  );
}
