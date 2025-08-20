import { manifests as headingManifest } from './property-editors/heading/manifests.js';
import { manifest as headingTypeManifest } from './property-editors/heading-size/manifests.js';
import { manifest as headingValueManifest} from './ufm/components/manifest.js';
import { manifest as headingValueFilterManifest} from './ufm/filters/manifest.js';

export const manifests: Array<UmbExtensionManifest> = [
  ...headingManifest,
  headingTypeManifest,
  headingValueManifest,
  headingValueFilterManifest
]; 