import { html as _, state as p, property as u, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, i = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? b(t, r) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (a = (o ? l(t, r, a) : l(a)) || a);
  return o && a && g(t, r, a), a;
}, f = (e, t, r) => t.has(e) || h("Cannot " + r), E = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (f(e, t, "access private method"), r), c, d;
let n = class extends y {
  constructor() {
    super(...arguments), E(this, c), this._selection = [], this.readonly = !1, this._options = [
      { label: "Bold", value: "bold" },
      { label: "Italic", value: "italic" },
      { label: "Underline", value: "underline" },
      { label: "Superscript", value: "superscript" },
      { label: "Subscript", value: "subscript" }
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
      label: e.label,
      value: e.value,
      checked: this._selection.includes(e.value)
    }));
  }
  render() {
    return _`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${this._selection}
				?readonly=${this.readonly}
				@change=${P(this, c, d)}></umb-input-checkbox-list>
		`;
  }
};
c = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const r = e.target.selection ?? [];
  this.value = r, this.dispatchEvent(new m());
};
i([
  p()
], n.prototype, "_selection", 2);
i([
  u({ type: Array })
], n.prototype, "value", 1);
i([
  u({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
i([
  p()
], n.prototype, "_options", 2);
n = i([
  v("umb-community-property-editor-ui-heading-formatting")
], n);
const $ = n;
export {
  n as PropertyEditorUIHeadingFormattingElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-heading-formatting.element-CSWHxI8e.js.map
