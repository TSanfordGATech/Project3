import React from 'react';
import Header from "../../component/Header";
import Buttons from '../../component/HomeGameButtons';
import "../../component/Header/header.css"
import '../../component/HomeGameButtons/H-button.css'

const Home = () => {
    return (
        <div>
           <Header/> 
           <Buttons/>
        </div>
    )
}

export default Home;
