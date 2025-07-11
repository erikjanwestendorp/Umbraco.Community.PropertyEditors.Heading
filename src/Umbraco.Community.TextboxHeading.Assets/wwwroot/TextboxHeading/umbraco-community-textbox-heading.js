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
          alias: "allowedHeadings",
          label: "Headings",
          description: "Select the allowed headings",
          propertyEditorUiAlias: "Umb.Community.PropertyEditorUi.HeadingType"
        }
      ]
    }
  }
}, i = [
  {
    type: "propertyEditorUi",
    alias: "TextboxHeading.propertyEditorUI",
    //TODO Reaname
    name: "Heading Property Editor UI",
    element: () => import("./heading-property-editor.element-B9ZRBHK7.js"),
    //TODO Rename file to somthing with UI
    meta: {
      label: "Heading",
      icon: "icon-heading-1",
      group: "community",
      propertyEditorSchemaAlias: "Umbraco.Community.Heading",
      //TODO Change
      supportsReadOnly: !0
    }
  },
  e
], t = {
  type: "propertyEditorUi",
  alias: "Umb.Community.PropertyEditorUi.HeadingType",
  //TODO FIX Naming
  name: "Heading Type Property Editor UI",
  element: () => import("./property-editor-ui-heading-type.element-BdTl6R2Q.js"),
  meta: {
    label: "Heading Type",
    icon: "icon-heading-2",
    group: "Community"
  }
}, o = [
  ...i,
  t
];
export {
  o as manifests
};
//# sourceMappingURL=umbraco-community-textbox-heading.js.map
