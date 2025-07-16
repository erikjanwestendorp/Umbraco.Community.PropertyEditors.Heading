using Umbraco.Cms.Core.PropertyEditors;

namespace Umbraco.Community.PropertyEditors.Heading.PropertyEditors;

[DataEditor(
    Constants.PropertyEditors.Aliases.Heading,
    ValueEditorIsReusable = true,
    ValueType = ValueTypes.Json)]
public class HeadingPropertyEditor : DataEditor
{
    public HeadingPropertyEditor(IDataValueEditorFactory dataValueEditorFactory)
        : base(dataValueEditorFactory)
        => SupportsReadOnly = true;
}