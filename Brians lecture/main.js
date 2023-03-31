// console.log('Hello');

// Create an array for the colors (based on Bootstrap color scheme)
let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

// Get the color buttons
let colorButtons = document.querySelectorAll('.col-2 > button')
// console.log(colorButtons);
// console.log(buttonColors);

// Loop through the buttons and apply button color to class name
for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].className = `btn btn-${buttonColors[i]}`
    // add an event listener to change the body background color (via Bootstrap class)
    colorButtons[i].addEventListener('click', () => {
        let body = document.body;
        body.className = `bg-${buttonColors[i]}`
    })
}

// Create a new header and add it under the buttons in the container, but before the form row

let newHeader = document.createElement('h4');
newHeader.id = 'myHeader';
newHeader.className = 'text-center mt-3'
newHeader.innerHTML = 'Created by Brian with the help of JavaScript';
newHeader.style.color = 'black';
// console.log(newHeader);

// Add the header after the button row
// Get the row of buttons
let allRows = document.getElementsByClassName('row');
let buttonRow = allRows[0];
// console.log(buttonRow);

// Add the new header AFTER the button row (vs appending as the last child of button row)

buttonRow.after(newHeader);

// Create a listener function - function to be executed when our event triggers
function handleHeaderEvent(event){
    // console.log(event);
    let elementToChange = event.target;
    // console.log(elementToChange);
    if (elementToChange.style.color === 'black'){
        elementToChange.style.color = 'red';
    } else {
        elementToChange.style.color = 'black';
    }
}

// Add the handleHeaderEvent as an event listener on the header
newHeader.addEventListener('mouseover', handleHeaderEvent);


// Grab the form
let form = document.getElementById('countryForm');
// console.log(form);

async function handleFormSubmit(e){
    e.preventDefault(); // Prevent the event from refreshing the page
    // console.log(e);
    let countryName = e.target.countryName.value;
    console.log(countryName);

    let countryInfo = await getCountryInfo(countryName);
    buildCountryCard(countryInfo);
    // Clear the input box at the end
    e.target.countryName.value = '';
};

form.addEventListener('submit', handleFormSubmit);

// Function that takes in a country name, makes a GET request to API, returns data
async function getCountryInfo(countryName){
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    let data = await response.json();
    return data[0]
}

// function getCountryInfo2(countryName){
//     return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//         .then(res => res.json())
//         .then(data => data[0])
// }

// Function that will take in country object and build an HTML card and add to gallery
function buildCountryCard(countryObj){

    // Create a card div
    let card = document.createElement('div')
    card.className = 'card h-100';

    // Create a top image for card
    let image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = countryObj.flags.png;
    // Add image as a child to the card
    card.append(image);
    
    // Create card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Create country name and population elements
    let countryTitle = document.createElement('h5');
    countryTitle.className = 'card-title';
    countryTitle.innerHTML = countryObj.name.official;
    
    let countryPopulation = document.createElement('p');
    countryPopulation.className = 'card-text';
    countryPopulation.innerHTML = `Population: ${countryObj.population.toLocaleString('en-US')}`
    
    // Add the title and population to the card body
    cardBody.append(countryTitle);
    cardBody.append(countryPopulation);
    
    // Add card body to card
    card.append(cardBody);

    // Create a column for the row
    let col = document.createElement('div')
    col.className = 'col-12 col-md-6 col-lg-3 my-3'

    // Add the card to the column
    col.append(card);

    // Get the country display and add the column
    let display = document.getElementById('countryDisplay');
    display.append(col);

}
