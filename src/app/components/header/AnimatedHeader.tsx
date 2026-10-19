"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import SukoonLogo from "../SukoonLogo";

const AnimatedHeader = () => {
  const { scrollY } = useScroll();

  // Root scale factor (1 below md, viewport / 1920 from md up) so the scroll
  // distances below follow the rem-scaled layout.
  const rootScale = useMotionValue(1);

  useEffect(() => {
    const updateScale = () =>
      rootScale.set(
        parseFloat(getComputedStyle(document.documentElement).fontSize) / 16,
      );
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [rootScale]);

  // Scroll distance in 1920-design pixels.
  const designScrollY = useTransform(
    [scrollY, rootScale],
    ([latest, scale]: number[]) => latest / scale,
  );

  // Logo moves upward as the user scrolls (0 → -400px at 1920).
  const y = useTransform(designScrollY, [0, 500], ["0rem", "-25rem"]);

  // Logo shrinks from its original size (950px → 180px at 1920).
  const width = useTransform(
    designScrollY,
    [0, 500],
    ["59.375rem", "11.25rem"],
  );

  // Keep the logo visible as it transitions into the header.
  const top = useTransform(scrollY, [0, 500], ["0px", "0px"]);

  return (
    <motion.header
      style={{ y, top }}
      className="fixed inset-x-0 top-0 z-50 pointer-events-none"
    >
      <div className="flex justify-center px-7.5 md:px-container-25">
        <motion.div style={{ width }} className="origin-center">
          <SukoonLogo />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default AnimatedHeader;
