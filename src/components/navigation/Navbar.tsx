import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

// svg
import NavbarLogo from "./svg/navbar-logo.svg"
import SignupText from "./svg/signup-text.svg"
import LoginText from "./svg/login-text.svg"

// icons
import { AlignJustify } from 'lucide-react';
import NavLink from './components/NavLink';

const Navbar = () => {
  const locale = useLocale()

  return (
    <div className='flex flex-row justify-between px-[70px]'>
      <div className='flex flex-row items-center p-5 gap-3'>
        <Link
          href="/login"
          className="flex items-center rounded-[7px] border-2 border-orange text-orange px-4 h-[40px]
          hover:bg-orange transition-colors duration-200"
        >
          <Image src={LoginText} alt='signup text' height={15} />
        </Link>
        <Link
          href="/signup"
          className="flex items-center rounded-[7px] bg-orange px-4 h-[40px] text-white
          hover:bg-orange-hovered transition-colors duration-200"
        >
          <Image src={SignupText} alt='signup text' height={15} />
        </Link>
      </div>
      <div className='hidden md:flex flex-row items-center gap-10'>
        <NavLink element={"blog"} route='/' />
        <NavLink element={"content"} route='/' />
        <NavLink element={"teachers"} route='/' />
        <NavLink element={"who_are_we"} route='/' />
        <NavLink element={"main"} route='/' />
      </div>
      <div className='flex items-center p-4 flex-shrink-0 cursor-pointer pointer-events-none select-none'>
        <Image src={NavbarLogo} alt='navbar logo' height={35} />
      </div>
    </div>
  );
};

export default Navbar;