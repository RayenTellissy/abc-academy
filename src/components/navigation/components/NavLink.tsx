import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type NavLinkProps = {
  route: string
  element: string
}

const NavLink = ({ route, element }: NavLinkProps) => {
  const t = useTranslations("navbar")

  return <Link href={route} className='text-navyblue font-bold hover:underline whitespace-nowrap'>{t(element)}</Link>
};

export default NavLink;