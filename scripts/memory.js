//counter for opening two cards within one turn
let firstClicked = false;
let secondClicked = false;

//size of the game: the number of cards
let numCards = 16;

//counter for the number of cards paired
let numberFound = 0;

//counter for the number of tries
let numberTries = 0;

//shuffle function to randomize order of cards
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//fill an array with image names in random order
let imgNames = ['clown1.png','clown2.jpg','clown3.jpg','clown4.jpg','clown5.jpg','clown6.jpg','clown7.jpg', 'clown8.jpg', 'clown1.png','clown2.jpg','clown3.jpg','clown4.jpg','clown5.jpg','clown6.jpg', 'clown7.jpg', 'clown8.jpg'];
names = shuffle(imgNames);

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function game(clickedId) {
    if (!firstClicked) {
        numberTries += 1;
        console.log(numberTries);
        firstCardChosen = document.getElementById(clickedId);
        if (firstCardChosen.classList.contains('notFound')){
            firstClicked = true;
            firstCard = 'img/' + imgNames[parseInt(clickedId)];
            firstCardChosen.src = firstCard;
        }
    }
    else if (!secondClicked) {
        secondCardChosen = document.getElementById(clickedId);
        if (secondCardChosen.classList.contains('notFound')){
            secondClicked = true;
            secondCard = 'img/' + imgNames[parseInt(clickedId)];
            secondCardChosen.src = secondCard;
            if (firstCard !== secondCard) {
                //wait a few seconds
                await wait(2000);
                firstCardChosen.src = 'img/board2.jpg';
                secondCardChosen.src = 'img/board2.jpg';
                firstClicked = false;
                secondClicked = false;
            }
            else {
                //make faceUp permanent
                firstCardChosen.classList.remove('notFound');
                secondCardChosen.classList.remove('notFound');
                numberClicked = 0;
                firstClicked = false;
                secondClicked = false;
                numberFound += 2;
            }
        }
    }
}

