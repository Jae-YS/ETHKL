import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FAFAF8', 
    },
    primary: {
      main: '#A85E3B', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2D322C', 
    },
    text: {
      primary: '#2D322C', 
      secondary: '#727462', 
    },
    grey: {
      100: '#CBD0D5', 
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", "Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export default theme;