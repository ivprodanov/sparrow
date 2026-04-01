```
███████╗██████╗  █████╗ ██████╗ ██████╗  ██████╗ ██╗    ██╗   ██╗   ██╗██╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██║    ██║   ██║   ██║██║
███████╗██████╔╝███████║██████╔╝██████╔╝██║   ██║██║ █╗ ██║   ██║   ██║██║
╚════██║██╔═══╝ ██╔══██║██╔══██╗██╔══██╗██║   ██║██║███╗██║   ██║   ██║██║
███████║██║     ██║  ██║██║  ██║██║  ██║╚██████╔╝╚███╔███╔╝   ╚██████╔╝██║
╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝     ╚═════╝ ╚═╝
```
[![npm version](https://img.shields.io/npm/v/sparrow-ui.svg?style=flat-square)](https://www.npmjs.com/package/sparrow-ui)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/react-%5E18.0.0-61DAFB.svg?style=flat-square&logo=react)](https://reactjs.org/)

**Sparrow UI** is a "linguistic routing" React design system. Instead of wrestling with deeply nested HTML tags, complex grid classes, and prop drilling, Sparrow allows you to describe what you want in natural language. 

The engine parses your description and automatically generates the correct components, layouts, and SCSS utility classes.

## 📦 Installation

```bash
npm install sparrow-ui
# or
yarn add sparrow-ui
````

Import the base styles into your root `App.jsx` or `index.js`:

```jsx
import 'sparrow-ui/dist/sparrow.css';
```

-----

## 🚀 The Core Concept: `<Thing />`

Everything in Sparrow revolves around the `<Thing />` component. You pass a natural language string to the `description` prop, ensuring the **component name is always the last word**.

```jsx
import { Thing } from 'sparrow-ui';

// Generates an <h1 class="text-align-center fw-700">
<Thing description="centered bold h1 heading">Hello World</Thing>

// Generates a flexbox grid column taking up 50% width
<Thing description="half column">Content goes here</Thing>
```

-----

## 📖 Documentation

### 1\. The Global Dictionary

Sparrow uses a standardized dictionary. These keywords can be applied to almost any component in the system to automatically handle styling.

  * **Variants:** `primary`, `secondary`, `accent`, `neutral`, `muted` *(Typography only)*
  * **Modifiers:** `rounded`, `bordered`, `thick-bordered`, `full-width`

-----

### 2\. Layout & Grid System

Sparrow leverages a responsive 12-column flexbox grid system.

  * **container:** The main wrapper for centering content.
      * *Modifiers:* `fluid` (forces 100% width, no max-width)
  * **row:** Flexbox row to hold columns.
      * *Modifiers:* `tight` (small gaps), `loose` (large gaps), `centered` (justifies and aligns items)
  * **column:** Fractions map directly to the 12-column grid.
      * *Sizes:* `full` (12), `half` (6), `third` (4), `quarter` (3), `two-thirds` (8), `three-quarters` (9)

<!-- end list -->

```jsx
<Thing description="container">
  <Thing description="loose row">
    <Thing description="two-thirds column">Main Content</Thing>
    <Thing description="third column">Sidebar</Thing>
  </Thing>
</Thing>
```

-----

### 3\. Typography

Text alignments and font weights map intuitively to the SCSS typography scales.

  * **heading:** `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `huge`, `small`
  * **paragraph:** `big`, `medium-sized`, `small`
  * **Modifiers:** `centered`, `right`, `bold`, `light`, `italic`, `uppercase`, `underline`, `lead`

<!-- end list -->

```jsx
<Thing description="centered bold h2 heading">Features</Thing>
<Thing description="muted lead paragraph">Discover what Sparrow can do.</Thing>
```

-----

### 4\. Basic Components

Cards automatically adjust their width to fit their parent container and their minimum height to fit their content.

  * **button:** `big`, `medium-sized`, `small`
  * **card:** `big`, `medium-sized`, `small` (Pass header via `cardTitle`)
  * **image-card:** `big`, `medium-sized`, `small` (Pass image source via `cardImage`)

<!-- end list -->

```jsx
<Thing description="medium-sized accent rounded image-card" cardImage={MyImage} cardTitle="Card Title">
  <Thing description="paragraph">Card content goes here.</Thing>
  <Thing description="small primary rounded button" event={() => alert('Clicked!')}>Read More</Thing>
</Thing>
```

-----

### 5\. Forms

Forms are robust and include layout handling for stacking or inline arrangements. All inputs accept standard `onChange` events via the `event` prop.

  * **form:** `stacked`, `inline`
  * **input:** `with-icon`, `with-button`
  * **textarea:** *Standard modifiers apply*
  * **select:** Pass options array as `children`.
  * **checkbox / radio:** Pass label via `cardTitle`.
  * **file-upload:** Pass button text via `cardTitle`.

<!-- end list -->

```jsx
<Thing description="stacked form">
  <Thing description="inline form">
    <Thing description="with-icon medium-sized primary input" cardTitle="Search..." />
  </Thing>
  <Thing description="medium-sized primary select">
    {["Option 1", "Option 2"]}
  </Thing>
  <Thing description="small accent checkbox" cardTitle="I agree" />
</Thing>
```

-----

### 6\. Media & Carousels

Sparrow takes arrays of data and automatically builds animated, swipeable carousels.

  * **image-carousel:** Pass an array of `{src, alt}` objects as children.
  * **card-carousel:** Pass an array of `{title, children}` objects as children.

<!-- end list -->

```jsx
<Thing description="big primary rounded image-carousel">
  {[
    { src: 'img1.jpg', alt: 'First' },
    { src: 'img2.jpg', alt: 'Second' }
  ]}
</Thing>
```

-----

### 7\. Advanced: Pluralization Engine

Sparrow can generate multiple identical elements without requiring you to write `.map()` loops. By putting a number at the start of your description and pluralizing the component name, Sparrow handles the loop.

Pass arrays to `texts` and `events` to uniquely populate each generated item.

```jsx
<Thing 
  description="3 small primary rounded buttons" 
  texts={['Save', 'Edit', 'Delete']} 
  events={[handleSave, handleEdit, handleDelete]} 
/>
```

-----

## 🤝 Contributing

Contributions, issues, and feature requests are welcome\! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/ivprodanov/sparrow/issues).

## 📝 License

This project is [MIT](https://www.google.com/search?q=LICENSE) licensed.

---

## 🧩 Components (Planned / In Progress)

### Text Elements

* [x] Headings
* [x] Paragraphs

### Forms & Inputs

* [x] Basic Input
* [x] Input with Button
* [x] Input with Icon
* [x] Checkbox
* [x] Radio Button
* [x] Select Dropdown
* [x] File Upload
* [x] Textarea
* [x] Form Wrapper

### Dropdown

* [ ] Multi-select Dropdown

### Tables

* [ ] Basic Table
* [ ] Styled Table (e.g., zebra striping)

### Carousels

* [x] Image Carousel
* [x] Card Carousel

### Layout & Containers

* [x] Container
* [x] Row
* [x] Column

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

contact@prodanov.ch - I always respond😌
## License

This project is open source and available under the [MIT License](./LICENSE.md).


