import React, { useRef, useEffect } from "react";
import SignOut from "../../component/SignOut";
import GameDock from "../../component/GameDock/TypingGame.js";
import { Link } from "react-router-dom";
import logo from "../../teamlogo.png";
import Footer from "../../component/footer";



const GamePage = () => {
  return (
    <div>
    <div>
      <div >
        <div className="callout">
          <div className="home">
            <div className="header">
              <div className="jumbotron box.box">
                <img className="logo" src={logo} alt="Logo" />
                <h3 className="title3">"A Shelter where </h3>
                <p className="title4">Critical Thinking Brews."</p>

                <a className=" teal btn modal-trigger" href="#modalsign-out">Exit Game</a>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
        {/* <iframe 
          src="https://greysonmainor.github.io/AsteroidTyper/"
          width="840px"
          height="580px"
        ></iframe> */}
      </div>

      <Link to="/asteroid-type">


        <SignOut />


        <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <div className="card grey darken-1">
              <div className="card-content white-text">
                <span className="card-title"> Thanks for Playing the Typing Game</span>
                <p></p>
              </div>
              <div className="card-action">
                {/* <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a>  */}
                <iframe 
          src="https://greysonmainor.github.io/AsteroidTyper/"
          width="840px"
          height="580px"
        ></iframe>
              </div>
            </div>
          </div>
        </div>


        <GameDock />
        </div>
      </Link>
    </div>
      <Footer/>

    </div>


  )
}

export default GamePage
