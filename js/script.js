document.querySelector("#menubutton").addEventListener("click", openMenu);

function openMenu() {
    document.querySelector("#menubutton").classList.toggle("fa-bars");
    document.querySelector("#menubutton").classList.toggle("fa-x");
    document.querySelector("#menubutton").classList.toggle("menubutton_color");
    document.querySelector(".menu_items").classList.toggle("menu_items_position");
    document.querySelector(".menu_items").classList.toggle("hidden");
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