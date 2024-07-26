"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  default: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 4
    }
  }
};

const AnimatedHero = ({ animationVariant }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      variants={variants}
      animate={animationVariant}
      className="relative h-1/2 lg:h-full lg:w-1/2"
    >
      <Image
        src="/hero.png"
        alt="Picture of a man"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default AnimatedHero;
