"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Root scale factor: 1 below md and at 1920, root font size / 16 from md up
const getRootScale = () =>
  window.matchMedia("(width >= 48rem)").matches
    ? parseFloat(getComputedStyle(document.documentElement).fontSize) / 16
    : 1;

const MarqueeGallery = ({ images }: { images: string[] }) => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const position = useRef(0);
  const scale = useRef(1);

  // Keep the scroll speed proportional to the (scaled) layout from md up
  useEffect(() => {
    const updateScale = () => {
      scale.current = getRootScale();
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || !trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    if (!trackWidth) return;

    position.current -= (50 * delta * scale.current) / 1200;

    if (Math.abs(position.current) >= trackWidth) {
      position.current += trackWidth;
    }

    x.set(position.current);
  });

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max gap-[10px] md:gap-9 overflow-hidden"
        style={{ x }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="w-[45vw] shrink-0 cursor-pointer lg:w-[30.32976rem]"
            onClick={() => {
              console.log("Clicked image:", image);
            }}
          >
            <img
              src={image}
              alt={`Gallery image ${(index % images.length) + 1}`}
              draggable={false}
              className="  w-full object-cover lg:h-[33.33312rem]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeGallery;
