import { manifests as headingManifest } from './property-editors/heading/manifests.js';
import { manifest as headingTypeManifest } from './property-editors/heading-type/manifests.js';

export const manifests: Array<UmbExtensionManifest> = [
  ...headingManifest,
  headingTypeManifest
]; 