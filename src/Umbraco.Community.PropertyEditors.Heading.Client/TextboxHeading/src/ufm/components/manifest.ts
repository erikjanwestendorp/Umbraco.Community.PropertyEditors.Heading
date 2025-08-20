import type { ManifestUfmComponent } from '@umbraco-cms/backoffice/ufm';

export const manifest: ManifestUfmComponent = {
    type: 'ufmComponent',
    alias: 'Umb.Markdown.HeadingValue',
    name: 'Heading Value UFM Component',
    api: () => import('./heading-value.component.js'),
    meta: {
        alias: 'umbHeadingValue',
    },
};