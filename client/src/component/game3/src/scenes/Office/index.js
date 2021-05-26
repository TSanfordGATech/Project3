import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {

  return (
    <div className="parent">
      <div className="dung"></div>
      {/* this will be the barrel they can click. Determine what you want to put into it if anything. */}
      <div className="clickbarrel"></div>
      {/* door they can click */}
      <div className="dungdoor"></div>
      {/* crate they can click */}
      <div className="crate"></div>
      {/* winebarrel they can click */}
      <div className="wbarrel2">
        <Link to="/Wbarrel">
            <button className="wbarrel"></button>
        </Link></div>
    </div>

  );
}

export default Office;
