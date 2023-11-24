# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](assets/m1mmseen.github.io_Frontend-Mentor-SP-Portfolio_.png)

### Links

- Solution URL: [View Code](https://github.com/m1mmseen/Frontend-Mentor-SP-Portfolio)
- Live Site URL: [View Site](https://m1mmseen.github.io/Frontend-Mentor-SP-Portfolio/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS 
- Flexbox, CSS Grid, Absolute Positioning
- Mobile-first workflow


### What I learned

Use css property clamp for responsive font-sizes e.g.:

```scss
@mixin heading-xl() {
  font-size: clamp(2.5rem, 1.4437rem + 4.507vw, 5.5rem);
  font-style: normal;
  font-weight: 700;
  line-height: clamp(2.5rem, 1.4437rem + 4.507vw, 5.5rem);
  letter-spacing: clamp(-0.1562rem, -0.0413rem + -0.1277vw, -0.0712rem);
}
```

E-Mail validation with regex (uses code snippet from [w3resources](https://www.w3resource.com/javascript/form/email-validation.php))
```js
function validateEmail()
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))
  {
    return true;
  }
  error = "Sorry, invalid format here";
  return false;
}
```

Implement a responsive way for scrolling to top (is used here after submit the form)
```js
function scrollToTop() {
  document.body.scrollIntoView()
}
```

Provide a User Message after submitting the form with css and js{
```scss

.user-message {
  opacity: 0;
  position: fixed;
  z-index: 3;
  left: 50svw;
  top: 5px;
  translate: -50% 0;
  background: hsl(153, 71%, 65%);
  width: 350px;
  height: 150px;
  border-radius: 0 0 5px 5px;
  transition: 0.5s ease-in-out;

  .message-titel {
    padding: .5rem 1rem;
    background: $primary;
    color: $text-secondary;
  }
  .message-content {
    background: $text-secondary;
    color: $primary;
    padding: .5rem 1rem;
    font-size: 18px;
  }

  &.visible{
    opacity: 1;
  }
}
```
```js
function hideUserMessage() {
userMessage.classList.remove("visible")
}
```
Design a custom scrollbar 
```scss
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px $tertiary;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: $primary;
  border: inset 5px black;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background:hsla(153, 71%, 59%, 70%);
}
```

### Useful resources

- [Email Validation with regex in js](https://www.w3resource.com/javascript/form/email-validation.php)
- [Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)

## Author

- Frontend Mentor - [m1mmseen](https://www.frontendmentor.io/profile/m1mmseen)
