const Tradition = () => {
  return (
    <section
      className="h-[50vw] bg-[#481904] flex items-center justify-center relative"
      style={{ backgroundImage: "url('/images/peacock.png')" }}
    >
      <div className="absolute inset-0 bg-[#481904]/95" />

      <div className="relative z-10 text-center mx-auto flex flex-col justify-center items-center leading-25">
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
  );
};

export default Tradition;
