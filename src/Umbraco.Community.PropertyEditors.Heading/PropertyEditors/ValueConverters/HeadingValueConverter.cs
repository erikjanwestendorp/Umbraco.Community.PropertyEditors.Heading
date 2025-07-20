using System.Text.Json;
using System.Text.Json.Serialization;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace Umbraco.Community.PropertyEditors.Heading.PropertyEditors.ValueConverters;

public class HeadingValueConverter : PropertyValueConverterBase
{
    public override bool IsConverter(IPublishedPropertyType propertyType)
    {
        return propertyType.EditorAlias.Equals(Constants.PropertyEditors.Aliases.Heading, StringComparison.OrdinalIgnoreCase);
    }

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
        => typeof(Models.HtmlHeading);

    public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
        => PropertyCacheLevel.Element;

    public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType, object? source, bool preview)
    {
        var value = source?.ToString();

        if(string.IsNullOrWhiteSpace(value))
        {
            return null;
        }


        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        options.Converters.Add(new JsonStringEnumConverter());

        var heading = JsonSerializer.Deserialize<Models.HtmlHeading>(value, options);

        return heading;

    }
}
