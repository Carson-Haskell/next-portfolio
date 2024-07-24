import { LINKS, SOCIALS } from "./Navbar.constants";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* WEB MENU LIST  */}
      <div className="hidden w-1/3 gap-4 md:flex">
        {LINKS.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="lg:w-1/3 lg:justify-center md:hidden lg:flex">
        <Link
          href="/"
          className="flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md"
        >
          <span className="mr-1 text-white">Carson</span>
          <span className="flex items-center justify-center h-8 text-black bg-white rounded w-14">
            Haskell
          </span>
        </Link>
      </div>
      {/* SOCIALS  */}
      <div className="justify-end hidden w-1/3 gap-4 md:flex">
        {SOCIALS.map((social) => (
          <Link key={social.alt} href={social.url}>
            <Image src={social.icon} alt={social.alt} width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU  */}
      <MobileMenu />
    </div>
  );
};

export default Navbar;
