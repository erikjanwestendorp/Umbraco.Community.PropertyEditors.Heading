import { html as d, state as c, property as h, query as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, E = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, n = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? E(t, r) : t, a = e.length - 1, p; a >= 0; a--)
    (p = e[a]) && (o = (i ? p(t, r, o) : p(o)) || o);
  return i && o && g(t, r, o), o;
}, H = (e, t, r) => t.has(e) || y("Cannot " + r), P = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r) => (H(e, t, "access private method"), r), l, _;
let s = class extends v {
  constructor() {
    super(...arguments), P(this, l), this._selection = [], this.readonly = !1, this._options = ["H1", "H2", "H3", "H4", "H5", "H6"];
  }
  set value(e) {
    this._selection = Array.isArray(e) ? e : e ? [e] : [];
  }
  get value() {
    return this._selection;
  }
  get _list() {
    return this._options.map((e) => ({
      label: e,
      value: e,
      checked: this._selection.includes(e)
    }));
  }
  render() {
    return d`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${this._selection}
				?readonly=${this.readonly}
				@change=${b(this, l, _)}></umb-input-checkbox-list>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  let t = e.target.value, r = [];
  if (typeof t == "string")
    r = t.split(",").map((i) => i.trim()).filter((i) => i !== "");
  else if (Array.isArray(t))
    r = t.filter((i) => typeof i == "string" && i.trim() !== "");
  else if (t != null) {
    const i = String(t).trim();
    i !== "" && (r = [i]);
  }
  this.value = r, this.dispatchEvent(new f());
};
n([
  c()
], s.prototype, "_selection", 2);
n([
  h({ type: Array })
], s.prototype, "value", 1);
n([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
n([
  u("uui-select")
], s.prototype, "selectEl", 2);
n([
  c()
], s.prototype, "_options", 2);
s = n([
  m("umb-property-editor-ui-heading-type")
], s);
const U = s;
export {
  s as PropertyEditorUIHeadingTypeElement,
  U as default
};
//# sourceMappingURL=property-editor-ui-heading-type.element-qPLoUUul.js.map
