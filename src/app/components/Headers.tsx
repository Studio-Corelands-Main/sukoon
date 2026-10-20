"use client";

import { useCallback, useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { URLS } from "../../../constants/routes/urls";
import { setHeaderHidden } from "./header/headerVisibility";
import MenuDrawer from "./MenuDrawer";
import SukoonLogo from "./SukoonLogo";

export default function Headers() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const [atTop, setAtTop] = useState(true);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      // Clamp so iOS overscroll bounce doesn't register as a direction change
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      const y = Math.min(Math.max(window.scrollY, 0), maxY);

      setAtTop(y < 100);

      // Ignore tiny movements to avoid flicker. Hides on any downward scroll,
      // so the header is already gone before it would get its background.
      if (Math.abs(y - lastY) < 5) return;
      setScrolledDown(y > lastY);
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hidden = scrolledDown && !hovered && !menuOpen;

  useEffect(() => {
    setHeaderHidden(hidden);
  }, [hidden]);

  return (
    <>
      {/* Wrapper stays in place as a hover zone so the header can be revealed by mouse */}
      <div
        className={`fixed h-21.5 top-0 inset-x-0 z-50 ${hidden ? "pointer-events-none [@media(hover:hover)]:pointer-events-auto" : ""}`}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setHovered(false);
        }}
      >
        <div
          className={`h-full flex flex-row items-center justify-between gap-4 py-4 px-7.5 sm:px-13 md:pt-6 md:px-container-25 text-white font-instrument-regular transition-transform duration-300 ease-out ${hidden ? "-translate-y-full" : "translate-y-0"} ${atTop ? "bg-transparent" : "  bg-[#3e3f05]  backdrop-blur-2xl"}`}
        >
          <div className="shrink-0">
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
            <img
              src="/logo/menu.svg"
              alt=""
              className="h-auto w-[23px] md:w-5.75"
            />
          </button>
        </div>
      </div>
      <MenuDrawer open={menuOpen} onClose={closeMenu} />
    </>
  );
}
