import { html, customElement, property, state } from '@umbraco-cms/backoffice/external/lit';
import {
	type UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

type UmbCheckboxListItem = { label: string; value: string; checked: boolean };

/**
 * @element umb-community-property-editor-ui-heading-formatting
 */
@customElement('umb-community-property-editor-ui-heading-formatting')
export class PropertyEditorUIHeadingFormattingElement extends UmbLitElement implements UmbPropertyEditorUiElement {
	@state()
	private _selection: Array<string> = [];

	@property({ type: Array })
	public set value(value: Array<string> | string | undefined) {
		this._selection = Array.isArray(value) ? value : value ? [value] : [];
	}
	public get value(): Array<string> | undefined {
		return this._selection;
	}

	@property({ type: Boolean, reflect: true })
	readonly = false;

	@state()
	private _options: Array<{ label: string; value: string }> = [
		{ label: 'Bold', value: 'bold' },
		{ label: 'Italic', value: 'italic' },
		{ label: 'Underline', value: 'underline' },
		{ label: 'Superscript', value: 'superscript' },
		{ label: 'Subscript', value: 'subscript' },
	];

	private get _list(): Array<UmbCheckboxListItem> {
		return this._options.map((opt) => ({
			label: opt.label,
			value: opt.value,
			checked: this._selection.includes(opt.value),
		}));
	}

	#onChange(e: CustomEvent) {
		const target = e.target as HTMLElement & { selection?: Array<string> };
		const selection = target.selection ?? [];
		this.value = selection;
		this.dispatchEvent(new UmbChangeEvent());
	}

	override render() {
		return html`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${this._selection}
				?readonly=${this.readonly}
				@change=${this.#onChange}></umb-input-checkbox-list>
		`;
	}
}

export default PropertyEditorUIHeadingFormattingElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-community-property-editor-ui-heading-formatting': PropertyEditorUIHeadingFormattingElement;
	}
}
