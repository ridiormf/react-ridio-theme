import React from "react";
import { Properties } from "csstype";
import { Theme } from "../types/ThemeProvider";
import { CssClass } from "../types/CssClass";
import { ActiveThemeContext } from "../providers/ThemeProvider";

export default function Button({
  children,
  className,
  activeTheme,
  ...props
}: {
  activeTheme?: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLButtonElement>): JSX.Element {

  const theme = React.useContext(ActiveThemeContext);
  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      type="button"
      className={`rrt-${activeTheme ?? theme}-button${className ? ` ${className}` : ""
        }`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  activeTheme: null,
};

export function makeButtonClass(theme: Theme): Properties | CssClass {
  const { colors, metrics } = theme;
  return {
    display: "inline-block",
    border: "none",
    backgroundPosition: "center",
    backgroundColor: colors.action.main,
    color: colors.actionText.main,
    transition: "background 0.8s",
    padding: `${metrics.mdSpace} ${metrics.xlSpace}`,
    borderRadius: metrics.smBorderRadius,
    outline: "none",
    ":focus": {
      outline: "none",
    },
    ":hover": {
      background: `${colors.action.minContrast} radial-gradient(circle, transparent 1%, ${colors.action.minContrast} 1%) center/15000%`,
      // backgroundColor: colors.action.minContrast,
    },
    ":active": {
      backgroundColor: colors.action.maxContrast,
      transition: "background 0s",
      backgroundSize: "100%",
    },
  };
}
