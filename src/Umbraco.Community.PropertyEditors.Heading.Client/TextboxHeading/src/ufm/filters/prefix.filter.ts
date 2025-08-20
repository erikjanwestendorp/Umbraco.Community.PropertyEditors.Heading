import { UmbUfmFilterBase } from '@umbraco-cms/backoffice/ufm';

class UmbUfmPrefixFilterApi extends UmbUfmFilterBase {

  	filter(str?: string, prefix: string = '') {
        if (!str) return '';
		return `${prefix} ${str}`;
	}
}
export { UmbUfmPrefixFilterApi as api };