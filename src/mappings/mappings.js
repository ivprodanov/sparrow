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

const textModifiers = {
  centered: ["text-align-center"],
  right: ["text-align-right"],
  bold: ["fw-700", "ubuntu-bold"],
  light: ["fw-300", "ubuntu-light"],
  italic: ["ubuntu-regular-italic"],
  uppercase: ["text-transform-uppercase"],
  underline: ["text-decoration-underline"]
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
  },

  // ------------------------------------------------------------------
  // TYPOGRAPHY
  // ------------------------------------------------------------------
  heading: {
    sizes: { h1: "1", h2: "2", h3: "3", h4: "4", h5: "5", h6: "6", huge: "1", small: "5" },
    // Updated variants to use text classes
    variants: { primary: "text-primary-500", secondary: "text-secondary-500", accent: "text-accent-500", neutral: "text-neutral-500" }, 
    modifiers: { ...textModifiers }
  },
  paragraph: {
    sizes: { big: "fs-500", "medium-sized": "fs-300", small: "fs-200" },
    // Updated variants to use text classes
    variants: { primary: "text-primary-500", secondary: "text-secondary-500", accent: "text-accent-500", neutral: "text-neutral-500", muted: "text-neutral-400" },
    modifiers: { ...textModifiers, lead: ["fs-500", "fw-500"] }
  },

  // ------------------------------------------------------------------
  // LAYOUT & CONTAINERS
  // ------------------------------------------------------------------
  container: {
    sizes: {}, // Usually dictated by max-width in SCSS
    variants: {},
    modifiers: { fluid: ["w-full", "max-w-none"] } // If you want a full-bleed container
  },
  row: {
    sizes: {},
    variants: {},
    modifiers: { 
      // Map natural language to your gutter classes (gx-*, gy-*)
      "tight": ["gx-2", "gy-2"],
      "loose": ["gx-6", "gy-6"],
      "centered": ["justify-content-center", "align-items-center"] // Assuming flexbox utilities
    }
  },
  column: {
    // Map natural fractions to your 12-column grid system classes!
    sizes: { 
      full: "col-12", 
      half: "col-6", 
      third: "col-4", 
      quarter: "col-3",
      "two-thirds": "col-8",
      "three-quarters": "col-9"
    },
    variants: {},
    modifiers: { ...textModifiers } // Handy to text-align content inside a column
  },

  "image-carousel": {
    sizes: { big: "lg", "medium-sized": "md", small: "sm" },
    variants: { primary: "primary", secondary: "secondary", accent: "accent", neutral: "neutral" },
    modifiers: { ...sharedModifiers } 
  },

  "card-carousel": {
    sizes: { big: "lg", "medium-sized": "md", small: "sm" },
    variants: { primary: "primary", secondary: "secondary", accent: "accent", neutral: "neutral" },
    modifiers: { ...sharedModifiers }
  }
};