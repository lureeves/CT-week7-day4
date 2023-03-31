// console.log('Happy Friday!');
​
​
const form = document.getElementById('toDoForm');
​
form.addEventListener('submit', handleFormSubmit);
​
function handleFormSubmit(event){
    event.preventDefault();
    const toDo = event.target.toDo.value;
    // console.log(toDo);
​
    // Create the list item
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = toDo;
​
    // Add event listener to list item
    listItem.addEventListener('dblclick', removeElement);
​
    // Get the list display and append the list item
    const listDisplay = document.getElementById('toDoList');
    listDisplay.append(listItem);
​
    // Reset the input to empty
    event.target.toDo.value = '';
};
​
function removeElement(event){
    const elementToRemove = event.target;
    elementToRemove.remove();
};