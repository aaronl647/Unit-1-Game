/*----- constants -----*/
const crino = [
    //use imgur https://imgur.com/a/nOv7sRf
    { name: 'abolition', desc: 'https://imgur.com/aJIlHKJ', img: 'https://imgur.com/u2mrg2q', id: 0 },
    { name: 'bertha-neckline', desc: 'https://imgur.com/w0cLjeH', img: 'https://imgur.com/ZPAASWL', id: 1 },
    { name: 'boots', desc: 'https://imgur.com/lOLrZf4', img: 'https://imgur.com/KrieL5E', id: 2 },
    { name: 'bowler-hat', desc: 'https://imgur.com/PWBndsS', img: 'https://imgur.com/B3kuGdT', id: 3 },
    { name: 'cage-crinoline', desc: 'https://imgur.com/BtrypHg', img: 'https://imgur.com/qAuK7E4', id: 4 },
    { name: 'cariacture', desc: 'https://imgur.com/9iAVPyT', img: 'https://imgur.com/UwIutIn', id: 5 },
    { name: 'childrens-dress', desc: 'https://imgur.com/vORWzwN', img: 'https://imgur.com/wDiv23F', id: 6 },
    { name: 'civil-war', desc: 'https://imgur.com/hi91uck', img: 'https://imgur.com/4L4tMCk', id: 7 },
    { name: 'ditto-suit', desc: 'https://imgur.com/476HZCu', img: 'https://imgur.com/RRKyppF', id: 8 },
    { name: 'drawers-pantaloon', desc: 'https://imgur.com/AodiGyM', img: 'https://imgur.com/cip8aP3', id: 9 },
    { name: 'dress-elevator', desc: 'https://imgur.com/0OOMidj', img: 'https://imgur.com/cldZM8m', id: 10 },
    { name: 'dress-reform', desc: 'https://imgur.com/0WYEHEZ', img: 'https://imgur.com/juavtYH', id: 11 },
    { name: 'empress-eugenie', desc: 'https://imgur.com/TJcUhSw', img: 'https://imgur.com/seFJbE5', id: 12 },
    { name: 'frock-coat', desc: 'https://imgur.com/60DFluQ', img: 'https://imgur.com/fOWadta', id: 13 },
    { name: 'interchangeable-bodices', desc: 'https://imgur.com/kAxam9x', img: 'https://imgur.com/Dj02C34', id: 14 },
    { name: 'knickerbockers', desc: 'https://imgur.com/mJ8zysx', img: 'https://imgur.com/OV67tuM', id: 15 },
    { name: 'mitts', desc: 'https://imgur.com/piLf7WQ', img: 'https://imgur.com/IjOTlUK', id: 16 },
    { name: 'morning-coat', desc: 'https://imgur.com/DEDbHy1', img: 'https://imgur.com/nk7xcLo', id: 17 },
    { name: 'photography', desc: 'https://imgur.com/komvDPb', img: 'https://imgur.com/9Y8KWWe', id: 18 },
    { name: 'risk-of-fire', desc: 'https://imgur.com/WnVKf7E', img: 'https://imgur.com/QJlRZiS', id: 19 },
    { name: 'sack-jacket', desc: 'https://imgur.com/DaeVqYp', img: 'https://imgur.com/0GJrvLB', id: 20 },
    { name: 'sewing-machine', desc: 'https://imgur.com/iAsSHLu', img: 'https://imgur.com/uvkh5Pk', id: 21 },
    { name: 'spoon-bonnet', desc: 'https://imgur.com/aW1GUjl', img: 'https://imgur.com/H3U6Fac', id: 22 },
    { name: 'the-great-exhibition', desc: 'https://imgur.com/JI9Hb4a', img: 'https://imgur.com/VKLnhSd', id: 23 },
    { name: 'trousers', desc: 'https://imgur.com/Oq9H2Uf', img: 'https://imgur.com/iJX4IgJ', id: 24 },
    { name: 'wm-under', desc: 'https://imgur.com/6CcmWcQ', img: 'https://imgur.com/mGVrJVT', id: 25 },
    { name: 'womens-day-dress', desc: 'https://imgur.com/eldiMtt', img: 'https://imgur.com/MPWp2n4', id: 26 },
    { name: 'womens-dress', desc: 'https://imgur.com/SJNWBu3', img: 'https://imgur.com/6SBouPw', id: 27 },
    { name: 'womens-evening-dress', desc: 'https://imgur.com/XMMlhqY', img: 'https://imgur.com/8Jde8J5', id: 28 },
    { name: 'womens-hair', desc: 'https://imgur.com/8QQyJj1', img: 'https://imgur.com/GzEIb6O', id: 29 },
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
// function mainScreen() {
//     console.log("o hai dere")
// }
//-------------------------------------------------------------------------------------  
function openModal(event) {
    let category = event.srcElement.id
    console.log(category)
    if (category === 'cat1') {
        modal.style.display = "block";
    } else {
        alert("coming soon!")
    }
}
function closeModal() {
    modal.style.display = "none";
}

//-------------------------------------------------------------------------------------  
function showIt(element) {
    var parent = element.parentNode;
    var content = parent.querySelector("div");
}
function cardTiles(showIt) {
    //Shows which item on the grid has been clicked
    let tile = showIt.target
    console.log(tile)
    let shuffled = shuffleCards();
    let image = document.createElement("img");
    shuffled.forEach((content) => {
        image.setAttribute('id', `${content.id}`);
        image.setAttribute('src', `${content.val}.png`);
    });
    tile.appendChild(image)
}

function shuffleCards() {
    let splitArray = [];
    let shuffled = [];
    crino.forEach(pair => {
        splitArray.push({ val: pair.desc, id: pair.id }),
            splitArray.push({ val: pair.img, id: pair.id })
    })
    //  console.log(splitArray)
    for (let i = 0; i < splitArray.length; i++) {
        let rdmIdx = Math.floor(Math.random() * splitArray.length);
        let returnedCardArray = splitArray.splice(rdmIdx, 1);
        let card = returnedCardArray[0];
        shuffled.push(card)
    }
    return shuffled;
}

function randomizeCards() {
    let randomCards = [];
    getCards()
}

// shuffleCards();
// mainScreen()
/*---------------------Test Area---------------------*/

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
    // Make sure that both description and image are in the new object array
//2. If the tiles do not match, they must flip back to the question marks

    -----------------Stretch Goals-----------------
    -
*/
