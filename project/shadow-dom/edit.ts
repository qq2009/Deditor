import { createElement } from "./tool";

export function createContenteditable() {
  const e = createElement<HTMLDivElement>('div');
  e.contentEditable = 'true';
  e.setAttribute('class', 'deditor-edit')
  return e;
}
