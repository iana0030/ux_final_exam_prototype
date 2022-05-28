document.querySelector("#menubutton").addEventListener("click", openMenu);

document.querySelector(".searchBar").addEventListener("click", openCategoryPopup);
document.querySelector(".mobile_nav .searchBar").addEventListener("click", openCategoryPopup);
document.querySelector(".searchBar").addEventListener("focusout", openCategoryPopup);
document.querySelector(".mobile_nav .searchBar").addEventListener("focusout", openCategoryPopup);

document.querySelector(".delete_profile").addEventListener("click", toggleDeleteProfileModal);
document.querySelector(".delete_profile_mobile").addEventListener("click", toggleDeleteProfileModal);
document.querySelector(".modal_bg").addEventListener("click", toggleDeleteProfileModal);
document.querySelector(".delete_profile_btn").addEventListener("click", toggleDeleteProfileModal);

document.querySelector(".save").addEventListener("click", toggleSaveFill);

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
    document.getElementById('output').value = input / 28.34952;

});

ounceBtn.addEventListener('click', function () {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 28.34952;

});

function openCategoryPopup() {
    document.querySelector(".category-popup").classList.toggle("hidden");
}

