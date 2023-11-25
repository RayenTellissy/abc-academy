import React from 'react';
import { useLocale } from 'next-intl';

type DescriptionTypes = {
  text: string
}

const Description = ({ text }: DescriptionTypes) => {
  const locale = useLocale()

  return <>
    {locale === "ar"
      ? <p className="text-center xl:text-end text-lg">{ text }</p>
      : <p className="text-center xl:text-left text-lg">{ text }</p>
    }
  </>
};

export default Description;