"use client"
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

const Slogan = () => {
  const locale = useLocale()
  const t = useTranslations()

  return <p className={`text-center xl:${locale === "ar" ? "text-right" : "text-left"} text-[40px] md:text-[50px] xl:text-[70px] text-navyblue font-bold`}>
    {t("slogan")}
  </p>
};

export default Slogan;