import { html as p, state as m, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
var d = Object.defineProperty, c = Object.getOwnPropertyDescriptor, s = (l, t, r, o) => {
  for (var e = o > 1 ? void 0 : o ? c(t, r) : t, i = l.length - 1, a; i >= 0; i--)
    (a = l[i]) && (e = (o ? a(t, r, e) : a(e)) || e);
  return o && e && d(t, r, e), e;
};
let n = class extends H {
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
    return console.log("Hello from render"), console.log(this._options), p`
        	<umb-input-checkbox-list
				.list=${this._options}></umb-input-checkbox-list>
        `;
  }
};
s([
  m()
], n.prototype, "_options", 2);
n = s([
  u("umb-property-editor-ui-heading-type")
], n);
const _ = n;
export {
  n as PropertyEditorUIHeadingTypeElement,
  _ as default
};
//# sourceMappingURL=property-editor-ui-heading-type.element-l4IEitvI.js.map
