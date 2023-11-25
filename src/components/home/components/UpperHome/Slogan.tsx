import React from 'react';
import { useLocale } from 'next-intl';

const Slogan = ({ text }: { text: string }) => {
  const locale = useLocale()

  return <p className={`text-center xl:${locale === "ar" ? "text-end" : "text-start"} text-[40px] md:text-[50px] xl:text-[70px] text-navyblue font-bold`}>
    { text }
  </p>
};

export default Slogan;