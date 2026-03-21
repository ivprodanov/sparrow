import { useEffect, useState } from "react";
import { ComponentsMappings } from "./ThingMappings";

export const Things = ({ description, events = [], texts = [] }) => {
  const [components, setComponents] = useState(null);

  useEffect(() => {
    if (!description) return;
    setComponents(determineThings());
  }, [description, events, texts]);

  const determineThings = () => {
    const descriptionElements = description.split(" ");
    
    // e.g., "3 primary rounded buttons"
    const numberOfThings = parseInt(descriptionElements[0], 10); 
    const typeOfThing = descriptionElements[descriptionElements.length - 1]; 
    
    // Slice out the number (index 0) and the type (last index) to get just the modifiers
    const descriptions = descriptionElements.slice(1, -1);

    return {
      type: typeOfThing, // e.g., "buttons"
      numberOfThings: isNaN(numberOfThings) ? 1 : numberOfThings,
      descriptions,      // e.g., ["primary", "rounded"]
      texts,             // Just pass the arrays directly
      events
    };
  };

  return components ? ComponentsMappings(components) : null;
};