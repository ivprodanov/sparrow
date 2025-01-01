import Button from "./Button";
import Card from "./Card";

export const ThingMappings = {
  button: {
    // size
    big: ["p-x-700", "p-y-400", "fs-700", "fw-500"],
    "medium-sized": ["p-x-500", "p-y-200", "fs-500"],
    small: ["p-x-500", "p-y-200", "fs-200"],
    // color
    primary: ["button-primary"],
    secondary: ["button-secondary"],
    accent: ["accent-500"],
    neutral: ["neutral-500"],
    // borders
    rounded: ["radius-lg"],
    bordered: ["border-sm"],
    "thick-bordered": ["border-md"],
  },

  // Card
  card: {
    // size
    big: ["lg"],
    "medium-sized": ["md"],
    small: ["sm"],
    // color
    primary: ["card-primary"],
    secondary: ["card-secondary"],
    accent: ["card-accent"],
    neutral: ["card-neutral"],
    // borders
    rounded: ["radius-lg"],
    bordered: ["border-sm"],
    "thick-bordered": ["border-md"],
  },

  "image-card": {
    // size
    big: ["lg"],
    "medium-sized": ["md"],
    small: ["sm"],
    // color
    primary: ["card-primary"],
    secondary: ["card-secondary"],
    accent: ["card-accent"],
    neutral: ["card-neutral"],
    // borders
    rounded: ["radius-lg"],
    bordered: ["border-sm"],
    "thick-bordered": ["border-md"],
  },
};

export const ComponentMappings = (
  component,
  children,
  event,
  image,
  imageAlt,
  cardTitle
) => {
  const filterMappings = (mappings, type, keys) => {
    const typeMappings = mappings[type];  // Get specific mappings for the component type

    // Filter the classes based on the given keys
    return keys.reduce((result, key) => {
      if (key in typeMappings) {
        result = result.concat(typeMappings[key]);
      }
      return result;
    }, []);
  };

  // Ensure filteredClasses is set based on the correct component type
  const filteredClasses =
    component && filterMappings(ThingMappings, component.type, component.description);

  // Helper function to extract size class
  const extractSizeClass = (component, mappings) => {
    if (!component?.type || !mappings[component.type]) {
      console.warn("Invalid component type or mappings:", component);
      return "md"; // Default size
    }

    const descriptionKeys = Array.isArray(component.description)
      ? component.description
      : component.description.split(" ");

    const validMappings = mappings[component.type];

    for (let key of descriptionKeys) {
      if (key in validMappings) {
        return validMappings[key][0]; // Return the first matched size class
      }
    }

    return "md"; // Default size if no match is found
  };
  const generateClassNames = (component, sizeClass, additionalClasses) => {
    let classNames = [];
  
    // Add base class for all cards
    classNames.push("card");
  
    // Add specific class based on component type (card-simple-card, card-image-card)
    if (component?.type === "image-card") {
      classNames.push("card-image-card");
    } else {
      classNames.push("card-simple-card");
    }
  
    // Add the size class (e.g., 'card-lg', 'card-sm', etc.)
    classNames.push(`card-${sizeClass}`);
  
    // Add any additional classes passed to the component
    if (additionalClasses) {
      classNames = classNames.concat(additionalClasses);
    }
  
    return classNames.join(" ");
  };
  
  
  // Extract size class for the component
  const sizeClass = extractSizeClass(component, ThingMappings);

  // Generate the class names properly
  const classNames = generateClassNames(component, sizeClass, filteredClasses);

  if (component) {
    switch (component.type) {
      case "button":
        return (
          <Button onClick={event} stylings={filteredClasses.join(" ")}>
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
