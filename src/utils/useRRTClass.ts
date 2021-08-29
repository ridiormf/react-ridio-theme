import React from "react";
import { Properties } from "csstype";
import { ThemeContext } from "../providers/ThemeProvider";
import { CssClass } from "../types/CssClass";
import { Theme } from "../types/ThemeProvider";
import createCssClass from "./cssClassManager";

export default function useRRTClass(
  componentName: string,
  callback: (theme: Theme) => Properties | CssClass
): void {
  const theme = React.useContext(ThemeContext);
  React.useEffect(() => {
    createCssClass(`rrt-${componentName}`, callback(theme));
  }, [theme]);
}
