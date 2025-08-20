import type {ManifestUfmFilter} from '@umbraco-cms/backoffice/ufm';

export const manifest: ManifestUfmFilter = {
    type: 'ufmFilter',
    alias: 'Umb.Filter.Prefix',
    name: 'Prefix UFM Filter',
    api: () => import('./prefix.filter.js'),
    meta: {
        alias: 'prefix'
    }
}