import type { ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/property-editor';

export const manifest: ManifestPropertyEditorUi = {
	type: 'propertyEditorUi',
	alias: 'Umb.Community.PropertyEditorUi.HeadingSize',
	name: 'Heading Type Property Editor UI',
	element: () => import('./property-editor-ui-heading-size.element.js'),
	meta: {
		label: 'Heading Size',
		icon: 'icon-heading-2',
		group: 'Community',
	},
};
