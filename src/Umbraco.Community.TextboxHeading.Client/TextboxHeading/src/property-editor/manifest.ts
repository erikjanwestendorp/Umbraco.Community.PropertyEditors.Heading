import { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/property-editor";

export const textboxHeadingEditorManifest: ManifestPropertyEditorUi = {
  name: "Textbox Heading Property Editor UI",
  alias: "TextboxHeading.propertyEditorUI",
  type: "propertyEditorUi",
  element: () => import("./textbox-heading-property-editor.element.js"),
  meta: {
    propertyEditorSchemaAlias: "Umbraco.Plain.Json",
    label: "Textbox Heading",
    icon: "icon-pin-location",
    group: "common",
  },
};