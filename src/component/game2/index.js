// Matching Game

const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn")
const playAgain = document.querySelector(".play-again-btn");
const movesCount = document.querySelector(".moves-counter");

// emoji art for the cards
const deckCards = ["./emoji/cactus.png", "./emoji/cactus.png", "./emoji/crystal-ball.png", "./emoji/crystal-ball.png", "./emoji/diamond.png", "./emoji/diamond.png", "./emoji/fire.png", "./emoji/fire.png", "./emoji/leaves.png", "./emoji/leaves.png", "./emoji/purple-heart.png", "./emoji/purple-heart.png", "./emoji/sparkles.png", "./emoji/sparkles.png", "./emoji/unicorn.png", "./emoji/unicorn.png"]

// access the <ul> with the class of "deck"
const deck = document.querySelector(".deck");

// store the flipped cards here
let flipped = [];

// store the matched cards here
let matches = [];

// start moves at zero
let moves = 0;

const star = document.getElementById("star-rating").querySelectorAll(".star");

let starCount = "";