"use client";

import { useHeaderHidden } from "@/app/components/header/headerVisibility";
import SukoonLogo from "@/app/components/SukoonLogo";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { URLS } from "../../../../constants/routes/urls";

// Sizes in 1920px-design pixels; from md up they scale with the root font size
const HEADER_WIDTH = 180;
const HEADER_TOP = 30;

// Hero scroll progress at which the logo reaches its header position
const DOCK_PROGRESS = 0.7;

// Root scale factor: 1 below md and at 1920, root font size / 16 from md up
const getRootScale = () =>
  window.matchMedia("(width >= 48rem)").matches
    ? parseFloat(getComputedStyle(document.documentElement).fontSize) / 16
    : 1;

const HomeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const [positions, setPositions] = useState({
    startX: 0,
    startY: 0,
    startWidth: 0,
    endX: 0,
    endY: HEADER_TOP,
    endWidth: HEADER_WIDTH,
    ready: false,
  });

  const [showHeader, setShowHeader] = useState(false);
  const [docked, setDocked] = useState(false);
  const headerHidden = useHeaderHidden();

  const { scrollY, scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setShowHeader(value > 20);
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Once docked, the logo hides and shows together with the header instead
  // of staying fixed at the top
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setDocked(value >= DOCK_PROGRESS);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const x = useTransform(
    scrollYProgress,
    [0, DOCK_PROGRESS, 1],
    [positions.startX, positions.endX, positions.endX],
  );

  const y = useTransform(
    scrollYProgress,
    [0, DOCK_PROGRESS, 1],
    [positions.startY, positions.endY, positions.endY],
  );

  const width = useTransform(
    scrollYProgress,
    [0, DOCK_PROGRESS, 1],
    [positions.startWidth, positions.endWidth, positions.endWidth],
  );

  useEffect(() => {
    const updatePositions = () => {
      // The logo animates into the header from md up; below md it stays static in the hero
      const desktop = window.matchMedia("(width >= 48rem)").matches;
      setIsDesktop(desktop);

      if (!desktop) {
        setPositions((prev) => ({ ...prev, ready: false }));
        return;
      }

      const placeholder = placeholderRef.current;
      if (!placeholder) return;

      const rect = placeholder.getBoundingClientRect();
      const scale = getRootScale();
      const endWidth = HEADER_WIDTH * scale;

      setPositions({
        startX: rect.left,
        startY: rect.top,
        startWidth: rect.width,
        endX: (window.innerWidth - endWidth) / 2,
        endY: HEADER_TOP * scale,
        endWidth,
        ready: true,
      });
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat px-7.5 text-white md:px-container-25 container-px"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        <p className="w-63.75 pt-43 text-[16px] font-instrument-regular md:w-64 md:text-fluid-16">
          CONTEMPORARY INDIAN DINING MADE FOR CALM MOMENTS.
        </p>

        {/* Reserves the logo's original bottom position */}
        <div className="absolute inset-x-7.5 bottom-25 flex justify-center md:inset-x-25">
          <div
            ref={placeholderRef}
            className="aspect-950/169 w-full max-w-237.5"
          />
        </div>
      </section>

      {/* One actual logo, animated from hero position to header */}
      {isDesktop ? (
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
          className="max-w-[calc(100vw-3.75rem)]"
        >
          {/* Slides out above the viewport with the header, same timing */}
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform:
                headerHidden && docked
                  ? `translateY(calc(-100% - ${positions.endY}px))`
                  : "translateY(0)",
            }}
          >
            <Link href={URLS.HOME} className="cursor-pointer">
              <SukoonLogo className="block h-auto w-full" />
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="absolute inset-x-7.5 bottom-25 flex justify-center md:hidden">
          <div className="aspect-950/169 w-full max-w-237.5">
            <Link href={URLS.HOME} className="cursor-pointer">
              <SukoonLogo className="block h-auto w-full" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeHero;
