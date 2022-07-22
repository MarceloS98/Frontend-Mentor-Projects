# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Component Screenshot](./screenshot.jpg)

### Links

- Watch it live here:

## My process

My approach for this one was to focus first on the design to assess how should I bouild the component.

Once I got a feeling of how to do it I started with setting up Tailwind and its configuration with the styles provided by Frontend Mentor.

Then it a matter of structuring the layout the way I planned and adjust a couple of things along the way.

Lastly I used JavaScript to add a little bit of interactivity by showing the **Thank You** state of the component once the submit button was clicked. Also grabbed the value of the clicked rate and use it to show a dynamic message in the Thank You state.

### Built with

- HTML
- CSS / Tailwind
- JavaScript

### What I learned

Flexbox sometimes can be annoying. For example, the background for the star in the initial state expanded to fill the container's width. In this case the flex direction was set to column, so the solution to this was to align the element to the start.

```css
.children {
  align-self: start;
}
```

## Author

- Twitter - [@sosamarcelo\_](https://twitter.com/sosamarcelo_)
