/*----- constants -----*/
const crino = [
    //use imgur https://imgur.com/a/nOv7sRf
    { name: 'bowler-hat', desc: 'https://imgur.com/nWowUhj', img: 'https://imgur.com/Rthca0p', id: 0 },
    { name: 'cage-crinoline', desc: 'https://imgur.com/b53tyls', img: 'https://imgur.com/Iu9z2dw', id: 1 },
    { name: 'ditto-suits', desc: 'https://imgur.com/OR5hxWC', img: 'https://imgur.com/HlD6YGe', id: 2 },
    { name: 'empres-eugenie', desc: 'https://imgur.com/0063iSI', img: 'https://imgur.com/vAtBysz', id: 3 },
    { name: 'frock-suit', desc: 'https://imgur.com/c2nguEB', img: 'https://imgur.com/IvFiNfO', id: 4 },
    { name: 'knickerbockers', desc: 'https://imgur.com/2WL46Eg', img: 'https://imgur.com/2csnAAs', id: 5 },
    { name: 'morning-coat', desc: 'https://imgur.com/cfdCL5Q', img: 'https://imgur.com/05nX2lo', id: 6 },
    { name: 'sack-jacket', desc: 'https://imgur.com/cU1GwWg', img: 'https://imgur.com/9DRsPAs', id: 7 },
    { name: 'trousers', desc: 'https://imgur.com/ceiVRd3', img: 'https://imgur.com/z16QVgF', id: 8 },
    { name: 'wm-under', desc: 'https://imgur.com/QVplrkL', img: 'https://imgur.com/8gylj7R', id: 9 },
    { name: 'womens-dress', desc: 'https://imgur.com/NA93Mfh', img: 'https://imgur.com/TTeJQTr', id: 10 },
];
/*----- app's state (variables) -----*/

/*----- cached element references -----*/
let box = document.getElementById("mainScreen")
let modal = document.getElementById("simpleModal")
//let modalBtn = document.getElementById("mainScreen")
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let modalContent = document.getElementsByClassName('modal-content')[0]
var targetDiv = document.getElementsByClassName('modal-content');

/*----- event listeners -----*/
box.addEventListener('click', openModal);
modalContent.addEventListener('click', cardTiles);
closeBtn.addEventListener('click', closeModal);

/*----- functions -----*/
function mainScreen() {
    console.log("o hai dere")
}
//-------------------------------------------------------------------------------------  
function openModal(event) {
    //categorySelector();
    console.log(event.target)
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

// function categorySelector(event){
//     console.log(`You selected ${box.target}`);
// }
//-------------------------------------------------------------------------------------  
function showIt(element) {
    var parent = element.parentNode;
    var content = parent.querySelector("div");
}
function cardTiles(showIt) {
    //Shows which item on the grid has been clicked
    let tile = showIt.target
    console.log(tile)
    shuffleCards();
    tile.innerHTML = `<img id='num${}' src='${}>`
}

function shuffleCards() {
    let splitArray = [];
    let shuffled = [];
    crino.forEach(pair => {
        splitArray.push({ val: pair.desc, id: pair.id }),
            splitArray.push({ val: pair.img, id: pair.id })
    })
    for (let i = 0; i < splitArray.length; i++) {
        let rdmIdx = Math.floor(Math.random() * splitArray.length);
        let returnedCardArray = splitArray.splice(rdmIdx, 1);
        let card = returnedCardArray[0];
        shuffled.push(card)
    }
    shuffled.forEach(content => console.log(content))
}

function randomizeCards() {
    let randomCards = [];
    getCards()
}


mainScreen()
// randomizeCards()
/*---------------------Test Area---------------------*/



//   function shuffleCards(cards) {
//     let cardsCopy = [].concat(cards);
//     let shuffled = [];
//     for (let i = 0; i < cards.length; i++) {
//       let randomIndex = Math.floor(Math.random() * cardsCopy.length);
//       let returnedCardArray = cardsCopy.splice(randomIndex, 1);
//       let card = returnedCardArray[0];
//       shuffled.push(card);
//     }
//     return shuffled;
//   }
//   let cards = splitPairs(pairs);
//   let shuffledCards = shuffleCards(cards);
//   console.log(cards);
//   console.log(shuffledCards);

/*---------------------Test Area---------------------*/




/* When game starts()
    - The game's main screen has several topics to choose from
    - When the player clicks on one of the topics
    - A window within the window opens up
*Second screen()
    - a grid shape of boxes with question marks
    - The player has to match the description to the images
        - when the player clicks on one its reveals either a description
          or an image
    - The player has to match all the tiles
        when the player guesses wrong, the tile

                    //Current objectives
//1. When a tile is clicked, either a description or image appears in the tile
    // Make sure that the tiles DO NOT repeat themselves
//2. If the tiles do not match, they must flip back to the question marks

    -----------------Stretch Goals-----------------
    -
*/
