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
  hoverSearchButtonColor: '#8fd29f',
  logoutButtonColor: '#db2828',
  hoverLogoutButtonColor: '#ed9494',
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#000000',
        },
      },
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          size: 'sm',
          backgroundColor: Colors.searchButtonColor,
          color: Colors.primary,
          fontWeight: '600',
          border: 'none',
          borderRadius: '10px',
          fontSize: '14px',
          '&:hover': {
            backgroundColor: Colors.hoverSearchButtonColor,
          },
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          h1: {
            fontSize: '24px',
          },
          h2: {
            fontSize: '20px',
          },
          h3: {
            fontSize: '18px',
          },
          display1: {
            fontFamily: 'Helvetica Neue' || 'Arial' || 'sans-serif',
            fontSize: '14px',
          },
        },
      },
    },
  },
})

export default theme
