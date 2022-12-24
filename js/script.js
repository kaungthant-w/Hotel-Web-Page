let menContainer = document.querySelector("#menuContainer");
let menBtn = document.querySelector("#menuBtn");
let overlay = document.querySelector("#overlay");
let menuItem = document.querySelectorAll("a");

let toggleMenu = function() {
    menContainer.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}


menBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuItem.forEach(item => item.addEventListener("click", toggleMenu));


