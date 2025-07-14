import { html as y, state as c, property as u, query as v, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, H = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, s = (e, t, r, a) => {
  for (var i = a > 1 ? void 0 : a ? H(t, r) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (i = (a ? l(t, r, i) : l(i)) || i);
  return a && i && g(t, r, i), i;
}, E = (e, t, r) => t.has(e) || h("Cannot " + r), P = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r) => (E(e, t, "access private method"), r), p, d;
let n = class extends f {
  constructor() {
    super(...arguments), P(this, p), this._selection = [], this.readonly = !1, this._options = [
      { name: "Heading 1", value: "H1" },
      { name: "Heading 2", value: "H2" },
      { name: "Heading 3", value: "H3" },
      { name: "Heading 4", value: "H4" },
      { name: "Heading 5", value: "H5" },
      { name: "Heading 6", value: "H6" }
    ];
  }
  set value(e) {
    this._selection = Array.isArray(e) ? e : e ? [e] : [];
  }
  get value() {
    return this._selection;
  }
  get _list() {
    return this._options.map((e) => ({
      label: e.name,
      value: e.value,
      checked: this._selection.includes(e.value)
    }));
  }
  render() {
    return y`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${this._selection}
				?readonly=${this.readonly}
				@change=${b(this, p, d)}></umb-input-checkbox-list>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
d = function(e) {
  let t = e.target.value, r = [];
  typeof t == "string" ? r = t.split(",").map((a) => a.trim()) : Array.isArray(t) ? r = t.filter((a) => typeof a == "string") : t != null && (r = [String(t)]), this.value = r, this.dispatchEvent(new _());
};
s([
  c()
], n.prototype, "_selection", 2);
s([
  u({ type: Array })
], n.prototype, "value", 1);
s([
  u({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
s([
  v("uui-select")
], n.prototype, "selectEl", 2);
s([
  c()
], n.prototype, "_options", 2);
n = s([
  m("umb-property-editor-ui-heading-type")
], n);
const U = n;
export {
  n as PropertyEditorUIHeadingTypeElement,
  U as default
};
//# sourceMappingURL=property-editor-ui-heading-type.element-CS3XrbtD.js.map
