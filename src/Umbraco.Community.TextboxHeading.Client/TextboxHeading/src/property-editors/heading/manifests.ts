import { manifest as headingSchemaManifest } from './Umbraco.Community.Heading.js';

export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'propertyEditorUi',
		alias: 'TextboxHeading.propertyEditorUI',  //TODO Reaname
		name: 'Heading Property Editor UI',
		element: () => import("./heading-property-editor.element.js"), //TODO Rename file to somthing with UI
		meta: {
			label: 'Heading',
			icon: 'icon-heading-1',
			group: 'community',
			propertyEditorSchemaAlias: 'Umbraco.Community.Heading', //TODO Change
			//propertyEditorSchemaAlias: 'Umbraco.Plain.Json',
			supportsReadOnly: true,
			// settings:{
			// 	properties: [
			// 		{
			// 			alias: "disabled",
			// 			label: "Disabled",
			// 			description: "Disables the suggestion button",
			// 			propertyEditorUiAlias: "Umb.Community.PropertyEditorUi.HeadingType"
			// 		}
            // 	]
			// }
		},
	},
	headingSchemaManifest,
];
