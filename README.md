# About SimpleDragn

SimpleDragn makes drag 'n drop easy. Simply add classes to the elements that you need to interact with, and you're good to go!

---
## Installation

1. Install with NPM
   ```sh
   npm install simple-dragn
   ```

2. Or include links to the CDN in your HTML
```html
<link rel="stylesheet" href="https://unpkg.com/simple-dragn@1.0.3/stand-alone/core.css">
<script src="https://unpkg.com/simple-dragn@1.0.3/stand-alone/dragnDrop.js">
```
---
## Usage

1. Add the `dragn` class to all elements you wish to become draggable. Add a child to these elements with the class of `dragn-grab`. These will act as the controls to activate and move around its parent, the `dragn` class element.
```html
<div class="dragn">
   <div class="dragn-grab"></div>
</div>
```
2. Add the `dragn-den` class that you want to use as the containers for the draggable elements to be dropped into.
```html
<div class="dragn-den"></div>
```
You can also add the `dragn` elements to start inside of the `dragn-den` elements.
```html
<div class="dragn-den">
   <div class="dragn">
      <div class="dragn-grab"></div>
   </div>
</div>
```
3. Instantiate a new `DragnDrop` object, and call the `initEvents()` method when your page is ready. If you add more elements dynamically, you can simply call the `initEvents()` method again to attach all the events to those new elements.
```javascript
var dragnDrop = new DragnDrop();
dragnDrop.initEvents();
```

SimpleDragn is set up to be used as either a CDN, or an NPM package that you can install and bundle with your application.

Here is an example of how to create a basic HTML document that uses the CDN to create draggable elements:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>SimpleDragn Sample App</title>      
        <link rel="stylesheet" href="https://unpkg.com/simple-dragn@1.0.3/stand-alone/core.css">
        <style>
            * {
                box-sizing: border-box;
            }            
            html, body, .container {
                height:100%;
                margin: 0;
                padding: 0;
            } 
            .container {
                display: flex;
                flex-direction: column;
            }           
            .row {
                flex: 1;
                display: flex;
                flex-direction: row;
            }
            .dragn {
                height: 100%;
                width: 100%;
                background-color: black;
                color: white;
                border-radius: 5px;
            }
            .dragn-grab {
                height: 20px;
                background-color: #3c91e6;
                border-radius: 5px 5px 0 0 ;
            }
            .dragn-den {
                padding: 20px;
                border: black solid 1px;
                height: 100%;
                flex: 1;
            }
            .dragn-den-hover {
                background-color: #D3D3D3;
            }
        </style>
    </head>
    <body>
        <div id="container" class="container">
            <div class="row">
                <div class="dragn-den">
                    <div class="dragn">
                        <div class="dragn-grab"></div>
                    </div>
                </div>
                <div class="dragn-den">
                    <div class="dragn">
                        <div class="dragn-grab"></div>
                    </div>
                </div>
                <div class="dragn-den"></div>
                <div class="dragn-den"></div>
            </div>  
            <div class="row">
                <div class="dragn-den">
                    <div class="dragn">
                        <div class="dragn-grab"></div>
                    </div>
                </div>
                <div class="dragn-den"></div>
                <div class="dragn-den"></div>
                <div class="dragn-den"></div>
            </div>
        </div>
        <script src="https://unpkg.com/simple-dragn@1.0.3/stand-alone/dragnDrop.js"></script>
        <script>
            var dragnDrop = new DragnDrop();
            dragnDrop.initEvents();
        </script>
    </body>    
</html>
```

---
## License

Distributed under the MIT License.


---
## Contact

LinkedIn - [in/anker-peet](https://www.linkedin.com/in/anker-peet/)

Portfolio: [ankerpeet.com](https://www.ankerpeet.com)