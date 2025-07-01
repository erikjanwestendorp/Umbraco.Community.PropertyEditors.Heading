import { LitElement as h, html as c, property as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
var _ = Object.defineProperty, E = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, p = (t, e, a, r) => {
  for (var i = r > 1 ? void 0 : r ? E(e, a) : e, l = t.length - 1, n; l >= 0; l--)
    (n = t[l]) && (i = (r ? n(e, a, i) : n(i)) || i);
  return r && i && _(e, a, i), i;
}, H = (t, e, a) => e.has(t) || v("Cannot " + a), x = (t, e, a) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), w = (t, e, a) => (H(t, e, "access private method"), a), o, d;
const g = [
  { value: "H1", name: "H1" },
  { value: "H2", name: "H2" },
  { value: "H3", name: "H3" },
  { value: "H4", name: "H4" },
  { value: "H5", name: "H5" },
  { value: "H6", name: "H6" }
];
let s = class extends f(h) {
  constructor() {
    super(...arguments), x(this, o);
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
            @input=${(a) => w(this, o, d).call(this, "text", a.target.value)}>
          </uui-input>
        </div>
        <div style="flex: 0 0 20%; margin-left: 2px;">
          <uui-select
            label="Select size"
            placeholder="Select size..."
            value=${((e = this.value) == null ? void 0 : e.size) ?? ""}
            style="width: 100%;"
            .options=${g.map((a) => {
      var r;
      return {
        ...a,
        selected: a.value == ((r = this.value) == null ? void 0 : r.size)
      };
    })}>
           </uui-select>
        </div>
      </div>
    `;
  }
};
o = /* @__PURE__ */ new WeakSet();
d = function(t, e) {
  const a = { ...this.value };
  a[t] = e, this.value = a, this.dispatchEvent(new y());
};
p([
  u({ type: Object, attribute: !1 })
], s.prototype, "manifest", 2);
p([
  u({ type: Object, attribute: !1 })
], s.prototype, "value", 2);
s = p([
  m("heading-property-editor")
], s);
const z = s;
export {
  z as default,
  s as headingPropertyEditorElement
};
//# sourceMappingURL=heading-property-editor.element-BfUmygu8.js.map
