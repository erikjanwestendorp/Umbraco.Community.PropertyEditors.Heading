using Microsoft.AspNetCore.Razor.TagHelpers;
using Umbraco.Community.PropertyEditors.Heading.Models;

namespace Umbraco.Community.PropertyEditors.Heading.TagHelpers;

[HtmlTargetElement("umb-community-heading")]
public class HeadingTagHelper : TagHelper
{
    public HtmlHeading? Heading { get; set; }
    public string? Id { get; set; }
    public string? Class { get; set; }
    public string? AriaLabel { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        if (Heading == null)
        {
            return;
        }

        var tagName = Heading.Size.ToString().ToLower();
        output.TagName = tagName;
        output.TagMode = TagMode.StartTagAndEndTag;
        // The text field contains inline HTML produced by the backoffice property editor
        // (via document.execCommand formatting). Since this content is authored by authenticated
        // Umbraco editors, it is rendered as HTML — the same approach used by Umbraco's own
        // rich text editor property editor.
        output.Content.SetHtmlContent(Heading.Text ?? string.Empty);

    
        if (!string.IsNullOrWhiteSpace(Class))
        {
            output.Attributes.SetAttribute("class", Class);
        }
        
        if (!string.IsNullOrWhiteSpace(Id))
        {
            output.Attributes.SetAttribute("id", Id);
        }

        if (!string.IsNullOrWhiteSpace(AriaLabel))
        {
            output.Attributes.SetAttribute("aria-label", AriaLabel);
        }
    }
}
