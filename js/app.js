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

