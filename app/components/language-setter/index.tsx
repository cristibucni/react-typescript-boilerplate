import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from 'store';
import { countriesDropdown } from 'i18n';
import { setLocale } from 'store/actions/language';

interface Props {
  children?: React.ReactNode;
}

const LanguageSetter: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.language.locale);
  const [item, setItem] = useState(countriesDropdown.find((lang) => lang.locale === locale));
  const [localeIndex, setLocaleIndex] = useState(0);

  useEffect(() => {
    setItem(countriesDropdown.find((lang) => lang.locale === locale));
  }, [locale]);

  useEffect(() => {
    if (item) {
      setLocaleIndex(countriesDropdown.indexOf(item));
    }
  }, [item]);

  const changeLocale = () => {
    if (localeIndex === countriesDropdown.length - 1) {
      dispatch(setLocale(countriesDropdown[0].locale));
    } else {
      dispatch(setLocale(countriesDropdown[localeIndex + 1].locale));
    }
  };
  return <div onClick={changeLocale}>{countriesDropdown.find((lang) => lang.locale === locale)?.img}</div>;
};

LanguageSetter.propTypes = {};

export default LanguageSetter;
