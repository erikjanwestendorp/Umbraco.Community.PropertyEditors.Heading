import { manifest as headingSchemaManifest } from './Umbraco.Community.Heading.js';

export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'propertyEditorUi',
		alias: 'Umb.Community.PropertyEditorUi.Heading',
		name: 'Heading Property Editor UI',
		element: () => import("./property-editor-ui-heading.element.js"),
		meta: {
			label: 'Heading',
			icon: 'icon-heading-1',
			group: 'community',
			propertyEditorSchemaAlias: 'Umbraco.Community.Heading',
			supportsReadOnly: true,
		},
	},
	headingSchemaManifest,
];
