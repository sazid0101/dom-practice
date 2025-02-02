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

// pink
const pinkButton = document.getElementById("make-pink")
pinkButton.addEventListener("click", makePink)

function makePink(){
    document.body.style.backgroundColor = "pink"
}

// orange
// most of the time we will use it

document.getElementById("make-orange").addEventListener("click", function makeOrange(){
    document.body.style.backgroundColor = "orange"
})