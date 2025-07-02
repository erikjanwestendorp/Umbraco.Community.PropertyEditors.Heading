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
import {
  UUIInputEvent,
} from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";
import { type UmbPropertyEditorConfigCollection } from '@umbraco-cms/backoffice/property-editor';

type PropertyEditorValueType = {
  text?: string;
  size?: string;
};

const SizeOptions = [
  { value: "H1", name: "H1" },
  { value: "H2", name: "H2" },
  { value: "H3", name: "H3" },
  { value: "H4", name: "H4" },
  { value: "H5", name: "H5" },
  { value: "H6", name: "H6" },
];

@customElement("heading-property-editor")
export class headingPropertyEditorElement
  extends UmbElementMixin(LitElement)
  implements UmbPropertyEditorUiElement
{
  @property({ type: Object, attribute: false })
  manifest?: ManifestPropertyEditorUi;

  @property({ type: Object, attribute: false })
  value?: PropertyEditorValueType;

  

  #setValueProperty(property: keyof PropertyEditorValueType, value: string) {
    const newValue = { ...this.value }; 
    newValue[property] = value;
    this.value = newValue;
    this.dispatchEvent(new UmbChangeEvent());
  }

  @property({ attribute: false })
  public set config(config: UmbPropertyEditorConfigCollection) {
    console.log("Config set:", config);
    var allowedHeadings = config.getValueByAlias("allowedHeadings");

    console.log("Allowed headings:", allowedHeadings);
    // this._disabled = config.getValueByAlias("disabled");
    // this._placeholder = config.getValueByAlias("placeholder");
    // this._maxChars = config.getValueByAlias("maxChars");
  }

  render() {
    // console.log(config);
    return html`
      <div style="display: flex; width: 100%;">
        <div style="flex: 0 0 80%;">
          <uui-input
            id="text"
            value=${this.value?.text ?? ""}
            style="width: 100%;"
            @input=${(e: UUIInputEvent) =>
              this.#setValueProperty("text", e.target.value as string)}>
          </uui-input>
        </div>
        <div style="flex: 0 0 20%; margin-left: 2px;">
          <uui-select
            label="Select size"
            placeholder="Select size..."
            value=${this.value?.size ?? ""}
            style="width: 100%;"
            .options=${
              SizeOptions.map((e) => ({
                ...e,
                selected: e.value == this.value?.size,
              }))
            }>
           </uui-select>
        </div>
      </div>
    `;
  }
}

export default headingPropertyEditorElement;

declare global {
  interface HTMLElementTagNameMap {
    "textbox-heading-property-editor": headingPropertyEditorElement;
  }
}