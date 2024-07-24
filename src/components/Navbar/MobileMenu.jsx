"use client";

import Link from "next/link";
import { LINKS } from "./Navbar.constants";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* MENU BUTTON  */}
      <button
        className="relative z-50 flex flex-col justify-between w-10 h-8"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
      </button>
      {/* MOBILE MENU LIST  */}
      {open && (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black">
          {LINKS.map((link) => (
            <Link key={link.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
