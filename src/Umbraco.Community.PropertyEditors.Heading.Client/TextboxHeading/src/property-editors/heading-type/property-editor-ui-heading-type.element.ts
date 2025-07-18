import { html, customElement, property, state, query} from '@umbraco-cms/backoffice/external/lit';
import type {UUISelectElement, UUISelectEvent } from '@umbraco-cms/backoffice/external/uui';
import {
	type UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';


type UmbCheckboxListItem = { label: string; value: string; checked: boolean };
/**
 * @element umb-property-editor-ui-heading-type 
 */

//TODO Copy from property-editor-ui-value-type.element.ts
@customElement('umb-property-editor-ui-heading-type')
export class PropertyEditorUIHeadingTypeElement extends UmbLitElement implements UmbPropertyEditorUiElement {
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


	@query('uui-select')
	selectEl?: UUISelectElement;

	@state()
	private _options: Array<Option> = [
		{ name: 'Heading 1', value: 'H1' },
		{ name: 'Heading 2', value: 'H2' },
		{ name: 'Heading 3', value: 'H3' },
		{ name: 'Heading 4', value: 'H4' },
		{ name: 'Heading 5', value: 'H5' },
		{ name: 'Heading 6', value: 'H6' },
	];

	private get _list(): Array<UmbCheckboxListItem> {
		return this._options.map((opt) => ({
			label: opt.name,
			value: opt.value,
			checked: this._selection.includes(opt.value),
		}));
	}

	#onChange(e: UUISelectEvent) {
		let raw = e.target.value;

		let values: string[] = [];

		if (typeof raw === 'string') {
			values = raw
				.split(',')
				.map((v) => v.trim())
				.filter((v) => v !== '');
		} else if (Array.isArray(raw)) {
			values = raw.filter((v): v is string => typeof v === 'string' && v.trim() !== '');
		} else if (raw != null) {
			const v = String(raw).trim();
			if (v !== '') values = [v];
		}

		this.value = values;
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

export default PropertyEditorUIHeadingTypeElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-property-editor-ui-heading-type': PropertyEditorUIHeadingTypeElement;
	}
}
