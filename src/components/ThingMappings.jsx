import Button from "./Button";
import Card from "./Card";
import { ThingMappings } from "../mappings/mappings";
import { filterMappings, extractSizeClass, generateClassNames } from "../utility/componentMappingHelpers";

export const ComponentMappings = (
  component,
  children,
  event,
  image,
  imageAlt,
  cardTitle,
  className
) => {
  // Ensure filteredClasses is set based on the correct component type
  const filteredClasses =
    component && filterMappings(ThingMappings, component.type, component.description);

  const sizeClass = extractSizeClass(component, ThingMappings);

  const classNames = generateClassNames(component, sizeClass, filteredClasses, className);

  if (component) {
    switch (component.type) {
      case "button":
        return (
          <Button onClick={event} stylings={[...filteredClasses, className && className].join(" ")}>
            {children}
          </Button>
        );
      case "card":
      case "image-card":
        return (
          <Card
            cardImage={component.type === "image-card" ? image : null}
            imageAlt={imageAlt}
            stylings={classNames}  // Pass the properly generated class names
            title={cardTitle}
            variant={component.type}
            size={sizeClass}
            className={className}
          >
            {children}
          </Card>
        );
      default:
        break;
    }
  }
};


export const ComponentsMappings = (component) => {
  // ------------------------------------------
  // TODO -> Currently too specific for button:
  // ------------------------------------------
  const filterMappings = (mappings, keys) => {
    return keys.reduce((result, key) => {
      if (key in mappings.button) {
        result = result.concat(mappings.button[key]);
      }
      return result;
    }, []);
  };

  const filteredClasses =
    component && filterMappings(ThingMappings, component.descriptions);

  if (component) {
    switch (component.type) {
      case "buttons":
        const numberOfButtons = parseInt(component.numberOfThings, 10);
        return Array.from({ length: numberOfButtons }, (_, idx) => (
          <Button
            onClick={component.eventsObject[`event${idx + 1}`]}
            key={idx}
            stylings={filteredClasses.join(" ")}
          >
            {component.textsObject[`text${idx + 1}`]}
          </Button>
        ));
      default:
        return null;
    }
  }
};
