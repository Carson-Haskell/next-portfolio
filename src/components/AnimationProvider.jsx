"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimationProvider = ({ children, className, key, ...animationProps }) => {
  const pathname = usePathname();
  key = key || pathname;

  return (
    <AnimatePresence>
      <motion.div key={key} className={className} {...animationProps}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationProvider;
