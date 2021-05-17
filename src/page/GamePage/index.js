import React from "react";
import SignOut from "../../component/SignOut";
import GameDock from "../../component/GameDock";
import { Link} from "react-router-dom";
import logo from "../../teamlogo.png";

const GamePage = () => {
  return (
     <div className="container">
      <div >
<div className="callout">
      <div className="home">
        <div className="header">
          <div className="jumbotron box.box">
            <img className="logo" src={logo} alt="Logo"/>
             <h3 className= "title">A shelter where </h3>
               <p  className= "title2">critical thinking Brews</p>
            
 <a className=" black grey btn modal-trigger" href="#modalsign-out">Exit Game</a>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
    
    <div></div>

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
     
   

  )
}

export default GamePage
