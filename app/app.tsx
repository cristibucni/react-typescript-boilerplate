import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import LanguageSetter from 'components/language-setter';
import styles from './styles';

import ReactLogo from 'assets/images/react.svg';

interface Props extends WrappedComponentProps, WithStylesProps<typeof styles> {
  children?: React.ReactNode;
}

const App: React.FC<Props> = (props) => {
  const { classes, intl } = props;
  return (
    <div className={classes.container}>
      <ReactLogo style={{ width: '150px', height: '150px' }} />
      <h1>{intl.formatMessage({ id: 'hello' })}</h1>
      <div className={classes.language}>
        <h5>{intl.formatMessage({ id: 'appSubtext' })}</h5>
        <LanguageSetter />
      </div>
    </div>
  );
};

export default injectIntl(withStyles(styles)(App));
