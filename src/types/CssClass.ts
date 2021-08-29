import { Properties } from "csstype";

export interface CssClass {
  [name: string]: Properties;
}

export interface ThemeClasses {
  [name: string]: CssClass;
}
