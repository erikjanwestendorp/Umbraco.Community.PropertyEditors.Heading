import { LitElement as x, html as s, css as y, query as E, property as v, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as z } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as p } from "@umbraco-cms/backoffice/event";
var w = Object.defineProperty, T = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, u = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? T(e, i) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (n = (a ? c(e, i, n) : c(n)) || n);
  return a && n && w(e, i, n), n;
}, C = (t, e, i) => e.has(t) || f("Cannot " + i), A = (t, e, i) => e.has(t) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), h = (t, e, i) => (C(t, e, "access private method"), i), d, g, b, _;
const m = ["bold", "italic", "underline", "superscript", "subscript"], $ = {
  bold: { label: "Bold", command: "bold", render: () => s`<strong>B</strong>` },
  italic: { label: "Italic", command: "italic", render: () => s`<em>I</em>` },
  underline: { label: "Underline", command: "underline", render: () => s`<u>U</u>` },
  superscript: { label: "Superscript", command: "superscript", render: () => s`x<sup>2</sup>` },
  subscript: { label: "Subscript", command: "subscript", render: () => s`x<sub>2</sub>` }
};
let r = class extends z(x) {
  constructor() {
    super(...arguments), A(this, d), this._sizeOptions = [], this._allowedFormattingOptions = [...m], this._internalTextChange = !1;
  }
  updated(t) {
    var e;
    if (super.updated(t), t.has("value") && !this._internalTextChange && this._contentEditableEl) {
      const i = ((e = this.value) == null ? void 0 : e.text) ?? "";
      this._contentEditableEl.innerHTML !== i && (this._contentEditableEl.innerHTML = i);
    }
    this._internalTextChange = !1;
  }
  set config(t) {
    var a;
    const e = t.getValueByAlias("allowedHeadings");
    if (Array.isArray(e)) {
      const n = e.filter((o) => typeof o == "string" && o.trim() !== "");
      this._sizeOptions = n.map((o) => ({
        value: o,
        name: o
      }));
      const l = (a = this.value) == null ? void 0 : a.size;
      !this._sizeOptions.some((o) => o.value === l) && this._sizeOptions.length > 0 && (this.value = { ...this.value, size: this._sizeOptions[0].value }, this.dispatchEvent(new p()));
    } else
      this._sizeOptions = [];
    const i = t.getValueByAlias("allowedFormattingOptions");
    Array.isArray(i) && i.length > 0 ? this._allowedFormattingOptions = i.filter(
      (n) => m.includes(n)
    ) : this._allowedFormattingOptions = [...m], this.requestUpdate();
  }
  render() {
    var t;
    return s`
      <div class="heading-editor">
        <div class="size-selector">
          <uui-select
            value=${((t = this.value) == null ? void 0 : t.size) ?? ""}
            label="Select heading size"
            .options=${this._sizeOptions.map((e) => {
      var i;
      return {
        ...e,
        selected: e.value == ((i = this.value) == null ? void 0 : i.size)
      };
    })}
            @change=${(e) => {
      const i = e.target;
      h(this, d, _).call(this, i.value);
    }}>
          </uui-select>
        </div>
        <div
          id="heading-content"
          contenteditable="true"
          data-placeholder="Heading text"
          @input=${h(this, d, g)}>
        </div>
        ${this._allowedFormattingOptions.length > 0 ? s`
          <div class="toolbar">
            ${this._allowedFormattingOptions.map((e) => {
      const i = $[e];
      return s`
                <uui-button
                  compact
                  look="outline"
                  label=${i.label}
                  title=${i.label}
                  @mousedown=${(a) => {
        a.preventDefault(), h(this, d, b).call(this, i.command);
      }}>
                  ${i.render()}
                </uui-button>
              `;
    })}
          </div>
        ` : ""}
      </div>
    `;
  }
};
d = /* @__PURE__ */ new WeakSet();
g = function(t) {
  const e = t.target;
  this._internalTextChange = !0, this.value = { ...this.value, text: e.innerHTML }, this.dispatchEvent(new p());
};
b = function(t) {
  document.execCommand(t, !1), this._contentEditableEl && (this._internalTextChange = !0, this.value = { ...this.value, text: this._contentEditableEl.innerHTML }, this.dispatchEvent(new p()));
};
_ = function(t) {
  this.value = { ...this.value, size: t }, this.dispatchEvent(new p());
};
r.styles = y`
    :host {
      display: block;
    }
    .heading-editor {
      display: flex;
      width: 100%;
      align-items: stretch;
    }
    .size-selector {
      flex: 0 0 auto;
    }
    #heading-content {
      flex: 1;
      border: 1px solid var(--uui-color-border, #d8d7d9);
      border-radius: var(--uui-border-radius, 3px);
      padding: 0 var(--uui-size-space-3, 12px);
      min-height: var(--uui-size-11, 36px);
      line-height: var(--uui-size-11, 36px);
      outline: none;
      font-family: inherit;
      font-size: inherit;
      background: var(--uui-color-surface, #fff);
      box-sizing: border-box;
      margin: 0 2px;
    }
    #heading-content:focus {
      border-color: var(--uui-color-focus, #1a73e8);
    }
    #heading-content:empty::before {
      content: attr(data-placeholder);
      color: var(--uui-color-text-alt, #adadad);
      pointer-events: none;
    }
    .toolbar {
      display: flex;
      align-items: center;
      gap: 2px;
      flex: 0 0 auto;
    }
  `;
u([
  E("#heading-content")
], r.prototype, "_contentEditableEl", 2);
u([
  v({ type: Object, attribute: !1 })
], r.prototype, "manifest", 2);
u([
  v({ type: Object, attribute: !1 })
], r.prototype, "value", 2);
u([
  v({ attribute: !1 })
], r.prototype, "config", 1);
r = u([
  O("umb-community-property-editor-ui-heading")
], r);
const M = r;
export {
  r as PropertyEditorUIHeadingElement,
  M as default
};
//# sourceMappingURL=property-editor-ui-heading.element-DopfUUd4.js.map
