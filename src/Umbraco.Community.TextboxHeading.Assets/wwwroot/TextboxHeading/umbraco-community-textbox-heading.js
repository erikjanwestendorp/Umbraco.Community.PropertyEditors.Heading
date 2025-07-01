const e = {
  type: "propertyEditorSchema",
  name: "Heading",
  alias: "Umbraco.Community.Heading",
  meta: {
    defaultPropertyEditorUiAlias: "TextboxHeading.propertyEditorUI",
    //TODO Reaname
    settings: {
      properties: [
        {
          alias: "umbracoDataValueType",
          label: "Headings",
          description: "Select the allowed headings",
          propertyEditorUiAlias: "Umb.Community.PropertyEditorUi.HeadingType"
          //propertyEditorUiAlias : 'Umb.PropertyEditorUi.TextBox'
        }
      ]
    }
  }
}, t = [
  {
    type: "propertyEditorUi",
    alias: "TextboxHeading.propertyEditorUI",
    //TODO Reaname
    name: "Heading Property Editor UI",
    element: () => import("./heading-property-editor.element-BfUmygu8.js"),
    //TODO Rename file to somthing with UI
    meta: {
      label: "Heading",
      icon: "icon-heading-1",
      group: "community",
      propertyEditorSchemaAlias: "Umbraco.Community.Heading",
      //TODO Change
      //propertyEditorSchemaAlias: 'Umbraco.Plain.Json',
      supportsReadOnly: !0
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
    }
  },
  e
], i = {
  type: "propertyEditorUi",
  alias: "Umb.Community.PropertyEditorUi.HeadingType",
  //TODO FIX Naming
  name: "Heading Type Property Editor UI",
  element: () => import("./property-editor-ui-heading-type.element-l4IEitvI.js"),
  meta: {
    label: "Heading Type",
    icon: "icon-heading-2",
    group: "Community"
  }
}, o = [
  // textboxHeadingEditorManifest,
  ...t,
  i
];
export {
  o as manifests
};
//# sourceMappingURL=umbraco-community-textbox-heading.js.map
