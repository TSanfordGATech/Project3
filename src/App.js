import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import game1 from "./component/game1";
import game2 from "./component/game2";
import game3 from "./component/game3";
import game4 from "./component/game4";

function App() {
  return (
    <Router>
      <div>
       <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/asteroid-type" component={game1} />
        <Route exact path="/match-the-cards" component={game2} />
        <Route exact path="/escape-room" component={game3} />
        <Route exact path="/card-game" component={game4} />
    </div>
    </Router>
  );
}

export default App;
