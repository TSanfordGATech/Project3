import React, { Component } from "react";
import "../../page/MemoryGame/style.css";
import "../../page/MemoryGame/index.js";
import MemoryGameJS from "../../page/MemoryGame/index.js";
import logo from "../../../src/teamlogo.png";


class MemoryGame extends Component {
  componentDidMount() {
    MemoryGameJS();
    window.scrollTo(0, 0);
  }
  render() {
    return (
        <div className="header2">
          <div className="match-title">Match The Cards
          <br /></div>
          <p className="instructions-m">
            Click the cards to find each picture's match.
            Try to find all eight pairs in as few moves as possible!
          </p>

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
            <button className="btn backlink" href="/">←Back</button>
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
          <footer className="page-footer" id="footer1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                
                <img className="logo1" src={logo} alt="Logo"/>
              </div>
              <div className="col l4 offset-l2 s12 devs-names">
              <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                <h5 className="white-text dev ">Developers</h5>
                <ul >
                  <p><a className="grey-text text-lighten-3" href="https://github.com/TSanfordGATech" target="_blank">Tori Sanford</a></p>
                  <p><a className="grey-text text-lighten-3" href="https://github.com/Omlawrence24" target="_blank">Obedia Lawrence</a></p>
                  <p><a className="grey-text text-lighten-3" href= "https://github.com/GreysonMainor" target="_blank"> Greyson Mainor </a></p>
                  <p><a className="grey-text text-lighten-3" href="https://github.com/sorengrey" target="_blank">Heather Smith</a> </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                <div  className="copy">
            © 2021 MIT
            </div>
          </div>
          </div>
        </footer> 
      </div>
    );
  }
}

export default MemoryGame;
