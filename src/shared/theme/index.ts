import { createTheme } from "@mui/material";
import { createStyled } from "@mui/system";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      background: {
        primary: string;
      };
      common: {
        grey: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      background?: {
        primary?: string;
      };
      common?: {
        grey?: string;
      };
    };
  }
}

const theme = createTheme({
  spacing: [0, 4, 8, 16, 24, 32, 48, 56, 64, 72, 86, 96, 120],
  palette: {
    primary: {
      main: "#F0932B",
      light: "#f3ab5b",
    },
    secondary: {
      main: "#2A1803",
      dark: "#1A0F02",
    },
  },
  colors: {
    background: {
      primary: "#FDF4E9",
    },
    common: {
      grey: "#C7C7C7",
    },
  },
  shape: {
    borderRadius: "9px",
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 12,
    h1: {
      fontSize: "4.8rem",
      fontWeight: 700,
      letterSpacing: "2px",
    },
    h2: {
      fontSize: "3.2rem",
      fontWeight: 400,
      letterSpacing: "1px",
    },
    h3: {
      fontSize: "3.2rem",
      fontWeight: 300,
    },
    h5: {
      fontSize: "2rem",
      lineHeight: 2,
    },
    subtitle1: {
      fontSize: "2.1rem",
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "1.3rem",
    },
  },
});

export default theme;

export const styled = createStyled({ defaultTheme: theme });
