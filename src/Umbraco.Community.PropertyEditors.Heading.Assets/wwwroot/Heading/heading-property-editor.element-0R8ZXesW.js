import { LitElement as c, html as y, property as h, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as m } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
var g = Object.defineProperty, E = Object.getOwnPropertyDescriptor, v = (i) => {
  throw TypeError(i);
}, l = (i, t, e, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, e) : t, o = i.length - 1, p; o >= 0; o--)
    (p = i[o]) && (a = (s ? p(t, e, a) : p(a)) || a);
  return s && a && g(t, e, a), a;
}, w = (i, t, e) => t.has(i) || v("Cannot " + e), x = (i, t, e) => t.has(i) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), d = (i, t, e) => (w(i, t, "access private method"), e), n, u;
let r = class extends m(c) {
  constructor() {
    super(...arguments), x(this, n), this._sizeOptions = [];
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
    return y`
      <div style="display: flex; width: 100%;">
        <div style="width: 60px; margin-right: 2px;">
          <uui-select
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
      d(this, n, u).call(this, "size", s.value);
    }}>
          </uui-select>
        </div>
        <div style="flex: 1;">
          <uui-input
            id="text"
            value=${((t = this.value) == null ? void 0 : t.text) ?? ""}
            style="width: 100%;"
            @input=${(e) => d(this, n, u).call(this, "text", e.target.value)}>
          </uui-input>
        </div>
      </div>
    `;
  }
};
n = /* @__PURE__ */ new WeakSet();
u = function(i, t) {
  const e = { ...this.value };
  e[i] = t, this.value = e, this.dispatchEvent(new _());
};
l([
  h({ type: Object, attribute: !1 })
], r.prototype, "manifest", 2);
l([
  h({ type: Object, attribute: !1 })
], r.prototype, "value", 2);
l([
  h({ attribute: !1 })
], r.prototype, "config", 1);
r = l([
  f("heading-property-editor")
], r);
const $ = r;
export {
  $ as default,
  r as headingPropertyEditorElement
};
//# sourceMappingURL=heading-property-editor.element-0R8ZXesW.js.map
