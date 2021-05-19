
import React from 'react';
import Header from "../../component/Header";
import LoginPage from "../../component/loginPage"
import HomeGameButton from "../../component/HomeGameButtons"
// import Buttons from '../../component/HomeGameButtons';
import "../../component/Header/header.css";
import '../../component/HomeGameButtons/H-button.css';
import "../../component/ScoreCard/score.css";
import MainImg from '../../component/Carousel';
// import Encouragement from "../../component/Encouragement";
// import "packages_folder/foundation-sites/scss";

const Home = () => {
    return (
        <div >

            <Header />
            <LoginPage />
            
            {/* <Encouragement /> */}
            <MainImg />
            <HomeGameButton />


        </div>
    )
}

export default Home;
