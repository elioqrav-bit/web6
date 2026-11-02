# Assignment #6. jQuery (Selectors, Effects, Animations)

## Student Information
- **Name:** Rassul Sissenbay
- **Group:** se2538
- **University:** Astana IT University

---

## Assignment Overview
The objective of this assignment is to explore and implement the jQuery library to streamline DOM manipulation, handle browser events, apply visual effects (visibility, fading, sliding), manage attributes and forms, and create smooth custom animations for an interactive portfolio website.

---

## Tasks & Detailed Implementation

### Part 1. Getting Started with jQuery

#### Task 0: Setup
- **What was done:** Integrated the jQuery library into the project and verified its proper loading.
- **What was used:**
    - Included jQuery version 3.7.1 via official CDN (`<script src="...">`) inside the `<head>` section[cite: 5].
    - Used jQuery’s Document Ready event `$(document).ready(function() { ... })` to ensure that all DOM elements are fully rendered before executing script logic[cite: 6].
    - Implemented `console.log("jQuery is ready!");` to test and confirm successful initialization.

#### Task 1: Selectors & CSS
- **What was done:** Developed the main portfolio header and introductory section, applied different types of selectors, updated content dynamically, styled elements, and implemented a theme switcher.
- **What was used:**
    - **Selectors:** Utilized tag selectors (`h1`, `p`), ID selectors (`#main-title`), and class selectors to target specific elements.
    - **`.text()` method:** Used to dynamically update the portfolio heading and introductory text when a button is clicked.
    - **`.css()` method:** Applied inline styling changes to dynamically modify element properties.
    - **`.toggleClass()` method:** Used alongside CSS variables (`:root` and `body.dark-theme`) to build a seamless light/dark mode theme toggler.

---

### Part 2. jQuery Effects

#### Task 2: Visibility Methods
- **What was done:** Created an "About Me" status block with interactive controls to show or hide content.
- **What was used:**
    - **`.hide()` method:** Hides the target status message element when the corresponding button is clicked[cite: 10].
    - **`.show()` method:** Makes the hidden status element visible again[cite: 10].
    - **`.toggle()` method:** Alternates between hiding and showing the element automatically based on its current state.

#### Task 3: Fade Methods
- **What was done:** Added a photo gallery section with images and implemented opacity-based visual transitions.
- **What was used:**
    - **`.fadeOut()` method:** Smoothly decreases the opacity of gallery images until they are hidden[cite: 10].
    - **`.fadeIn()` method:** Smoothly increases opacity to reveal the images[cite: 10].
    - **`.fadeToggle()` method:** Automatically switches between fading in and fading out depending on current visibility.

#### Task 4: Slide Methods
- **What was done:** Built collapsible accordion-style panels for personal interests (music, movie, subject) with clickable headings.
- **What was used:**
    - **`.slideToggle()` method:** Smoothly slides panels up or down vertically using a sliding motion when a heading is clicked[cite: 10].
    - **DOM Traversing (`.next()`):** Used `.next(".slide-panel")` to precisely target and animate only the specific content panel associated with the clicked heading.

---

### Part 3. DOM Manipulation with jQuery

#### Task 5: Add & Remove Elements
- **What was done:** Created a dynamic technical skills list allowing users to input and manage skill items interactively.
- **What was used:**
    - **`.val()` method:** Retrieves the text entered by the user inside the input field.
    - **`.append()` method:** Inserts a new `<li>` element containing the entered skill at the end of the skills list[cite: 12].
    - **`.prepend()` method:** Inserts a new `<li>` element at the very beginning of the list[cite: 12].
    - **`.remove()` method:** Deletes the last item (`#skills-list li:last-child`) from the list[cite: 12].
    - **Validation logic:** Checked input values (`if (val !== "")`) to prevent empty skills from being added.

#### Task 6: Modifying Attributes
- **What was done:** Included a social media link and enabled dynamic attribute modification.
- **What was used:**
    - **`.attr("href", ...)` method:** Reads the current `href` attribute value of the social link and dynamically updates it to switch between GitHub and the university LMS (`https://lms.astanait.edu.kz`).
    - **`.text()` method:** Dynamically changes the anchor tag's display text to match the updated destination link.

#### Task 7: Form Interaction
- **What was done:** Built a feedback form for Name and Email fields with a real-time live preview area.
- **What was used:**
    - **`.on("input", ...)` event:** Listens continuously for keystrokes inside the input fields.
    - **`.val()` and `.text()` combination:** Captures user input values on-the-fly and instantly mirrors them into live output spans below the form.

---

### Part 4. Animations

#### Task 8: Basic Animation
- **What was done:** Created visual skill bars and implemented custom animated expansions.
- **What was used:**
    - **`.each()` iterator loop:** Iterates through each skill bar element to read its specific target width stored in a custom data attribute (`data-width`).
    - **`.animate()` method:** Programmatically animates CSS properties over a specified duration (1000ms) to expand the width of the bars from `0%` to their target percentages, and back to `0%` upon toggling[cite: 10].

---

## Summary of Work Process
Throughout this assignment, I learned how to leverage the jQuery library to write cleaner, shorter, and more efficient frontend code compared to traditional vanilla JavaScript. By implementing core concepts—such as advanced CSS/attribute selectors, event handling, built-in visual effects (fade and slide), DOM insertion/removal methods, and custom animations (`.animate()`)—I successfully built a fully responsive and interactive portfolio web page. All files were thoroughly tested locally and structured cleanly for deployment via GitHub Pages.