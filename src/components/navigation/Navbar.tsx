import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

// svg
import NavbarLogo from "./svg/navbar-logo.svg"

// components
import NavLink from './components/NavLink';
import Dropdown from './components/Dropdown';

const Navbar = () => {
  const t = useTranslations("navbar")
  const locale = useLocale()

  return (
    <div className='flex flex-row justify-between  px-[20px] md:px-[70px]'>
      <div className='lg:hidden flex p-4 flex-shrink-0 cursor-pointer select-none'>
        <Image src={NavbarLogo} alt='navbar logo' height={35} />
      </div>
      <div className='flex flex-row items-center p-5 gap-3'>
        <Link
          href={`/${locale}/login`}
          className="hidden lg:flex items-center rounded-[7px] border-2 border-orange text-orange px-4 h-[40px]
          hover:bg-orange hover:text-white transition-colors duration-200 font-bold whitespace-nowrap"
        >
          {t("login")}
        </Link>
        <Link
          href={`/${locale}/signup`}
          className="hidden lg:flex items-center rounded-[7px] bg-orange px-4 h-[40px] text-white
          hover:bg-orange-hovered transition-colors duration-200 font-bold whitespace-nowrap"
        >
          {t("signup")}
        </Link>
      </div>
      <div className='hidden lg:flex flex-row items-center gap-10'>
        <NavLink element={"blog"} route='/' />
        <NavLink element={"content"} route='/' />
        <NavLink element={"teachers"} route='/' />
        <NavLink element={"who_are_we"} route='/' />
        <NavLink element={"main"} route='/' />
      </div>
      <div className='hidden lg:flex p-4 flex-shrink-0 cursor-pointer select-none'>
        <Image src={NavbarLogo} alt='navbar logo' height={35} />
      </div>
      <div className='lg:hidden flex p-4'>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;