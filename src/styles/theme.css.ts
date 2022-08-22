import { createTheme } from "@vanilla-extract/css";
import { colors } from "./constants/colors";
import { fontSizes } from "./constants/typography";

export const [themeClass, themeVars] = createTheme({
  fontSizes,
  colors,
});
