import React from 'react';
import { useLocale } from 'next-intl';

// components
import ArabicMain from './components/ArabicMain';
import NonArabicMain from './components/NonArabicMain';

const UpperHome = () => {
  const locale = useLocale()

  return (
    <div className='flex flex-row justify-between p-8 md:p-20 gap-3'>
      {locale === "ar" ? <ArabicMain /> : <NonArabicMain />}
    </div>
  );
};

export default UpperHome;