import { html as d, state as c, property as u, query as v, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as m } from "@umbraco-cms/backoffice/property-editor";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, H = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, i = (e, t, n, o) => {
  for (var s = o > 1 ? void 0 : o ? H(t, n) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (s = (o ? l(t, n, s) : l(s)) || s);
  return o && s && f(t, n, s), s;
}, E = (e, t, n) => t.has(e) || h("Cannot " + n), P = (e, t, n) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), b = (e, t, n) => (E(e, t, "access private method"), n), p, _;
let r = class extends g {
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
    console.log("value", e), this._selection = Array.isArray(e) ? e : e ? [e] : [], console.log("selectionnnnn", this._selection);
  }
  get value() {
    return this._selection;
  }
  // @state()
  // private _list: Array<UmbCheckboxListItem> = [
  // 	{label: 'H1', value: 'H1', checked: false},
  // 	{label: 'H2', value: 'H2', checked: false},
  // 	{label: 'H3', value: 'H3', checked: false},
  // 	{label: 'H4', value: 'H4', checked: true},
  // 	{label: 'H5', value: 'H5', checked: false},
  // 	{label: 'H6', value: 'H6', checked: false},
  // ];
  get _list() {
    return this._options.map((e) => ({
      label: e.name,
      value: e.value,
      checked: this._selection.includes(e.value)
    }));
  }
  render() {
    return console.log("value", this.value), console.log("selection", this._selection), console.log("options", this._options), console.log("render list", this._list), d`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${this._selection}
				?readonly=${this.readonly}
				@change=${b(this, p, _)}></umb-input-checkbox-list>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  let t = e.target.value, n = [];
  typeof t == "string" ? n = t.split(",").map((o) => o.trim()) : Array.isArray(t) ? n = t.filter((o) => typeof o == "string") : t != null && (n = [String(t)]), this.value = n, this.dispatchEvent(new m());
};
i([
  c()
], r.prototype, "_selection", 2);
i([
  u({ type: Array })
], r.prototype, "value", 1);
i([
  u({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
i([
  v("uui-select")
], r.prototype, "selectEl", 2);
i([
  c()
], r.prototype, "_options", 2);
r = i([
  y("umb-property-editor-ui-heading-type")
], r);
const U = r;
export {
  r as PropertyEditorUIHeadingTypeElement,
  U as default
};
//# sourceMappingURL=property-editor-ui-heading-type.element-CkP087Ri.js.map
