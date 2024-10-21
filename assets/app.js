// -----------------------Navbar collapse --------------------//
let expandlines = document.querySelector(".expand-lines");
expandlines.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("toggle-active");

    main = document.querySelector("main");
    main.classList.toggle("margin-main-top");
}

//---------------------------Carousel----------------------//
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const previousButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

//counter
let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

//Button Listeners
nextButton.addEventListener('click', () =>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
});

previousButton.addEventListener('click', () =>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
    if(carouselImages[counter].id === 'lastSlide'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
    if(carouselImages[counter].id === 'firstSlide'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
});

//Responsive carousel 
window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


//scroll-up
// Get the button:
let mybutton = document.querySelector('.scroll-up-button');
mybutton.style.display = "none";
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}