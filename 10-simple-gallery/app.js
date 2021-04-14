const images = document.querySelectorAll('.image');
const closeBtn = document.querySelector('.closebtn');
const expandIng = document.getElementById("expandedImg");
const imgText = document.getElementById("imgtext");

images.forEach(function(image) {
    image.addEventListener('click',function(event) {
        expandIng.src = image.src;
        expandIng.parentElement.style.display="block";
    })
})

closeBtn.addEventListener('click', function(){
    expandIng.parentElement.style.display="none";
})