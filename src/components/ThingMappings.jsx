import Button from "./Button";

export const ThingMappings = {
    button: {
        //size
        'big': ['p-x-700', 'p-y-400', 'fs-700', 'fw-500'],
        'medium-sized': ['p-x-500', 'p-y-200', 'fs-500'],
        'small': ['p-x-500', 'p-y-200', 'fs-200'],
        //color
        'primary': ['button-primary'],
        'secondary': ['button-secondary'],
        'accent': ['accent-500'],
        'neutral': ['neutral-500'],
        //borders
        'rounded': ['radius-lg'],
        'bordered': ['border-sm'],
        'thick-bordered': ['border-md']
    }
}

export const ComponentMappings = (component, children, event) => {
    const filterMappings = (mappings, keys) => {
        // Flatten the values that match the input keys
        return keys.reduce((result, key) => {
            if (key in mappings.button) {
                result = result.concat(mappings.button[key]);
            }
            console.log(result)
            return result;
        }, []);
    };
    
    const filteredClasses = component && filterMappings(ThingMappings, component.description);

    if(component) {
        switch (component.type) {
            case 'button':
                return <Button onClick={event} stylings={filteredClasses.join(' ')}>{children}</Button>;
                break;
            default:
                break;
        }
    }
}

export const ComponentsMappings = (component) => {
    const filterMappings = (mappings, keys) => {
      return keys.reduce((result, key) => {
        if (key in mappings.button) {
          result = result.concat(mappings.button[key]);
        }
        return result;
      }, []);
    };
  
    const filteredClasses = component && filterMappings(ThingMappings, component.descriptions);
  
    if (component) {
      switch (component.type) {
        case 'buttons':
          const numberOfButtons = parseInt(component.numberOfThings, 10);
          return Array.from({ length: numberOfButtons }, (_, idx) => (
            <Button onClick={component.eventsObject[`event${idx + 1}`]} key={idx} stylings={filteredClasses.join(' ')}>
              {component.textsObject[`text${idx + 1}`]}
            </Button>
          ));
        default:
          return null;
      }
    }
  };
