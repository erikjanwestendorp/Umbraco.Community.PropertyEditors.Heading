import { UmbUfmElementBase as a, UMB_UFM_RENDER_CONTEXT as f, UmbUfmComponentBase as p } from "@umbraco-cms/backoffice/ufm";
import { property as u, customElement as c } from "@umbraco-cms/backoffice/external/lit";
var h = Object.defineProperty, U = Object.getOwnPropertyDescriptor, l = (t, e, o, m) => {
  for (var s = m > 1 ? void 0 : m ? U(e, o) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (s = (m ? n(e, o, s) : n(s)) || s);
  return m && s && h(e, o, s), s;
};
const _ = "ufm-heading-value";
let i = class extends a {
  constructor() {
    super(), this.consumeContext(f, (t) => {
      console.log("UfmHeadingValueElement context", t), t && this.observe(
        t.value,
        (e) => {
          var o;
          this.alias !== void 0 && typeof e == "object" && e !== null ? this.value = e[this.alias] : this.value = ((o = e == null ? void 0 : e.title) == null ? void 0 : o.text) ?? e ?? "";
        },
        "observeValue"
      );
    });
  }
};
l([
  u()
], i.prototype, "alias", 2);
i = l([
  c(_)
], i);
class v extends p {
  render() {
    return "<ufm-heading-value></ufm-heading-value>";
  }
}
export {
  v as MyCustomUfmComponentApi,
  v as api
};
//# sourceMappingURL=heading-value.component-XGlILDUb.js.map
