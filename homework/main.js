// console.log('inside main')

// Form Input
let form = document.getElementById('taskForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault(); // Prevent the event from making a new get request and refreshing page
    // console.log(event);
    let taskName = event.target.taskName.value;
    console.log(taskName);

    // Execute the buildCountryCard function with Country Info
    buildTaskList(taskName);

    // Clear the input box at end
    event.target.taskName.value = '';
}


function buildTaskList(taskName){

    // Check if the taskDisplay element exists
    let taskDisplay = document.getElementById('taskDisplay');
    if (!taskDisplay) {
        console.error('taskDisplay element not found!');
        return;
    }

    // Create a container div for the list
    let listContainer = document.createElement('div');
    listContainer.className = 'list-container';

    // Create an unordered list element
    let listElement = document.createElement('ul');
    listElement.style.listStyle = 'none'; // Add this line to remove bullet points

    // Create a list item element for the task name
    let listItem = document.createElement('li');
    listItem.className = 'list-item';

    // Create a checkbox input element
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-1';

    // Create a label element for the checkbox
    let label = document.createElement('label');
    label.className = 'form-check-label';
    label.innerText = taskName;

    // Add the checkbox and label to the list item
    listItem.append(checkbox);
    listItem.append(label);

    // Add the list item to the list element
    listElement.append(listItem);

    // Add the list element to the container
    listContainer.append(listElement);

    // Add the container to the taskDisplay element
    taskDisplay.prepend(listContainer);
}