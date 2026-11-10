"use client";

import {
  LOGO_SLOT_ATTR,
  setHeroLogoDocked,
  useHeroLogoDocked,
} from "@/app/components/header/heroLogo";
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

// Hero scroll progress at which the logo lands in the header
const DOCK_PROGRESS = 0.7;
const MD_QUERY = "(width >= 48rem)";

// Find the visible header logo slot and its position, ignoring the header's
// slide transform (so it's correct even if measured while the header is hidden)
function getHeaderSlot() {
  const slots = document.querySelectorAll<HTMLElement>(`[${LOGO_SLOT_ATTR}]`);
  for (const slot of slots) {
    if (slot.offsetWidth === 0) continue; // hidden at this breakpoint

    const rect = slot.getBoundingClientRect();
    // Undo any transforms on ancestors (header slide, -translate-x-1/2 is fine
    // because it's on the slot itself and stays in the final layout)
    const header = slot.closest<HTMLElement>(".fixed");
    const headerShift = header
      ? header.firstElementChild!.getBoundingClientRect().top -
        header.getBoundingClientRect().top
      : 0;

    return { x: rect.left, y: rect.top - headerShift, width: rect.width };
  }
  return null;
}

const HomeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const desktopPlaceholderRef = useRef<HTMLDivElement>(null);
  const mobilePlaceholderRef = useRef<HTMLDivElement>(null);

  const startX = useMotionValue(0);
  const startY = useMotionValue(0);
  const startW = useMotionValue(0);
  const endX = useMotionValue(0);
  const endY = useMotionValue(0);
  const endW = useMotionValue(0);

  const [ready, setReady] = useState(false);
  const docked = useHeroLogoDocked();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setHeroLogoDocked(p >= DOCK_PROGRESS);
  });

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
      const isMd = window.matchMedia(MD_QUERY).matches;
      const placeholder = isMd
        ? desktopPlaceholderRef.current
        : mobilePlaceholderRef.current;
      const slot = getHeaderSlot();
      if (!hero || !placeholder || !slot) return;

      const heroRect = hero.getBoundingClientRect();
      const rect = placeholder.getBoundingClientRect();

      startX.set(rect.left);
      startY.set(rect.top - heroRect.top);
      startW.set(rect.width);
      endX.set(slot.x);
      endY.set(slot.y);
      endW.set(slot.width);
      setReady(true);
    };

    // Set the initial docked state (e.g. page restored mid-scroll)
    setHeroLogoDocked(scrollYProgress.get() >= DOCK_PROGRESS);

    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      setHeroLogoDocked(false); // reset when leaving the home page
    };
  }, [scrollYProgress, startX, startY, startW, endX, endY, endW]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-screen h-svh w-full bg-cover bg-center bg-no-repeat px-7.5 text-white md:px-container-25 container-px bg-blend-overlay bg-black/40"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        <Text className="hidden w-64 pt-43 text-white md:block">
          CONTEMPORARY INDIAN DINING MADE FOR CALM MOMENTS.
        </Text>

        <div className="absolute inset-x-25 bottom-25 hidden justify-center md:flex">
          <div
            ref={desktopPlaceholderRef}
            className="aspect-950/169 w-full max-w-237.5"
          />
        </div>

        <div className="absolute inset-x-7.5 bottom-6 md:hidden">
          <div className="pb-10 flex gap-2">
            <button
              // type="button"
              data-booking=""
              className="text-[13px] py-2 px-7.5 md:text-fluid-16 md:py-2.5 md:px-7.5 border border-white rounded-full cursor-pointer w-[200px]"
            >
              RESERVE
            </button>
            <Link
              href={URLS.ORDER_ONLINE}
              className="text-[13px] py-2 text-center px-7.5 md:text-fluid-16 md:py-2.5 md:px-7.5  border border-white rounded-full cursor-pointer uppercase w-[200px]"
            >
              Order Online
            </Link>
          </div>
          <Text className="text-white">
            CONTEMPORARY INDIAN DINING MADE FOR CALM MOMENTS.
          </Text>
          <div className="flex justify-center pt-8">
            <div
              ref={mobilePlaceholderRef}
              className="aspect-950/169 w-full max-w-237.5"
            />
          </div>
        </div>
      </section>

      {/* Flying logo: only visible until it lands, then the header's logo takes over */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x,
          y,
          width,
          zIndex: 60, // above the header while flying over it
          visibility: ready && !docked ? "visible" : "hidden",
        }}
        className="pointer-events-none"
      >
        <SukoonLogo className="block h-auto w-full" />
      </motion.div>
    </>
  );
};

export default HomeHero;
