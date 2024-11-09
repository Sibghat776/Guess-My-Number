// Declaration of Variables and Constant
let level1 = 1;
let score = 20;
let highScore = 0;

const scoreHtml = document.querySelector("#score");
const highScoreHtml = document.querySelector("#highScore");
const replaceableText = document.querySelector("#replaceableText");
const userInput = document.querySelector("#userInput")


// Functions Goes hetre...
function inputCheck() {
    console.log(userInput.value.length);
    if (userInput.value.length > 2) {
        userInput.value = userInput.value.slice(0, 1)
    }
}