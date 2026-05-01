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
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  superscript?: boolean;
  subscript?: boolean;
};

@customElement("umb-community-property-editor-ui-heading")
export class PropertyEditorUIHeadingElement
  extends UmbElementMixin(LitElement)
  implements UmbPropertyEditorUiElement
{
  private _sizeOptions: Array<{ value: string; name: string }> = [];

  @property({ type: Object, attribute: false })
  manifest?: ManifestPropertyEditorUi;

  @property({ type: Object, attribute: false })
  value?: PropertyEditorValueType;  

  #setValueProperty(property: keyof PropertyEditorValueType, value: string | boolean) {
    const newValue = { ...this.value }; 
    (newValue as any)[property] = value;
    this.value = newValue;
    this.dispatchEvent(new UmbChangeEvent());
  }

  #toggleFormatting(property: 'bold' | 'italic' | 'underline' | 'superscript' | 'subscript') {
    const newValue = { ...this.value };
    newValue[property] = !newValue[property];

    // Superscript and subscript are mutually exclusive
    if (property === 'superscript' && newValue.superscript) {
      newValue.subscript = false;
    } else if (property === 'subscript' && newValue.subscript) {
      newValue.superscript = false;
    }

    this.value = newValue;
    this.dispatchEvent(new UmbChangeEvent());
  }

  @property({ attribute: false })
  public set config(config: UmbPropertyEditorConfigCollection) {
    const allowedHeadings = config.getValueByAlias("allowedHeadings");

    if (Array.isArray(allowedHeadings)) {
      const filtered = allowedHeadings.filter((h) => typeof h === 'string' && h.trim() !== '');

      this._sizeOptions = filtered.map((heading: string) => ({
        value: heading,
        name: heading,
      }));

      const currentSize = this.value?.size;
      const isValid = this._sizeOptions.some(opt => opt.value === currentSize);

      if (!isValid && this._sizeOptions.length > 0) {
        const newValue = {
          ...this.value,
          size: this._sizeOptions[0].value
        };
        this.value = newValue;
        this.dispatchEvent(new UmbChangeEvent());
      }
    } else {
      this._sizeOptions = [];
    }

    this.requestUpdate();
  }

  render() {
    return html`
      <div style="display: flex; width: 100%; align-items: center;">
        <div style="width: 60px; margin-right: 2px;">
          <uui-select
            value=${this.value?.size ?? ""}
            style="width: 100%;"
            label="Select heading size"
            .options=${
              this._sizeOptions.map((e) => ({
                ...e,
                selected: e.value == this.value?.size,
              }))
            }
            @change=${(e: Event) => {
              const target = e.target as HTMLSelectElement;
              this.#setValueProperty("size", target.value);
            }}>
          </uui-select>
        </div>
        <div style="flex: 1;">
          <uui-input
            id="text"
            value=${this.value?.text ?? ""}
            style="width: 100%;"
            label="Heading text"            
            @input=${(e: UUIInputEvent) =>
              this.#setValueProperty("text", e.target.value as string)}>
          </uui-input>
        </div>
        <div style="display: flex; align-items: center; gap: 2px; margin-left: 2px;">
          <uui-button
            compact
            look=${this.value?.bold ? 'primary' : 'outline'}
            label="Bold"
            title="Bold"
            @click=${() => this.#toggleFormatting('bold')}>
            <strong>B</strong>
          </uui-button>
          <uui-button
            compact
            look=${this.value?.italic ? 'primary' : 'outline'}
            label="Italic"
            title="Italic"
            @click=${() => this.#toggleFormatting('italic')}>
            <em>I</em>
          </uui-button>
          <uui-button
            compact
            look=${this.value?.underline ? 'primary' : 'outline'}
            label="Underline"
            title="Underline"
            @click=${() => this.#toggleFormatting('underline')}>
            <u>U</u>
          </uui-button>
          <uui-button
            compact
            look=${this.value?.superscript ? 'primary' : 'outline'}
            label="Superscript"
            title="Superscript"
            @click=${() => this.#toggleFormatting('superscript')}>
            x<sup>2</sup>
          </uui-button>
          <uui-button
            compact
            look=${this.value?.subscript ? 'primary' : 'outline'}
            label="Subscript"
            title="Subscript"
            @click=${() => this.#toggleFormatting('subscript')}>
            x<sub>2</sub>
          </uui-button>
        </div>
      </div>
    `;
  }
}

export default PropertyEditorUIHeadingElement;

declare global {
  interface HTMLElementTagNameMap {
    "umb-community-property-editor-ui-heading": PropertyEditorUIHeadingElement;
  }
}