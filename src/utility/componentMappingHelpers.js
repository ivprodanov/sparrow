export const filterMappings = (mappings, type, keys) => {
  const typeMappings = mappings[type] || {};
  const filteredKeys = keys.filter(key => key in typeMappings)

  const result = filteredKeys.flatMap(key => typeMappings[key])
  return result
};

export const extractSizeClass = (component, mappings) => {
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

//TODO: Currently too specific for card!
export const generateClassNames = (component, sizeClass, additionalClasses, className) => {
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

    if (className){
      classNames = classNames.concat(className);
    }
  
    return classNames.join(" ");
  };