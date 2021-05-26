import React from "react";
import "../../component/Memory/emoji/cactus.png";
import "../../component/Memory/emoji/crystal-ball.png";
import "../../component/Memory/emoji/diamond.png";
import "../../component/Memory/emoji/fire.png";
import "../../component/Memory/emoji/leaves.png";
import "../../component/Memory/emoji/purple-heart.png";
import "../../component/Memory/emoji/sparkles.png";
import "../../component/Memory/emoji/unicorn.png";

function MemoryGameJS(){
// Matching Game
const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");
const movesCount = document.querySelector(".moves-counter");

// emoji art for the cards
const deckCards = [
  "cactus.png",
  "cactus.png",
  "crystal-ball.png",
  "crystal-ball.png",
  "diamond.png",
  "diamond.png",
  "fire.png",
  "fire.png",
  "leaves.png",
  "leaves.png",
  "purple-heart.png",
  "purple-heart.png",
  "sparkles.png",
  "sparkles.png",
  "unicorn.png",
  "unicorn.png",
];

// access the <ul> with the class of "deck"
const deck = document.querySelector(".deck");

// store the flipped cards here
let flipped = [];

// store the matched cards here
let matches = [];

// start moves at zero
let moves = 0;

const star = document.getElementById("star-rating").querySelectorAll(".star");

let starCount = 3;

const timerCounter = document.querySelector(".timer");

let time;

let minutes = 0;

let seconds = 0;

let timeStart = false;

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// shuffles the cards, prints them to the page, and starts the game
function startGame() {
  const shuffledDeck = shuffle(deckCards);
  for (let i = 0; i < shuffledDeck.length; i++) {
    const liTag = document.createElement("LI");
    liTag.classList.add("card");
    const addImage = document.createElement("IMG");
    liTag.appendChild(addImage);
    addImage.setAttribute("src", "emoji/" + shuffledDeck[i]);
    addImage.setAttribute("alt", "description goes here");
    deck.appendChild(liTag);
  }
}

startGame();

function removeCard() {
  while (deck.hasChildNodes()) {
    deck.removeChild(deck.firstChild);
  }
}

// sets the timer at sixty seconds and prints the timer to the page
function timer() {
  time = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    timerCounter.innerHTML =
      "<i class='fa fa-hourglass-start'></i>" +
      "Timer: " +
      minutes +
      " Mins " +
      seconds +
      " Seconds ";
  }, 1000);
}

function stopTimer() {
  clearInterval(time);
}

// resets the timer, star rating, resets the moves, and clears the cards
function resetEverything() {
  stopTimer();
  timeStart = false;
  seconds = 0;
  minutes = 0;
  timerCounter.innerHTML =
    "<i class='fa fa-hourglass-start'></i>" + "Timer: 00:00";

  // resets the star count and adds the class back to show the stars again
  star[1].firstElementChild.classList.add("fa-star");
  star[2].firstElementChild.classList.add("fa-star");
  starCount = 3;

  //resets the moves
  moves = 0;
  movesCount.innerHTML = 0;
  matches = [];
  flipped = [];

  // clears the deck
  removeCard();

  startGame();
}

// counts the player's moves and increments them by one
function movesCounter(){
    movesCount.innerHTML ++;
    moves ++;
}

function starRating(){
    if (moves === 14) {
        star[2].firstElementChild.classList.remove("fa-star");
        starCount --;
    }
    if (moves === 18) {
        star[1].firstElementChild.classList.remove("fa-star");
        starCount--;
      }
}

// checks if two cards match
function compareTwo() {
    if (flipped.length === 2) {
        document.body.style.pointerEvents = "none";
    }
    if (flipped.length === 2 && flipped[0].src === flipped[1].src) {
        match();
    }
    else if (flipped.length === 2 && flipped[0].src != flipped[1].src) {
        noMatch();
    }
}

function match() {
    setTimeout(function() {
        flipped[0].parentElement.classList.add("match");
        flipped[1].parentElement.classList.add("match");
        matches.push(...flipped);
        document.body.style.pointerEvents = "auto";
        winGame();
        flipped = [];
    }, 600);
    movesCounter();
    starRating();
}

function noMatch(){
    setTimeout(function() {
        flipped[0].parentElement.classList.remove("flip");
        flipped[1].parentElement.classList.remove("flip");
        document.body.style.pointerEvents = "auto";
        flipped = [];
    }, 700);
    movesCounter();
    starRating();
}

function AddStats() {
    const stats = document.querySelector(".modal-content");
    for (let i = 1; i <= 3; i++){
        const statsElement = document.createElement("p");
        statsElement.classList.add("stats");
        stats.appendChild(statsElement);
    }
    let p = stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Time to complete: " + minutes + " Minutes and " + seconds + " Seconds";
    p[1].innerHTML = "Moves Taken: " + moves;
    p[2].innerHTML = "Your Star Rating is: " + starCount + " out of 3";
}

function displayModal() {
    const modalClose = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    modalClose.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function winGame() {
    if (matches.length === 16) {
        stopTimer();
        AddStats();
        displayModal();
    }
}

deck.addEventListener("click", function(evt) {
    if (evt.target.nodeName === "LI"){
        console.log(evt.target.nodeName + " was clicked");
        if (timeStart === false){
            timeStart = true;
            timer();
        }
        flipCard();
    }
    function flipCard(){
        evt.target.classList.add("flip");
        addToFlipped();
    }
    function addToFlipped(){
        if (flipped.length === 0 || flipped.length === 1) {
            flipped.push(evt.target.firstElementChild);
        }
        compareTwo();
    }
});

reset.addEventListener('click', resetEverything);

playAgain.addEventListener('click', function() {
    modal.style.display = "none";
    resetEverything();

})
 }

 export default MemoryGameJS;