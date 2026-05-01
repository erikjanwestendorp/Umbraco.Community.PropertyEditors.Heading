using System.Text.Encodings.Web;
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

        var encodedText = HtmlEncoder.Default.Encode(Heading.Text ?? string.Empty);
        var formattedText = encodedText;

        if (Heading.Subscript)
            formattedText = $"<sub>{formattedText}</sub>";

        if (Heading.Superscript)
            formattedText = $"<sup>{formattedText}</sup>";

        if (Heading.Underline)
            formattedText = $"<u>{formattedText}</u>";

        if (Heading.Italic)
            formattedText = $"<em>{formattedText}</em>";

        if (Heading.Bold)
            formattedText = $"<strong>{formattedText}</strong>";

        output.Content.SetHtmlContent(formattedText);

    
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
