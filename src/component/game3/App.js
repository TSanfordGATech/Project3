import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect }from 'react';
import Welcome from "./src/scenes/Welcome";
import StartPage from "./src/scenes/StartPage";
import "./App.css";

// entry point for application
function App() 
{
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [formObject, setFormObject] = useState({}))
    const [puzzles, setPuzzles] = useState()
    const puzzleSeed = [
      {
        title: "Safe",
        description: "Enter a 4 digit code to crack the safe and win the game.",
        winCondition: '1219',
        isSolved: false
      },
      {
        title: "Bookshelf",
        description: "Solve the riddle then select the books that correspond to the answer.",
        winCondition: "day and night",
        isSolved: false
      },
      {
        title: "Painting",
        description: "Complete the puzzle to put the painting back together",
        winCondition: "solved puzzle",
        isSolved: false
      }
    ];

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleSolvedPuzzle(puzzleName) {
      const puzzleToUpdate = [...puzzles]
      puzzleToUpdate[puzzleName].isSolved = true
      setPuzzles(puzzleToUpdate)
    }

  return (
    <Router>
      <Navbar logout={logout} user={user} />
        <Switch>
          <Route exact path="/" render={(props) => user ? (<StartPage {...props} user={user} puzzle={puzzles} />) : (
            <Welcome {...props} user={user} 
            handleInputChange={handleInputChange} 
            handleLogInSubmit={handleLogInSubmit} 
            handleSignUpSubmit={handleSignUpSubmit}
            />)} 
          />
          <Route exact path="/startPage" render={(props) => (
            user ? (<StartPage {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
