import React from "react";
import SignOut from "../../component/SignOut";
import GameDock from "../../component/GameDock";
import { Link } from "react-router-dom";
const GamePage = () => {
    return (
       
        <div>
          <Link to="/asteroid-type">
            <div className="callout header">
            <h1>Brainstormers</h1> 
            <a className=" black grey btn modal-trigger" href="#modalsign-out">Exit Game</a>
<SignOut/>
            </div>
<div>
     
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
</div>

<GameDock/>
 </Link>  
        </div>
   

    )
}

export default GamePage
