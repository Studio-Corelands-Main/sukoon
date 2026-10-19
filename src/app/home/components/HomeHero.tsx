"use client";

import SukoonLogo from "@/app/components/SukoonLogo";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { URLS } from "../../../../constants/routes/urls";

const HEADER_WIDTH = 180;
const HEADER_TOP = 30;

const HomeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] = useState({
    startX: 0,
    startY: 0,
    startWidth: 0,
    endX: 0,
    ready: false,
  });

  const [showHeader, setShowHeader] = useState(false);

  const { scrollY, scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const updatePositions = () => {
      const placeholder = placeholderRef.current;
      if (!placeholder) return;

      const rect = placeholder.getBoundingClientRect();

      setPositions({
        startX: rect.left,
        startY: rect.top,
        startWidth: rect.width,
        endX: (window.innerWidth - HEADER_WIDTH) / 2,
        ready: true,
      });
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setShowHeader(value > 20);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [positions.startX, positions.endX, positions.endX],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [positions.startY, HEADER_TOP, HEADER_TOP],
  );

  const width = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [positions.startWidth, HEADER_WIDTH, HEADER_WIDTH],
  );

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat px-7.5 text-white lg:px-15 2xl:px-25"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        <p className="w-63.75 pt-43 text-[16px] font-instrument-regular lg:w-64">
          CONTEMPORARY INDIAN DINING MADE FOR CALM MOMENTS.
        </p>

        {/* Reserves the logo's original bottom position */}
        <div className="absolute inset-x-7.5 bottom-25 flex justify-center lg:inset-x-15 2xl:inset-x-25">
          <div
            ref={placeholderRef}
            className="aspect-950/169 w-full max-w-237.5"
          />
        </div>
      </section>

      {/* Fixed header content */}
      <motion.header
        initial={false}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-7.5 py-6 text-white lg:px-15 2xl:px-25  ${showHeader ? "" : null}`}
        style={{ pointerEvents: showHeader ? "auto" : "none" }}
      >
        {/* Left side */}
        {/* <div className="hidden md:flex flex-1 items-center justify-start">
          <div className="shrink-0 border border-white rounded-full">
            <p className="text-[13px] py-2 px-7.5 md:text-[16px] md:py-2.5 md:px-7.5">
              RESERVE
            </p>
          </div>
        </div> */}

        {/* Space reserved for the centered logo */}
        <div style={{ width: HEADER_WIDTH }} className="shrink-0" />

        {/* Right side */}
        {/* <div className="flex flex-1 items-center justify-end gap-6">
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
        </div> */}
      </motion.header>

      {/* One actual logo, animated from hero position to header */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x,
          y,
          width,
          visibility: positions.ready ? "visible" : "hidden",
          pointerEvents: "none",
          zIndex: 50,
        }}
        className="max-w-[calc(100vw-60px)]"
      >
        <Link href={URLS.HOME} className="cursor-pointer">
          <SukoonLogo className="block h-auto w-full" />
        </Link>
      </motion.div>
    </>
  );
};

export default HomeHero;
