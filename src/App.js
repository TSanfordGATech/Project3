import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
// import HomePage from "./component/HomePage";
// import game1 from "./component/game1";
// import game2 from "./component/game2";
// import game3 from "./component/game3";
// import game4 from "./component/game4";
import GamePage from "./page/GamePage/index.js";
import SignedIn from "./page/SignedIn.js";
import Home from './page/HomePage.js';
import "../src/component/Header/header.css";
import "../src/component/HomeGameButtons/H-button.css";
import "../src/page/GamePage/game.css";
import "../src/component/SignOut/sign.css";
import "../src/component/SignedInHeader/";
import "../src/App.css";


function App() {
  return (
    
    <Router>
  
     
       <Switch>
         
        <Route path="/" exact component={Home} /> 
        <Route  path="/brainstormer" component={SignedIn} />
        <Route  path="/asteroid-type" component={GamePage} />
        <Route  path="/match-the-cards" component={GamePage} />
        <Route  path="/escape-room" component={GamePage} />
        <Route  path="/card-game" component={GamePage} />
       </Switch>
  
</Router>

  );
}

export default App;
