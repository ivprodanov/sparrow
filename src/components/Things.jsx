import { useEffect, useState } from "react";
import { ComponentsMappings } from "./ThingMappings";
import { ThingMappings } from "../mappings/mappings";


export const Things = ({ description, events = [] , texts = [] }) => {
    const [components, setComponents] = useState();

  useEffect(() => {
    let things = determineThings();

    setComponents(things);
  }, [description]);

  const determineThings = () => {
    let descriptionElements = description.split(" ");
    let typeOfThing = descriptionElements[descriptionElements.length - 1];
    let numberOfThings = descriptionElements[0];
    let descriptions = descriptionElements.slice(0, -1)

    let textsObject = {}
    let eventsObject = {}

    for(let i = 0; i < texts.length; i++){
        textsObject[`text${i + 1}`] = texts[i];
    }

    for(let i = 0; i < events.length; i++){
        eventsObject[`event${i + 1}`] = events[i];
    }

    let describedThings = {
        type: typeOfThing,
        numberOfThings,
        descriptions,
        textsObject,
        eventsObject
    }

    return describedThings;
  };

  return ComponentsMappings(components);
};
