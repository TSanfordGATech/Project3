
import React from 'react';
import "../../component/SignedInHeader/SignedInHeader.css";
import SignedInHeader from "../../component/SignedInHeader";
import SignedInphoto from "../../component/SignedInPhoto";
import Buttons from '../../component/HomeGameButtons';
import '../../component/HomeGameButtons/H-button.css';
import "../../component/ChatBox/chat.css"
import "../../component/ScoreCard/score.css";
import "../../component/UserScoreCard/userscore.css";
import { Route, Link } from "react-router-dom";

// import "packages_folder/foundation-sites/scss";

const SignedIn = () => {
    return (

        <div>
            <Route>
            <Link to= "/brainstormer">
           <SignedInHeader/> 
           <SignedInphoto />
           <Buttons/>
           
            </Link>
            </Route>
        </div>
    )
}

export default SignedIn;
