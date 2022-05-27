
document.querySelector("#menubutton").addEventListener("click", openMenu);
document.querySelector(".searchBar").addEventListener("click", openCategoryPopup)
document.querySelector(".searchBar").addEventListener("focusout", openCategoryPopup)

function openMenu(){
    document.querySelector("#menubutton").classList.toggle("fa-bars");
    document.querySelector("#menubutton").classList.toggle("fa-x");
    document.querySelector("#menubutton").classList.toggle("menubutton_color");
    document.querySelector(".menu_items").classList.toggle("menu_items_position");
    document.querySelector(".menu_items").classList.toggle("hidden");
};

function openCategoryPopup() {
    document.querySelector(".category-popup").classList.toggle("hidden")
}