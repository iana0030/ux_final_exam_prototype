document.querySelector("#menubutton").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector("#menubutton").classList.toggle("fa-bars");
  document.querySelector("#menubutton").classList.toggle("fa-x");
  document.querySelector("#menubutton").classList.toggle("menubutton_color");
  document.querySelector(".menu_items").classList.toggle("menu_items_position");
  document.querySelector(".menu_items").classList.toggle("hidden");
}

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
