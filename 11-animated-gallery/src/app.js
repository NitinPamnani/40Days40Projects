const images = document.querySelectorAll('.image');
const closeBtn = document.querySelector('.closebtn');
const expandIng = document.getElementById("expandedImg");
const imgText = document.getElementById("imgtext");

images.forEach(function(image) {
    image.addEventListener('click',function(event) {
        expandIng.src = image.src;
        expandIng.classList.add('fadein');
        expandIng.classList.remove('fadeout');
        expandIng.addEventListener("webkitAnimationEnd", function(){
            expandIng.classList.remove('fadein');
        })
    })
})

closeBtn.addEventListener('click', function(){
    expandIng.classList.add('fadeout');
    expandIng.classList.remove('fadein');
})