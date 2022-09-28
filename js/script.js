var navmenu = document.querySelector(".navmenu")

var mobilenav = document.querySelector(".mobile_nav_btn")

mobilenav.addEventListener( "click", ()=>{
    navmenu.classList.toggle('active');
})