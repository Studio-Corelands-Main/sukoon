"use client";

import { useCallback, useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { URLS } from "../../../constants/routes/urls";
import MenuDrawer from "./MenuDrawer";
import SukoonLogo from "./SukoonLogo";

export default function Headers() {
  const pathname = usePathname();
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
        className={`fixed h-21.5 top-0 inset-x-0 z-50 flex flex-row items-center justify-between gap-4 py-4 px-7.5 sm:px-13 md:pt-6 md:px-container-25 text-white font-instrument-regular ${scrollY ? "bg-transparent" : "  bg-[#3e3f05]  backdrop-blur-2xl z-50"}`}
      >
        <div className="shrink-0 border border-white rounded-full ">
          <Link href={URLS.HOME} className="cursor-pointer z-50 lg">
            <SukoonLogo className="w-[130px]   md:hidden" />
          </Link>
          <p className="text-[13px] py-2 px-7.5 md:text-fluid-16 md:py-2.5 md:px-7.5 hidden md:block">
            RESERVE
          </p>
        </div>

        {pathname !== "/" && (
          <Link href={URLS.HOME} className="cursor-pointer z-50 lg">
            <SukoonLogo className="w-[100px] md:w-45 " />
          </Link>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="shrink-0 flex items-center gap-2.5 cursor-pointer"
        >
          <p className="hidden sm:block text-[13px] md:text-fluid-16">MENU</p>
          <img src="/logo/menu.svg" alt="" className="h-auto w-[23px] md:w-5.75" />
        </button>
      </div>
      <MenuDrawer open={menuOpen} onClose={closeMenu} />
    </>
  );
}
