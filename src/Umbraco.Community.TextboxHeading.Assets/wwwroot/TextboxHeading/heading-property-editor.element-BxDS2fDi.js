import { LitElement as c, html as h, property as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
var _ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, s = (e, t, a, i) => {
  for (var l = i > 1 ? void 0 : i ? g(t, a) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (l = (i ? o(t, a, l) : o(l)) || l);
  return i && l && _(t, a, l), l;
}, H = (e, t, a) => t.has(e) || v("Cannot " + a), E = (e, t, a) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), w = (e, t, a) => (H(e, t, "access private method"), a), p, d;
const x = [
  { value: "H1", name: "H1" },
  { value: "H2", name: "H2" },
  { value: "H3", name: "H3" },
  { value: "H4", name: "H4" },
  { value: "H5", name: "H5" },
  { value: "H6", name: "H6" }
];
let r = class extends f(c) {
  constructor() {
    super(...arguments), E(this, p);
  }
  set config(e) {
    console.log("Config set:", e);
    var t = e.getValueByAlias("allowedHeadings");
    console.log("Allowed headings:", t);
  }
  render() {
    var e, t;
    return h`
      <div style="display: flex; width: 100%;">
        <div style="flex: 0 0 80%;">
          <uui-input
            id="text"
            value=${((e = this.value) == null ? void 0 : e.text) ?? ""}
            style="width: 100%;"
            @input=${(a) => w(this, p, d).call(this, "text", a.target.value)}>
          </uui-input>
        </div>
        <div style="flex: 0 0 20%; margin-left: 2px;">
          <uui-select
            label="Select size"
            placeholder="Select size..."
            value=${((t = this.value) == null ? void 0 : t.size) ?? ""}
            style="width: 100%;"
            .options=${x.map((a) => {
      var i;
      return {
        ...a,
        selected: a.value == ((i = this.value) == null ? void 0 : i.size)
      };
    })}>
           </uui-select>
        </div>
      </div>
    `;
  }
};
p = /* @__PURE__ */ new WeakSet();
d = function(e, t) {
  const a = { ...this.value };
  a[e] = t, this.value = a, this.dispatchEvent(new y());
};
s([
  u({ type: Object, attribute: !1 })
], r.prototype, "manifest", 2);
s([
  u({ type: Object, attribute: !1 })
], r.prototype, "value", 2);
s([
  u({ attribute: !1 })
], r.prototype, "config", 1);
r = s([
  m("heading-property-editor")
], r);
const C = r;
export {
  C as default,
  r as headingPropertyEditorElement
};
//# sourceMappingURL=heading-property-editor.element-BxDS2fDi.js.map
