import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

// svg
import NavbarLogo from "./svg/navbar-logo.svg"
import SignupText from "./svg/signup-text.svg"
import LoginText from "./svg/login-text.svg"

const Navbar = () => {
  const t = useTranslations("navbar")
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
      <div className='flex flex-row items-center gap-10'>
        <Link href="/" className='text-navyblue font-bold hover:underline'>{t("blog")}</Link>
        <Link href="/" className='text-navyblue font-bold hover:underline'>{t("content")}</Link>
        <Link href="/" className='text-navyblue font-bold hover:underline'>{t("teachers")}</Link>
        <Link href="/" className='text-navyblue font-bold hover:underline'>{t("who_are_we")}</Link>
        <Link href="/" className='text-navyblue font-bold hover:underline'>{t("main")}</Link>
      </div>
      <div className='flex items-center p-4'>
        <Image src={NavbarLogo} alt='navbar logo' height={35} />
      </div>
    </div>
  );
};

export default Navbar;