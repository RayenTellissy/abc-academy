import React from 'react';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations("navbar")
  
  return (
    <div>
      {t("main")}
    </div>
  );
};

export default Home;