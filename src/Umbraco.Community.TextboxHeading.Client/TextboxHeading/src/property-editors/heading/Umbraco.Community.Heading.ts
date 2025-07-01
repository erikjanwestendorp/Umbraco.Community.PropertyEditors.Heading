import type { ManifestPropertyEditorSchema } from '@umbraco-cms/backoffice/property-editor';

export const manifest: ManifestPropertyEditorSchema = {
	type: 'propertyEditorSchema',
	name: 'Heading',
	alias: 'Umbraco.Community.Heading',
	meta: {
		defaultPropertyEditorUiAlias: 'TextboxHeading.propertyEditorUI', //TODO Reaname
		settings: {
			properties: [
				{
					alias: 'umbracoDataValueType',
					label: 'Headings',
					description: 'Select the allowed headings',
					propertyEditorUiAlias: 'Umb.Community.PropertyEditorUi.HeadingType',
					//propertyEditorUiAlias : 'Umb.PropertyEditorUi.TextBox'
				},
			],
		},
	},
};
