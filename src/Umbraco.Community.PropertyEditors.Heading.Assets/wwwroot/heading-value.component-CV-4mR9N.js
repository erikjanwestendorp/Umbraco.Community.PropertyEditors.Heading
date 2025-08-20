import { UmbUfmElementBase as l, UMB_UFM_RENDER_CONTEXT as m, UmbUfmComponentBase as u } from "@umbraco-cms/backoffice/ufm";
import { property as f, customElement as c } from "@umbraco-cms/backoffice/external/lit";
var b = Object.defineProperty, g = Object.getOwnPropertyDescriptor, a = (t, e, n, i) => {
  for (var r = i > 1 ? void 0 : i ? g(e, n) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (r = (i ? p(e, n, r) : p(r)) || r);
  return i && r && b(e, n, r), r;
};
const h = "ufm-heading-value";
let s = class extends l {
  constructor() {
    super(), this.alias = null, this.prefix = null, this.consumeContext(m, (t) => {
      t && this.observe(t.value, (e) => {
        var r;
        const n = this.alias && typeof e == "object" && e !== null ? e[this.alias] : ((r = e == null ? void 0 : e.title) == null ? void 0 : r.text) ?? e, i = this.toDisplayString(n);
        this.value = i ? `${this.prefix ?? ""}${i}` : "";
      }, "observeValue");
    });
  }
  toDisplayString(t) {
    if (t == null) return "";
    if (typeof t == "string") return t.trim();
    if (typeof t == "number" || typeof t == "boolean") return String(t);
    const e = (t == null ? void 0 : t.text) ?? (t == null ? void 0 : t.value);
    return typeof e == "string" ? e.trim() : "";
  }
};
a([
  f({ type: String })
], s.prototype, "alias", 2);
a([
  f({ type: String })
], s.prototype, "prefix", 2);
s = a([
  c(h)
], s);
class d extends u {
  render(e) {
    return e.text ? `<ufm-heading-value ${super.getAttributes(e.text)}></ufm-heading-value>` : void 0;
  }
}
export {
  d as HeadingUfmComponentApi,
  d as api
};
//# sourceMappingURL=heading-value.component-CV-4mR9N.js.map
