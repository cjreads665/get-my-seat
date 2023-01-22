import { createTheme } from '@mui/material';

export const appTheme = createTheme({
    palette: {
        primary: {
          main: '#327794',
        },
        secondary: {
          main: '#f50057',
        },
      },
    typography: {
      h6: {
          fontFamily: '"Satisfy", cursive',
      },
  }
});