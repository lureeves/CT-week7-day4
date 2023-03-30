// console.log('Hello this is the main');

// Create an array for colors (Based on the Bootstrap Color Scheme)

let colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
// console.log(colors);

// Get the color buttons
let colorButtons = document.querySelectorAll('.col-2 > button');
// console.log(colorButtons);

// For each button in the button colors, apply the button color class name
colorButtons.forEach((button, index) => {
    // console.log(button, index, colors[index]);
    button.className = `btn btn-${colors[index]}`;
});

// Add a click event listener to each button to change the background of the body

colorButtons.forEach((button,  index) => {
    button.addEventListener('click', (e) => {
        // console.log(e);
        let body = document.body;
        body.className = `bg-${colors[index]}`;
    });
});


// Create a new header and add it under the buttons in the container

let newHeader = document.createElement('h4');
newHeader.id = 'my-header';
newHeader.className = 'text-center mt-3';
newHeader.innerHTML = 'Created by Brian with the help of JavaScript';
newHeader.style.color = 'black';
// console.log(newHeader);

let colorButtonRow = document.getElementsByClassName('row')[1];
// console.log(colorButtonRow);
colorButtonRow.after(newHeader);


// Create a function that will change text color of the header
function changeTextColor(e){
    let element = e.target;
    if (element.style.color === 'black'){
        element.style.color = 'red';
    } else {
        element.style.color = 'black';
    };
};

newHeader.addEventListener('mouseover', changeTextColor);

function changeInnerText(event){
    let newText = prompt('What should go in the text?')
    let element = event.target;
    element.innerHTML = newText;
};

newHeader.addEventListener('click', changeInnerText);


// Grab the form
let form = document.getElementById('countryForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault(); // Prevent the event from making a new get request and refreshing page
    // console.log(event);
    let countryName = event.target.countryName.value;
    console.log(countryName);

    let countryInfo = await getCountryInfo(countryName);
    console.log(countryInfo);

    // Execute the buildCountryCard function with Country Info
    buildCountryCard(countryInfo);

    // Clear the input box at end
    event.target.countryName.value = '';
}


async function getCountryInfo(countryName){
    try{
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        let data = await response.json();
        return data[0];
    } catch(err){
        console.error(err);
    };
};


// Function that will take in a country info object and create a card 
function buildCountryCard(countryObj){
    
    // Build a card with country info
    let card = document.createElement('div');
    card.className = 'card h-100';

    // Create an image for the flag
    let image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = countryObj.flags.png;
    // Add the image to card
    card.append(image);

    // Create card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create country name and population elements
    let countryTitle = document.createElement('h5');
    countryTitle.innerHTML = countryObj.name.official;
    countryTitle.className = 'card-title';

    let countryPopulation = document.createElement('p');
    countryPopulation.innerHTML =  `Population: ${countryObj.population.toLocaleString('en-US')}`;
    countryPopulation.className = 'card-text';

    // Add title and pop to cardbody
    cardBody.append(countryTitle);
    cardBody.append(countryPopulation);

    // Add card to card body
    card.append(cardBody);

    // Create a column for the card
    let col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3 my-3';

    // Add the card to the column
    col.append(card);

    // Get the country display row and add the column
    let countryDisplay = document.getElementById('countryDisplay');
    countryDisplay.prepend(col);
}