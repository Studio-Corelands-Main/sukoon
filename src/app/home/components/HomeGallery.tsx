"use client";
import "swiper/css";
import MarqueeGallery from "./MarqueeGallery";

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
    <section className="bg-[#474806] aspect-1920/1020  ">
      <div className="py-25 lg:py-37.25 lg:px-15 2xl:px-0 px-7.5 ">
        <p className="font-charman-serif-light text-[#FFF9F0] text-center text-[28px] md:text-[48px] me lg:text-[40px] mb-8">
          Flavours That Comforts The Soul
        </p>
        <p className="font-instrument-regular text-[#FFF9F0] text-center text-xl md:text-2xl lg:max-w-337.5 2xl:w-337.5 mx-auto">
          Sukoon brings together the warmth of Indian hospitality with a
          quieter, more considered way of dining. Familiar flavours are
          approached with care, while every detail is shaped to make you feel
          comfortable from the moment you arrive.
        </p>
        <p className="font-instrument-regular text-[#FFF9F0] text-center text-xl md:text-2xl lg:max-w-345 2xl:w-345 mx-auto  ">
          It is food, space and hospitality coming together with one purpose: to
          leave you with a little more comfort than you came with.
        </p>
      </div>
      <div className="pb-25 lg:pb-20">
        {/* <Swiper
          spaceBetween={36}
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView="auto"
          speed={10000}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: {
              spaceBetween: 10,
            },
            480: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 24,
            },
            1024: {
              spaceBetween: 36,
            },
          }}
          className="marquee-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="!w-[75vw] md:!w-[40vw] lg:!w-[25.2748vw]"
            >
              <img
                src={image}
                alt=""
                className="h-[300px] w-full lg:h-[27.7776vw] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <MarqueeGallery images={images} />
      </div>
    </section>
  );
};

export default HomeGallery;
