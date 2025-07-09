using System.Text.Json;
using System.Text.Json.Serialization;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Community.TextboxHeading.Enums;
using Umbraco.Community.TextboxHeading.Models;

namespace Umbraco.Community.TextboxHeading.PropertyEditors.ValueConverters;

public class HeadingValueConverter : PropertyValueConverterBase
{
    public override bool IsConverter(IPublishedPropertyType propertyType)
    {
        return propertyType.EditorAlias.Equals(Constants.PropertyEditors.Aliases.Heading, StringComparison.OrdinalIgnoreCase);
    }

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
        => typeof(Heading);

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

        var heading = JsonSerializer.Deserialize<Heading>(value, options);

        return heading;

    }
}
