import type { ManifestPropertyEditorSchema } from '@umbraco-cms/backoffice/property-editor';

export const manifest: ManifestPropertyEditorSchema = {
	type: 'propertyEditorSchema',
	name: 'Heading',
	alias: 'Umbraco.Community.Heading',
	meta: {
		defaultPropertyEditorUiAlias: 'Umb.Community.PropertyEditorUi.Heading',
		settings: {
			properties: [
				{
					alias: 'allowedHeadings',
					label: 'Headings',
					description: 'Select the allowed headings',
					propertyEditorUiAlias: 'Umb.Community.PropertyEditorUi.HeadingSize',
				},
			],
		},
	},
};
