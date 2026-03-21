import Button from "./Button";
import Card from "./Card";
// New Form Component Imports (Ensure you create these files!)
import Input from "./Input";
import Textarea from "./Textarea";
import Toggle from "./Toggle";
import Select from "./Select";
import FileUpload from "./FileUpload";
import FormWrapper from "./FormWrapper";

import { ThingMappings } from "../mappings/mappings";
import { parseDescription } from "../utility/componentMappingHelpers";
import { Heading, Paragraph } from "./Typography";
import { Column, Container, Row } from "./Layout";
import ImageCarousel from "./ImageCarousel";
import CardCarousel from "./CardCarousel";

export const ComponentMappings = (
  component,
  children,
  event,
  image,
  imageAlt,
  cardTitle,
  customClassName,
) => {
  if (!component) return null;

  // 1. Extract standardized props using our single helper
  const { size, variant, classes } = parseDescription(
    component.type,
    component.description,
    ThingMappings,
  );

  // 2. Combine the mapped utility classes with any user-provided classes
  const combinedClassName = [...classes, customClassName]
    .filter(Boolean)
    .join(" ");

  switch (component.type) {
    // ------------------------------------------------------------------
    // EXISTING COMPONENTS
    // ------------------------------------------------------------------
    case "button":
      return (
        <Button
          onClick={event}
          size={size}
          variant={variant}
          className={combinedClassName}
        >
          {children}
        </Button>
      );

    case "card":
    case "image-card":
      return (
        <Card
          cardImage={component.type === "image-card" ? image : null}
          imageAlt={imageAlt}
          title={cardTitle}
          variant={variant}
          size={size}
          className={combinedClassName}
        >
          {children}
        </Card>
      );

    // ------------------------------------------------------------------
    // NEW FORM COMPONENTS
    // ------------------------------------------------------------------
    case "input": {
      // Check our mapped utility classes to see if the user requested an icon or button
      const hasIcon = classes.includes("has-icon");
      const hasButton = classes.includes("has-button");

      return (
        <Input
          type="text"
          placeholder={cardTitle || "Enter text..."}
          variant={variant}
          size={size}
          className={combinedClassName}
          onChange={event}
          // Pass a default icon if requested (you can replace '🔍' with an actual SVG/Icon component)
          icon={hasIcon ? <span>🔍</span> : null}
          // Pass a fully formed Sparrow button if requested
          button={
            hasButton ? (
              <Button size={size} variant={variant}>
                Submit
              </Button>
            ) : null
          }
        />
      );
    }

    case "textarea":
      return (
        <Textarea
          placeholder={cardTitle || "Enter details..."}
          variant={variant}
          size={size}
          className={combinedClassName}
          onChange={event}
        />
      );

    case "checkbox":
    case "radio":
      // Since HTML treats them similarly, we can route both to the <Toggle /> component
      return (
        <Toggle
          type={component.type} // passes "checkbox" or "radio" natively
          label={cardTitle || "Option label"}
          variant={variant}
          size={size}
          className={combinedClassName}
          onChange={event}
        />
      );

    case "select":
      return (
        <Select
          // If children is an array, we map them as options, otherwise use a fallback
          options={
            Array.isArray(children) ? children : ["Option 1", "Option 2"]
          }
          variant={variant}
          size={size}
          className={combinedClassName}
          onChange={event}
        />
      );

    case "file-upload":
      return (
        <FileUpload
          label={cardTitle || "Choose a file"}
          variant={variant}
          size={size}
          className={combinedClassName}
          onChange={event}
        />
      );

    case "form":
      // The wrapper itself doesn't need sizes/variants, just the layout modifiers
      return (
        <FormWrapper className={combinedClassName} onSubmit={event}>
          {children}
        </FormWrapper>
      );

    // ------------------------------------------------------------------
    // TYPOGRAPHY
    // ------------------------------------------------------------------
    case "heading":
      return (
        <Heading
          level={size} // "1", "2", etc. mapped from the size dictionary
          className={combinedClassName}
        >
          {children || cardTitle || "Heading Text"}
        </Heading>
      );

    case "paragraph":
      return (
        <Paragraph className={combinedClassName}>
          {children || cardTitle || "Lorem ipsum dolor sit amet."}
        </Paragraph>
      );

    // ------------------------------------------------------------------
    // LAYOUT & CONTAINERS
    // ------------------------------------------------------------------
    case "container":
      return <Container className={combinedClassName}>{children}</Container>;

    case "row":
      return <Row className={combinedClassName}>{children}</Row>;

    case "column":
      return (
        <Column
          sizeClass={size === "md" ? "" : size} // Ignore default "md" to let flexbox "col" take over
          className={combinedClassName}
        >
          {children}
        </Column>
      );

    // ... inside ComponentMappings switch statement ...

    case "image-carousel":
      return (
        <ImageCarousel
          // If the user passes an array inside <Thing>, we use it. Otherwise, empty array fallback.
          images={Array.isArray(children) ? children : []}
          variant={variant}
          size={size}
          className={combinedClassName}
        />
      );

    case "card-carousel":
      return (
        <CardCarousel
          cards={Array.isArray(children) ? children : []}
          variant={variant}
          size={size}
          className={combinedClassName}
        />
      );

    default:
      console.warn(`Component type "${component.type}" is not supported yet.`);
      return null;
  }
};

// ------------------------------------------------------------------
// PLURAL COMPONENT LOGIC (Kept identical to previous refactor)
// ------------------------------------------------------------------
export const ComponentsMappings = (pluralComponent) => {
  if (!pluralComponent) return null;

  const singularType = pluralComponent.type.replace(/s$/, "");

  return Array.from({ length: pluralComponent.numberOfThings }, (_, index) => {
    const singularConfig = {
      type: singularType,
      description: pluralComponent.descriptions,
    };

    const itemText = pluralComponent.texts[index] || `Item ${index + 1}`;
    const itemEvent = pluralComponent.events[index] || undefined;

    return (
      <div key={index} className="sparrow-item-wrapper">
        {ComponentMappings(
          singularConfig,
          itemText,
          itemEvent,
          null,
          null,
          itemText,
          "",
        )}
      </div>
    );
  });
};
