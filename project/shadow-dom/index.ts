import {createElement, uuid} from "./tool";
import {createStyle} from "./style";
import {createContenteditable} from "./edit";
import {Headers} from "./header";
import { Plugin } from "../plugin";

function createEditorBox(header: HTMLHeadElement, edit: HTMLDivElement) {
  const e = createElement<HTMLSelectElement>('section');
  e.setAttribute('class', 'deditor');
  e.appendChild(header);
  e.appendChild(edit);
  return e;
}

interface Iinstance {
  [key: string]: any;
}

export default class ShadowDom extends Plugin {
  public shadow = this.attachShadow({mode: 'open'});
  public edit = createContenteditable();
  public header: Headers;
  public ID: string = '';

  static instance: Iinstance = {};
  public constructor() {
    super();
    this.loadPlugin();

    this.header = new Headers();
  }

  /**
   *  custom element 首次被插入文档DOM时 被调用
   * */
  public connectedCallback() {
    this.shadow.appendChild(createStyle());
    this.shadow.appendChild(createEditorBox(this.header.getHead(), this.edit));
    this.ID = this.getAttribute('id') ?? 'u' + uuid();
    ShadowDom.instance[this.ID] = {};
  }

  /**
   * 卸载
   * */
  public disconnectedCallback() {
    delete ShadowDom.instance[this.ID];
  }
}
