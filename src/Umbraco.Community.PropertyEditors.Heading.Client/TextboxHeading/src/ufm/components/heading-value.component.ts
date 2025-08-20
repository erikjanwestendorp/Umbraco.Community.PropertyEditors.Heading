import { UmbUfmComponentBase, UfmToken } from '@umbraco-cms/backoffice/ufm';
import './heading-value.element.js';

export class HeadingUfmComponentApi extends UmbUfmComponentBase {
  render(token: UfmToken) {
    if (!token.text) return;

    const attributes = super.getAttributes(token.text);
    return `<ufm-heading-value ${attributes}></ufm-heading-value>`;
  }
}

export { HeadingUfmComponentApi as api };