export default class ShadowDom extends HTMLElement {
  public shadow = this.attachShadow({ mode: 'open' });
  public constructor() {
    super();

    this.shadow.innerHTML = `<h1>11111</h1>`
  }
}