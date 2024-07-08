import { html, css, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import { json } from "../../index";

@customElement("sb-title")
export default class Title extends LitElement {
  static styles = css`
    .sb-title {
      font-weight: 600;
      font-variation-settings: "opsz" 24;
      line-height: 1.2em;
      display: flex;
      flex-direction: column;
      padding: 4px 8px;
      position: relative;
      color: ${unsafeCSS(json.comp.title.color)};
      font-family: ${unsafeCSS(json.comp.title.fontFamily)};
      font-size: ${unsafeCSS(json.comp.title.fontSizeH1)};
      border-radius: 3px;

      span {
        display: block;
        font-size: 0.3em;
        font-weight: 400;
        text-transform: uppercase;
        opacity: 0.8;
        top: -2.5em;
        position: absolute;
        font-family: ${unsafeCSS(json.comp.title.headlineFontFamily)};
      }

      &:selection {
        background-color: ${unsafeCSS(
          json.comp.title.selectionBackgroundColor,
        )};
        color: ${unsafeCSS(json.comp.title.selectionColor)};
      }
    }

    h1.sb-title {
      font-size: ${unsafeCSS(json.comp.title.fontSizeH1)};
      span {
        font-size: 0.2em;
        top: -3.5em;
      }
    }
    h2.sb-title {
      font-size: ${unsafeCSS(json.comp.title.fontSizeH2)};
    }
    h3.sb-title {
      font-size: ${unsafeCSS(json.comp.title.fontSizeH3)};
    }
    h4.sb-title {
      font-size: ${unsafeCSS(json.comp.title.fontSizeH4)};
    }
    h5.sb-title {
      font-size: ${unsafeCSS(json.comp.title.fontSizeH5)};
    }
    h6.sb-title {
      font-size: ${unsafeCSS(json.comp.title.fontSizeH6)};
    }
  `;

  @property()
  headline?: string;

  @property()
  variant?: string;

  render() {
    const content = html` <span>${this.headline}</span>
      <slot></slot>`;

    switch (this.variant) {
      case "h1":
        return html`<h1 class="sb-title">${content}</h1>`;
      case "h2":
        return html`<h2 class="sb-title">${content}</h2>`;
      case "h3":
        return html`<h3 class="sb-title">${content}</h3>`;
      case "h4":
        return html`<h4 class="sb-title">${content}</h4>`;
      case "h5":
        return html`<h5 class="sb-title">${content}</h5>`;
      case "h6":
        return html`<h6 class="sb-title">${content}</h6>`;
      default:
        return html`<h1 class="sb-title">${content}</h1>`;
    }
  }
}
