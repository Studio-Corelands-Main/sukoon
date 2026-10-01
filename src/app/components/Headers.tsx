export default function Headers() {
  return (
    <div className="absolute top-0 left-0 z-50 w-full bg-transparent flex flex-row items-center justify-between px-25 pt-6 text-white font-instrument-regular">
      <div className="border border-white rounded-full ">
        <p className="font-[16px] py-2.5 px-7.5">RESERVE</p>
      </div>
      <p className="font-[16px] underline">205 Swan St, Richmond</p>
      <div className="flex gap-2.5">
        <p className="font-[16px]">MENU</p>
        <img
          src="/logo/menu.svg"
          alt="Sukoon Image"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
