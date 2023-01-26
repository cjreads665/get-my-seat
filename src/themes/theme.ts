import { createTheme } from '@mui/material';


declare module '@mui/material/styles'  {
  interface Theme {
    textBox: {
      blueBg: string,
      whiteBg : string
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    textBox?: {
      blueBg?: string,
      whiteBg? : string
    }
  }
}


export const appTheme = createTheme({
    palette: {
        primary: {
          main: "#FFF",
        },
        secondary: {
          main: '#2196F3',
        },
      },
    typography: {
      h6: {
          fontFamily: '"Satisfy", cursive',
      },
  },
  textBox: {
    blueBg: "#fff"
  }
});