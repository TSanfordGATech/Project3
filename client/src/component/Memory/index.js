import React, { Component } from "react";

//beware, this messes up the whole site's css
import "../../page/MemoryGame/style.css";

import "../../page/MemoryGame/index.js";
import MemoryGameJS from "../../page/MemoryGame/index.js";
// import "./emoji/cactus.png";

class MemoryGame extends Component {
  componentDidMount() {
    MemoryGameJS();
  }
  render() {
    return (
      <div className="body2">
      <div className="container two">
        <header className="header">
          <h1 className="match">Match The Cards</h1>
          <br />
          <p className="plain">
            Click the cards to find each picture's match.
            <br />
            Try to find all eight pairs in as few moves as possible!
          </p>
        </header>

        <section className="score-panel">
          <h3 className="score-p">Score Panel</h3>
          <ul id="star-rating" className="star-rating">
            <li className="star">
              <i className="fa fa-star"></i>
            </li>
            <li className="star">
              <i className="fa fa-star"></i>
            </li>
            <li className="star">
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <span className="moves-counter">0</span> Moves
          <div className="timer-counter">
            <span className="timer">
              <i className="fa fa-hourglass-start"></i> Timer: 00:00
            </span>
          </div>
          <div className="reset">
            <button className="btn reset-btn">
              Reset
              <i className="fa fa-repeat"></i>
            </button>
          </div>
        </section>

        <section className="win-game-modal">
          <div id="modal" className="modal2">
            <div className="modal-content2">
              <span className="close">&times;</span>
              <h2 className="congrats">Congratulations!</h2>
              <p className="plain">
                You have won the game and found all 8 pairs of cards!
              </p>
              <img className="modal-img2" src="" alt="placeholder" />
              <button className="btn play-again-btn">Play again?</button>
            </div>
          </div>
        </section>

        <ul className="deck"></ul>
        </div>
      </div>
    );
  }
}

export default MemoryGame;
