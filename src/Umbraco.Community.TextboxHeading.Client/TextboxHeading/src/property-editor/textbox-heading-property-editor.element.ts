import {
  LitElement,
  html,
  customElement,
  property,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  ManifestPropertyEditorUi,
  UmbPropertyEditorUiElement,
} from "@umbraco-cms/backoffice/property-editor";

type PropertyEditorValueType = {
  street?: string;
  houseNumber?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
};

@customElement("textbox-heading-property-editor")
export class textboxHeadingPropertyEditorElement
  extends UmbElementMixin(LitElement)
  implements UmbPropertyEditorUiElement
{
  @property({ type: Object, attribute: false })
  manifest?: ManifestPropertyEditorUi;

  @property({ type: Object, attribute: false })
  value?: PropertyEditorValueType;

  render() {
    return html`
      <div>
        <h1>Test</h1>
      </div>
    `;
  }
}

export default textboxHeadingPropertyEditorElement;

declare global {
  interface HTMLElementTagNameMap {
    "textbox-heading-property-editor": textboxHeadingPropertyEditorElement;
  }
}