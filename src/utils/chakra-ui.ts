import { DefaultTheme } from "@chakra-ui/core";
import themes from "../theme";

interface Config {
  color: string;
  bg: string;
  borderColor: string;
  placeholderColor: string;
}

type ConfigReturnType = {
  light: Config;
  dark: Config;
};

export const cssResetConfig: (
  theme: DefaultTheme,
  defaultConfig?: ConfigReturnType
) => ConfigReturnType = (theme) => ({
  light: {
    color: themes.colors.gray[900],
    bg: themes.colors.gray[200],
    borderColor: themes.colors.gray[200],
    placeholderColor: themes.colors.gray[400],
  },
  dark: {
    color: themes.colors.primary[300],
    bg: themes.colors.dark[900],
    borderColor: themes.colors.whiteAlpha[300],
    placeholderColor: themes.colors.whiteAlpha[400],
  },
});
