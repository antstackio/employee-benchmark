import { style } from "@vanilla-extract/css";
import { breakpoints } from "../styles/constants/breakpoints";

export const formLayoutClass = style({
  display: "block",
  gridTemplateColumns: "1fr",
  "@media": {
    [breakpoints.laptop]: {
      display: "grid",
      gridTemplateColumns: "0.60fr 0.40fr",
    },
  },
});
