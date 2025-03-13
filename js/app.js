function showSidebar(){
    const sidebar = document.querySelector('.sidebar') /*select sidebar element*/
    sidebar.style.display = 'flex'
}

function hideSidebar(){
     const sidebar = document.querySelector('.sidebar') /*select sidebar element*/
     sidebar.style.display = 'none'

}

function handleLogoClick() {
    window.location.href = "index.html"; // Change this to your desired page or action
}


function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');

        }
    }
}