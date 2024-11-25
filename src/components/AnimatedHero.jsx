'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const variants = {
  default: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 4
    }
  }
}

const AnimatedHero = ({ animationVariant }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      variants={variants}
      animate={animationVariant}
      className="relative h-1/2 w-1/2 lg:h-[85%] lg:w-1/2 self-center"
    >
      <Image
        src="/hero.png"
        alt="Picture of a man"
        fill
        className="object-contain transition duration-1000 hover:-translate-y-2"
      />
    </motion.div>
  )
}

export default AnimatedHero
