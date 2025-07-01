import { html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import {
	type UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

/**
 * @element umb-property-editor-ui-heading-type 
 */

//TODO Copy from property-editor-ui-value-type.element.ts
@customElement('umb-property-editor-ui-heading-type')
export class PropertyEditorUIHeadingTypeElement extends UmbLitElement implements UmbPropertyEditorUiElement {

	@state()
	private _options: Array<Option> = [
		{ name: 'Heading 1', value: 'H1' },
		{ name: 'Heading 2', value: 'H2' },
		{ name: 'Heading 3', value: 'H3' },
		{ name: 'Heading 4', value: 'H4' },
		{ name: 'Heading 5', value: 'H5' },
		{ name: 'Heading 6', value: 'H6' },
	];
	


	override render() {
		console.log('Hello from render');
		console.log(this._options);
		return html`
        	<umb-input-checkbox-list
				.list=${this._options}></umb-input-checkbox-list>
        `;
	}
}

export default PropertyEditorUIHeadingTypeElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-property-editor-ui-heading-type': PropertyEditorUIHeadingTypeElement;
	}
}
