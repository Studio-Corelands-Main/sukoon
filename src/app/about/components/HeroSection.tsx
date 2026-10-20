"use client";

import { HeroSectionI } from "@/app/types/HeroSectionTypes";
import { usePathname } from "next/navigation";

const HeroSection = ({
  title,
  secondTitle = "",
  subTitle,
  image,
}: HeroSectionI) => {
  const pathname = usePathname();
  return (
    <section
      className="bg-center bg-cover bg-no-repeat w-full h-screen px-7.5 sm:px-13 container-px text-white flex flex-col justify-end pb-35"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`${pathname === "/contact" ? "md:w-191" : "md:w-175"}  `}>
        <h2 className="font-charman-serif-light text-[50px] sm:text-[66px] md:text-fluid-96 leading-15 md:leading-25 font-light md:font-normal">
          {title}
        </h2>
        <h2 className="font-charman-serif-light  text-[50px] sm:text-[66px] md:text-fluid-96 leading-15 md:leading-25 font-light md:font-normal">
          {secondTitle}
        </h2>

        <p className="pt-10 font-[14px] md:font-[16px] font-instrument-regular">
          {subTitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
