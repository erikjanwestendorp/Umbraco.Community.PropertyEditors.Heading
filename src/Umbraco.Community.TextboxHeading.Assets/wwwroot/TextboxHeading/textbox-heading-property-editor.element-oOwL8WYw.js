import { LitElement as p, html as v, property as o, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as d } from "@umbraco-cms/backoffice/element-api";
var f = Object.defineProperty, x = Object.getOwnPropertyDescriptor, n = (a, e, i, t) => {
  for (var l = t > 1 ? void 0 : t ? x(e, i) : e, s = a.length - 1, u; s >= 0; s--)
    (u = a[s]) && (l = (t ? u(e, i, l) : u(l)) || l);
  return t && l && f(e, i, l), l;
};
const c = [
  { value: "H1", name: "H1" },
  { value: "H2", name: "H2" },
  { value: "H3", name: "H3" },
  { value: "H4", name: "H4" },
  { value: "H5", name: "H5" },
  { value: "H6", name: "H6" }
];
let r = class extends d(p) {
  render() {
    var a, e;
    return v`
      <div style="display: flex; width: 100%;">
        <div style="flex: 0 0 80%;">
          <uui-input
            id="text"
            value=${((a = this.value) == null ? void 0 : a.text) ?? ""}
            style="width: 100%;">
          </uui-input>
        </div>
        <div style="flex: 0 0 20%; margin-left: 2px;">
          <uui-select
            label="Select size"
            placeholder="Select size..."
            value=${((e = this.value) == null ? void 0 : e.size) ?? ""}
            style="width: 100%;"
            .options=${c.map((i) => {
      var t;
      return {
        ...i,
        selected: i.value == ((t = this.value) == null ? void 0 : t.size)
      };
    })}>
           </uui-select>
        </div>
      </div>
    `;
  }
};
n([
  o({ type: Object, attribute: !1 })
], r.prototype, "manifest", 2);
n([
  o({ type: Object, attribute: !1 })
], r.prototype, "value", 2);
r = n([
  m("textbox-heading-property-editor")
], r);
const b = r;
export {
  b as default,
  r as textboxHeadingPropertyEditorElement
};
//# sourceMappingURL=textbox-heading-property-editor.element-oOwL8WYw.js.map
