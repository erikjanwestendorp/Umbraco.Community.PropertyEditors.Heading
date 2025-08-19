import { UmbUfmComponentBase } from '@umbraco-cms/backoffice/ufm';
import './heading-value.element.js';

export class MyCustomUfmComponentApi extends UmbUfmComponentBase {
  render() {
    return `<ufm-heading-value></ufm-heading-value>`;
  }
}

export { MyCustomUfmComponentApi as api };