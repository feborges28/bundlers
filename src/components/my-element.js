import {LitElement, html, css} from 'lit-element';
import style from "./my-element.scss";

class MyElement extends LitElement {
    static get styles() {
        return [style]
    }

  render() {
    return html`
      <div class="my-element">Hello from MyElement!</div>
    `;
  }
}

customElements.define('my-element', MyElement);