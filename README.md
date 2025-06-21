![image](https://github.com/user-attachments/assets/b2536b28-e0eb-4231-981b-0036504165ac)


# 🕊️ SPARROW

## A “describe-it-yourself” design system built on Flexbox

**SPARROW** is an experimental, declarative design system for React. Rather than composing rigid UI components, you describe what you want—and SPARROW figures out the styles based on your words.

---

## 🚀 Why SPARROW?

Traditional component libraries can be opinionated or heavy-handed. With SPARROW, you define components through human-readable descriptions, and the framework translates them into styled elements using utility classes.

Example:

```jsx
<Thing description="a big rounded button">
  This is a big rounded button
</Thing>
```

Inspired by natural language and powered by utility-first styling (like Flexbox), SPARROW is meant to be playful, lightweight, and expressive.

---

## 📢 June 2025 — Now Open Source!

After much encouragement (thanks, friend 🙌), I've decided to open-source SPARROW. I’d love for you to contribute, offer feedback, or just experiment with the framework.

Whether you want to tinker, optimize, or build—your involvement is welcome.

📬 Feel free to reach out: [contact@prodanov.ch](mailto:contact@prodanov.ch)

---

## 🛠️ Todo & Development Roadmap

### 🔧 Core Improvements

* [ ] Simplify and combine card props (avoid bloat in `<Thing />`)
* [ ] Improve support for breakpoints (smaller screens)
* [ ] Finalize grid system review
* [ ] Add better className support to `<Thing />` component
* [ ] Improve rendering performance (address slow styling on hard refresh)

### ✅ Recently Completed

* [x] Size handling for cards
* [x] Height & width utility classes
* [x] Text decoration and positioning utilities
* [x] Fixed duplicate column classes (e.g., `col-6`)
* [x] Added `margin-inline-auto` utility (`m-x-auto`)
* [x] Direct `className` support in `<Thing />`
* [x] Nested `<Thing />` (e.g., buttons inside cards)

---

## How to implement new components:
- mappings.js is responsible for the description keywords, for example the button component:
```js

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

```
In order to implement new components, You could extend this file with new mappings or propose a different solution - I'm open to new ideas.

The componentMappingHelpers.js file is another file, responsible for the creation of components. It is relatively well commented (GPT / me) and could also be extended. Feel free to create new utility files, delete or patch existing functionality etc.

The SCSS file main.scss is where all the other relevant SCSS files are imported - this could and should also be freely edited, extended and modified. 

### To test:
use the Demo.jsx file or create a new one. I was faced with difficulties compiling and building the project so that I could run it as a library - this is another task in and of itself... App.jsx could also be used directly for testing purposes - remember - this project should be compiled as a library in the end (: 

---

## 🧩 Components (Planned / In Progress)

### Text Elements

* [ ] Headings
* [ ] Paragraphs

### Forms & Inputs

* [ ] Basic Input
* [ ] Input with Button
* [ ] Input with Icon
* [ ] Checkbox
* [ ] Radio Button
* [ ] Select Dropdown
* [ ] File Upload
* [ ] Textarea
* [ ] Form Wrapper

### Dropdown

* [ ] Multi-select Dropdown

### Tables

* [ ] Basic Table
* [ ] Styled Table (e.g., zebra striping)

### Carousels

* [ ] Image Carousel
* [ ] Card Carousel

### Layout & Containers

* [ ] Container
* [ ] Row
* [ ] Column

### Modals

* [ ] Simple Modal
* [ ] Modal with Buttons / Custom Content

### Breadcrumbs

* [ ] Basic Breadcrumb
* [ ] Styled Breadcrumb

### Loaders

* [ ] Spinner Loader
* [ ] Loading Bar

---

## ⚙️ Optimization Tasks

* [x] Refactor `generateClassNames()` function
* [x] Extract component mappings into helper utilities
* [ ] Improve className support (investigate use cases)
* [ ] Redesign Card component rendering (consider container over styled)

---

## 🧠 Final Notes

This is still a work-in-progress and a bit of a passion project. Expect quirks and room for experimentation. If you're into building expressive UIs or just want to play with a new take on design systems—come build with me!

---
P.S. I totally didn't edit this in ChatGPT :)

## License

This project is open source and available under the [MIT License](./LICENSE.md).


