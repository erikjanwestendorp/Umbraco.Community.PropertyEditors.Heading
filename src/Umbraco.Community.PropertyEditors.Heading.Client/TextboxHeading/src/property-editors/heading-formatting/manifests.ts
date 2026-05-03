import type { ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/property-editor';

export const manifest: ManifestPropertyEditorUi = {
	type: 'propertyEditorUi',
	alias: 'Umb.Community.PropertyEditorUi.HeadingFormatting',
	name: 'Heading Formatting Property Editor UI',
	element: () => import('./property-editor-ui-heading-formatting.element.js'),
	meta: {
		label: 'Heading Formatting',
		icon: 'icon-bold',
		group: 'Community',
	},
};
