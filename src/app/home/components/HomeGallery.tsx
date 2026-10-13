"use client";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
];

const HomeGallery = () => {
  return (
    <section className="bg-[#474806] aspect-1920/1020 px-5 lg:px-0 ">
      <div className="py-37.25 lg:px-15 2xl:px-0">
        <p className="font-charman-serif-light text-[#FFF9F0] text-center text-[28px] lg:text-[40px] mb-8">
          Flavours That Comforts The Soul
        </p>
        <p className="font-instrument-regular text-[#FFF9F0] text-center text-sm lg:text-[24px] lg:max-w-337.5 2xl:w-337.5 mx-auto">
          Sukoon brings together the warmth of Indian hospitality with a
          quieter, more considered way of dining. Familiar flavours are
          approached with care, while every detail is shaped to make you feel
          comfortable from the moment you arrive.
        </p>
        <p className="font-instrument-regular text-[#FFF9F0] text-center text-sm lg:text-[24px] lg:max-w-345 2xl:w-345 mx-auto  ">
          It is food, space and hospitality coming together with one purpose: to
          leave you with a little more comfort than you came with.
        </p>
      </div>
      <div className="pb-20">
        <Swiper
          spaceBetween={36}
          slidesPerView={3.8}
          modules={[Autoplay]}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="" className="w-[25.2748vw] h-[27.7776vw]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeGallery;
