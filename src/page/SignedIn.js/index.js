
import React from 'react';
import "../../component/SignedInHeader/SignedInHeader.css";
import SignedInHeader from "../../component/SignedInHeader"
import UserScore from "../../component/UserScoreCard"
import ChatBox from "../../component/ChatBox"
import Buttons from '../../component/HomeGameButtons';
import '../../component/HomeGameButtons/H-button.css';
import "../../component/ChatBox/chat.css"
import "../../component/ScoreCard/score.css";
import "../../component/UserScoreCard/userscore.css";

// import "packages_folder/foundation-sites/scss";

const SignedIn = () => {
    return (
        <div>
           <SignedInHeader/> 
           <Buttons/>
           <UserScore/>
           <ChatBox/>

           
        </div>
    )
}

export default SignedIn;
