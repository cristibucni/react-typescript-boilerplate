import RobotoLight from 'assets/fonts/Roboto/Roboto-Light.ttf';
import Roboto from 'assets/fonts/Roboto/Roboto-Regular.ttf';

const robotLight = {
  fontFamily: 'Roboto Light',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 'light',
  src: `
    local('Roboto'),
    local('Robot-Regular'),
    url(${Roboto}) format('opentype')
  `,
};
const gilroyExtraBold = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 'bold',
  src: `
    local('Roboto'),
    local('Robot-Regular'),
    url(${Roboto}) format('opentype')
  `,
};

const styles = (theme) => ({
  '@global': {
    '@font-face': [RobotoLight, Roboto],
    body: {
      fontFamily: ['Roboto', 'sans-serif'],
      boxSizing: 'border-box',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: theme.text.primary,
    },

    '@keyframes fade-in': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    '@keyframes load8': {
      '0%': {
        transform: ' rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    height: '100vh',
    width: '100%',
    maxWidth: '300px',
    '& img': {
      maxWidth: '300px',
    },
  },
  language: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
