"use client";

import { HeroSectionI } from "@/app/types/HeroSectionTypes";
import { usePathname } from "next/navigation";

const HeroSection = ({ title, secondTitle="", subTitle, image }: HeroSectionI) => {
  const pathname = usePathname();
  return (
    <section
      className="bg-center bg-cover bg-no-repeat w-full h-screen my-auto px-7.5 sm:px-13 lg:px-15 2xl:px-25 text-white flex flex-col"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`${pathname === "/contact" ? "lg:w-191" : "lg:w-175"}  m-auto`}
      >
        <h2 className="font-charman-serif-light text-[50px] sm:text-[66px] lg:text-[96px] leading-15 lg:leading-25 font-light lg:font-normal">
          {title}
        </h2>
        <h2 className="font-charman-serif-light  text-[50px] sm:text-[66px] lg:text-[96px] leading-15 lg:leading-25 font-light lg:font-normal">
          {secondTitle}
        </h2>

        <p className="pt-10 font-[14px] lg:font-[16px] font-instrument-regular">{subTitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
