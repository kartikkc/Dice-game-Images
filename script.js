
// for Dice-1 or Player-1

var x = 0;
var y = 0;
var z = 0;

x = Math.random();
y = (x * 6) + 1;
z = Math.floor(y);

console.log(z);

randomImage = "dice" + z + ".png";
randomImageSource = "images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// for Dice-2 or Player-2

var a = 0;
var b = 0;
var c = 0;

a = Math.random();
b = (a * 6) + 1;
c = Math.floor(b);

randomImage = "dice" + c + ".png";
randomImageSource = "images/" + randomImage;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

console.log(c);

if (z > c) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (c > z) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}