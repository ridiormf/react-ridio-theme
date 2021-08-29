import { RRTColor } from "../types/ThemeProvider";

/* eslint-disable no-bitwise */
function calcColor(color: number): number {
  let result = color;
  if (result > 255) {
    result = 255;
  } else if (result < 0) {
    result = 0;
  }
  return result;
}

function lightenDarkenColor(color: string, amount: number): string {
  const num = parseInt(color.slice(1), 16);
  let r = num >> 16;
  let g = num & 0x0000ff;
  let b = (num >> 8) & 0x00ff;
  const amountResult = (r + g + b) / 3 > 127.5 ? -amount : amount;
  r = calcColor((num >> 16) + amountResult);
  g = calcColor((num & 0x0000ff) + amountResult);
  b = calcColor(((num >> 8) & 0x00ff) + amountResult);
  return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
}

export default function setRRTColor(color: string): RRTColor {
  return {
    main: color,
    minContrast: lightenDarkenColor(color, 20),
    maxContrast: lightenDarkenColor(color, 50),
  };
}
