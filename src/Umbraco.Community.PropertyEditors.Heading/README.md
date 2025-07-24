# Heading

A lightweight and flexible property editor for headings in Umbraco CMS. Define heading level and alignment through the backoffice, and render easily using the built-in TagHelper.

## Getting Started

### Creating the Data Type
To use the Heading Property Editor, follow these steps:

1. Go to **Settings** → **Data Types**.
2. Create **Data Type**.
3. Name it (e.g., `Heading`).
4. Select **"Community Heading"** as the property editor.
5. Save the data type.

![Property Editor](https://raw.githubusercontent.com/erikjanwestendorp/Umbraco.Community.PropertyEditors.Heading/main/assets/data-type.png)

### Adding to a Document Type

1. Navigate to **Settings** → **Document Types**.
2. Open or create a Document Type.
3. Add a new property.
4. Choose the `Heading` data type you just created.
5. Save the Document Type.

Now, editors will be able to input structured headings with control over level (H1–H6) and alignment.

![Property Editor](https://raw.githubusercontent.com/erikjanwestendorp/Umbraco.Community.PropertyEditors.Heading/main/assets/property-editor.png)

## Rendering the Heading
To render the heading in your views, you can use the built-in TagHelper.

### Step 1: Register the TagHelper
Add the following line to your `_ViewImports.cshtml`:

```csharp
@addTagHelper *, Umbraco.Community.PropertyEditors.Heading
```
### Example 1: Without Models Builder

If you're not using Models Builder, use `Model.Value<HtmlHeading>()`:

```csharp
@using Umbraco.Community.PropertyEditors.Heading.Models
@inherits Umbraco.Cms.Web.Common.Views.UmbracoViewPage

@{
    Layout = null;
    var heading = Model.Value<HtmlHeading>("heading");
}

<umb-community-heading heading="@heading" />
```
### Example 2: With Models Builder
If you are using strongly typed models via Models Builder:

```csharp
<umb-community-heading heading="@Model.Heading" />
```