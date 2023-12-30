document.addEventListener("DOMContentLoaded", () => {
let array = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    }
];




let search = document.querySelector("input");
let showAllButton = document.getElementById("sec2-btn1");
let showVegButton = document.getElementById("sec2-btn2");
let showNonVegButton = document.getElementById("sec2-btn3");
let cardHolder = document.getElementById("sec3-pics");

for (let i = 0; i < array.length; i++) {
    let card = document.createElement("div");
    card.className = "sec3-card";

    card.innerHTML = `
        <img class="sec3-img" src=${array[i].imageSrc}>
        <div class="card-in">
            <p>${array[i].type}</p>
            <div class="sec3-div1">
                <p class="card-name">${array[i].name}</p>
                <p class="s3-d1-p2"><i class="fa-solid fa-star"></i>${array[i].rating}</p>
            </div>
            <div class="sec3-div2">
                <p>${array[i].time}</p>
                <div>
                    <i class="fa-regular fa-heart heart"></i>
                    <i class="fa-regular fa-comment"></i>
                </div>
            </div>
        </div>
    `;
    cardHolder.appendChild(card);
}

// Initial array of recipes
let displayedArray = array;

// Function to update displayed recipes based on filters
function updateDisplayedRecipes() {
    // Clear the existing cards
    cardHolder.innerHTML = "";

    // Create and append new cards for the displayed recipes
    for (let i = 0; i < displayedArray.length; i++) {
        let card = document.createElement("div");
        card.className = "sec3-card";

        card.innerHTML = `
            <img class="sec3-img" src=${displayedArray[i].imageSrc}>
            <div class="card-in">
                <p>${displayedArray[i].type}</p>
                <div class="sec3-div1">
                    <p class="card-name">${displayedArray[i].name}</p>
                    <p class="s3-d1-p2"><i class="fa-solid fa-star"></i>${displayedArray[i].rating}</p>
                </div>
                <div class="sec3-div2">
                    <p>${displayedArray[i].time}</p>
                    <div>
                        <i class="fa-regular fa-heart heart"></i>
                        <i class="fa-regular fa-comment"></i>
                    </div>
                </div>
            </div>
        `;
        cardHolder.appendChild(card);
    }
}

let heart = document.querySelectorAll(".sec3-div2>div>i");

heart.forEach(heart => {
    let isRed = false;

    heart.addEventListener("click", (e) => {
        if (isRed) {
            e.target.style.backgroundColor = "";  // Set to the original color (empty string)
        } else {
            e.target.style.backgroundColor = "red";
            
        }

        isRed = !isRed;  // Toggle the state
    });
});


// Event listener for input changes
search.addEventListener("input", (event) => {
    // Get the entered text from the input field
    const searchText = event.target.value;

    // Filter recipes based on the search query
    displayedArray = array.filter(recipe =>
        recipe.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Update displayed recipes
    updateDisplayedRecipes();
});

// Event listener for "Show All" button
showAllButton.addEventListener("click", () => {
    displayedArray = array;
    updateDisplayedRecipes();
});

// Event listener for "Show Only Veg" button
showVegButton.addEventListener("click", () => {
    displayedArray = array.filter(recipe => recipe.type === "veg");
    updateDisplayedRecipes();
});

// Event listener for "Show Only Non-Veg" button
showNonVegButton.addEventListener("click", () => {
    displayedArray = array.filter(recipe => recipe.type === "non-veg");
    updateDisplayedRecipes();
});

// RATING

document.querySelector("#above45").addEventListener("change", () => {
    filterRecipesByRating(4.5, Infinity);
});

document.querySelector("#below40").addEventListener("change", () => {
    filterRecipesByRating(0, 4.0);
});

function filterRecipesByRating(minRating, maxRating) {
    const recipes = document.querySelectorAll(".sec3-card");

    recipes.forEach((recipe) => {
        const ratingElement = recipe.querySelector(".s3-d1-p2");
        const rating = parseFloat(ratingElement.innerText);

        if (rating >= minRating && rating <= maxRating) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
}

});

// SIDE BAR

let list = document.getElementById('list');
    let drawer = document.createElement('div');
    drawer.id = 'drawer';

    drawer.innerHTML = `<img src="./assets/Cookpal 1.png">
        <img id="dr-img" src="./assets/Ellipse 3.png">
        <div id="nav-div-dr">
            <ul id="nav-ul-dr">
                <li><a>Home</a></li>
                <li><a>Explore</a></li>
                <li><a>Help</a></li>
            </ul>
        </div>`;

    list.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent closing when clicking inside the drawer

        if (!list.contains(drawer)) {
            list.appendChild(drawer);
        } else {
            list.removeChild(drawer);
        }
    });

    document.addEventListener('click', function (event) {
        if (list.contains(drawer) && !drawer.contains(event.target)) {
            list.removeChild(drawer);
        }
    });