
import React from 'react';
import SignedInHeader from "../../component/Header";
import UserScore from "../../component/UserScoreCard"
import Buttons from '../../component/HomeGameButtons';
import "../../component/Header/header.css";
import '../../component/HomeGameButtons/H-button.css';
import "../../component/ScoreCard/score.css";
import "../../component/UserScoreCard/userscore.css";

// import "packages_folder/foundation-sites/scss";

const SignedIn = () => {
    return (
        <div>
           <SignedInHeader/> 
           <Buttons/>
           <UserScore/>

           
        </div>
    )
}

export default SignedIn;
