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
    ];
var savedFlip = [];
let backBlock = 'images/pixel-block.png'
/*----- app's state (variables) -----*/
let modal = document.getElementById("simpleModal")
/*----- cached element references -----*/
var cards = splitCards();
/*----- event listeners -----*/
let box = document.getElementById("mainScreen").addEventListener('click', openModal);
let closeBtn = document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('reset').addEventListener('click', shuffleCards)
let h3 = document.getElementById('third')
let score = document.getElementById('score')
/*----- functions -----*/
//-------------------------------------------------------------------------------------  
function openModal(event) {
    let category = event.srcElement.id
    if (category === 'cat1') {
        modal.style.display = "block";
    } else {
        alert("Coming soon!")
    }
}
function innerModal(evt) {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function splitCards() {
    splitArray = [];
    crino.forEach(pair => {
        splitArray.push({ val: pair.desc, id: `desc${pair.id}`, name: pair.name }),
            splitArray.push({ val: pair.img, id: `img${pair.id}`, name: pair.name })
    })
    return splitArray;
}

//-------------------------------------------------------------------------------------  
//This function splits the Crino Object and separates the descriptions from the images
//And then puts them back together into a single array.

//This function shuffles the previous array into a random order
//And puts them into a shuffled array.
function shuffleCards() {
    var shuffled = [];
    var i = splitCards().length;
    while (i > 0) {
        let rdmIdx = Math.floor(Math.random() * i);
        let returnedCardArray = splitArray.splice(rdmIdx, 1);
        var card = returnedCardArray[0];
        i -= 1;
        shuffled.push(card)
    }
    return shuffled;
}
// shuffleCards()
//This function should take the previous functions shuffled array
//And push each object into an image tag
//This function should take the tags created 
//and be stored in each of the divs in the grid
function pushTag() {
    var cards = shuffleCards();
    let pushImages = [];
    var modalContainer = document.querySelectorAll('.container');
    cards.forEach(function (card, idx) {
        var img = document.createElement('img')
        img.id = card.id;
        img.setAttribute('name', `${card.name}`);
        img.setAttribute('src', `${card.val}.png`);
        modalContainer[idx].appendChild(img);
        pushImages.push(img)
    });
    //add event listen to the image have it point to a new function flipcard
    //flip card function should get the elements id 
    //use the id to look into the cards variable
    //needs a global variable to hold what has been clicked 
    //needs to match global variable with the array
    return modalContainer;
}
console.log(pushTag()[0])
for (let i = 0; i < 30; i++) {
    document.getElementById(`${i}`).addEventListener("click", cardCheck);
}

function cardCheck(event) {
    let click = event.target;
    const guess = parseInt(click.id.replace('img', '')) || parseInt(click.id.replace('desc', ''));
    console.log(guess)
    savedFlip.push(guess)
    console.log(savedFlip)

        if(savedFlip[0]===savedFlip[1]){
        h3.innerText = "It's a match!";
        score += num+1
        savedFlip = []
    }else{
        h3.innerText = "Try Again.";
    }
}
