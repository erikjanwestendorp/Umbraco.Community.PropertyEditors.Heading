const i = {
  type: "propertyEditorSchema",
  name: "Heading",
  alias: "Umbraco.Community.Heading",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Community.PropertyEditorUi.Heading",
    settings: {
      properties: [
        {
          alias: "allowedHeadings",
          label: "Headings",
          description: "Select the allowed headings",
          propertyEditorUiAlias: "Umb.Community.PropertyEditorUi.HeadingSize"
        },
        {
          alias: "allowedFormattingOptions",
          label: "Text formatting",
          description: "Select the allowed text formatting options",
          propertyEditorUiAlias: "Umb.Community.PropertyEditorUi.HeadingFormatting"
        }
      ]
    }
  }
}, t = [
  {
    type: "propertyEditorUi",
    alias: "Umb.Community.PropertyEditorUi.Heading",
    name: "Heading Property Editor UI",
    element: () => import("./property-editor-ui-heading.element-DopfUUd4.js"),
    meta: {
      label: "Heading",
      icon: "icon-heading-1",
      group: "community",
      propertyEditorSchemaAlias: "Umbraco.Community.Heading",
      supportsReadOnly: !0
    }
  },
  i
], e = {
  type: "propertyEditorUi",
  alias: "Umb.Community.PropertyEditorUi.HeadingSize",
  name: "Heading Type Property Editor UI",
  element: () => import("./property-editor-ui-heading-size.element-2ybR-r7R.js"),
  meta: {
    label: "Heading Size",
    icon: "icon-heading-2",
    group: "Community"
  }
}, o = {
  type: "propertyEditorUi",
  alias: "Umb.Community.PropertyEditorUi.HeadingFormatting",
  name: "Heading Formatting Property Editor UI",
  element: () => import("./property-editor-ui-heading-formatting.element-CSWHxI8e.js"),
  meta: {
    label: "Heading Formatting",
    icon: "icon-bold",
    group: "Community"
  }
}, a = {
  type: "ufmComponent",
  alias: "Umb.Markdown.HeadingValue",
  name: "Heading Value UFM Component",
  api: () => import("./heading-value.component-CV-4mR9N.js"),
  meta: {
    alias: "umbHeadingValue"
  }
}, n = [
  ...t,
  e,
  o,
  a
];
export {
  n as manifests
};
//# sourceMappingURL=umbraco-community-property-editors-heading.js.map
