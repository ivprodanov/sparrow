import { useEffect, useState } from "react";
import { ComponentMappings } from "./ThingMappings";
import { ThingMappings } from "../mappings/mappings";

export const Thing = ({ description, children, event, cardImage, imageAlt, cardTitle, className }) => {
  const [component, setComponent] = useState(null); 

  useEffect(() => {
    if (!description) {
      console.error("No description provided!");
      return;
    }

    let thing = determineThing();
    console.log("ThingMappings:", ThingMappings[thing.type]);
    console.log("Thing description:", thing.description);

    setComponent(thing);
  }, [description]);

  const determineThing = () => {
    if (!description) return null; 

    let descriptionElements = description.split(" ");
    let typeOfThing = descriptionElements[descriptionElements.length - 1];
    let descriptions = descriptionElements.slice(0, -1);

    let describedThing = {
      type: typeOfThing,
      description: descriptions,
    };

    return describedThing;
  };

  if (!component) {
    return null; 
  }

  return ComponentMappings(component, children, event, cardImage, imageAlt, cardTitle, className);
};
