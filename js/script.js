let menContainer = document.querySelector("#menuContainer");
let menBtn = document.querySelector("#menuBtn");
let overlay = document.querySelector("#overlay");
let menuItem = document.querySelectorAll("a");
let menuIconOpen = document.querySelector("#menuIconOpen");
let menuIconClose = document.querySelector("#menuIconClose");

let toggleMenu = function() {
    menContainer.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    menuIconOpen.classList.toggle("hidden");
    menuIconClose.classList.toggle("hidden");
}


menBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuItem.forEach(item => item.addEventListener("click", toggleMenu));


