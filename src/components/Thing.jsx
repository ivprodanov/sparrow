import { useEffect, useState } from "react";
import { ComponentMappings, ThingMappings } from "./ThingMappings";

export const Thing = ({ description, children }) => {
    const [component, setComponent] = useState();

  useEffect(() => {
    let thing = determineThing();
    console.log(ThingMappings[thing.type])
    console.log(thing.description)

    setComponent(thing);
  }, [description]);

  const determineThing = () => {
    let descriptionElements = description.split(" ");
    let typeOfThing = descriptionElements[descriptionElements.length - 1];
    let descriptions = descriptionElements.slice(0, -1)

    let describedThing = {
        type: typeOfThing,
        description: descriptions
    }

    return describedThing;
  };

  return ComponentMappings(component, children);
};
