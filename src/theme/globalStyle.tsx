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
  typography: {
    display1: {
      fontFamily: 'Helvetica Neue' || 'Arial' || 'sans-serif',
      fontSize: '14px',
      fontWeight: 100,
    },
    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    h3: {
      fontSize: '18px',
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  components: {
    JoyIconButton: {
      defaultProps: {
        size: 'sm',
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
