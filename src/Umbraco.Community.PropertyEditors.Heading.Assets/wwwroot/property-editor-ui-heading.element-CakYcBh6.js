import { LitElement as g, html as y, property as m, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as w } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
var x = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, d = (e, t, i, a) => {
  for (var l = a > 1 ? void 0 : a ? $(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (l = (a ? s(t, i, l) : s(l)) || l);
  return a && l && x(t, i, l), l;
}, E = (e, t, i) => t.has(e) || f("Cannot " + i), z = (e, t, i) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), n = (e, t, i) => (E(e, t, "access private method"), i), u, v, c;
let p = class extends w(g) {
  constructor() {
    super(...arguments), z(this, u), this._sizeOptions = [];
  }
  set config(e) {
    var i;
    const t = e.getValueByAlias("allowedHeadings");
    if (Array.isArray(t)) {
      const a = t.filter((s) => typeof s == "string" && s.trim() !== "");
      this._sizeOptions = a.map((s) => ({
        value: s,
        name: s
      }));
      const l = (i = this.value) == null ? void 0 : i.size;
      if (!this._sizeOptions.some((s) => s.value === l) && this._sizeOptions.length > 0) {
        const s = {
          ...this.value,
          size: this._sizeOptions[0].value
        };
        this.value = s, this.dispatchEvent(new b());
      }
    } else
      this._sizeOptions = [];
    this.requestUpdate();
  }
  render() {
    var e, t, i, a, l, r, s;
    return y`
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
      n(this, u, v).call(this, "size", h.value);
    }}>
          </uui-select>
        </div>
        <div style="flex: 1;">
          <uui-input
            id="text"
            value=${((t = this.value) == null ? void 0 : t.text) ?? ""}
            style="width: 100%;"
            label="Heading text"            
            @input=${(o) => n(this, u, v).call(this, "text", o.target.value)}>
          </uui-input>
        </div>
        <div style="display: flex; align-items: center; gap: 2px; margin-left: 2px;">
          <uui-button
            compact
            look=${(i = this.value) != null && i.bold ? "primary" : "outline"}
            label="Bold"
            title="Bold"
            @click=${() => n(this, u, c).call(this, "bold")}>
            <strong>B</strong>
          </uui-button>
          <uui-button
            compact
            look=${(a = this.value) != null && a.italic ? "primary" : "outline"}
            label="Italic"
            title="Italic"
            @click=${() => n(this, u, c).call(this, "italic")}>
            <em>I</em>
          </uui-button>
          <uui-button
            compact
            look=${(l = this.value) != null && l.underline ? "primary" : "outline"}
            label="Underline"
            title="Underline"
            @click=${() => n(this, u, c).call(this, "underline")}>
            <u>U</u>
          </uui-button>
          <uui-button
            compact
            look=${(r = this.value) != null && r.superscript ? "primary" : "outline"}
            label="Superscript"
            title="Superscript"
            @click=${() => n(this, u, c).call(this, "superscript")}>
            x<sup>2</sup>
          </uui-button>
          <uui-button
            compact
            look=${(s = this.value) != null && s.subscript ? "primary" : "outline"}
            label="Subscript"
            title="Subscript"
            @click=${() => n(this, u, c).call(this, "subscript")}>
            x<sub>2</sub>
          </uui-button>
        </div>
      </div>
    `;
  }
};
u = /* @__PURE__ */ new WeakSet();
v = function(e, t) {
  const i = { ...this.value };
  i[e] = t, this.value = i, this.dispatchEvent(new b());
};
c = function(e) {
  const t = { ...this.value };
  t[e] = !t[e], e === "superscript" && t.superscript ? t.subscript = !1 : e === "subscript" && t.subscript && (t.superscript = !1), this.value = t, this.dispatchEvent(new b());
};
d([
  m({ type: Object, attribute: !1 })
], p.prototype, "manifest", 2);
d([
  m({ type: Object, attribute: !1 })
], p.prototype, "value", 2);
d([
  m({ attribute: !1 })
], p.prototype, "config", 1);
p = d([
  _("umb-community-property-editor-ui-heading")
], p);
const P = p;
export {
  p as PropertyEditorUIHeadingElement,
  P as default
};
//# sourceMappingURL=property-editor-ui-heading.element-CakYcBh6.js.map
