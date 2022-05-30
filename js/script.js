// Homepage
document.querySelector("#menubutton").addEventListener("click", openMenu);

// Burger menu on mobile
function openMenu(){
    document.querySelector("#menubutton").classList.toggle("fa-bars");
    document.querySelector("#menubutton").classList.toggle("fa-x");
    document.querySelector("#menubutton").classList.toggle("menubutton_color");
    document.querySelector(".menu_items").classList.toggle("menu_items_position");
    document.querySelector(".menu_items").classList.toggle("hidden");
}

if(document.querySelector(".delete_profile")) {
    // Delete profile event listener
    document.querySelector(".delete_profile").addEventListener("click", toggleDeleteProfileModal);
    document.querySelector(".delete_profile_mobile").addEventListener("click", toggleDeleteProfileModal);
    document.querySelector(".modal_bg").addEventListener("click", toggleDeleteProfileModal);
    document.querySelector(".delete_profile_btn").addEventListener("click", toggleDeleteProfileModal);
    
    
    // Delete profile pop up
    function toggleDeleteProfileModal(){
        document.querySelector("#delete_modal").classList.toggle("not_displayed");
    }

}
if(document.querySelector(".save")) {
    // Save button
    document.querySelector(".save").addEventListener("click", toggleSaveFill);

    // Save button fill
    function toggleSaveFill() {
        document.querySelector(".save i").classList.toggle("fa-regular");
        document.querySelector(".save i").classList.toggle("fa-solid");
    }
}


if(document.querySelector(".category-popup")) {
    // Category popup
    document.querySelector(".searchBar").addEventListener("click", toggleCategoryPopup);
    document.querySelector(".mobile_nav .searchBar").addEventListener("click", toggleCategoryPopup);
    document.querySelector(".searchBar").addEventListener("focusout", toggleCategoryPopup);
    document.querySelector(".mobile_nav .searchBar").addEventListener("focusout", toggleCategoryPopup);
}


if(document.querySelector("#advanced_search")) {
    // Advanced search
    document.querySelector("#advanced_search").addEventListener("click", openAdvancedSearch);
    document.querySelector("#cuisine_input_1").addEventListener("input", displaySecondCuisine);
    document.querySelector("#included_ingredients_input_1").addEventListener("input", displaySecondIncludedIngredient);
    document.querySelector(".advanced_search_button_cancel").addEventListener("click", closeAdvancedSearch);
}


if(document.querySelector("#report-button")) {
    // Report
    document.querySelector("#report-button").addEventListener("click", openReportPopup);
    document.querySelector(".report_button_report").addEventListener("click", closeReportPopup);
    document.querySelector(".report_button_cancel").addEventListener("click", closeReportPopup);
    const reportReasons = document.querySelectorAll(".report_reason");
}

// Comment and rating
let starIndex = 0;

if(document.querySelector("#comment_input")) {
    document.querySelectorAll(".rating_input .fa-star").forEach(star => {
        // Increment star index
        star.addEventListener("click", () => {
            if (star.classList.contains("fa-regular")) {
                console.log("hit")
                changePreviousStars(star);
            } else if (star.classList.contains("fa-solid")) {
                changeAfterStars(star);
            }
            // changePreviousStars(star);
            // changeAfterStars(star);
        })
    });

    document.querySelector("#comment_input").addEventListener("keypress", (event)=> {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.querySelector(".newly_added_comment").classList.toggle("not_displayed");
        }
    });
}

// Function for changing previous stars than clicked one to black  
// Clicked star is passed to a function. Function loops through all of the stars and checks them if they are equal to the passed star.
// If the star is not the same, it is changed to black and loop continues.
// If the star is the same, it is changed to black and loop stops.
function changePreviousStars(starClicked) {
    let notfound = true;
    document.querySelectorAll(".rating_input .fa-star").forEach(star => {
        if (notfound) {
            if (star != starClicked) {
                if (!star.classList.contains("fa-solid")) {
                    star.classList.toggle("fa-solid");
                }
                star.classList.toggle("fa-regular");
            } else {
                star.classList.toggle("fa-regular");
                star.classList.toggle("fa-solid");
                notfound = false;
            }
        }
    })
}

// Function for changing after stars than clicked one to black
// Clicked star is passed to a function. Function loops through all of the stars and checks them if they are equal to the passed star.
// If the black star is not equal to the passed star, the black star is ignored.
// If the black star is equal to the passed star, the passed star is ignored, but the rest of the stars are changed to white stars if they are black.
// If the white stars are located after clicked/passed star, they are ignored. 
function changeAfterStars(starClicked) {
    let notfound = true;
    document.querySelectorAll(".rating_input .fa-star").forEach(star => {
        if (notfound) {
            if (star == starClicked) {
                notfound = false;
            }
        } else {
            if (star.classList.contains("fa-solid")) {
                star.classList.toggle("fa-solid");    
            }
            if (!star.classList.contains("fa-regular")) {
                star.classList.toggle("fa-regular");
            }
        }
    })
}

// Increase and decrease of servings
document.querySelector("#increase").addEventListener("click", increase);
document.querySelector("#decrease").addEventListener("click", decrease);




//############### COUNTER ###################//
let data = 1;
document.getElementById("counting").innerText = data;
function increase() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

function decrease() {
    data = Math.max(1, data - 1);
    document.getElementById("counting").innerText = data;
}

//############### WEIGHT CONVERSION ###################//
let gramBtn = document.getElementById('gram');
let ounceBtn = document.getElementById('ounce');

gramBtn.addEventListener('click', function () {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = (input / 28.34952).toFixed(2);

});

ounceBtn.addEventListener('click', function () {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = (input * 28.34952).toFixed(2);

});


// Category pop up functions
function toggleCategoryPopup() {
    document.querySelector(".category-popup").classList.toggle("hidden");
    setTimeout(() => {
        document.querySelector("#advanced_search").classList.toggle("not_displayed");
    }, 500);
}

function toggleScroll() {
    document.body.classList.toggle("disable_scroll");
}

// Report pop up
function openReportPopup() {
    document.querySelector(".report_modal").classList.toggle("not_displayed");
    toggleScroll();
}

function closeReportPopup () {
    document.querySelector(".report_modal").classList.toggle("not_displayed");
    toggleScroll();
}

// Add event listeners to the Report reasons
reportReasons.forEach(reason => {
    reason.addEventListener("click", () => {
        reason.classList.toggle("selected");

        if (document.querySelector(".report_button_report").classList.contains("report_button_report_disabled")) {
            document.querySelector(".report_button_report").disabled = false;
            document.querySelector(".report_button_report").classList.toggle("report_button_report_disabled");
            document.querySelector(".report_button_report").classList.toggle("report_button_report_enabled");
        }
    });
});

function displaySecondCuisine() {
    if (document.querySelector(".advanced_search_button_search").classList.contains("advanced_search_button_disabled")) {
        document.querySelector(".advanced_search_button_search").classList.remove("advanced_search_button_disabled");
        document.querySelector(".advanced_search_button_search").classList.add("advanced_search_button_enabled");
        document.querySelector(".advanced_search_button_search").disable = false;
    }
    document.querySelector("#cuisine_input_2").classList.remove("not_displayed");
    document.querySelector("#cuisine_input_2").addEventListener("click", displayInputedCuisine);
}

function displayInputedCuisine() {
    document.querySelector("#cuisine_input_1").classList.add("not_displayed");
    document.querySelector(".input_cuisine").classList.remove("not_displayed");
}

function displaySecondIncludedIngredient() {
    document.querySelector("#included_ingredients_input_2").classList.remove("not_displayed");
    document.querySelector("#included_ingredients_input_2").addEventListener("click", displayInputedIncludedIngredient);
}

function displayInputedIncludedIngredient() {
    document.querySelector("#included_ingredients_input_1").classList.add("not_displayed");
    document.querySelector(".input_included_ingredients").classList.remove("not_displayed");
}

function openAdvancedSearch() {
    console.log("HIT");
    document.querySelector(".advanced_search_modal").classList.remove("not_displayed");
}

function closeAdvancedSearch() {
    document.querySelector(".advanced_search_modal").classList.add("not_displayed");
}