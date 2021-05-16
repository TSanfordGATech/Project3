import React from "react";
import { Link } from "react-router-dom";
import UserScoreCard from "../../component/UserScoreCard";


function SignedInHeader() {

  return (
    <div className="callout">
      <div className="home">
        <div className="header">
          <div className="jumbotron">
            <h1>Brainstormers</h1>
            <Link to="/match-the-cards">  
            <button data-target="modalsign-out" class="btn modal-trigger">Modal</button>
            </Link> 
         <UserScoreCard/> 
           
          </div>

        </div>
      </div>
    </div>




  )


}


export default SignedInHeader;