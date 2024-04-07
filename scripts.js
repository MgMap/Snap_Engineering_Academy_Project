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

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.
window.filterByMake = function(make) {
    if (make === "All") {
        return cars;
    } else {
        return cars.filter(function(car) {
            return car.make === make;
        });
    }
}


// This function adds cards the page to display the data in the array
function showCards() {
    
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");


    const button_clicked = document.querySelector(".Make-buttons");
    const make = button_clicked.querySelector(".is-checked").innerText;
    let filteredCars = filterByMake(make);

    for (let i = 0; i < filteredCars.length; i++) {
        let car = filteredCars[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }

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
    cars.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

let makeButtons = document.querySelectorAll(".Make-buttons button");
makeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
        console.log("hi how are you");
        showCards(); // Call showCards again to refresh
    });
});
