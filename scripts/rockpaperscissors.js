var myImageR = document.querySelector('#onClickRock');
var myImageP = document.querySelector('#onClickPaper');
var myImageS = document.querySelector('#onClickScissors');
var userChoice = "none";
var winnerImage = "./images/scissorswins.jpg"
var winner = "computer";

myImageR.onclick = function() {
    userChoice = "rock";
    game ();
  }
myImageP.onclick = function() {
    userChoice = "paper";
    game ();
    }
myImageS.onclick = function() {
    userChoice = "scissors";
    game ();
    }

var compare = function (choice1,choice2) {
    if (choice1 === choice2) {
        winnerImage = "./images/tie.jpg";
        winner = "none";
        return "The result is a tie!"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            winnerImage = "./images/rockwins.jpg";
            winner = "user";
            return "rock wins";
        }
        else {
            winnerImage = "./images/paperwins.jpg";
            winner = "computer";
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            winnerImage = "./images/paperwins.jpg";
            winner = "user";
            return "paper wins";
        }
        else {
            winnerImage = "./images/scissorswins.jpg";
            winner = "computer";
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            winnerImage = "./images/scissorswins.jpg";
            winner = "user";
            return "scissors wins";
        }
        else {
            winnerImage = "./images/rockwins.jpg";
            winner = "computer";
            return "rock wins";
        }
    }
}

var game = function () {
    /*var userChoice = prompt("Do you choose rock, paper or scissors?");*/
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    var answer = compare(userChoice,computerChoice);
    if (winner === "user") {
      answer = "The computer chose " + computerChoice + "... "+ answer + "; CONGRATULATIONS!!";
    }
    else if (winner === "computer") {
      answer = "The computer chose " + computerChoice + "... "+ answer + "; the computer won.";
    }
    $('.modal-title').text(answer);
    $('#modalImage').attr('src',winnerImage);
}
