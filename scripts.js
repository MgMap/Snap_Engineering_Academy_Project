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
// This is an array of strings (cars models)
import cars from "./car_data.js"

const carsPerPage = 10; // Number of cars to display per page
let currentPage = 1; // Current page number

let Cars = [...cars];
let display_cars=[];
let total_income = 0;

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// Call filterCars function whenever there is a change in the search input
document.getElementById("searchInput").addEventListener("input", showCards);


// This function adds cards the page to display the data in the array
function showCards() 
{
    //cards
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

   //getting the text from the clicked button and call filterbyMake function
    const button_clicked = document.querySelector(".Make-buttons")
    const make = button_clicked.querySelector(".is-checked").textContent;
    display_cars = filterByMake(Cars, make);

    //getting the text from the clicked button and call filterbyColor function
    const button_clicked_color = document.querySelector(".Color-buttons")
    const color = button_clicked_color.querySelector(".is-checked").textContent;
    display_cars = filterByColor(display_cars, color);

    //getting the text from the clicked button and call filterbyYear function
    const button_clicked_year = document.querySelector(".Year-buttons .is-checked").getAttribute('data-range');
    display_cars = filterByYear(display_cars,button_clicked_year);

    //Search Bar
    const searchInput = document.getElementById("searchInput");
    const searchString = searchInput.value.toLowerCase();

    // Filter cars whose name contains the search string
    display_cars = display_cars.filter(function(car) {
        return car.name.toLowerCase().includes(searchString);
    });

    // Calculate the start and end index of cars to display on the current page
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;

    // Slice the display_cars array to get cars for the current page
    const carsForPage = display_cars.slice(startIndex, endIndex);

    // Iterate over the cars for the current page and create cards
    for (let i = 0; i < carsForPage.length; i++) {
        let car = carsForPage[i];
        let imageURL = car.img;
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, car, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }

    // Update page buttons
    updatePageButtons();
    updatePaginationButtons();
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
//--------------------------------Eventlisteners-----------------------------------------------------------

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function(){
    showCards();
    updatePaginationButtons();
});
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of scrolling to the anchor
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
});

document.getElementById("FormLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of scrolling to the anchor
    window.scrollTo({ top: document.body.scrollHeight , behavior: 'smooth' }); // Scroll to the buttom of the page smoothly
});


//----------------------------Functions of filter buttons-----------------------------------------------------
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

//------------------------------end of filter buttons-----------------------------------------------------------


//------------------------------Start of filter buttons-------------------------------------------------
window.NotSorting = function()
{
    Cars = [...cars];
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


//----------------------------------End of sort buttons-----------------------------


//---------------------------------Update each button if clicked--------------------------------------------

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

//------------------Remove each card if sold----------------------------------------

window.markAsSold =function(button) {
    // Get the parent card element
    const card = button.closest(".card");
    // Find the index of the card in the display_cars array
    const index = Array.from(card.parentNode.children).indexOf(card);

    // Remove the card from the display
    card.remove();
    let price = display_cars[index].price
    total_income += price;

    // Remove the corresponding car from the Cars array
    const removedCar = display_cars.splice(index, 1)[0];

    // Log the removed car
    console.log("Sold Car:", removedCar);
    alert("Congralulations! You make $" + price +" by selling this overpriced car.\n Your Income today is $" + total_income);
}


//-----------------------Edit the contents---------------------------------------------
window.toggleEditForm = function(button) {
    const cardContent = button.parentNode;
    const editForm = cardContent.querySelector(".edit-form");
    editForm.style.display = editForm.style.display === "none" ? "block" : "none";
    cardContent.querySelector("ul").style.display = editForm.style.display === "none" ? "block" : "none";
}

window.submitEditForm = function(button) {
    const cardContent = button.closest(".card-content");
    const editForm = cardContent.querySelector(".edit-form");
    const formData = new FormData(editForm);

    // Get the index of the edited card in the display_cars array
    const cardIndex = Array.from(cardContent.parentNode.children).indexOf(cardContent);

    // Get the values from the form inputs
    const editedName = formData.get("edit-name");
    // Get other edited values similarly

    // Update the corresponding car object in the display_cars array
    display_cars[cardIndex].name = editedName;
    // Update other properties similarly

    // Update the card content with edited values
    const ul = cardContent.querySelector("ul");
    ul.children[0].textContent = "Make: " + editedName;
    // Update other list items similarly

    // Toggle form and details visibility
    editForm.style.display = "none";
    ul.style.display = "block";
}

window.cancelEditForm = function(button) {
    const cardContent = button.closest(".card-content");
    const editForm = cardContent.querySelector(".edit-form");
    const ul = cardContent.querySelector("ul");

    // Clear the form inputs
    editForm.reset();

    // Toggle form and details visibility
    editForm.style.display = "none";
    ul.style.display = "block";
}

//--------------------------------------------------------------------------------------
//Goes to the page that is clicked
function updatePageButtons() {
    const totalPages = Math.ceil(display_cars.length / carsPerPage);
    const pageContainer = document.getElementById("page-container");
    pageContainer.innerHTML = "";

    // Create page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.addEventListener("click", function() {
            currentPage = i;
            showCards();
        });
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
        pageContainer.appendChild(pageButton);
    }
}

//display and hide next and prev buttons
window.updatePaginationButtons=function() {
    const totalPages = Math.ceil(display_cars.length / carsPerPage);

    const prevButton = document.getElementById("prevPageButton");
    const nextButton = document.getElementById("nextPageButton");

    if (currentPage === 1) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }

    if (currentPage === totalPages) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }
}

window.prevPage = function() {
    if (currentPage > 1) {
        currentPage--;
        showCards();
    }
}

window.nextPage = function() {
    const totalPages = Math.ceil(display_cars.length / carsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        showCards();
    }
}

//----------------------------------End of Pages------------------------------------
//Add car to the array
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



