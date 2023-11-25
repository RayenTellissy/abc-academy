import React from 'react';
import { useTranslations } from 'next-intl';

// svg
import VideoPlaceholder from "./svg/video-placeholder.svg"
import Image from 'next/image';

const MiddleHome = () => {
  const t = useTranslations("home")

  return (
    <div className='h-[800px] bg-navyblue p-12 flex flex-col gap-[4rem]'>
      <div className='flex justify-center'>
        <p className='text-white font-bold sm:text-[50px] text-2xl whitespace-nowrap'>
          {t("middle_title")}
        </p>
      </div>
      <div className='flex justify-center'>
        <Image src={VideoPlaceholder} alt='educational video placeholder' />
      </div>
      <div className='xl:px-[230px] lg:px-28 px-2'>
        <p className='text-white text-xl text-center'>{t("middle_description")}</p>
      </div>
    </div>
  );
};

export default MiddleHome;