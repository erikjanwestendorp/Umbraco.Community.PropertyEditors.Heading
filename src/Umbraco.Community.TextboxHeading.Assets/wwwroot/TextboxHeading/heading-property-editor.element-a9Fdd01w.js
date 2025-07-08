import { LitElement as v, html as c, property as u, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as y } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
var _ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, l = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? g(e, i) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
  return s && a && _(e, i, a), a;
}, E = (t, e, i) => e.has(t) || d("Cannot " + i), w = (t, e, i) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), x = (t, e, i) => (E(t, e, "access private method"), i), p, h;
let r = class extends y(v) {
  constructor() {
    super(...arguments), w(this, p), this._sizeOptions = [];
  }
  set config(t) {
    console.log("Config set:", t);
    const e = t.getValueByAlias("allowedHeadings");
    console.log("Allowed headings:", e), Array.isArray(e) ? this._sizeOptions = e.map((i) => ({
      value: i,
      name: i
    })) : this._sizeOptions = [], this.requestUpdate();
  }
  render() {
    var t, e;
    return c`
      <div style="display: flex; width: 100%;">
        <div style="flex: 0 0 80%;">
          <uui-input
            id="text"
            value=${((t = this.value) == null ? void 0 : t.text) ?? ""}
            style="width: 100%;"
            @input=${(i) => x(this, p, h).call(this, "text", i.target.value)}>
          </uui-input>
        </div>
        <div style="flex: 0 0 20%; margin-left: 2px;">
          <uui-select
            label="Select size"
            placeholder="Select size..."
            value=${((e = this.value) == null ? void 0 : e.size) ?? ""}
            style="width: 100%;"
            .options=${this._sizeOptions.map((i) => {
      var s;
      return {
        ...i,
        selected: i.value == ((s = this.value) == null ? void 0 : s.size)
      };
    })}>
           </uui-select>
        </div>
      </div>
    `;
  }
};
p = /* @__PURE__ */ new WeakSet();
h = function(t, e) {
  const i = { ...this.value };
  i[t] = e, this.value = i, this.dispatchEvent(new m());
};
l([
  u({ type: Object, attribute: !1 })
], r.prototype, "manifest", 2);
l([
  u({ type: Object, attribute: !1 })
], r.prototype, "value", 2);
l([
  u({ attribute: !1 })
], r.prototype, "config", 1);
r = l([
  f("heading-property-editor")
], r);
const b = r;
export {
  b as default,
  r as headingPropertyEditorElement
};
//# sourceMappingURL=heading-property-editor.element-a9Fdd01w.js.map
