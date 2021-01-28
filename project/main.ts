import ShadowDom from './shadow-dom';
import initEvent from "./event-handle";
import { installPlugin } from '../plugin'


class Deditor extends ShadowDom {
  public bus = initEvent();
  public constructor() {
    super();
  }
}

customElements.define('d-editor', Deditor);
installPlugin(Deditor)
// @ts-ignore
window.Deditor = Deditor;
