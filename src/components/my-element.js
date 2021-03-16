import {LitElement, html} from 'lit-element';
import style from "./my-element.scss";

class MyElement extends LitElement {
  render() {
    return html`
      <style>${style}</style>
      <div class="my-element">Hello from MARCA!</div>
    `;
  }
}

customElements.define('my-element', MyElement);