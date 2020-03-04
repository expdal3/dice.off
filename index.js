var randomNumber1 = getRandomInt(6);
var randomNumber2 = getRandomInt(6);
var randomNumber3 = getRandomInt(6);
var points = randomNumber1 + randomNumber2 + randomNumber3;
var winner = Math.max(randomNumber1, randomNumber2, randomNumber3);
var outcome = "";
if (randomNumber1 > randomNumber2) {
    outcome = "Player 1 win!!";
} else if (randomNumber1 < randomNumber2) {
    outcome = "Player 2 win!!";
} else {
    outcome = "It's a draw!!";
}
//console.log(randomNumber1);

//assign value to imgsrc variable
var imgsrc1 = "images\\dice" + randomNumber1 + ".png";
var imgsrc2 = "images\\dice" + randomNumber2 + ".png";
var imgsrc3 = "images\\dice" + randomNumber3 + ".png";

//change the image source of img tags
document.querySelector("img.img1").setAttribute("src", imgsrc1);
document.querySelector("img.img2").setAttribute("src", imgsrc2);
document.querySelector("h2").textContent = outcome;


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}