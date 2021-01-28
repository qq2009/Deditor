import { createElement } from "./tool";
export function createHeader() {
  const e = createElement<HTMLHeadElement>('header');
  e.setAttribute('class','deditor-header')
  return e;
}
