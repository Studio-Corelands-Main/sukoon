"use client";

import { useCallback, useEffect, useState } from "react";

import MenuDrawer from "./MenuDrawer";

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const [scrollY, setScrollY] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY);
      console.log("Scroll Height:", document.documentElement.scrollHeight);
      console.log("Window Height:", window.innerHeight);
      if (window.scrollY < 100) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed  top-0 left-0 z-50 w-full bg-transparent flex flex-row items-center justify-between gap-4 py-4 px-7.5 sm:px-13 md:pt-6 lg:px-15 2xl:px-25 text-white font-instrument-regular ${scrollY ? null : "bg-black/10 backdrop-blur-2xl"}`}
      >
        <div className="shrink-0 border border-white rounded-full">
          <p className="text-[13px] py-2 px-7.5 md:text-[16px] md:py-2.5 md:px-7.5">
            RESERVE
          </p>
        </div>
        {scrollY && (
          <p className="hidden md:block text-[16px] underline truncate">
            205 Swan St, Richmond
          </p>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="shrink-0 flex items-center gap-2.5 cursor-pointer"
        >
          <p className="hidden sm:block text-[13px] md:text-[16px]">MENU</p>
          <img src="/logo/menu.svg" alt="" className="h-auto w-[23px]" />
        </button>
      </div>
      <MenuDrawer open={menuOpen} onClose={closeMenu} />
    </>
  );
}
