//THEME

//IMPORTING
import { createMuiTheme } from '@material-ui/core/styles';
import greyColor from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';

//MODULE
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    transition: string;
    marginFromMainNav: string;
    marginFromMainNavMobile: string;
    sideBarWidth: number;
    colors: {
      textColors: {
        dark: string;
        light: string;
        brand: string;
      };
      paperColors: {
        light: string;
        dark: string;
      };
      backgroundColors: {
        light: string;
        dark: string;
      };
    };
  }

  //CONFIGURATION
  interface ThemeOptions {
    transition?: string;
    marginFromMainNav?: string;
    marginFromMainNavMobile?: string;
    sideBarWidth?: number;
    colors?: {
      textColors?: {
        dark?: string;
        light?: string;
        brand?: string;
      };
      paperColors?: {
        light?: string;
        dark?: string;
      };
      backgroundColors?: {
        light?: string;
        dark?: string;
      };
    };
  }
}

//MUI THEME
const theme = createMuiTheme({
  transition: 'all .2s ease',
  marginFromMainNav: '125px',
  marginFromMainNavMobile: '60px',
  sideBarWidth: 280,
  colors: {
    textColors: {
      dark: greyColor[50],
      light: greyColor[800],
      brand: teal.A400,
    },
    paperColors: {
      light: '#ffffff',
      dark: teal.A400,
    },
    backgroundColors: {
      light: '#ffffff',
      dark: teal[800],
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
