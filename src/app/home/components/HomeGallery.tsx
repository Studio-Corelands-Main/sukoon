"use client";
import Heading from "@/app/components/Typography/Heading";
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
    <section className="bg-[#515227] aspect-1920/1020 md:aspect-auto md:min-h-255">
      <div className="py-25 md:py-37.5   px-7.5 sm:px-13">
        <Heading className="text-[#FFF9F0] text-center mb-8" variant="h2">
          Flavours That Comforts The Soul
        </Heading>

        <p className="font-instrument-regular text-[#FFF9F0] text-center text-sm md:text-base md:max-w-337.5 md:w-337.5 mx-auto">
          Sukoon brings together the warmth of Indian hospitality with a
          quieter, more considered way of dining. Familiar flavours are
          approached with care, while every detail is shaped to make you feel
          comfortable from the moment you arrive.
        </p>
        <p className="font-instrument-regular text-[#FFF9F0] text-center text-sm md:text-base md:max-w-345 md:w-345 mx-auto  ">
          It is food, space and hospitality coming together with one purpose: to
          leave you with a little more comfort than you came with.
        </p>
      </div>
      <div className="pb-25 md:pb-20 md:px-container-0">
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
