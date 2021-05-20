import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./component/Header";
// import HomePage from "./component/HomePage";
// import game1 from "./component/game1";
// import game3 from "./component/game3";
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

class App extends Component() {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/brainstormer" component={SignedIn} />
          <Route path="/asteroid-type" component={GamePage} />
          {/* <Route  path="/match-the-cards" component={MemoryGame} />  */}
          <Route path="/escape-room" component={GamePage} />
          <Route path="/card-game" component={GamePage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
