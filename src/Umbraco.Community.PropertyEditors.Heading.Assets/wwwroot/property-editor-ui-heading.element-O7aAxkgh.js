import { LitElement as y, html as _, property as m, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as x } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as d } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, v = (e, t, s, a) => {
  for (var l = a > 1 ? void 0 : a ? $(t, s) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (l = (a ? i(t, s, l) : i(l)) || l);
  return a && l && E(t, s, l), l;
}, z = (e, t, s) => t.has(e) || f("Cannot " + s), O = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), r = (e, t, s) => (z(e, t, "access private method"), s), u, b, g, c;
let p = class extends x(y) {
  constructor() {
    super(...arguments), O(this, u), this._sizeOptions = [];
  }
  set config(e) {
    var s;
    const t = e.getValueByAlias("allowedHeadings");
    if (Array.isArray(t)) {
      const a = t.filter((i) => typeof i == "string" && i.trim() !== "");
      this._sizeOptions = a.map((i) => ({
        value: i,
        name: i
      }));
      const l = (s = this.value) == null ? void 0 : s.size;
      if (!this._sizeOptions.some((i) => i.value === l) && this._sizeOptions.length > 0) {
        const i = {
          ...this.value,
          size: this._sizeOptions[0].value
        };
        this.value = i, this.dispatchEvent(new d());
      }
    } else
      this._sizeOptions = [];
    this.requestUpdate();
  }
  render() {
    var e, t, s, a, l, n, i;
    return _`
      <div style="display: flex; width: 100%; align-items: center;">
        <div style="width: 60px; margin-right: 2px;">
          <uui-select
            value=${((e = this.value) == null ? void 0 : e.size) ?? ""}
            style="width: 100%;"
            label="Select heading size"
            .options=${this._sizeOptions.map((o) => {
      var h;
      return {
        ...o,
        selected: o.value == ((h = this.value) == null ? void 0 : h.size)
      };
    })}
            @change=${(o) => {
      const h = o.target;
      r(this, u, g).call(this, h.value);
    }}>
          </uui-select>
        </div>
        <div style="flex: 1;">
          <uui-input
            id="text"
            value=${((t = this.value) == null ? void 0 : t.text) ?? ""}
            style="width: 100%;"
            label="Heading text"            
            @input=${(o) => r(this, u, b).call(this, o.target.value)}>
          </uui-input>
        </div>
        <div style="display: flex; align-items: center; gap: 2px; margin-left: 2px;">
          <uui-button
            compact
            look=${(s = this.value) != null && s.bold ? "primary" : "outline"}
            label="Bold"
            title="Bold"
            @click=${() => r(this, u, c).call(this, "bold")}>
            <strong>B</strong>
          </uui-button>
          <uui-button
            compact
            look=${(a = this.value) != null && a.italic ? "primary" : "outline"}
            label="Italic"
            title="Italic"
            @click=${() => r(this, u, c).call(this, "italic")}>
            <em>I</em>
          </uui-button>
          <uui-button
            compact
            look=${(l = this.value) != null && l.underline ? "primary" : "outline"}
            label="Underline"
            title="Underline"
            @click=${() => r(this, u, c).call(this, "underline")}>
            <u>U</u>
          </uui-button>
          <uui-button
            compact
            look=${(n = this.value) != null && n.superscript ? "primary" : "outline"}
            label="Superscript"
            title="Superscript"
            @click=${() => r(this, u, c).call(this, "superscript")}>
            x<sup>2</sup>
          </uui-button>
          <uui-button
            compact
            look=${(i = this.value) != null && i.subscript ? "primary" : "outline"}
            label="Subscript"
            title="Subscript"
            @click=${() => r(this, u, c).call(this, "subscript")}>
            x<sub>2</sub>
          </uui-button>
        </div>
      </div>
    `;
  }
};
u = /* @__PURE__ */ new WeakSet();
b = function(e) {
  const t = { ...this.value, text: e };
  this.value = t, this.dispatchEvent(new d());
};
g = function(e) {
  const t = { ...this.value, size: e };
  this.value = t, this.dispatchEvent(new d());
};
c = function(e) {
  const t = { ...this.value };
  t[e] = !t[e], e === "superscript" && t.superscript ? t.subscript = !1 : e === "subscript" && t.subscript && (t.superscript = !1), this.value = t, this.dispatchEvent(new d());
};
v([
  m({ type: Object, attribute: !1 })
], p.prototype, "manifest", 2);
v([
  m({ type: Object, attribute: !1 })
], p.prototype, "value", 2);
v([
  m({ attribute: !1 })
], p.prototype, "config", 1);
p = v([
  w("umb-community-property-editor-ui-heading")
], p);
const k = p;
export {
  p as PropertyEditorUIHeadingElement,
  k as default
};
//# sourceMappingURL=property-editor-ui-heading.element-O7aAxkgh.js.map
