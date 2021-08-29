import * as CSS from "csstype";

export type RRTColor = {
  main: string;
  minContrast: string;
  maxContrast: string;
};

type ColorDefinition = {
  background: RRTColor;
  backgroundAlt?: RRTColor;
  text: RRTColor;
  textAlt?: RRTColor;
  action: RRTColor;
  actionAlt?: RRTColor;
  actionText: RRTColor;
  actionTextAlt?: RRTColor;
};

type Metrics = {
  pageMargin: string;
  xsSpace: string;
  smSpace: string;
  mdSpace: string;
  lgSpace: string;
  xlSpace: string;
  ulSpace: string;
  smBorderRadius: string;
  mdBorderRadius: string;
  lgBorderRadius: string;
};

export interface Theme {
  colors: ColorDefinition;
  metrics: Metrics;
  button: CSS.Properties<string>;
}

export interface Themes {
  [name: string]: Theme;
}
