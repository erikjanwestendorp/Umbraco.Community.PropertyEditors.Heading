using System.Text.Json.Serialization;
using Umbraco.Community.TextboxHeading.Enums;

namespace Umbraco.Community.TextboxHeading.Models;
public class Heading
{
    [JsonPropertyName("text")]
    public string? Text { get; set; }

    [JsonPropertyName("size")]
    public HtmlHeading Size { get; set; }
}
