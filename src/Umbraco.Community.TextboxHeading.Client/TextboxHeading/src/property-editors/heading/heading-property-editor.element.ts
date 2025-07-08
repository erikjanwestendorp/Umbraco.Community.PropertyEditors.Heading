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

@customElement("heading-property-editor")
export class headingPropertyEditorElement
  extends UmbElementMixin(LitElement)
  implements UmbPropertyEditorUiElement
{
  private _sizeOptions: Array<{ value: string; name: string }> = [];

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
    const allowedHeadings = config.getValueByAlias("allowedHeadings");

      if (Array.isArray(allowedHeadings)) {
        this._sizeOptions = allowedHeadings.map((heading: string) => ({
          value: heading,
          name: heading
        }));
      } else {
        this._sizeOptions = []; 
      }

      this.requestUpdate(); 
  }

  render() {
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
              this._sizeOptions.map((e) => ({
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