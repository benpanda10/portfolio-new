# CSS Capstone Checkoff

This document verifies the CSS portion of my Capstone Project checks off in a clean, organized manner.

## 1. Global Reset and Box Model

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition-property: background-color, color;
    transition-duration: 0.3s;
}
```
Ensures proper margin and padding for easy formatting

## 2. Use of CSS Variables

```css
    /* Color Variables */
.light-theme {
    --base-primary: white;
    --base-secondary: #eeeeee;
    --base-thirdary: white;
    --primary: #5e87e6;
    --secondary: #3355a5;
    --text: black;
    --text2: white;
    --accent: #bcbcbc;
    
}

.dark-theme {
    --base-primary: #0b0b0b;
    --base-secondary: rgb(24, 24, 24);
    --base-thirdary: rgb(46, 46, 46);
    --primary: #475676;
    --secondary: #536eab;
    --text: #bbbbbb;
    --text2: #bbbbbb;
    --accent: #cccccc;
}
```

## 3. Organized CSS Structure

```css
/* Initalization */

/* Container and General*/
```
Used comments to organize structure

## 4. Responsive Design

```css
    @media (max-width: 600px) {

    #history-container {
        width: 70%;
    }

    #history-cards > * {
        font-size: 0.9rem;
    }

    button {
        font-size: 0.6rem;
    }

    .memory-card {
        width: 50px;
        height: 50px;
        font-size: 0.8rem;
    }

    .welcome > input[type="text"] {
        font-size: 1rem;
        width: 90%;
        padding: 0.5em;
    }
}
```
Media Query for all device support

## 5. Typography Styling

```css
    font-family: Arial, Helvetica, sans-serif;
```

## 6. Color Scheme and Contrast

```css
    background-color: var(--text2);
    color: var(--primary);
```
Used a color scheme to keep colors the same and tidy.

## 7. Flexbox/Grid Usage

```css
.welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```
Welcome screen is flexed to improve formatting.

## 8. Button and Input Styling

```css
    .welcome > button {
    box-shadow: none;
    background-color: var(--text2);
    color: var(--primary);
    font-weight: bold;
    padding: 1em 2em 1em 2em;
}
```

## 9. Component Reusability

```css
    .memory-card, .button-theme
```
These classes are used time and time again for reusability. 

## 10. CSS Transitions

```css
    * {
        transition-property: background-color, color;
        transition-duration: 0.3s;
    }
```

## 11. Hover/Focus Effects

```css
.button-theme:hover {
    cursor: pointer;
    transform: scale(1.1);
}
```

## 12. Layout Containers

```css
.welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--text2);
    background-color: var(--primary);
    padding: 2em;
}
```

## 14. Utility Classes

```css
    .memory-visible {
    visibility: visible;
}

.memory-flipped {
    background-color: var(--base-secondary);
    color: var(--base-secondary);
    transform: rotateX(180deg);
    transition-property: transform, background-color, color;
    transition-duration: 0.3s;
}
```
These classes are one-offs for specific scenarios.

## 15. Use of Pseudo-class

```css
.button-theme:hover {
    cursor: pointer;
    transform: scale(1.1);
}
```

## 16. Shadows and Borders

```css
#history-container {
    display: none;
    grid-template-rows: 1fr 3fr;
    position: absolute;
    top: 10%;
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;
    border: 8px solid var(--accent); /* Here is the border */
}
```

## 18. Theme Customization

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--base-primary);
}
```

## 19. Naming Conventions

```css
    .button-theme, #history-controls, .memory-card
```

## 20. Cleanliness and Commenting

```css
    /* Media Query */
```
Such comments are used to help clean CSS.