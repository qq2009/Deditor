import { createElement } from "./tool";
import { Plugin } from "../plugin";
import bus from "../event-handle/bus";

function createTestButton() {
  const e = createElement<HTMLButtonElement>('button');
  e.onclick = function () {
    bus.emit('backColor','red')
  }
  e.innerText = '点击测试';
  return e;
}

function createNav() {
  const ul = createElement<HTMLUListElement>('ul');
  ul.setAttribute('class','deditor-header-nav')
  return ul;
}

export class Headers {
  private head = createElement<HTMLHeadElement>('header');
  private nav = createNav();
  public constructor() {
    this._init();
  }

  private _init() {
    const { head, nav } = this;
    head.setAttribute('class','deditor-header');

    // 安装 nav
    // nav.appendChild()
    this.installNav();

    // 注入nav
    head.appendChild(nav);
  }

  private installNav() {
    const { pluginUse } = Plugin;
    for (const Node of pluginUse) {
      Node.installHeades()
    }
  }

  public getHead() {
    return this.head;
  }
}
