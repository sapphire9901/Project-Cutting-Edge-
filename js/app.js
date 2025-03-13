// hamburger menu
// from https://www.youtube.com/watch?v=aNDqzlAKmZc
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.nav-links');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    if(offScreenMenu.classList.contains('active')){ // added a check to see if hamburger menu is open
        unreveal(); // if it is open, we want to unreveal the images
    }
    else{
        reveal();
    }
    
})


// fade-in effect for the images
// from https://www.youtube.com/watch?v=VplDlwLTR50
// also added a check to only apply the reveal logic when the hamburger menu is closed

/* SCROLLING EFFECT*/

window.addEventListener('scroll', reveal); /*Calls the function reveal when it detects scrolling*/

function reveal(){
    var reveals = document.querySelectorAll('.reveal'); /*Collects all elements from class reveal and puts them in variable reveals*/

    for(var i = 0; i < reveals.length; i++){    /*Create a for-loop that will go through all reveal-elements*/
        var windowheight = window.innerHeight;  /*Height of the browser window, the visible part*/
        var revealtop = reveals[i].getBoundingClientRect().top; /*getBoundingClientRect returns an object containing information about
        an element's position and size, relative to the visible screen area. So top will return the distance from the top of the elemnent
        to the top of the viewport. The values will change as you scroll*/
        var revealpoint = 150; 

        if(revealtop < windowheight - revealpoint){ /*If the element is visible, including extra buffer (revealpoint 150px), 
            active class (look for active in the CSS) is added*/ 
            reveals[i].classList.add('active');
        } 
        else{ /*If it is out of view, active class is removed*/
            reveals[i].classList.remove('active');
        }/*Animation is triggered by scrolling down and reset when scrolling up*/
    }

}









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


