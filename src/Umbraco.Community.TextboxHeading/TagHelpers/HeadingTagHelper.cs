using Microsoft.AspNetCore.Razor.TagHelpers;
using Umbraco.Community.TextboxHeading.Models;

namespace Umbraco.Community.TextboxHeading.TagHelpers;

[HtmlTargetElement("umb-community-heading")]
public class HeadingTagHelper : TagHelper
{
    public Heading? Heading { get; set; }

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
    }
}
