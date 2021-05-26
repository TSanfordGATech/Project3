import React from 'react'
//  import red from "../../Capture.PNG";
import { Link } from "react-router-dom";


const SignedInGameB = () => {
  return (
     <div className="container">
        <div className="contain5">
       <div className="boxes">

       <div className="boxq"> 
      <div className="box-flex"> 
  <div className="row">
  <div className="col s6 m12">
    <div className="card grey darken-1">
      <div className="card-content1 white-text">
      <div className="card-title2">
        <span>Memory Games</span>
        </div>
        <p className="card-info">A classic card-matching game that tests your memory and sharpens your focus. Earn a 1 to 3-star rating based on how many moves you use. See how fast you can find all eight pairs!</p>
       </div>
      <Link to="/match-the-cards">   
      <div className="card-action">
      <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
      </div>
      </Link> 
    </div>
  </div>
  </div>
</div>
   <div className="boxes">
   <div className="typer"> 
     <div className="box-flex">
     <div className="col s6 m12 box5">
       <div className="card grey darken-1  center">
         <div className="card-content1 white-text">
           <div className="card-title2">
            <span> Typing & Reading Speed</span>
            </div>
           <p className="card-info">This game is a typing game that helps with hand eye coordination as well as typing speed. When the asteroids appear, type the words that they have written on them to save the earth!</p>
         </div> 
         <Link to="/asteroid-type">  
         <div className="card-action">
         <a className=" waves-dark btn-small" ><i className="material-icons right">beach_access</i>Lets Play</a> 
         </div>
         </Link> 
       </div>
     </div>
     </div>
    </div>
   </div>
   </div>
   
 
   <div>
   <div className="boxes"> 
   <div className="box-flex">
  <div className="row">
  <div className="col s12 m12">
    <div className="card grey darken-1">
      <div className="card-content1 white-text">
      <div className="card-title2">
        <span>Critical Thinking</span>
        </div>
        <p className="card-info">Escape Room style! This game will challenge your brain, memory, and overall skills! See how quickly you can solve the puzzle and escape..... if at all!</p>
      </div>
      <Link to="/escape-room">  
      <div className="card-action">
      <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
      </div>
      </Link> 
    </div>
  </div>
  </div>
</div>
</div> 
   </div>
   </div>
   </div>
   </div>

  )
}

export default SignedInGameB;

