import { makeButtonClass } from "../clickables/Button";
import { Themes } from "../types/ThemeProvider";
import createCssClass from "../utils/cssClassManager";

export default function createClasses(themes: Themes): void {
  Object.entries(themes).forEach(([themeName, theme]) => {
    createCssClass(`${themeName}-button`, makeButtonClass(theme));
  });
}
