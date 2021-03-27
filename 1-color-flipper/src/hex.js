const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
/*hex color consists of the hasthag and then there
  are six values. ex #f15025
*/
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let iter = 0; iter < 6; iter++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}