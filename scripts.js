/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (cars models)
import cars from "./car_data.js"

let Cars = cars;
let display_cars=[];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.
function filterByMake(Cars, make) {
    if (make === "All") {
        return Cars;
    } else {
        return Cars.filter(function(car) {
            return car.make === make;
        });
    }
}

function filterByColor(Cars, color) {
    if (color === "All") {
        return Cars;
    } else {
        return Cars.filter(function(car) {
            return car.color === color;
        });
    }
}

function filterByYear(Cars, min_year)
{
    min_year = parseInt(min_year);
    let max_year = min_year+1;
    let car1=[];
    if (min_year === 2000 ) {
        return Cars;
    }
    else {
        for(let i = 0; i < Cars.length; i++)
        {    
            if(Cars[i].year >= min_year && Cars[i].year <= max_year)
            {
                car1.push(Cars[i]);
            }  
        }
        return car1;
    }
}
window.NotSorting = function()
{
    Cars = cars;
    showCards(); 
}

window.SortbyYear = function() 
{
    // Use the sort() method to sort the cars array by their year property
    Cars.sort(function(a, b) {
        return a.year - b.year; // Sort in ascending order based on the year
    });
    showCards();
}

window.SortbyPrice = function() 
{
    // Use the sort() method to sort the cars array by their year property
    Cars.sort(function(a, b) {
        return a.price - b.price; // Sort in ascending order based on the year
    });
    showCards();
}

window.SortbyKilometer = function() 
{
    // Use the sort() method to sort the cars array by their year property
    Cars.sort(function(a, b) {
        return a.kilometer - b.kilometer; // Sort in ascending order based on the year
    });
    showCards();
}
// function SearchBar(Cars, input_value) {

//     // Filter cars whose name contains the search string
//     let car1;
//     car1 = Cars.filter(function(car) {
//         return car.name.toLowerCase().includes(input_value);
//     });

//     // Populate the car list with filtered data
//     return car1;
// }

// Call filterCars function whenever there is a change in the search input
document.getElementById("searchInput").addEventListener("input", showCards);
// This function adds cards the page to display the data in the array
function showCards() 
{
    
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

   
    const button_clicked = document.querySelector(".Make-buttons")
    const make = button_clicked.querySelector(".is-checked").textContent;
    display_cars = filterByMake(Cars, make);

    const button_clicked_color = document.querySelector(".Color-buttons")
    const color = button_clicked_color.querySelector(".is-checked").textContent;
    display_cars = filterByColor(display_cars, color);

    const button_clicked_year = document.querySelector(".Year-buttons .is-checked").getAttribute('data-range');
    display_cars = filterByYear(display_cars,button_clicked_year);

    const searchInput = document.getElementById("searchInput");
    const searchString = searchInput.value.toLowerCase();

    // Filter cars whose name contains the search string
    display_cars = display_cars.filter(function(car) {
        return car.name.toLowerCase().includes(searchString);
    });

    for (let i = 0; i < display_cars.length; i++) 
    {
        let car = display_cars[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = car.img;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, car, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newCar, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newCar.name;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newCar.name + " Poster";

    const cardDec = card.querySelectorAll("li");

    cardDec[0].textContent = `Make: ${newCar.make}`;
    cardDec[1].textContent = `Mileage: ${newCar.mileage}`;
    cardDec[2].textContent = `Color: ${newCar.color}`;
    cardDec[3].textContent = `Year: ${newCar.year}`;
    cardDec[4].textContent = `Kilometer: ${newCar.kilometer}`;
    cardDec[5].textContent = `Price: ${newCar.price} $`;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newCar, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

window.quoteAlert = function() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}
window.removeLastCard = function(){
    console.log("Before removal:", display_cars);
    let rmcar = display_cars[display_cars.length-1].name;
    for(let i = 0; i < Cars.length;i++){
        if(Cars[i].name === rmcar)
             Cars.slice(i,1);
    }
     // Remove last item in titles array
    console.log("After removal:", display_cars);
    showCards(); // Call showCards again to refresh
}

let makeButtons = document.querySelectorAll(".Make-buttons button");
makeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.Make-buttons .is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
        console.log("hi how are you");
        showCards(); // Call showCards again to refresh
    });
});

let colorButtons = document.querySelectorAll(".Color-buttons button");
colorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.Color-buttons .is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
        console.log("hi how are you");
        showCards(); // Call showCards again to refresh
    });
});

let yearButtons = document.querySelectorAll(".Year-buttons button");
yearButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.Year-buttons .is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
        console.log("hi how are you2");
        showCards(); // Call showCards again to refresh
    });
});

let SortButtons = document.querySelectorAll(".Sort-button button");
SortButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.Sort-button .is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
        console.log("hi how are you3");
        showCards(); // Call showCards again to refresh
    });
});

window.addCar= function() {
    // Get form data
    const name = document.getElementById("name").value;
    const make = document.getElementById("make").value;
    const year = parseInt(document.getElementById("year").value);
    const mileage = document.getElementById("mileage").value;
    const price = parseInt(document.getElementById("price").value);
    const kilometer = parseInt(document.getElementById("kilometer").value);
    const color = document.getElementById("color").value;
    const img = document.getElementById("img").value;

    // Check if any field is empty
    if (name === "" || make === "" || year === "" || mileage === "" || price === "" || kilometer === "" || color === "") {
        alert("Please fill in all fields");
        return;
    }
    // Create car object
    const newCar = {
        name: name,
        make: make,
        year: year,
        mileage: mileage,
        price: price,
        kilometer: kilometer,
        color: color,
        img: img
    };

    // Update the array with the new car data
    Cars.push(newCar);

    // Log the updated array
    console.log("Updated Cars array:", Cars);

    // Reset the form
    document.getElementById("addCarForm").reset();
    showCards();
}

document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of scrolling to the anchor
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
});
