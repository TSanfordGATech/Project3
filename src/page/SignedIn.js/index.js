
import React from 'react';
import "../../component/SignedInHeader/SignedInHeader.css";
import SignedInHeader from "../../component/SignedInHeader";
import Score from "../../component/UserScoreCard";
import Buttons from '../../component/HomeGameButtons';
import '../../component/HomeGameButtons/H-button.css';
import "../../component/ChatBox/chat.css"
import "../../component/ScoreCard/score.css";
import "../../component/UserScoreCard/userscore.css";
import { Link } from "react-router-dom";

// import "packages_folder/foundation-sites/scss";

const SignedIn = () => {
    return (

        <div>
            <Link to= "/brainstormer">
           <SignedInHeader/> 
           <Buttons/>
           <Score/> 
            </Link>
        </div>
    )
}

export default SignedIn;
