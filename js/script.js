let menContainer = document.querySelector("#menuContainer");
let menBtn = document.querySelector("#menuBtn");

menBtn.addEventListener("click",function() {
    menContainer.classList.toggle("hidden");
});