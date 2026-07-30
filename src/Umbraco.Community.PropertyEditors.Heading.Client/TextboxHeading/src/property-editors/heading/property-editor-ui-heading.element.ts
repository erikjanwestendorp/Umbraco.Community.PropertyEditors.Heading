import {
  LitElement,
  html,
  css,
  customElement,
  property,
  query,
  PropertyValues,
  TemplateResult,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  ManifestPropertyEditorUi,
  UmbPropertyEditorUiElement,
} from "@umbraco-cms/backoffice/property-editor";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";
import { type UmbPropertyEditorConfigCollection } from '@umbraco-cms/backoffice/property-editor';

type PropertyEditorValueType = {
  text?: string;
  size?: string;
};

const ALL_FORMATTING_OPTIONS = ['bold', 'italic', 'underline', 'superscript', 'subscript'] as const;
type FormattingOption = typeof ALL_FORMATTING_OPTIONS[number];

const FORMATTING_META: Record<FormattingOption, { label: string; command: string; render: () => TemplateResult }> = {
  bold:        { label: 'Bold',        command: 'bold',        render: () => html`<strong>B</strong>` },
  italic:      { label: 'Italic',      command: 'italic',      render: () => html`<em>I</em>` },
  underline:   { label: 'Underline',   command: 'underline',   render: () => html`<u>U</u>` },
  superscript: { label: 'Superscript', command: 'superscript', render: () => html`x<sup>2</sup>` },
  subscript:   { label: 'Subscript',   command: 'subscript',   render: () => html`x<sub>2</sub>` },
};

@customElement("umb-community-property-editor-ui-heading")
export class PropertyEditorUIHeadingElement
  extends UmbElementMixin(LitElement)
  implements UmbPropertyEditorUiElement
{
  private _sizeOptions: Array<{ value: string; name: string }> = [];
  private _allowedFormattingOptions: Array<FormattingOption> = [...ALL_FORMATTING_OPTIONS];
  private _internalTextChange = false;

  @query('#heading-content')
  private _contentEditableEl?: HTMLDivElement;

  @property({ type: Object, attribute: false })
  manifest?: ManifestPropertyEditorUi;

  @property({ type: Object, attribute: false })
  value?: PropertyEditorValueType;

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('value') && !this._internalTextChange && this._contentEditableEl) {
      const newText = this.value?.text ?? '';
      if (this._contentEditableEl.innerHTML !== newText) {
        this._contentEditableEl.innerHTML = newText;
      }
    }
    this._internalTextChange = false;
  }

  #onContentInput(e: Event) {
    const div = e.target as HTMLDivElement;
    this._internalTextChange = true;
    this.value = { ...this.value, text: div.innerHTML };
    this.dispatchEvent(new UmbChangeEvent());
  }

  #applyFormat(command: string) {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    document.execCommand(command, false);
    if (this._contentEditableEl) {
      this._internalTextChange = true;
      this.value = { ...this.value, text: this._contentEditableEl.innerHTML };
      this.dispatchEvent(new UmbChangeEvent());
    }
  }

  #setSizeProperty(value: string) {
    this.value = { ...this.value, size: value };
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
        this.value = { ...this.value, size: this._sizeOptions[0].value };
        this.dispatchEvent(new UmbChangeEvent());
      }
    } else {
      this._sizeOptions = [];
    }

    const allowedFormatting = config.getValueByAlias("allowedFormattingOptions");
    if (Array.isArray(allowedFormatting) && allowedFormatting.length > 0) {
      this._allowedFormattingOptions = (allowedFormatting as string[]).filter(
        (f): f is FormattingOption => (ALL_FORMATTING_OPTIONS as readonly string[]).includes(f)
      );
    } else {
      this._allowedFormattingOptions = [...ALL_FORMATTING_OPTIONS];
    }

    this.requestUpdate();
  }

  static override styles = css`
    :host {
      display: block;
    }
    .heading-editor {
      display: flex;
      width: 100%;
      align-items: stretch;
    }
    .size-selector {
      flex: 0 0 auto;
    }
    #heading-content {
      flex: 1;
      border: 1px solid var(--uui-color-border, #d8d7d9);
      border-radius: var(--uui-border-radius, 3px);
      padding: 0 var(--uui-size-space-3, 12px);
      min-height: var(--uui-size-11, 36px);
      line-height: var(--uui-size-11, 36px);
      outline: none;
      font-family: inherit;
      font-size: inherit;
      background: var(--uui-color-surface, #fff);
      box-sizing: border-box;
      margin: 0 2px;
    }
    #heading-content:focus {
      border-color: var(--uui-color-focus, #1a73e8);
    }
    #heading-content:empty::before {
      content: attr(data-placeholder);
      color: var(--uui-color-text-alt, #adadad);
      pointer-events: none;
    }
    .toolbar {
      display: flex;
      align-items: center;
      gap: 2px;
      flex: 0 0 auto;
    }
  `;

  render() {
    return html`
      <div class="heading-editor">
        <div class="size-selector">
          <uui-select
            value=${this.value?.size ?? ""}
            label="Select heading size"
            .options=${
              this._sizeOptions.map((e) => ({
                ...e,
                selected: e.value == this.value?.size,
              }))
            }
            @change=${(e: Event) => {
              const target = e.target as HTMLSelectElement;
              this.#setSizeProperty(target.value);
            }}>
          </uui-select>
        </div>
        <div
          id="heading-content"
          contenteditable="true"
          data-placeholder="Heading text"
          @input=${this.#onContentInput}>
        </div>
        ${this._allowedFormattingOptions.length > 0 ? html`
          <div class="toolbar">
            ${this._allowedFormattingOptions.map(option => {
              const meta = FORMATTING_META[option];
              return html`
                <uui-button
                  compact
                  look="outline"
                  label=${meta.label}
                  title=${meta.label}
                  @mousedown=${(e: MouseEvent) => { e.preventDefault(); this.#applyFormat(meta.command); }}>
                  ${meta.render()}
                </uui-button>
              `;
            })}
          </div>
        ` : ''}
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