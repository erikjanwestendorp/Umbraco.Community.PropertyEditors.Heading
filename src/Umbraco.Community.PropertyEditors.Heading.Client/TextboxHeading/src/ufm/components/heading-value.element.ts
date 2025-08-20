import { UmbUfmElementBase, UMB_UFM_RENDER_CONTEXT } from '@umbraco-cms/backoffice/ufm';
import { customElement, property } from '@umbraco-cms/backoffice/external/lit';

const elementName = 'ufm-heading-value';

@customElement(elementName)
export class UmbUfmHeadingValueElement extends UmbUfmElementBase {
  @property({ type: String }) alias: string | null = null;
  @property({ type: String }) prefix: string | null = null;

  constructor() {
    super();
    this.consumeContext(UMB_UFM_RENDER_CONTEXT, (context) => {
      if (!context) return;

      this.observe(context.value, (value) => {
        const extracted =
          this.alias && typeof value === 'object' && value !== null
            ? (value as Record<string, unknown>)[this.alias]
            : (value as any)?.title?.text ?? value;

        const text = this.toDisplayString(extracted);
        this.value = text ? `${this.prefix ?? ''}${text}` : '';
      }, 'observeValue');
    });
  }

  private toDisplayString(v: unknown): string {
    if (v == null) return '';
    if (typeof v === 'string') return v.trim();
    if (typeof v === 'number' || typeof v === 'boolean') return String(v);
    const candidate = (v as any)?.text ?? (v as any)?.value;
    return typeof candidate === 'string' ? candidate.trim() : '';
  }
}

export { UmbUfmHeadingValueElement as element };

declare global {
  interface HTMLElementTagNameMap {
    [elementName]: UmbUfmHeadingValueElement;
  }
}