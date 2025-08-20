import { UmbUfmElementBase as p, UMB_UFM_RENDER_CONTEXT as f, UmbUfmComponentBase as l } from "@umbraco-cms/backoffice/ufm";
import { property as u, customElement as h } from "@umbraco-cms/backoffice/external/lit";
var c = Object.defineProperty, U = Object.getOwnPropertyDescriptor, a = (s, e, r, o) => {
  for (var t = o > 1 ? void 0 : o ? U(e, r) : e, m = s.length - 1, n; m >= 0; m--)
    (n = s[m]) && (t = (o ? n(e, r, t) : n(t)) || t);
  return o && t && c(e, r, t), t;
};
const _ = "ufm-heading-value";
let i = class extends p {
  constructor() {
    super(), this.consumeContext(f, (s) => {
      s && this.observe(
        s.value,
        (e) => {
          var r;
          this.alias !== void 0 && typeof e == "object" && e !== null ? this.value = e[this.alias] : this.value = ((r = e == null ? void 0 : e.title) == null ? void 0 : r.text) ?? e ?? "";
        },
        "observeValue"
      );
    });
  }
};
a([
  u()
], i.prototype, "alias", 2);
i = a([
  h(_)
], i);
class v extends l {
  render() {
    return "<ufm-heading-value></ufm-heading-value>";
  }
}
export {
  v as HeadingUfmComponentApi,
  v as api
};
//# sourceMappingURL=heading-value.component-BzpXxfnc.js.map
