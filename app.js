// Declaration of Variables and Constant
let level1 = 1;
let score = 20;
let highScore = 0;
let number = Math.ceil(Math.random() * 20)

var scoreHtml = document.querySelector("#score");
var highScoreHtml = document.querySelector("#highScore");
var replaceableText = document.querySelector("#replaceableText");
var userInput = document.querySelector("#userInput")



// Functions Goes here...


function checkValue() {
    if (userInput.value > 20) {
        replaceableText.innerHTML = "Your Number is Bigger than 20 !!!"
    } else if (userInput.value == number) {
        replaceableText.innerHTML = 'You Won !🎁🎁🎁'
        highScoreHtml.innerHTML = score
        scoreHtml.innerHTML = 0
    }
    if (userInput.value < number) {
        replaceableText.innerHTML = 'Your Number Is very Low'
        score--
        scoreHtml.innerHTML = score
    } else if (userInput.value > number ) {
        replaceableText.innerHTML = 'Your Number is Very High'
        score--
        scoreHtml.innerHTML = score
    }



}


function inputCheck() {   
    console.log(userInput.value.length);
    if (userInput.value.length > 2) {
        userInput.value = userInput.value.slice(0, 1)
    }
}