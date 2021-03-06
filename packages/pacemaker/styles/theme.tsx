import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "./colors";

export const muiTheme = {
  palette: {
    primary: {
      main: colors.lapis,
      dark: colors.lapisDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.lapis,
      dark: colors.darkSpring,
      contrastText: colors.darkGrey,
    },
    tertiary: {
      main: colors.darkGrey,
      dark: colors.helperDarkGrey,
      contrastText: colors.white,
    },
    error: {
      light: colors.rubyLight,
      main: colors.ruby,
      dark: colors.rubyDark,
    },
    warning: {
      light: colors.canaryLight,
      main: colors.canary,
      dark: colors.canaryDark,
    },
    info: {
      light: colors.indigoLight,
      main: colors.indigo,
      dark: colors.indigoDark,
    },
    success: {
      light: colors.lightSpring,
      main: colors.spring,
      dark: colors.darkSpring,
    },
    text: {
      primary: colors.darkGrey,
      paper: colors.white,
    },
    background: {
      default: colors.lightGrey1,
      paper: colors.white,
    },
  },
  typography: {
    fontSize: 13,
    fontFamily: ["Poppins", "Rubik", "sans-serif"].join(","),
    h1: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "2.15rem",
    },
    h2: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "Rubik, sans-serif",
      fontSize: " 1.75rem",
    },
    h4: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "1.25rem",
    },
    containedBtn: {
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
      lineHeight: "1.5rem",
      letterSpacing: ".3px",
    },
    outlinedBtn: {
      fontWeight: 400,
      fontSize: "1rem",
      textTransform: "none",
      lineHeight: "1.5rem",
      letterSpacing: ".3px",
    },
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          width: "100%",
          scrollBehavior: "smooth",
        },
        body: {
          display: "flex",
          height: "100%",
          width: "100%",
          fontFamily: "Poppins, sans-serif",
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          border: "1px solid",
          borderColor: colors.lightGrey4,
          borderRadius: "4px",
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: "none",
    //     },
    //   },
    // },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:before": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          outline: 0,
          ".MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        },
      },
    },
  },
};

export let theme = createTheme(muiTheme);
theme = responsiveFontSizes(theme);

// @ts-ignore
window.theme = theme;

// 3. Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
