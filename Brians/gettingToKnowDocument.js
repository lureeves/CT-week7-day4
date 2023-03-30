console.log("Let's get to know the document!");

console.log(document);

let body = document.body;
console.dir(body);

let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

navBar.className = 'navbar bg-primary-subtle';


// Popular Methods with the Document object

// Document get methods

// document.getElementById('id);
// return the first element with an id that matches the string id
let myHeader = document.getElementById('top-header');
console.log(myHeader);

// document.getElementsByTagName('tagName');
// return an HTMLCollection (Array-like) of all elements that match tag name
let myButtons = document.getElementsByTagName('button');
console.log(myButtons);

// document.getElementsByClassName('className');
// return an HTMLCollection (Array-like) of all elements that match class name
let myRows = document.getElementsByClassName('row');
console.log(myRows);


// document.querySelector('selector');
// return the FIRST element that matches the specified selector
let firstCol = document.querySelector('.col-2'); // Simple Selector
console.log(firstCol);

let divInNav = document.querySelector('nav > div'); // Combinator Selector
console.log(divInNav);

// document.querySelectorAll('selector');
// return NodeList (Array-like) of elements that match the specified selector
let firstGroupButtons = document.querySelectorAll('.row button'); // general descendant
console.log(firstGroupButtons);




// Create Elements with the document

// document.createElement('tagName');
// Create an element with the given tag name
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header Created by JavaScript';
newHeader.className = 'text-center text-primary';
newHeader.style.backgroundColor = 'red';
console.log(newHeader);

// Add elements to our HTML
// Element.append(elementToAppend);
// Append the elementToAppend as the last child of Element

// body.append(newHeader);

let container = document.querySelector('.container');
console.log(container);
container.append(newHeader);

// Create a new button
let newButton = document.createElement('button');
newButton.innerHTML = 'New Button';
myRows[0].append(newButton);

// HTMLCollection is live and recognized new button
console.log(myButtons);
// NodeList is static and does not recognize
console.log(firstGroupButtons);
