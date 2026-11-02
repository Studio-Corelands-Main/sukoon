import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";

// Shared field styling. 16px minimum on mobile stops iOS from zooming on focus.
const fieldClass =
  "w-full min-w-0 border-0 border-b border-black/50 bg-transparent pb-2.5 text-[16px] md:text-fluid-20 font-instrument-regular placeholder:text-[#0B0B0B]/20 focus:outline-none focus:border-[#777A35] transition-colors place";

const detailLabelClass =
  "font-instrument-regular text-[16px] md:text-fluid-20 text-[#0B0B0B]";

export default function ContactForm() {
  return (
    <section className="bg-[#F4EDE2] px-6 pt-20 pb-25 sm:px-13 sm:pt-25 md:pt-38 md:pb-50 container-px">
      {/* Intro */}
      <div className="mx-auto flex max-w-234.75 flex-col items-center gap-6 pb-20 text-center sm:gap-8 sm:pb-37.5 md:pb-44.75">
        <H2 className="text-[#515227]   font-charman-serif-light">
          Need a little help? We’re here.
        </H2>
        <Text className="w-full text-[#0B0B0B]   font-instrument-regular">
          From reservations and dining enquiries to celebrations and special
          requests, our team can help. Tell us what you have in mind and we
          will take it from there.
        </Text>
      </div>

      {/*
        Mobile:  heading → form → details (one column, DOM order)
        Desktop: heading + details on the left, form on the right
      */}
      <div className="grid grid-cols-1 gap-y-15 lg:grid-cols-2 lg:items-start gap-x-8 lg:gap-y-0 lg:gap-x-20">
        {/* Heading */}
        <div className="">
          <H2 className="text-[#252600] mb-4  text-center lg:text-left">
            Contact Us
          </H2>
          <Text className="lg:max-w-90 mb-4   text-center lg:text-left lg:mb-18.75 mx-auto mx-0">
            Let’s talk. Send us a message and we will get back to you as soon
            as we can.
          </Text>
        </div>

        {/* Form */}
        <div className="flex flex-col items-start gap-8     md:gap-12.5">
          <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-10">
            <label className="w-full">
              <span className="sr-only">First name</span>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                placeholder="First Name"
                className={fieldClass}
              />
            </label>
            <label className="w-full">
              <span className="sr-only">Last name</span>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                placeholder="Last Name"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="w-full">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="Your Email"
              className={fieldClass}
            />
          </label>

          <label className="w-full">
            <span className="sr-only">Phone number</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Your phone no"
              className={fieldClass}
            />
          </label>

          <label className="w-full">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Your Message"
              className={`${fieldClass} resize-none`}
            />
          </label>

          <Button
            className="mt-4 w-full cursor-pointer bg-transparent text-[#777A35] hover:bg-[#777A35] hover:text-white sm:mt-7.5 sm:w-auto"
            color="#777A35"
            label="SEND MESSAGE"
          />
        </div>

        {/* Contact details: below the form on mobile, under the heading on desktop */}
        <address className="not-italic  ">
          <Text className={`${detailLabelClass} break-all`}>
            EMAIL:{" "}
            <a href="mailto:info@sukoonindianrestaurant.com.au" className="underline">
              info@sukoonindianrestaurant.com.au
            </a>
          </Text>
          <Text className={`${detailLabelClass} mb-10 md:mb-16`}>
            PHONE:{" "}
            <a href="tel:0394956762" className="underline">
              03 9495 6762
            </a>
          </Text>
          <Text className={`${detailLabelClass} mb-2`}>ADDRESS</Text>
          <Text className="max-w-58.75 text-[#0B0B0B] font-charman-serif-light text-[24px] leading-7 md:text-fluid-32 md:leading-tight">
            498-500 mt Alexander road Ascot Vale, VIC 3032
          </Text>
        </address>
      </div>
    </section>
  );
}
