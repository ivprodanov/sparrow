export const parseDescription = (componentType, descriptionKeys, mappings) => {
  // Fallback to empty configs if the component isn't mapped yet
  const config = mappings[componentType] || {};
  const { sizes = {}, variants = {}, modifiers = {} } = config;

  // Set reliable defaults
  let result = {
    size: "md", 
    variant: "primary",
    classes: []
  };

  // Ensure descriptionKeys is an array
  const keys = Array.isArray(descriptionKeys) ? descriptionKeys : descriptionKeys.split(" ");

  // Loop through the user's string and bucket the properties
  for (let key of keys) {
    if (sizes[key]) {
      result.size = sizes[key];
    } else if (variants[key]) {
      result.variant = variants[key];
    } else if (modifiers[key]) {
      // Append utility classes (using spread in case a modifier maps to multiple classes)
      result.classes.push(...modifiers[key]); 
    }
  }

  return result;
};