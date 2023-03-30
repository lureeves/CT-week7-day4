console.log("Let's get to know the document!");

console.log(document);

let body = document.body;
console.log(body);
console.dir(body);

// Add CSS inline style via the .style property
body.style.backgroundColor = 'dodgerblue';


let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

navBar.className = 'navbar bg-primary-subtle';


// Popular Methods with the Document Object

// Document get Methods

// document.getElementById('id')
// return the first element with an id that matches the string id
let topHeader = document.getElementById('top-header');
console.log(topHeader);

// document.getElementsByTagName('tagName')
// return an HTMLCollection (Array-like) of all elements that match tag name
let buttons = document.getElementsByTagName('button');
console.log(buttons);

// document.getElementsByClassName('className')
// return an HTMLCollection (Array-like) of all elements that match class name
let rows = document.getElementsByClassName('row');
console.log(rows);


// document.querySelector('selector')
// return the FIRST element that matches the specified selector
let firstCol = document.querySelector('.col-2'); // simple selector
console.log(firstCol);

let divInNav = document.querySelector('nav > div') // Combinator selector - child selector
console.log(divInNav);

// document.querySelectorAll('selector')
// return a NodeList (Array-like) of elements that match the specified selector
let buttonsInRow = document.querySelectorAll('.row button'); // general descendant selector
console.log(buttonsInRow);


// Create Elements with the document

// document.createElement('tagName');
// Create an element with the given tag name
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header Created By JavaScript';
newHeader.className = 'text-center text-danger';
console.log(newHeader);

// Add elements to the HTML

// Element.append(elementToAdd)
// Append the elementToAdd as the last child of Element
// body.append(newHeader);

// Element.prepend(elementToAdd)
// Append the elementToAdd as the first child of Element
// body.prepend(newHeader);


// Element.after(elementToAdd)
// Add the elementToAdd AFTER (as a sibling) to the Element
// topHeader.after(newHeader);


// Element.before(elementToAdd)
// Add the elementToAdd BEFORE (as a sibling) to the Element
// topHeader.before(newHeader);


// Create New Button
let newButton = document.createElement('button');
newButton.innerHTML = 'New Button';

// Append the button to the row of buttons
rows[1].append(newButton);

// HTMLCollection is live and recognizes the new button
console.log(buttons);

// NodeList is static and will not recognize the added button.
console.log(buttonsInRow);