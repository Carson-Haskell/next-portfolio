'use client'
import { useState } from 'react'
import { LINKS } from './Navbar.constants'
import { motion } from 'framer-motion'

import Link from 'next/link'

import {
  listItemVariants,
  listVariants,
  menuBottomVariants,
  menuCenterVariants,
  menuTopVariants
} from './animations'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* MENU BUTTON  */}
      <button
        className="relative z-50 flex flex-col justify-between w-10 h-8 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={menuTopVariants}
          animate={open ? 'opened' : 'closed'}
          className="w-10 h-1 origin-left bg-black rounded"
        ></motion.div>
        <motion.div
          variants={menuCenterVariants}
          animate={open ? 'opened' : 'closed'}
          className="w-10 h-1 bg-black rounded"
        ></motion.div>
        <motion.div
          variants={menuBottomVariants}
          animate={open ? 'opened' : 'closed'}
          className="w-10 h-1 origin-left bg-black rounded"
        ></motion.div>
      </button>
      {/* MOBILE MENU LIST  */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          exit="closed"
          className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black"
        >
          {LINKS.map((link) => (
            <motion.div variants={listItemVariants} key={link.title}>
              <Link href={link.url} onClick={() => setOpen(false)}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default MobileMenu
