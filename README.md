# jQuery Gallery Slider
## Assignment in JavaScript Frameworks at Noroff - Frontend Development
==============================================================================

Installation
---

Download the index.html, gallery.js and styles.css files,

```
## Using the index.html
Add the index.html file to the main directory or copy the slider code to your own page.
```

```
## The gallery.js file
Add into ./_js/ folder, or your own folder of choice. (just remember the script src)
```

```
## The styles.css file
Add into ./_css/ folder or copy the code directly to your own .css file, everything exept the body tag.
```

Setup
---

You will need to add the names of images and the image folder to the gallery.js file.

```javascript
var imageFolder = './_img'; // Set the folder location
var imageList = [   'image1.jpg', 'image2.jpg' ]; // Set the images to use
```

In the index file the Gallery-Slider is market with comments.
```html
<!-- Gallery-Slider start -->
    <div class="gallery-slide">
        <span class="arrow">
            <span id="left-arrow"></span>
            <span id="right-arrow"></span>
        </span>
        <div id="gallery-img">
            <!-- Images will display here -->
        </div>
    </div>
<!-- // Gallery-Slider end -->
```
