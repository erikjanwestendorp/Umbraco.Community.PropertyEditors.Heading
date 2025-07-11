import { LitElement as v, html as f, property as h, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as m } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
var g = Object.defineProperty, E = Object.getOwnPropertyDescriptor, c = (i) => {
  throw TypeError(i);
}, n = (i, t, e, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, e) : t, o = i.length - 1, p; o >= 0; o--)
    (p = i[o]) && (a = (s ? p(t, e, a) : p(a)) || a);
  return s && a && g(t, e, a), a;
}, w = (i, t, e) => t.has(i) || c("Cannot " + e), x = (i, t, e) => t.has(i) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), d = (i, t, e) => (w(i, t, "access private method"), e), l, u;
let r = class extends m(v) {
  constructor() {
    super(...arguments), x(this, l), this._sizeOptions = [];
  }
  set config(i) {
    const t = i.getValueByAlias("allowedHeadings");
    Array.isArray(t) ? this._sizeOptions = t.map((e) => ({
      value: e,
      name: e
    })) : this._sizeOptions = [], this.requestUpdate();
  }
  render() {
    var i, t;
    return f`
      <div style="display: flex; width: 100%;">
        <!-- Switched order: Select first, then Input -->
        <div style="flex: 0 0 10%; margin-right: 2px;">
          <uui-select
            label="Select size"
            placeholder="Select size..."
            value=${((i = this.value) == null ? void 0 : i.size) ?? ""}
            style="width: 100%;"
            .options=${this._sizeOptions.map((e) => {
      var s;
      return {
        ...e,
        selected: e.value == ((s = this.value) == null ? void 0 : s.size)
      };
    })}
            @change=${(e) => {
      const s = e.target;
      d(this, l, u).call(this, "size", s.value);
    }}>
          </uui-select>
        </div>
        <div style="flex: 0 0 90%;">
          <uui-input
            id="text"
            value=${((t = this.value) == null ? void 0 : t.text) ?? ""}
            style="width: 100%;"
            @input=${(e) => d(this, l, u).call(this, "text", e.target.value)}>
          </uui-input>
        </div>
      </div>
    `;
  }
};
l = /* @__PURE__ */ new WeakSet();
u = function(i, t) {
  const e = { ...this.value };
  e[i] = t, this.value = e, this.dispatchEvent(new _());
};
n([
  h({ type: Object, attribute: !1 })
], r.prototype, "manifest", 2);
n([
  h({ type: Object, attribute: !1 })
], r.prototype, "value", 2);
n([
  h({ attribute: !1 })
], r.prototype, "config", 1);
r = n([
  y("heading-property-editor")
], r);
const b = r;
export {
  b as default,
  r as headingPropertyEditorElement
};
//# sourceMappingURL=heading-property-editor.element-B9ZRBHK7.js.map
