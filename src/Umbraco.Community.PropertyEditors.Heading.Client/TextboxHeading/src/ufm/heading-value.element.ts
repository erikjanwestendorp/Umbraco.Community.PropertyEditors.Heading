import { UmbUfmElementBase, UMB_UFM_RENDER_CONTEXT } from '@umbraco-cms/backoffice/ufm';
import { customElement, property } from '@umbraco-cms/backoffice/external/lit';

const elementName = 'ufm-heading-value';

@customElement(elementName)
export class UmbUfmHeadingValueElement extends UmbUfmElementBase {
	@property()
	alias?: string;

	constructor() {
		super();
		this.consumeContext(UMB_UFM_RENDER_CONTEXT, (context) => {
			if (context) {
				this.observe(
					context.value,
					(value) => {
						if (this.alias !== undefined && typeof value === 'object' && value !== null) {
                            this.value = (value as Record<string, unknown>)[this.alias];
                        } else {
                            this.value = (value as any)?.title?.text ?? value ?? '';
                        }

					},
					'observeValue',
				);
			}
		});
	}
}

export { UmbUfmHeadingValueElement as element };

declare global {
	interface HTMLElementTagNameMap {
		[elementName]: UmbUfmHeadingValueElement;
	}
}
