import { LitElement as m, html as f, property as h, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as _ } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as d } from "@umbraco-cms/backoffice/event";
var g = Object.defineProperty, w = Object.getOwnPropertyDescriptor, c = (i) => {
  throw TypeError(i);
}, p = (i, t, e, a) => {
  for (var r = a > 1 ? void 0 : a ? w(t, e) : t, l = i.length - 1, s; l >= 0; l--)
    (s = i[l]) && (r = (a ? s(t, e, r) : s(r)) || r);
  return a && r && g(t, e, r), r;
}, E = (i, t, e) => t.has(i) || c("Cannot " + e), z = (i, t, e) => t.has(i) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), v = (i, t, e) => (E(i, t, "access private method"), e), o, u;
let n = class extends _(m) {
  constructor() {
    super(...arguments), z(this, o), this._sizeOptions = [];
  }
  set config(i) {
    var e;
    const t = i.getValueByAlias("allowedHeadings");
    if (Array.isArray(t)) {
      const a = t.filter((s) => typeof s == "string" && s.trim() !== "");
      this._sizeOptions = a.map((s) => ({
        value: s,
        name: s
      }));
      const r = (e = this.value) == null ? void 0 : e.size;
      if (!this._sizeOptions.some((s) => s.value === r) && this._sizeOptions.length > 0) {
        const s = {
          ...this.value,
          size: this._sizeOptions[0].value
        };
        this.value = s, this.dispatchEvent(new d());
      }
    } else
      this._sizeOptions = [];
    this.requestUpdate();
  }
  render() {
    var i, t;
    return f`
      <div style="display: flex; width: 100%;">
        <div style="width: 60px; margin-right: 2px;">
          <uui-select
            value=${((i = this.value) == null ? void 0 : i.size) ?? ""}
            style="width: 100%;"
            .options=${this._sizeOptions.map((e) => {
      var a;
      return {
        ...e,
        selected: e.value == ((a = this.value) == null ? void 0 : a.size)
      };
    })}
            @change=${(e) => {
      const a = e.target;
      v(this, o, u).call(this, "size", a.value);
    }}>
          </uui-select>
        </div>
        <div style="flex: 1;">
          <uui-input
            id="text"
            value=${((t = this.value) == null ? void 0 : t.text) ?? ""}
            style="width: 100%;"
            @input=${(e) => v(this, o, u).call(this, "text", e.target.value)}>
          </uui-input>
        </div>
      </div>
    `;
  }
};
o = /* @__PURE__ */ new WeakSet();
u = function(i, t) {
  const e = { ...this.value };
  e[i] = t, this.value = e, this.dispatchEvent(new d());
};
p([
  h({ type: Object, attribute: !1 })
], n.prototype, "manifest", 2);
p([
  h({ type: Object, attribute: !1 })
], n.prototype, "value", 2);
p([
  h({ attribute: !1 })
], n.prototype, "config", 1);
n = p([
  y("umb-community-property-editor-ui-heading")
], n);
const b = n;
export {
  n as PropertyEditorUIHeadingElement,
  b as default
};
//# sourceMappingURL=property-editor-ui-heading.element-vzvOr01w.js.map
