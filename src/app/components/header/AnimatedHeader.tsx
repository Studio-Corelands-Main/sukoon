"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SukoonLogo from "../SukoonLogo";

const AnimatedHeader = () => {
  const { scrollY } = useScroll();

  // Logo moves upward as the user scrolls.
  const y = useTransform(scrollY, [0, 500], [0, -400]);

  // Logo shrinks from its original size.
  const width = useTransform(scrollY, [0, 500], [950, 180]);

  // Keep the logo visible as it transitions into the header.
  const top = useTransform(scrollY, [0, 500], ["0px", "0px"]);

  return (
    <motion.header
      style={{ y, top }}
      className="fixed inset-x-0 top-0 z-50 pointer-events-none"
    >
      <div className="flex justify-center px-7.5 lg:px-15 2xl:px-25">
        <motion.div style={{ width }} className="origin-center">
          <SukoonLogo />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default AnimatedHeader;
