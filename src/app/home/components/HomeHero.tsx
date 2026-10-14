const HomeHero = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat w-full h-screen px-7.5 lg:px-15 2xl:px-25 text-white flex flex-col"
      style={{ backgroundImage: "url('/images/hero-image.png')" }}
    >
      <p className="pt-43 lg:w-64 font-[16px] font-instrument-regular">
        CONTEMPORARY INDIAN DINING MADE FOR SLOWER MOMENTS.
      </p>
      <div className="flex items-end justify-center mt-auto w-full">
        <img
          src="/logo/sukoon.svg"
          alt="Sukoon Image"
          className="h-auto w-[61.458vw] mb-20"
        />
      </div>
    </section>
  );
};

export default HomeHero;
