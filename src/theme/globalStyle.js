import { extendTheme } from '@mui/joy'

export const Colors = {
  // default color
  primary: '#ffffff',
  secondary: '#000000',

  // text color
  headerTextColor: '#303133',
  bodyTextColor: '#000000',
  errorColor: '#D3232F',
  successColor: '#67C23A',
  warningColor: '#E6A23C',

  // button color
  searchButtonColor: '#1fa53e',
  logoutButtonColor: '#db2828',
}

const theme = extendTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    danger: {
      main: Colors.errorColor,
    },
    success: {
      main: Colors.successColor,
    },
    warning: {
      main: Colors.warningColor,
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue' || 'Arial' || 'sans-serif',
    fontSize: 14,
    textTransform: 'none',
    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    h3: {
      fontSize: '18px',
    },
    date: {
      fontSize: '12px',
    },
  },
  breakpoint: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    JoyButton: {
      defaultProps: {
        variant: 'contained',
        color: Colors.searchButtonColor,
        padding: '8px 7px',
        width: '74px',
        borderRadius: '15px',
      },
      styleOverrides: {
        root: {
          color: Colors.searchButtonColor[600],
        },
      },
    },
  },
})

export default theme
