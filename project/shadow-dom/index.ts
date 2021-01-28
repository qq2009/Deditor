import {createElement} from "./tool";
import {createStyle} from "./style";
import {createContenteditable} from "./edit";
import {createHeader} from "./header";

function createEditorBox(header: HTMLHeadElement, edit: HTMLDivElement) {
  const e = createElement<HTMLSelectElement>('section');
  e.setAttribute('class', 'deditor');
  e.appendChild(header);
  e.appendChild(edit);
  return e;
}

export default class ShadowDom extends HTMLElement {
  public shadow = this.attachShadow({mode: 'open'});
  public edit = createContenteditable();
  public header = createHeader();

  public constructor() {
    super();
    this.shadow.appendChild(createStyle());
    this.shadow.appendChild(createEditorBox(this.header, this.edit));
  }
}
