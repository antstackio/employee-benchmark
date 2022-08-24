import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles/constants/breakpoints";
import { themeVars } from "../../styles/theme.css";

export const levelSelectorClass = style({
  border: 0,
  padding: "",
  fontSize: themeVars.fontSizes.med,
  background: "none",
  borderRadius: 0,
  outline: "none",
  transition: "all 0.2s ease-in-out",
  borderBottom: `1px solid transparent`,
  ":hover": {
    borderBottom: `1px solid ${themeVars.colors.activeTechnology}`,
  },
});
export const levelSelectorActive = style({
  borderBottom: `1px solid ${themeVars.colors.activeTechnology}`,
  color: themeVars.colors.activeTechnology,
});
export const levelSelectorContainer = style({});

export const levelHeading = style({
  fontSize: themeVars.fontSizes.lg,
  textAlign: "left",
  margin: "16px 0",
  "@media": {
    [breakpoints.laptop]: {
      margin: "32px 0",
    },
  },
});

export const levelSelectorButtonContainer = style({
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
  "@media": {
    [breakpoints.laptop]: {
      gap: "30px",
    },
  },
});
