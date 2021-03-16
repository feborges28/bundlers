import {LitElement, html, css, unsafeCSS} from 'lit-element';
import style from "./my-element.scss";

class MyElement extends LitElement {
  render() {
    return html`
      <style>${style}</style>
      <div class="my-element">Hello from MARCA!</div>
      <h1 class="my-element">Hello world!</h1>
    `;
  }
}

customElements.define('my-element', MyElement);