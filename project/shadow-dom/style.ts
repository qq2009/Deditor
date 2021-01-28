import { createElement } from "./tool";
const css = require('../style/deditor.css')

export function createStyle() {
  const e = createElement<HTMLStyleElement>('style');
  const str = css.default.toString();
  e.innerHTML = str;
  return e;
}
