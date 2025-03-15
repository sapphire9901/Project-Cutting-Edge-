// hamburger menu
// from https://www.youtube.com/watch?v=aNDqzlAKmZc
// also added a no-scroll when hamburger menu is active
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.nav-links');
const body = document.body;  // Variable to get access to the body element

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

    if(offScreenMenu.classList.contains('active')) {
        unreveal();  // Deactivation of the revealing of images
        body.classList.add('no-scroll');  // We do not want the page to be scrollable when ham is open
    } else {
        reveal();
        body.classList.remove('no-scroll');  // Else remove no-scroll, and images can be revealed
    }
})


// fade-in effect for the images
// from https://www.youtube.com/watch?v=VplDlwLTR50
// also added a check to only apply the reveal logic when the hamburger menu is closed
window.addEventListener('scroll', reveal);

function reveal() {
    if (!offScreenMenu.classList.contains('active')) {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            } 
        } 
    }
}


function unreveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.remove('active');
    }
}



// Code that adds the reveal class to all of the images besides for the first image in mobile view
// The fuction updateClass() was developed with help from chatGPT
function updateClass() {
    var elements = document.querySelectorAll('.phone_reveal'); // We want to change all of the elements in the class phone_reveal
    if (window.innerWidth >= 320 && window.innerWidth <= 480) { // Size for mobile view
        elements.forEach(function(element) {
            element.classList.add('reveal'); // Adds the elements to the 'reveal' class
        });
    } else {
        elements.forEach(function(element) {
            element.classList.remove('reveal'); // Remove the elements from the reveal class
        });
    }
}
//The function is called every time the page is loaded or resized
window.addEventListener('load', updateClass);
window.addEventListener('resize', updateClass);




 /*GALLERY-SLIDER*/

 /*Access the images*/
 let slideImages = document.querySelectorAll('.slides img');

 /*Access the next and prev buttons*/
 let next = document.querySelector('.next');
 let prev = document.querySelector('.prev');

 /*Access the indicators*/
 let dots = document.querySelectorAll('.dot');


 var counter = 0;

 /*Code for next button*/
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >=slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

/*Code for prev button*/
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}


/*Auto sliding*/
function autoSliding(){
    deletInterval = setInterval(timer,3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

/*Stop auto sliding when mouse is hovering*/
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

/*Resume sliding when mouse is out*/
container.addEventListener('mouseout', autoSliding);

/*Add and remove active class from indicators*/
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');   
    }
    dots[counter].className += ' active';
}

/*Add click event to indicators */

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    } 
    else if(imageId == counter){
        return;
    }
    else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}


/******* I have to check into this more, but it works for no  *****/
// Map
function initMap() {
    var center = {lat: 60.39360, lng: 5.33260}; // Coordinates for S7vende hårsalong
    var mapOptions = {
        zoom: 14,
        center: center
    };

    var mapElement = document.getElementById('content_kontakt_map');

    // Creates map
    var map = new google.maps.Map(mapElement, mapOptions);

    // Adds pin
    var marker = new google.maps.Marker({
        position: center,
        map: map, 
        title: 'S7vende Hårsalong' // text that shows when pin is hovered
    });
}
