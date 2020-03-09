/*----- constants -----*/
const cards = document.querySelectorAll('.card')
let firstCard, secondCard;
let header1 = document.getElementById('title');

/*----- app's state (variables) -----*/
cards.forEach(card => card.addEventListener('click', flipCard));

/*----- cached element references -----*/
let hasFlippedCard = false;
let freeze = false;

/*----- Functions -----*/
init()
function flipCard() {
    header1.innerHTML = "Crinoline Era"
    if (freeze) {
        return;
    }
    if (this === firstCard) {
        return
    }
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        //Handles the first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    } else {
        //Handles the second card
        hasFlippedCard = false;
        secondCard = this;
        checkMatch();
    }
}
//Function checks the first and second clicked cards and evaluates them to see if it's a match or now 
function checkMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        header1.innerText = "It's a match!"
        stopCards();
    } else {
        document.getElementById('title').innerText = "Try Again!"

        revertCards();
    }
}
//Function removes the event listener so the function doesn't continue to run during the evaluation
function stopCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
//Function shows the back of the card when there isn't a match found 
function revertCards() {
    freeze = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        freeze = false;
    }, 1000);
}

//Function give a random number between 1 and 30 and assigns them to the order in the CSS
function shuffleCards() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 31)
        card.style.order = random;
    });
};
//Reverts everything to the beginning 
function render() {
    hasFlippedCard = false;
    freeze = false;
    firstCard = null;
    secondCard = null;
}

function init() {
    shuffleCards()
    render();
    console.log('new game started...');
}

