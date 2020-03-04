var reset = 0;


// 2 players outcome
// if (randomNumber1 > randomNumber2) {
//     outcome = "Player 1 win!!";
// } else if (randomNumber1 < randomNumber2) {
//     outcome = "Player 2 win!!";
// } else {
//     outcome = "It's a draw!!";
// }
//console.log(randomNumber1);


//document.getElementsByClassName("rollbutton").click() = rollDiceBtnClickEvent;



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}


function rollDiceBtnClickEvent() {
    var outcome = "";
    var randomNumber1 = getRandomInt(6);
    var randomNumber2 = getRandomInt(6);
    var randomNumber3 = getRandomInt(6);
    var points = randomNumber1 + randomNumber2 + randomNumber3;
    var winner = Math.max(randomNumber1, randomNumber2, randomNumber3);
    reset++;
    //3 players outcome
    if (randomNumber1 == winner) {
        if (randomNumber2 == winner && randomNumber2 > randomNumber3) { outcome = "Player 1 and 2 win!!"; } else if (randomNumber3 == winner && randomNumber3 > randomNumber2) { outcome = "Player 1 and 3 win!!"; } else { outcome = "Player 1 win!!"; }
    } else if (randomNumber2 == winner) {
        if (randomNumber1 == winner && randomNumber1 > randomNumber3) { outcome = "Player 1 and 2 win!!"; } else if (randomNumber3 == winner && randomNumber3 > randomNumber1) { outcome = "Player 2 and 3 win!!"; } else { outcome = "Player 2 win!!"; }
    } else if (randomNumber3 == winner) {
        if (randomNumber2 == winner && randomNumber2 > randomNumber1) { outcome = "Player 2 and 3 win!!"; } else if (randomNumber1 == winner && randomNumber1 > randomNumber2) { outcome = "Player 1 and 3 win!!"; } else { outcome = "Player 3 win!!"; }
    } else if (randomNumber1 == winner &&
        randomNumber2 == winner &&
        randomNumber3 == winner) {
        outcome = "It's a draw!!";
    }
    //assign value to imgsrc variable
    var imgsrc1 = "images\\dice" + randomNumber1 + ".png";
    var imgsrc2 = "images\\dice" + randomNumber2 + ".png";
    var imgsrc3 = "images\\dice" + randomNumber3 + ".png";

    //change the image source of img tags
    document.querySelector(".img1").setAttribute("src", imgsrc1);
    document.querySelector(".img2").setAttribute("src", imgsrc2);
    document.querySelector(".img3").setAttribute("src", imgsrc3);
    if (reset != 0) {
        document.querySelector("h2").textContent = outcome;

        //Fire up the confetti
        //document.querySelector(".confetti").setAttribute("visibility", "visible");
        document.querySelector(".confetti").classList.toggle("visible"); //replace toggle with add/remove
    }
    reset = 0


}