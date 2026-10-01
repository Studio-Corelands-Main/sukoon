"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const images = [
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
];
export default function Home() {
  return (
    <>
      <section
        className="bg-center bg-cover bg-no-repeat w-full aspect-video px-25 text-white flex flex-col"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        <p className="pt-43 w-64 font-[16px] font-instrument-regular">
          CONTEMPORARY INDIAN DINING MADE FOR SLOWER MOMENTS.
        </p>
        <div className="flex items-end justify-center mt-auto w-full">
          <img
            src="/logo/sukoon.svg"
            alt="Sukoon Image"
            className="h-auto w-[61.458vw] mb-10"
          />
        </div>
      </section>
      <section className="bg-[#474806] aspect-1920/1020">
        <p className="font-charman-serif-light text-[#FFF9F0] text-center text-[40px] lg:w-[56.979vw] mx-auto leading-10 mt-25 mb-10">
          Sukoon is a contemporary Indian dining experience shaped around
          warmth, flavour and the simple pleasure of slowing down. Familiar
          comforts meet thoughtful expression, creating food and moments made to
          be shared, savoured and remembered.
        </p>
        <p className="font-instrument-regular text-[#FFF9F0] text-center text-[20px] lg:w-[51.5625vw] mx-auto leading-6 mb-20.5">
          Good food tastes even better when it’s shared. Reserve your table at
          Sukoon and settle in for soulful Indian flavours, warm hospitality and
          moments made to be savoured.
        </p>
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
      </section>
      <section className="flex">
        <div className="w-1/2 bg-[#F4EDE2] h-[56.25vw] pl-25 pr-50 flex flex-col justify-center">
          <p className="font-charman-serif-light text-[#481904] text-[48px] leading-12 mb-10">
            The Sukoon experience is built on warmth, flavour and thoughtful
            simplicity.
          </p>
          <p className="text-[#0b0b0b] text-[24px] leading-7 font-instrument-regular">
            Rooted in the flavours we know and love, Sukoon brings Indian dining
            into a setting that feels warm, considered and contemporary. Every
            detail, from the food on the table to the atmosphere around it, is
            designed to let you settle in and enjoy the moment.
          </p>
        </div>
        <div className="w-1/2 bg-[#F9F9F9] h-[56.25vw]">
          <img
            src="/images/hero-image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section
        className="h-[50vw] bg-[#481904] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/peacock.png')" }}
      >
        <div className="text-center mx-auto flex flex-col justify-center items-center leading-25">
          <p className="text-[96px] font-charman-serif-light text-[#DDB789] ">
            TRADITION
          </p>
          <p className="text-[96px] font-charman-serif-light text-[#DDB789]">
            MEETS
          </p>
          <p className="text-[96px] font-charman-serif-light text-[#DDB789]">
            MODERN
          </p>
          <p className="text-[96px] font-charman-serif-light text-[#DDB789]">
            SIMPLICITY
          </p>
        </div>
      </section>
    </>
  );
}
