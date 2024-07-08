import { html, css, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import { json } from "../../index";

@customElement("sb-badge")
export default class Badge extends LitElement {
  static styles = css`
    div.sb-badge {
      display: inline-block;
      padding: 4px 8px;
      background: ${unsafeCSS(json.comp.badge.backgroundColor)};
      color: ${unsafeCSS(json.comp.badge.color)};
      font-family: ${unsafeCSS(json.comp.badge.fontFamily)};
      font-size: ${unsafeCSS(json.comp.badge.fontSize)};
      border-radius: 3px;
    }
  `;

  render() {
    return html` <div class="sb-badge"><slot></slot></div> `;
  }
}
