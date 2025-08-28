**Questions**
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


**Answers**
1. getElementById, getElementsByClassName, and querySelector / querySelectorAll
**getElementById**
- syntax: document.getElementById('id'). example: const title = document.getElementById('main-title')
- it returns only one element with matching id. if id not found it returns null.

**getElementsByClassName**
- syntax: document.getElementsByClassName('class-name'). example: const items = document.getElementsByClassName('list-item')
- its return HTMLCollections like array.

**querySelector**
- syntax: document.querySelector('CSS-selector') , we can use #id .class-name etc.
- its returns the first element that match the CSS selector.

**querySelectorAll**
- syntax: document.querySelectorAll('CSS-selector')
- its almost same as getElementsByClassName but difference is its dose not auto update if DOM changes and its return  NodeList.


2. create and insert a new element into DOM.
```js
const h1 = document.createElement('h1')
h1.innerText = "Successfully I create a new element"
document.body.appendChild(h1)
```

3. **Event Bubbling**
- Event Bubbling is event propagation system in javascript. this event first occurs in child elements then its propagate parent to grandparent to document like bubbling. 
```html
<div id="parent-div">
        <button>parent</button>
        <div id="child-div">
            <button>child</button>
        </div>
    </div>
    <script>
        document.getElementById('parent-div').addEventListener('click', function(){
            console.log('parent-click');
        })
        document.getElementById('child-div').addEventListener('click', function(){
            console.log('child-click');
        })
    </script>
```
- when parent button click , console show us parent-click and when child button click console show us child-click parent-click. this is event bubbling. we can stop this propagation using event.stopPropagation()



4. **Event Delegation**
- Event delegation is a js technique where we set a eventListener in parent div and the event automatically works with child div.
```html
<h1>Explore the concept of event delegate</h1>
    <ol id="item-list">
        <li class="item">Item - 1</li>
        <li class="item">Item - 2</li>
        <li class="item">Item - 3</li>
        <li class="item">Item - 4</li>
        <li class="item">Item - 5</li>
        <li class="item">Item - 6</li>
    </ol>
    <button id="btn-add-item">Add new items</button>

    <script>
        document.getElementById('item-list').addEventListener('click', function (event) {
            event.target.parentNode.removeChild(event.target)
        });
        document.getElementById('btn-add-item').addEventListener('click', function(){
            const ol = document.getElementById('item-list');
            const li = document.createElement('li');
            li.classList.add('item');
            li.innerText = 'New Item'
            ol.appendChild(li)
        })
    </script>
```

5. **preventDefault()**
- event.preventDefault() is stop browser default action.
- when submit form it stop auto reloading

 **stopPropagation()**
- event.stopPropagation() is stop event propagation, stop capturing.
