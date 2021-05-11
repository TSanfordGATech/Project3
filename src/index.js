import React from 'react';
import ReactDOM from 'react-dom';
// import Home from '../src/page/HomePage.js';
import reportWebVitals from './reportWebVitals';
import "../src/component/Header/header.css";
import "../src/component/HomeGameButtons/H-button.css"
import SignedIn from "../src/page/SignedIn.js"

ReactDOM.render(
  <React.StrictMode>
    <SignedIn />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
