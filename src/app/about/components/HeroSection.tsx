"use client";

import { H1, Text } from "@/app/components/Typography/Heading";
import { HeroSectionI } from "@/app/types/HeroSectionTypes";
import { usePathname } from "next/navigation";

const HeroSection = ({
  title,
  secondTitle = "",
  subTitle,
  image,
  className = "",
}: HeroSectionI) => {
  const pathname = usePathname();
  return (
    <section
      className={`bg-center bg-cover bg-no-repeat w-full h-screen px-7.5 sm:px-13 container-px text-white flex flex-col justify-end pb-35 bg-blend-overlay bg-black/50`}
      style={{
        backgroundImage: `${className === "menu-hero" ? "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), " : ""} url(${image})`,
      }}
    >
      <div className={`${pathname === "/contact" ? "lg:w-191" : "md:w-175"}  `}>
        <H1>{title}</H1>
        <H1 className="-mt-5">{secondTitle}</H1>

        <Text className="pt-10 font-[14px] md:font-[16px] font-instrument-regular">
          {subTitle}
        </Text>
      </div>
    </section>
  );
};

export default HeroSection;
