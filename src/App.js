import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./component/Header";
// import HomePage from "./component/HomePage";
// import game1 from "./component/game1";
import Welcome from "../src/component/game3/src/scenes/Welcome/index";
import StartPage from "../src/component/game3/src/scenes/StartPage/index";
// import game4 from "./component/game4";
import GamePage from "./page/GamePage/index.js";
import SignedIn from "./page/SignedIn.js/index.js";
import Home from "./page/HomePage.js/index.js";
import Footer from "./component/footer/index";
// import MemoryGame from "./page/MemoryGame/index";
import "../src/component/Header/header.css";
import "../src/component/HomeGameButtons/H-button.css";
import "../src/page/GamePage/game.css";
import "../src/component/SignOut/sign.css";
import "./component/SignedInHeader";
import "../src/App.css";
import "../src/component/ScoreCard/score.css";
import "../src/component/UserScoreCard/userscore.css";
import "./component/footer/footer.css";
import "./component/Carousel/car.css";


function App() {

  
  return (
    
    <Router>
  
    
       <Switch>
         
        <Route path="/" exact component={Home} /> 
        <Route  path="/brainstormer" component={SignedIn} />
        <Route  path="/asteroid-type" component={GamePage} />
        {/* <Route  path="/match-the-cards" component={MemoryGame} />  */}
        <Route  path="/escape-room" component={Welcome} />
        <Route  path="/escape-startpage" component={StartPage} />
        <Route  path="/card-game" component={GamePage} />
       </Switch>
         <Footer/>
</Router>

  );
}

export default App;
