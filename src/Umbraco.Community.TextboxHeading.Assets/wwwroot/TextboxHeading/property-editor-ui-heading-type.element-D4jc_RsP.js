import { html as c, property as p, query as d, state as _, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as g } from "@umbraco-cms/backoffice/property-editor";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, n = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? E(t, a) : t, l = e.length - 1, o; l >= 0; l--)
    (o = e[l]) && (r = (i ? o(t, a, r) : o(r)) || r);
  return i && r && f(t, a, r), r;
}, H = (e, t, a) => t.has(e) || v("Cannot " + a), P = (e, t, a) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), C = (e, t, a) => (H(e, t, "access private method"), a), u, h;
let s = class extends y {
  constructor() {
    super(...arguments), P(this, u), this._value = void 0, this._options = [
      { name: "Heading 1", value: "H1" },
      { name: "Heading 2", value: "H2" },
      { name: "Heading 3", value: "H3" },
      { name: "Heading 4", value: "H4" },
      { name: "Heading 5", value: "H5" },
      { name: "Heading 6", value: "H6" }
    ];
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, this._options.filter((a) => (this.selectEl && a.value === this.value && (this.selectEl.value = this.value), a.selected = a.value === this.value)).length === 0 && (this._options[0].selected = !0);
  }
  render() {
    return c`<uui-select
			label="Select a value type"
			.options="${this._options}"
			@change="${C(this, u, h)}"></uui-select>`;
  }
};
u = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new g());
};
n([
  p()
], s.prototype, "value", 1);
n([
  d("uui-select")
], s.prototype, "selectEl", 2);
n([
  _()
], s.prototype, "_options", 2);
n([
  p({ attribute: !1 })
], s.prototype, "config", 2);
s = n([
  m("umb-property-editor-ui-heading-type")
], s);
const T = s;
export {
  s as PropertyEditorUIHeadingTypeElement,
  T as default
};
//# sourceMappingURL=property-editor-ui-heading-type.element-D4jc_RsP.js.map
