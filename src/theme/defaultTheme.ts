import * as CSS from "csstype";
import { Theme } from "../types/ThemeProvider";
import setRRTColor from "../utils/setRRTColor";

const button: CSS.Properties<string> = {
  backgroundColor: "red",
  color: "white",
};

const Theme: Theme = {
  colors: {
    background: setRRTColor("#FFFFFF"),
    text: setRRTColor("#2E2E2E"),
    actionText: setRRTColor("#FFFFFF"),
    action: setRRTColor("#5151C5"),
  },
  metrics: {
    pageMargin: "3rem",
    xsSpace: "0.1rem",
    smSpace: "0.3rem",
    mdSpace: "0.6rem",
    lgSpace: "1rem",
    xlSpace: "1.5rem",
    ulSpace: "2rem",
    smBorderRadius: "4px",
    mdBorderRadius: "6px",
    lgBorderRadius: "8px",
  },
  button,
};

export default Theme;
