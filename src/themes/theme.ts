import { createTheme } from '@mui/material';

export const appTheme = createTheme({
    palette: {
        primary: {
          main: '#2196F3',
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