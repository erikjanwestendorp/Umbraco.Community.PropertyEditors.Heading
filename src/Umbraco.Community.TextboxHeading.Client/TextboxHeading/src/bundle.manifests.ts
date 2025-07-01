// import { textboxHeadingEditorManifest } from "./property-editors/manifest.js";
import { manifests as headingManifest } from './property-editors/heading/manifests.js';
import { manifest as headingTypeManifest } from './property-editors/heading-type/manifests.js';

export const manifests: Array<UmbExtensionManifest> = [
  // textboxHeadingEditorManifest,
  ...headingManifest,
  headingTypeManifest
]; 