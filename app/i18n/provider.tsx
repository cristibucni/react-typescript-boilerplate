import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from 'i18n/messages/index';
import { RootState } from 'store';

interface Props {
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const locale = useSelector((state: RootState) => state.language.locale);

  return (
    <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default Provider;