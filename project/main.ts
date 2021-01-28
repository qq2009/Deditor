import ShadowDom from './shadow-dom';

class Deditor extends ShadowDom {
  public constructor() {
    super();
  }
}

customElements.define('d-editor', Deditor);
