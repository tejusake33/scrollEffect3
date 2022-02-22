
const parallax = document.getElementById("parallax");

window.addEventListener('scroll',function(){
    let offSet = window.pageYOffset;
    parallax.style.backgroundPositionY = offSet * 0.7 + "px";
})
