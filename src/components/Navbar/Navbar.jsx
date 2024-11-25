import { LINKS, SOCIALS } from './Navbar.constants'

import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* WEB MENU LIST  */}
      <div className="hidden w-1/3 gap-4 md:flex">
        {LINKS.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      <Logo />
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
  )
}

export default Navbar
