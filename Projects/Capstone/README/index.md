# HTML Capstone Checkoff

This document verifies the HTML portion of my Capstone Project checks off in a clean, organized manner.

## Doctype and HTML Structure

```html
    <!DOCTYPE html> <!-- At the top of page -->
```

## lang Attribute

```html
    <html lang="en">
```

## Meta Tags

```html
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Semantic Tags

```html
     <main class="memory-container" id="memory-container">
    <!-- DOM elements go here-->
    </main>

    <section class="welcome" id="welcome-container">
        <!-- DOM elements go here-->
    </section>
```

## Headings Structure

```html
    <h1>Memory Tester 🧠</h1>

    <h2 id="welcome-title">Welcome to the Memory Tester!</h2>

    <h3 id="welcome-text" style="line-height: 2em;">It seems like it's your first time. Please enter your first name.</h3>
```

## Alt Text for Images

This capstone project didn't need images. It's simplistic design and use of CSS proved enough. I feel images would take off the 'modern' vibe.

## Navigation

This capstone project all functions within one webpage (as stated that multi-link websites are not required). A navbar is not need to navigate through the page.

## Form Structure

This webpage also didn't need a form page. There would be no reason to add a form page in a memory tester.

## Button & Input Elements

```html
<!-- Buttons -->
            <div>
                <button class="button-theme" id="exit-button">Exit</button>
                <button class="button-theme" id="clear-button">Clear Test History</button>
                <button class="button-theme" id="clear-name-button">Clear Name (refreshes)</button>
            </div>
```

## Anchor Tags

This webpage doesn't use anchor tags. It doesn't move into other webpages or use bookmarks to travel within the webpage. It's small, and only in one page.

## External CSS/JS Links

```html
    <link rel="stylesheet" href="styles.css">
```

## Responsive Meta and Layout

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="container">
```

## Responsive Images and Media

There are no images with my webpage. It doesn't really need it.

## Lists

```javascript
let ol = document.createElement('ol')
  welcomeText.appendChild(ol)
  ol.innerHTML = `
  <li>Boxes will pop up one by one.</li>
  <li>Click the boxes in ascending number order.</li>
  <li>When the level resets, your first click will always start at box one.</li>
  <li>The test will get harder as you on.</li>
  <li>Good luck! 😊</li>
  `
```

## Comments

```html
    <!-- Memory Container -- Where all the stuff is -->
```

## Indentation and Formatting

This is good. Everything is indented correctly in terms of hierarchy. ✅

## HTML Validation

No errors in validator.w3.org! ✅✅✅