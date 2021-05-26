import React, { useRef, useEffect } from "react";
import SignOut from "../../component/SignOut";
import GameDock from "../../component/GameDock/TypingGame.js";
import { Link } from "react-router-dom";
import logo from "../../teamlogo.png";
import Footer from "../../component/footer";



const GamePage = () => {
  return (
    <div>
    <div className="container">
      <div >
        <div className="callout">
          <div className="home">
            <div className="header">
              <div className="jumbotron box.box">
                <img className="logo" src={logo} alt="Logo" />
                <h3 className="title3">"A Shelter where </h3>
                <p className="title4">Critical Thinking Brews."</p>

                <a className=" black grey btn modal-trigger" href="#modalsign-out">Exit Game</a>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
        <iframe 
          src="https://greysonmainor.github.io/AsteroidTyper/"
          width="810px"
          height="530px"
        ></iframe>
      </div>

      <Link to="/asteroid-type">


        <SignOut />



        <div className="row">
          <div className="col s12 m12">
            <div className="card black darken-1">
              <div className="card-content white-text">
                <span className="card-title"> Hello "Amy" thanks for Playing the Typing Game</span>
                <p>This game is a typing game that helps with hand eye coordination as well as typing speed.  Asteroids threaten to impact earth and youre the last line of defense.  When the asteroids appear, type the words that they have written on them to save the earth!</p>
              </div>
              <div className="card-action">
                {/* <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a>  */}
              </div>
            </div>
          </div>
        </div>


        <GameDock />
      </Link>

    </div>
      <Footer/>

    </div>


  )
}

export default GamePage
