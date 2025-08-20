import { UmbUfmComponentBase } from '@umbraco-cms/backoffice/ufm';
import './heading-value.element.js';

export class HeadingUfmComponentApi extends UmbUfmComponentBase {
  render() {
    return `<ufm-heading-value></ufm-heading-value>`;
  }
}

export { HeadingUfmComponentApi as api };