import React from "react";
import defaultTheme from "../theme/defaultTheme";
import { Themes, Theme } from "../types/ThemeProvider";
import useConstructor from "../utils/useConstructor";
import createClasses from "./createClasses";

export const ActiveThemeContext = React.createContext<string>("");
export const ThemeContext = React.createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  themes,
  activeTheme,
  children,
}: {
  themes?: Themes;
  activeTheme: string;
  children: React.ReactNode;
}): JSX.Element {
  if (!activeTheme) {
    throw new Error("activeTheme is required");
  }
  useConstructor(() => {
    if (!document.getElementsByClassName(`rrt-${activeTheme}-button`)[0]) {
      // if (!themes) {
      //   throw new Error("themes is required");
      // }
      if (themes) {
        createClasses(themes);
      }
    }
  });
  const theme = React.useContext(ThemeContext);
  const selectedTheme = React.useMemo(
    () => themes?.[activeTheme] ?? theme[activeTheme],
    [themes, activeTheme]
  );
  return (
    <ActiveThemeContext.Provider value={activeTheme}>
      <ThemeContext.Provider value={selectedTheme}>
        {children}
      </ThemeContext.Provider>
    </ActiveThemeContext.Provider>
  );
}

ThemeProvider.defaultProps = {
  themes: null,
};
