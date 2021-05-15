import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
// import game1 from "./component/game1";
// import game2 from "./component/game2";
// import game3 from "./component/game3";
// import game4 from "./component/game4";
import GamePage from "../src/page/GamePage";
import SignIn from "../src/page/GamePage";
import "../src/component/Header/header.css";
import "../src/component/HomeGameButtons/H-button.css";
import "../src/page/GamePage/game.css";
import "../src/component/SignOut/sign.css";
import "../src/component/SignedInHeader/";
import "../src/App.css";
import Home from './page/HomePage.js';
import App from "./App.js";

function App() {
  return (
    <Router>
      <div>
       <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/SignedIn" component={SignIn} />
        <Route exact path="/asteroid-type" component={GamePage} />
        <Route exact path="/match-the-cards" component={GamePage} />
        <Route exact path="/escape-room" component={GamePage} />
        <Route exact path="/card-game" component={GamePage} />
    </div>
    </Router>
  );
}

export default App;
