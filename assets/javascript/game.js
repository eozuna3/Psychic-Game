// Creating variables to hold the number of wins, losses, guesses left, and an array to hold the list of guesses made.

var wins = 0;
var losses = 0;
var guessLeft = 0;
var guessArray = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var userGuess = document.getElementById("guessSoFar");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeftText = document.getElementById("guessLeft");

//Function for random letter generator.
function stringGen(len) {
  var text = " ";
  var charset = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}

document.onkeypress = function (event) {

  //Creating variables for use on keypress event
  var userGuess = event.key;
  var userGuessKey1 = event.keyCode;
  var userGuessKey2 = event.which;
  var test

  //Determine if user pressed lowercase letter
  if ((userGuessKey1 >= 97 || userGuessKey2 >= 97) && (userGuessKey1 <=122 || userGuessKey2 <= 122)){
      if(guessLeft <= 8){
        var randomLetter = ((stringGen((1))));
        guessLeft = guessLeft++;
        guessLeftText.textContent = "Guess left: " + guessLeft;

        //Consule test logs
        console.log(randomLetter);
        console.log(userGuess);
        console.log(Number(userGuess));
        console.log(userGuessKey1);
        console.log(userGuessKey2);
        console.log(guessLeft);
        console.log("---------------")
    } else{
      alert("you have used 9 guesses");
    }
  }
}