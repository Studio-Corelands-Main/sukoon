"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { URLS } from "../../../constants/routes/urls";
import { setHeaderHidden } from "./header/headerVisibility";
import { LOGO_SLOT_ATTR, useHeroLogoDocked } from "./header/heroLogo";
import MenuDrawer from "./MenuDrawer";
import SukoonLogo from "./SukoonLogo";

// Always takes up space; only visible when the header should show its logo
function LogoSlot({ show, className }: { show: boolean; className: string }) {
  return (
    <Link
      href={URLS.HOME}
      {...{ [LOGO_SLOT_ATTR]: "" }}
      aria-hidden={!show}
      tabIndex={show ? undefined : -1}
      className={`cursor-pointer ${className}`}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <SukoonLogo className="block h-auto w-full" />
    </Link>
  );
}

export default function Headers() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const heroDocked = useHeroLogoDocked();

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const [atTop, setAtTop] = useState(true);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      const y = Math.min(Math.max(window.scrollY, 0), maxY);

      setAtTop(y < 100);

      if (Math.abs(y - lastY) < 5) return;
      setScrolledDown(y > lastY);
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home, the header's logo appears only once the hero logo has docked
  const showLogo = !isHome || heroDocked;

  // On home, don't hide the header while the logo is still flying into it
  const hidden =
    scrolledDown && !hovered && !menuOpen && (!isHome || heroDocked);

  useEffect(() => {
    setHeaderHidden(hidden);
  }, [hidden]);

  return (
    <>
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
          className={`relative h-full flex flex-row items-center justify-between gap-4 py-4 px-7.5 sm:px-13 md:pt-6 container-px text-white font-instrument-regular transition-transform duration-300 ease-out ${hidden ? "-translate-y-full" : "translate-y-0"} ${atTop ? "bg-transparent" : "bg-[#515227] backdrop-blur-2xl"}`}
        >
          <div className="shrink-0">
            {/* Mobile logo slot: left */}
            <LogoSlot show={showLogo} className="block w-[130px] md:hidden" />
            <button
              type="button"
              data-booking=""
              className="text-[13px] py-2 px-7.5 md:text-fluid-16 md:py-2.5 md:px-7.5 hidden md:block border border-white rounded-full cursor-pointer"
            >
              RESERVE
            </button>
          </div>

          {/* Desktop logo slot: truly centred, regardless of side widths */}
          <LogoSlot
            show={showLogo}
            className="absolute left-1/2 top-1/2 hidden w-45 -translate-x-1/2 -translate-y-1/2 md:block"
          />

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
