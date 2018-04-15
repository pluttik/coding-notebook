// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
//btn.onclick = function() {
//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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

var compare = function (choice1,choice2) {
    if (choice1 === choice2) {
        winnerImage = "./img/tie.jpg";
        winner = "none";
        return "The result is a tie!"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            winnerImage = "./img/rockwins.jpg";
            winner = "user";
            return "rock wins";
        }
        else {
            winnerImage = "./img/paperwins.jpg";
            winner = "computer";
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            winnerImage = "./img/paperwins.jpg";
            winner = "user";
            return "paper wins";
        }
        else {
            winnerImage = "./img/scissorswins.jpg";
            winner = "computer";
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            winnerImage = "./img/scissorswins.jpg";
            winner = "user";
            return "scissors wins";
        }
        else {
            winnerImage = "./img/rockwins.jpg";
            winner = "computer";
            return "rock wins";
        }
    }
}

var myImageR = document.querySelector('#onClickRock');
var myImageP = document.querySelector('#onClickPaper');
var myImageS = document.querySelector('#onClickScissors');
var userChoice = "none";
var winnerImage = "./img/scissorswins.jpg";
var winner = "computer";

myImageR.onclick = function() {
    userChoice = "rock";
    modal.style.display = "block";
    console.log(userChoice);
    game ();
  }
myImageP.onclick = function() {
    userChoice = "paper";
    modal.style.display = "block";
    game ();
    }
myImageS.onclick = function() {
    userChoice = "scissors";
    modal.style.display = "block";
    game ();
    }
  