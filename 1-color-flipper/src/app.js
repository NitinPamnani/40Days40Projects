const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    //by default it always returns between 0 and 1
    /*
        but we want always between 0 and 3 i.e. the length of the colors array
        so multipy the random number by colors.length
    */
    return Math.floor(Math.random()*colors.length);
}

