"use client";

import { AnimatePresence, motion } from "framer-motion"; // or "motion/react"
import { useEffect } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    zIndex: 2,
  }),
  center: {
    x: "0%",
    zIndex: 2,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-30%" : "30%", // old image drifts a little, stays underneath
    zIndex: 1,
  }),
};

// Preload all images once so a slide never starts with an empty frame
function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decode?.().catch(() => {});
    });
  }, [images]);
}

type Props = {
  images: string[];
  activeIndex: number;
  direction: number; // 1 = next, -1 = previous
};

export function GallerySlider({ images, activeIndex, direction }: Props) {
  usePreloadImages(images);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#481904]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Gallery image ${activeIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: EASE }}
          draggable={false}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover will-change-transform bg-blend-overlay bg-black/50"
        />
      </AnimatePresence>
      {/* Overlay: above the slides (they use zIndex 1–2), below your controls (z-10) */}
      <div className="pointer-events-none absolute inset-0 z-3 bg-black/20" />
    </div>
  );
}
