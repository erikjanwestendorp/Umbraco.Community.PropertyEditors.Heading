import { html as c, state as H, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as p } from "@umbraco-cms/backoffice/lit-element";
var s = Object.defineProperty, d = Object.getOwnPropertyDescriptor, r = (t, u, l, a) => {
  for (var e = a > 1 ? void 0 : a ? d(u, l) : u, i = t.length - 1, n; i >= 0; i--)
    (n = t[i]) && (e = (a ? n(u, l, e) : n(e)) || e);
  return a && e && s(u, l, e), e;
};
let o = class extends p {
  constructor() {
    super(...arguments), this._options = [
      { name: "Heading 1", value: "H1" },
      { name: "Heading 2", value: "H2" },
      { name: "Heading 3", value: "H3" },
      { name: "Heading 4", value: "H4" },
      { name: "Heading 5", value: "H5" },
      { name: "Heading 6", value: "H6" }
    ];
  }
  render() {
    return console.log("Hello from render"), console.log(this._options), c`
        		<uui-checkbox label="Heading 1" value="H1"></uui-checkbox>
				<uui-checkbox label="Heading 2" value="H2"></uui-checkbox>
				<uui-checkbox label="Heading 3" value="H3"></uui-checkbox>
				<uui-checkbox label="Heading 4" value="H4"></uui-checkbox>
				<uui-checkbox label="Heading 5" value="H5"></uui-checkbox>
				<uui-checkbox label="Heading 6" value="H6"></uui-checkbox>
        `;
  }
};
r([
  H()
], o.prototype, "_options", 2);
o = r([
  b("umb-property-editor-ui-heading-type")
], o);
const v = o;
export {
  o as PropertyEditorUIHeadingTypeElement,
  v as default
};
//# sourceMappingURL=property-editor-ui-heading-type.element-dktL4yVd.js.map
