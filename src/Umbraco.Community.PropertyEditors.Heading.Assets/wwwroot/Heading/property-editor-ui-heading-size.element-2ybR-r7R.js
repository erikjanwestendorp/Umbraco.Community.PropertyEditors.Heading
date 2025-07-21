import { html as m, state as c, property as h, query as u, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, E = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, n = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? E(t, r) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (o = (i ? l(t, r, o) : l(o)) || o);
  return i && o && g(t, r, o), o;
}, H = (e, t, r) => t.has(e) || _("Cannot " + r), P = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r) => (H(e, t, "access private method"), r), p, y;
let s = class extends v {
  constructor() {
    super(...arguments), P(this, p), this._selection = [], this.readonly = !1, this._options = ["H1", "H2", "H3", "H4", "H5", "H6"];
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
    return m`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${this._selection}
				?readonly=${this.readonly}
				@change=${b(this, p, y)}></umb-input-checkbox-list>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
y = function(e) {
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
  d("umb-community-property-editor-ui-heading-size")
], s);
const S = s;
export {
  s as PropertyEditorUIHeadingSizeElement,
  S as default
};
//# sourceMappingURL=property-editor-ui-heading-size.element-2ybR-r7R.js.map
