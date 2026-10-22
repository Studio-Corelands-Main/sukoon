"use client";

import { useHeaderHidden } from "@/app/components/header/headerVisibility";
import SukoonLogo from "@/app/components/SukoonLogo";
import { Text } from "@/app/components/Typography/Heading";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { URLS } from "../../../../constants/routes/urls";

// Sizes in 1920px-design pixels; from md up they scale with the root font size
const HEADER_WIDTH = 180;
const HEADER_TOP = 30;

// Hero scroll progress at which the logo reaches its header position
const DOCK_PROGRESS = 0.7;

const MD_QUERY = "(width >= 48rem)";

const getRootScale = () =>
  parseFloat(getComputedStyle(document.documentElement).fontSize) / 16;

const HomeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Positions as motion values so the transforms always use the latest numbers
  const startX = useMotionValue(0);
  const startY = useMotionValue(0);
  const startW = useMotionValue(0);
  const endX = useMotionValue(0);
  const endY = useMotionValue(HEADER_TOP);
  const endW = useMotionValue(HEADER_WIDTH);

  const [ready, setReady] = useState(false);
  const [docked, setDocked] = useState(false);
  const headerHidden = useHeaderHidden();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setDocked(p >= DOCK_PROGRESS);
  });

  // 0 → 1 between the top of the hero and the dock point, then held at 1
  const t = useTransform(scrollYProgress, (p) =>
    Math.min(Math.max(p / DOCK_PROGRESS, 0), 1),
  );

  const x = useTransform(
    [t, startX, endX],
    ([t, s, e]: number[]) => s + (e - s) * t,
  );
  const y = useTransform(
    [t, startY, endY],
    ([t, s, e]: number[]) => s + (e - s) * t,
  );
  const width = useTransform(
    [t, startW, endW],
    ([t, s, e]: number[]) => s + (e - s) * t,
  );

  useEffect(() => {
    const update = () => {
      const hero = heroRef.current;
      const placeholder = placeholderRef.current;
      if (!hero || !placeholder) return;

      if (!window.matchMedia(MD_QUERY).matches) {
        setReady(false);
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const rect = placeholder.getBoundingClientRect();
      const scale = getRootScale();
      const w = HEADER_WIDTH * scale;
      // clientWidth excludes the scrollbar, so the docked logo is truly centred
      const viewportW = document.documentElement.clientWidth;

      startX.set(rect.left);
      // Measured relative to the hero, so it's correct even if the page
      // loads already scrolled
      startY.set(rect.top - heroRect.top);
      startW.set(rect.width);
      endX.set((viewportW - w) / 2);
      endY.set(HEADER_TOP * scale);
      endW.set(w);
      setReady(true);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [startX, startY, startW, endX, endY, endW]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat px-7.5 text-white md:px-container-25 container-px bg-blend-overlay bg-black/40"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        {/* Desktop tagline: same breakpoint as the animated logo */}
        <Text className="hidden w-64 pt-43 text-white md:block">
          CONTEMPORARY INDIAN DINING MADE FOR CALM MOMENTS.
        </Text>

        {/* Reserves the logo's original bottom position (desktop) */}
        <div className="absolute inset-x-7.5 bottom-25 hidden justify-center md:flex md:inset-x-25">
          <div
            ref={placeholderRef}
            className="aspect-950/169 w-full max-w-237.5"
          />
        </div>

        {/* Mobile: static tagline + logo, now INSIDE the section */}
        <div className="absolute inset-x-7.5 bottom-6 md:hidden">
          <Text className="text-white">
            CONTEMPORARY INDIAN DINING MADE FOR CALM MOMENTS.
          </Text>
          <div className="flex justify-center pt-8">
            <Link
              href={URLS.HOME}
              className="block aspect-950/169 w-full max-w-237.5"
            >
              <SukoonLogo className="block h-auto w-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* Desktop: one logo animated from the hero to the header.
          Always rendered, hidden by CSS below md, so there's no flash */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x,
          y,
          width,
          visibility: ready ? "visible" : "hidden",
          zIndex: 50,
        }}
        className="pointer-events-none hidden md:block"
      >
        {/* Slides out above the viewport with the header, same timing */}
        <div
          className="transition-transform duration-300 ease-out"
          style={{
            transform:
              headerHidden && docked
                ? "translateY(calc(-100% - var(--logo-top)))"
                : "translateY(0)",
            ["--logo-top" as string]: `${HEADER_TOP}px`,
          }}
        >
          <Link
            href={URLS.HOME}
            className="pointer-events-auto block cursor-pointer"
          >
            <SukoonLogo className="block h-auto w-full" />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default HomeHero;
