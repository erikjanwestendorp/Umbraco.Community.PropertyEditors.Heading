using System.Text.Json.Serialization;
using Umbraco.Community.PropertyEditors.Heading.Enums;

namespace Umbraco.Community.PropertyEditors.Heading.Models;

public class HtmlHeading
{
    [JsonPropertyName("text")]
    public string? Text { get; set; }

    [JsonPropertyName("size")]
    public HeadingSize Size { get; set; }

    [JsonPropertyName("bold")]
    public bool Bold { get; set; }

    [JsonPropertyName("italic")]
    public bool Italic { get; set; }

    [JsonPropertyName("underline")]
    public bool Underline { get; set; }

    [JsonPropertyName("superscript")]
    public bool Superscript { get; set; }

    [JsonPropertyName("subscript")]
    public bool Subscript { get; set; }
}
