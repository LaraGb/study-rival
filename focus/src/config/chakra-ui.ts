import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles:{
    fonts:{
      body:'Roboto, sans-serif'
    },
    global:{
      html:{
        fontSize:'62.5%'
      },
      body:{
        fontFamily:'Roboto, sans-serif',
        color:'#ADB8CC'
      }
    }
  },
  colors:{
    brand:{
      100:"#571313"
    },
    details:{
      primary:{
        light:'#3361FF'
      }
    },
    text:{
      gray:{
        'light':'',
        'medium':'#6B7A99',
        'dark':''
      }
    }
  },
 
});

/*
 styles: {
    fonts:{
      body:'Roboto, sans-serif'
    },
    colors:{
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
      primary: {
            main: "#7bb9e8",
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1"
      },
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f7fafc",
        100: "#171923",
      },
      bg:{
       white:'white'
      }
    },
    border:{
      page:'3px solid gray'
    },
    global: {
      html:{
        '@media (max-width: 1024px)': {
          fontSize: '54%', 
        }, 
      },
      body: {
        color:'#ADB8CC'
      },
      a:{
        color:'#7D8FB3'
      }
    },
  },
*/

export default theme;