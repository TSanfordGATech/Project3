import React, { Component } from "react";
import "../../page/MemoryGame/style.css";
import "../../page/MemoryGame/index.js";
import MemoryGameJS from "../../page/MemoryGame/index.js";

class MemoryGame extends Component {
  componentDidMount() {
    MemoryGameJS();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container">
        <span className="header2">
          <p className="match-title">Match The Cards</p>
          <br />
          <p className="instructions-m">
            Click the cards to find each picture's match.
            Try to find all eight pairs in as few moves as possible!
          </p>
        </span>

        <center>
          <section className="score-panel">
            <h3 className="score-p">Star Rating:</h3>
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
             </section>
            <div className="timer-counter">
              <span className="timer">
                <i className="fa fa-hourglass-start"></i> Time: 00:00
              </span>
            </div>
            <button className="btn reset-btn">
            Reset
            <i className="fa fa-repeat"></i>
          </button>
          </center>


          <section className="win-game-modal">
            <div id="modal-m" className="modal-m">
              <div className="modal-m-content">
                <span className="close">&times;</span>
                <h2 className="congrats">Congratulations!🎉</h2>
                <p>You have won the game and found all 8 pairs of cards!</p>
                <button className="btn play-again-btn">Play again?</button>
              </div>
            </div>
          </section>

      <center>
          <ul className="deck"></ul>
          </center>
      </div>
    );
  }
}

export default MemoryGame;
