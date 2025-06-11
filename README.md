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


MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
