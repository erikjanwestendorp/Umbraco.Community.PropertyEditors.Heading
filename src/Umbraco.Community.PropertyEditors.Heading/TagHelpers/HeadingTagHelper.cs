using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Umbraco.Community.PropertyEditors.Heading.TagHelpers;

[HtmlTargetElement("umb-community-heading")]
public class HeadingTagHelper : TagHelper
{
    public Models.HtmlHeading? Heading { get; set; }
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
        output.Content.SetContent(Heading.Text);

    
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
