import React from 'react';
import Header from "../../component/Header";
import LoginPage from "../../component/loginPage";
import HomeGameButton from "../../component/HomeGameButtons";
import Footer from "../../component/footer";
// import Buttons from '../../component/HomeGameButtons';
import "../../component/Header/header.css";
import '../../component/HomeGameButtons/H-button.css';
import "../../component/ScoreCard/score.css";
import MainImg from '../../component/Carousel';
import Photos from "../../component/Photos";
// import Encouragement from "../../component/Encouragement";
// import "packages_folder/foundation-sites/scss";
import "./style.css";

const Home = () => {
    return (
        <div >
   
            <Header />
            <div className="container" >
            <LoginPage />
            
            {/* <Encouragement /> */}
            <MainImg />
            <HomeGameButton />
            <Photos />

            </div>
            <Footer />
        </div>
    )
}

export default Home;
