import React, { Component } from "react";
import "../../page/MemoryGame/index.js";
import MemoryMatch from "../../page/MemoryGame/index.js";

// Beware, uncommenting this breaks the whole website's CSS!
//import "./style.css";

function memoryGame() {
    MemoryMatch();
    return(
    <div>
    <body>
    <div className="container">
      <header className="header">
        <h1>Match The Cards</h1><br/>
        <p>Click the cards to find each picture's match.<br/>
          Try to find all eight pairs in as few moves as possible!
        </p>
      </header>

      <section className="score-panel">
        <h3>Score Panel</h3>
        <ul id="star-rating" className="star-rating">
          <li className="star"><i className="fa fa-star"></i></li>
          <li className="star"><i className="fa fa-star"></i></li>
          <li className="star"><i className="fa fa-star"></i></li>
        </ul>
        <span class="moves-counter">0</span> Moves
        <div class="timer-counter">
          <span class="timer">
            <i class="fa fa-hourglass-start"></i> Timer: 00:00
          </span>
        </div>
        <div class="reset">
          <button class="btn reset-btn">
            Reset
            <i class="fa fa-repeat"></i>
          </button>
        </div>
      </section>

      <section class="win-game-modal">
        <div id="modal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Congratulations!</h2>
            <p>You have won the game and found all 8 pairs of cards!</p>
            <img class="modal-img" src="" alt="placeholder" />
            <button class="btn play-again-btn">Play again?</button>
          </div>
        </div>
      </section>

      <ul className="deck"></ul>
    </div>
  </body>
  </div>)
}


export default memoryGame;