import { LitElement as m, html as f, property as a, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as d } from "@umbraco-cms/backoffice/element-api";
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, l = (s, r, p, o) => {
  for (var e = o > 1 ? void 0 : o ? x(r, p) : r, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (e = (o ? n(r, p, e) : n(e)) || e);
  return o && e && v(r, p, e), e;
};
let t = class extends d(m) {
  render() {
    return f`
      <div>
        <h1>Test</h1>
      </div>
    `;
  }
};
l([
  a({ type: Object, attribute: !1 })
], t.prototype, "manifest", 2);
l([
  a({ type: Object, attribute: !1 })
], t.prototype, "value", 2);
t = l([
  b("textbox-heading-property-editor")
], t);
const c = t;
export {
  c as default,
  t as textboxHeadingPropertyEditorElement
};
//# sourceMappingURL=textbox-heading-property-editor.element-DfcvtbvN.js.map
