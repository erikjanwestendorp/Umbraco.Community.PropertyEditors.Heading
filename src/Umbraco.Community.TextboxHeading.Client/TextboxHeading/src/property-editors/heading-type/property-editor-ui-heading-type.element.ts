import { html, customElement, property, state, query } from '@umbraco-cms/backoffice/external/lit';
import type {UUISelectElement, UUISelectEvent } from '@umbraco-cms/backoffice/external/uui';

import {
	type UmbPropertyEditorUiElement,
	UmbPropertyValueChangeEvent,
	type UmbPropertyEditorConfigCollection,
} from '@umbraco-cms/backoffice/property-editor';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

/**
 * @element umb-property-editor-ui-heading-type 
 */

//TODO Copy from property-editor-ui-value-type.element.ts
@customElement('umb-property-editor-ui-heading-type')
export class PropertyEditorUIHeadingTypeElement extends UmbLitElement implements UmbPropertyEditorUiElement {
	private _value: string | undefined = undefined;
	@property()
	public get value(): string | undefined {
		return this._value;
	}
	public set value(value: string | undefined) {
		this._value = value;

		const selected = this._options.filter((option) => {
			if (this.selectEl && option.value === this.value) this.selectEl.value = this.value;
			return (option.selected = option.value === this.value);
		});
		if (selected.length === 0) {
			this._options[0].selected = true;
		}
	}

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

	@property({ attribute: false })
	public config?: UmbPropertyEditorConfigCollection;

	#onChange(e: UUISelectEvent) {
		this.value = e.target.value as string;
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	override render() {
		return html`<uui-select
			label="Select a value type"
			.options="${this._options}"
			@change="${this.#onChange}"></uui-select>`;
	}
}

export default PropertyEditorUIHeadingTypeElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-property-editor-ui-heading-type': PropertyEditorUIHeadingTypeElement;
	}
}
