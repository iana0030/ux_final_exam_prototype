// Homepage
document.querySelector("#menubutton").addEventListener("click", openMenu);

document.querySelector(".searchBar").addEventListener("click", toggleCategoryPopup);
document.querySelector(".mobile_nav .searchBar").addEventListener("click", toggleCategoryPopup);
document.querySelector(".searchBar").addEventListener("focusout", toggleCategoryPopup);
document.querySelector(".mobile_nav .searchBar").addEventListener("focusout", toggleCategoryPopup);

// Advanced search
document.querySelector("#advanced_search").addEventListener("click", openAdvancedSearch);
document.querySelector("#cuisine_input_1").addEventListener("input", displaySecondCuisine);
document.querySelector("#included_ingredients_input_1").addEventListener("input", displaySecondIncludedIngredient);
document.querySelector(".advanced_search_button_cancel").addEventListener("click", closeAdvancedSearch);

document.querySelector(".save").addEventListener("click", toggleSaveFill);

document.querySelector("#report-button").addEventListener("click", openReportPopup);
document.querySelector(".report_button_report").addEventListener("click", closeReportPopup);
document.querySelector(".report_button_cancel").addEventListener("click", closeReportPopup);
const reportReasons = document.querySelectorAll(".report_reason");
document.querySelector("#increase").addEventListener("click", increase);
document.querySelector("#decrease").addEventListener("click", decrease);

function openMenu(){
    document.querySelector("#menubutton").classList.toggle("fa-bars");
    document.querySelector("#menubutton").classList.toggle("fa-x");
    document.querySelector("#menubutton").classList.toggle("menubutton_color");
    document.querySelector(".menu_items").classList.toggle("menu_items_position");
    document.querySelector(".menu_items").classList.toggle("hidden");
}

function toggleDeleteProfileModal(){
    document.querySelector("#delete_modal").classList.toggle("not_displayed");
}

function toggleSaveFill() {
    document.querySelector(".save i").classList.toggle("fa-regular");
    document.querySelector(".save i").classList.toggle("fa-solid");
}

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

function toggleCategoryPopup() {
    document.querySelector(".category-popup").classList.toggle("hidden");
    setTimeout(() => {
        document.querySelector("#advanced_search").classList.toggle("not_displayed");
    }, 50);
}

function toggleScroll() {
    document.body.classList.toggle("disable_scroll");
}


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
        reason.classList.toggle("selected")

        if (document.querySelector(".report_button_report").classList.contains("report_button_report_disabled")) {
            document.querySelector(".report_button_report").disabled = false;
            document.querySelector(".report_button_report").classList.toggle("report_button_report_disabled");
            document.querySelector(".report_button_report").classList.toggle("report_button_report_enabled");
        }
    })
})

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
    console.log("HIT")
    document.querySelector(".advanced_search_modal").classList.remove("not_displayed");
}

function closeAdvancedSearch() {
    document.querySelector(".advanced_search_modal").classList.add("not_displayed");
}