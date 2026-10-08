const HeroSection = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat w-full h-screen my-auto  px-5 lg:px-25 text-white flex flex-col"
      style={{ backgroundImage: "url('/images/hero-image.png')" }}
    >
      <div className="w-175 m-auto">
        <h2 className="font-charman-serif-light text-[96px] leading-25">
          Gallery Tagline for Sukoon Heres
        </h2>
        <p className="pt-10 font-[16px] font-instrument-regular">
          Good food tastes even better when it’s shared. Reserve your table at
          Sukoon and settle in for soulful Indian flavours, warm hospitality and
          moments made to be savoured.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
