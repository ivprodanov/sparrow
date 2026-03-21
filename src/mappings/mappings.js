const sharedModifiers = {
  rounded: ["radius-lg"],
  bordered: ["border-sm"],
  "thick-bordered": ["border-md"],
  "full-width": ["w-100"], // Assuming you add a width utility
};

// Form specific sizes (inputs often need different padding than cards)
const formSizes = {
  big: "lg",
  "medium-sized": "md",
  small: "sm"
};

const formVariants = {
  primary: "primary",
  secondary: "secondary",
  accent: "accent",
  neutral: "neutral"
};

export const ThingMappings = {
  button: {
    sizes: { big: "lg", "medium-sized": "md", small: "sm" },
    variants: { primary: "primary", secondary: "secondary", accent: "accent", neutral: "neutral" },
    modifiers: { ...sharedModifiers }
  },
  
  card: {
    sizes: { big: "lg", "medium-sized": "md", small: "sm" },
    variants: { primary: "primary", secondary: "secondary", accent: "accent", neutral: "neutral" },
    modifiers: { ...sharedModifiers }
  },

  "image-card": {
    sizes: { big: "lg", "medium-sized": "md", small: "sm" },
    variants: { primary: "primary", secondary: "secondary", accent: "accent", neutral: "neutral" },
    modifiers: { ...sharedModifiers }
  },
input: {
    sizes: formSizes,
    variants: formVariants,
    modifiers: { ...sharedModifiers, "with-icon": ["has-icon"], "with-button": ["has-button"] }
  },
  textarea: {
    sizes: formSizes,
    variants: formVariants,
    modifiers: { ...sharedModifiers }
  },
  select: {
    sizes: formSizes,
    variants: formVariants,
    modifiers: { ...sharedModifiers }
  },
  checkbox: {
    sizes: formSizes,
    variants: formVariants,
    modifiers: { ...sharedModifiers }
  },
  radio: {
    sizes: formSizes,
    variants: formVariants,
    modifiers: { ...sharedModifiers }
  },
  "file-upload": {
    sizes: formSizes,
    variants: formVariants,
    modifiers: { ...sharedModifiers }
  },
  form: {
    // Forms might just need layout modifiers rather than variants/sizes
    sizes: {},
    variants: {},
    modifiers: { "inline": ["form-inline"], "stacked": ["form-stacked"] }
  }
};