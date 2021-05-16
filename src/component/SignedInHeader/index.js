import React from "react";
import { Link } from "react-router-dom";
import UserScoreCard from "../../component/UserScoreCard";
import LogOut from "../../component/LogOutModal";

function SignedInHeader() {

  return (
    <div>
      <div className="callout">
        <div className="home">
          <div className="header">
            <div className="jumbotron">
              <h1>Welcome Back Brainstormer</h1>
              <Link to="/brainstormer">
                <a className=" black grey btn modal-trigger" href="#modal1">Bye-Bye</a>
              </Link>

              <a data-target="slide-out" className=" btn sidenav-trigger score">Your Scores</a>
              <LogOut />

            </div>

          </div>
        </div>
      </div>
      <UserScoreCard />
    </div>



  )


}


export default SignedInHeader;