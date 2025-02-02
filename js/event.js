// const fruitSolidBtn = document.getElementById("fruit-solid-btn")
// fruitSolidBtn.onclick = document.body.style.backgroundColor = 'red';

// red
function fruitSolidBtn(){
    document.body.style.backgroundColor = 'red';
    document.getElementById("food-list").innerText = "test changed & i can make juice"
}

// green
const fruitJuiceBtn = document.getElementById("fruit-juice-btn")
fruitJuiceBtn.onclick = function makeGreen(){
    document.body.style.backgroundColor = "green"
}

// blue

const fruitBtn = document.getElementById("fruit-btn")
fruitBtn.onclick = makeBlue

function makeBlue(){
    document.body.style.backgroundColor = "blue"
}
