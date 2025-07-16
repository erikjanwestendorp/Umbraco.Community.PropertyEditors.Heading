using System.Text.Json.Serialization;
using Umbraco.Community.PropertyEditors.Heading.Enums;

namespace Umbraco.Community.PropertyEditors.Heading.Models;

public class Heading
{
    [JsonPropertyName("text")]
    public string? Text { get; set; }

    [JsonPropertyName("size")]
    public HtmlHeading Size { get; set; }
}
