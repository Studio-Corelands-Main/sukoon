"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

const MarqueeGallery = ({ images }: { images: string[] }) => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const position = useRef(0);

  useAnimationFrame((_, delta) => {
    if (isPaused || !trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    if (!trackWidth) return;

    position.current -= (50 * delta) / 600;

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
        className="flex w-max gap-[10px] md:gap-6 lg:gap-9"
        style={{ x }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="w-[75vw] shrink-0 cursor-pointer md:w-[40vw] lg:w-[25.2748vw]"
            onClick={() => {
              console.log("Clicked image:", image);
            }}
          >
            <img
              src={image}
              alt={`Gallery image ${(index % images.length) + 1}`}
              draggable={false}
              className="h-[300px] w-full object-cover lg:h-[27.7776vw]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeGallery;
