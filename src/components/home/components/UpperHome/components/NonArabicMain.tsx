import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

// svg
import HomeLogo from "../../../images/home-logo.svg"
import KidMale from "../../../images/kid-male.jpg"
import KidFemale from "../../../images/kid-female.jpg"
import Teacher from "../../../images/teacher.jpg"

// components
import Slogan from './Slogan';
import Description from './Description';

const NonArabicMain = () => {
  const t = useTranslations("home")
  const locale = useLocale()

  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-center w-full xl:justify-start pointer-events-none select-none'>
          <Image src={HomeLogo} alt='home logo' height={100} />
        </div>
        <div className='w-full xl:w-[80%]'>
          <Slogan text={t("slogan")} />
          <Description text={t("description")} />
        </div>
        <div className='w-full justify-center xl:justify-start flex flex-row gap-4 mt-2'>
          <Link
            href={`/${locale}/advantages`}
            className="flex items-center rounded-[7px] border-2 border-orange text-orange text-xl font-bold
            px-[15px] md:px-[53px] py-3 hover:bg-orange hover:text-white transition-colors duration-200 text-center"
          >
            {t("advantages")}
          </Link>
          <Link
            href={`/${locale}/signup`}
            className="flex items-center rounded-[7px] bg-orange text-white text-xl font-bold
            px-[15px] md:px-[53px] py-3 hover:bg-orange-hovered transition-colors duration-200 text-center"
          >
            {t("signup")}
          </Link>
        </div>
      </div>
      <div className='hidden xl:flex flex-row gap-5 flex-shrink-0 h-[350px]'>
        <div className='flex flex-col gap-6 select-none pointer-events-none'>
          <div className='flex justify-end'>
            <Image
              src={KidMale}
              alt='male student'
              className='rounded-[15px] shadow-image'
              height={150}
              width={270}
              placeholder="blur"
            />
          </div>
          <Image src={Teacher} alt='teacher' className='rounded-[15px] shadow-image' height={200} placeholder="blur" />
        </div>
        <div className='flex items-center select-none pointer-events-none'>
          <Image
            src={KidFemale}
            alt='female student'
            className='rounded-[15px] shadow-image'
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};

export default NonArabicMain;