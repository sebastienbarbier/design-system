import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "../../index.scss";

@customElement("sb-badge")
export default class Badge extends LitElement {
  static styles = css`
    div.sb-badge {
      display: inline-block;
      padding: 4px 8px;
      background: var(--sys-color-surface);
      color: var(--sys-color-on-surface);
      font-family: var(--sys-typeface-sans-variable);
      font-size: 0.8em;
      border-radius: 3px;
    }
  `;

  render() {
    return html` <div class="sb-badge"><slot></slot></div> `;
  }
}
