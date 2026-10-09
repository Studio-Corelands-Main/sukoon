import { HeroSectionI } from "@/app/types/HeroSectionTypes";

const HeroSection = ({ title, subTitle, image }: HeroSectionI) => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat w-full h-screen my-auto px-5 lg:px-25 text-white flex flex-col"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-175 m-auto">
        <h2 className="font-charman-serif-light text-[96px] leading-25">
          {title}
        </h2>
        <p className="pt-10 font-[16px] font-instrument-regular">
          {subTitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

