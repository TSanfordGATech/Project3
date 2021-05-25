import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./component/Header";
// import HomePage from "./component/HomePage";
// import game1 from "./component/game1";
// Toris game components
import Welcome from "../src/component/game3/src/scenes/Welcome/index";
// Adding in the upcoming scenese I am working on so hooks are ready.
// import Background from "../src/component/game3/src/scenes/Background/index";
import Crate from "../src/component/game3/src/scenes/Crate/index";
import Wbarrel from "../src/component/game3/src/scenes/Wbarrel/index";
import Door from "../src/component/game3/src/scenes/Door/index";
import StartPage from "../src/component/game3/src/scenes/StartPage/index";
import Office from "../src/component/game3/src/scenes/Office/index";
import Desk from "../src/component/game3/src/scenes/Desk/index";
// Graysons game
// import Asteroid from "../src/component/game1/index"
// import game4 from "./component/game4";
import GamePage from "./page/GamePage/index.js";
import SignedIn from "./page/SignedIn.js/index.js";
import Home from "./page/HomePage.js/index.js";
// import Footer from "./component/footer/index"
import MemoryGame from "./component/Memory/index.js";
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
import "./component/Photos/photo.css";
import "./component/SignedInPhoto/sphoto.css";


function App() {

  
  return (
    
    <Router>
  
    
       <Switch>
         
        <Route path="/" exact component={Home} /> 
        <Route  path="/brainstormer" component={SignedIn} />
        <Route  path="/asteroid-type" component={GamePage} />
        <Route  path="/match-the-cards" component={MemoryGame} /> 
        {/* routes for escape room */}
        <Route  path="/escape-room" component={Welcome} />
        <Route  path="/escape-startpage" component={StartPage} />
        <Route path="/desk" component={Desk} />
        <Route  path="/office" component={Office} />
        {/* <Route path="/background" component={Background} /> */}
        <Route path="/crate" component={Crate} />
        <Route path="/Wbarrel" component={Wbarrel} />
        <Route path="/door" component={Door} />
        {/* <Route  path="/asteroid" component={Asteroid} /> */}
        <Route  path="/card-game" component={GamePage} />
       </Switch>
        
</Router>

  );
}

export default App;
