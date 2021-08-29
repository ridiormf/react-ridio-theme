import * as CSS from "csstype";

function convertToClassName(name: string): string {
  let result = "";
  const split = name.split(/(?=[A-Z])/);
  const { length } = split;
  for (let i = 0; i < length; i += 1) {
    result += `${split[i].toLowerCase()}${i < length - 1 ? "-" : ""}`;
  }

  return result;
}

// function createCssAttributes(name: string, rules: CSS.Properties) {
//   const styles: Array<string> = [];
//   Object.entries(rules).forEach((item) => {
//     if (item[0].includes(".") || item[0].includes(":")) {
//     } else {
//       styles.push(`${convertToClassName(item[0])}: ${item[1]};`);
//     }
//   });
//   return styles.join("");
// }

interface CssClass {
  [name: string]: CSS.Properties;
}

export default function createCssClass(
  name: string,
  rules: CSS.Properties | CssClass
): void {
  const styles: Array<string> = [];
  Object.entries(rules).forEach((item) => {
    if (item[0].includes(".") || item[0].includes(":")) {
      createCssClass(`${name}${item[0]}`, item[1]);
    } else {
      styles.push(`${convertToClassName(item[0])}: ${item[1]};`);
    }
  });
  const stringRules = styles.join("");
  const style = document.createElement("style");
  style.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(style);
  if (!style.sheet?.insertRule && style.sheet) {
    style.sheet.addRule(`.rrt-${name}`, stringRules);
  } else if (style.sheet) {
    style.sheet.insertRule(`.rrt-${name}{${stringRules}}`, 0);
  }
}
