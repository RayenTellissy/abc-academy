import React from 'react';
import { useLocale } from 'next-intl';

const Slogan = ({ text }: { text: string }) => {
  const locale = useLocale()

  return <>
    {locale === "ar" ? <p className="text-center xl:text-end text-[40px] md:text-[50px] xl:text-[70px] text-navyblue font-bold">
      {text}
    </p> : <p className="text-center xl:text-left text-[40px] md:text-[50px] xl:text-[70px] text-navyblue font-bold">
      {text}
    </p>}
  </>
};

export default Slogan;