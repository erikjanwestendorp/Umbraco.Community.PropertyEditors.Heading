const e = {
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
        }
      ]
    }
  }
}, i = [
  {
    type: "propertyEditorUi",
    alias: "Umb.Community.PropertyEditorUi.Heading",
    name: "Heading Property Editor UI",
    element: () => import("./property-editor-ui-heading.element-vzvOr01w.js"),
    meta: {
      label: "Heading",
      icon: "icon-heading-1",
      group: "community",
      propertyEditorSchemaAlias: "Umbraco.Community.Heading",
      supportsReadOnly: !0
    }
  },
  e
], t = {
  type: "propertyEditorUi",
  alias: "Umb.Community.PropertyEditorUi.HeadingSize",
  name: "Heading Type Property Editor UI",
  element: () => import("./property-editor-ui-heading-size.element-2ybR-r7R.js"),
  meta: {
    label: "Heading Size",
    icon: "icon-heading-2",
    group: "Community"
  }
}, a = {
  type: "ufmComponent",
  alias: "Umb.Markdown.HeadingValue",
  name: "Heading Value UFM Component",
  api: () => import("./heading-value.component-XGlILDUb.js"),
  meta: {
    alias: "umbHeadingValue"
  }
}, o = [
  ...i,
  t,
  a
];
export {
  o as manifests
};
//# sourceMappingURL=umbraco-community-property-editors-heading.js.map
