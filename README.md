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

If you copy the code to your own .html file just remember to src jquery and the gallery.js file 
```html
<!-- SCRIPTS -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"´></script>
<script src="_js/gallery.js"></script>
```

The CSS code can also be copied directly to your own CSS file.
```css
.img-thumbnail {
    overflow: hidden;
    width: 250px;
    height: 250px;
    max-width: 250px; 
    max-height: 250px;
}

.gallery-slide {
    position: relative;
    max-width: 250px;
    max-height: 250px;
}

.gallery-slide-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: turquoise;
    display: none;
}

.gallery-slide-image.active {
    display: block;
}

.arrow {
    background-color: rgba(255,255,255, 0.4);
    position: absolute;
    width: 100%; 
    height: 25px;
    z-index: 2; 
    cursor: pointer;
    opacity: 0.1;
}
.arrow:hover { opacity: 1; }

#left-arrow { position: absolute; left: 30px; top: 0; }
#left-arrow::after{ content: '<<'; }

#right-arrow { position: absolute; right: 30px; top: 0; }    
#right-arrow::after{ content: '>>'; }
```

### Thanks and have fun!
