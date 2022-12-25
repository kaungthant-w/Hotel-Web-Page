let menContainer = document.querySelector("#menuContainer");
let menBtn = document.querySelector("#menuBtn");
let overlay = document.querySelector("#overlay");
let menuItem = document.querySelectorAll("a");
let menuIconOpen = document.querySelector("#menuIconOpen");
let menuIconClose = document.querySelector("#menuIconClose");
let rooms = document.querySelector("#rooms");
let nav = document.querySelector("#nav");

let toggleMenu = function() {
    menContainer.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    menuIconOpen.classList.toggle("hidden");
    menuIconClose.classList.toggle("hidden");
}

menBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuItem.forEach(item => item.addEventListener("click", toggleMenu));


const initialCoords = rooms.getBoundingClientRect();
window.addEventListener("scroll", function() {
    if(window.scrollY > initialCoords.top) {
        nav.classList.remove("md:h-20");
        nav.classList.add("md:h-14");
    } else {
        nav.classList.remove("md:h-14");
        nav.classList.add("md:h-20");
    }
})


const revealSection = function(entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section-hide');
    observer.unobserve(entry.target);
}

// reveal sections 
const allSections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.15,
});
allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section-hide');
})

//lazy loading image
const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

const loadImg = function(entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if(!entry.isIntersecting) return;

    // replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function(){
        entry.target.classList.remove('lazy-img');

    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
    root:null,
    threshold:0,
    rootMargin:'-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));