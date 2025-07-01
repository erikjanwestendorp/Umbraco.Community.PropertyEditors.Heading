import type { ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/property-editor';

export const manifest: ManifestPropertyEditorUi = {
	type: 'propertyEditorUi',
	alias: 'Umb.Community.PropertyEditorUi.HeadingType', //TODO FIX Naming
	name: 'Heading Type Property Editor UI',
	element: () => import('./property-editor-ui-heading-type.element.js'),
	meta: {
		label: 'Heading Type',
		icon: 'icon-heading-2',
		group: 'Community',
	},
};
