import { theme } from "@chakra-ui/core";

const sans = ["Jost", "-apple-system", "Roboto"];

export default {
  ...theme,

  fonts: {
    ...theme.fonts,
    heading: `${sans}`,
    body: `${sans}`,
  },

  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "28px",
    "3xl": "36px",
    "4xl": "48px",
    "5xl": "64px",
    "6xl": "72px",
  },

  colors: {
    ...theme.colors,
    dark: {
      600: "#393e46",
      900: "#222831",
    },
    primary: {
      300: "#00fff5",
      600: "#00adb5",
    },
  },
};
