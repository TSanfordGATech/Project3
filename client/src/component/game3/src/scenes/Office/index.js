import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {
  function alertLocked(event) {
    event.preventDefault();
    const Swal = require("sweetalert2");
    Swal.fire("Uh oh! The desk is locked! Try to find the key.");
  }

return (
  <div className="dung">
    {/* this will be the barrel they can click. Determine what you want to put into it if anything. */}
    <div className="clickbarrel"></div>
    {/* door they can click */}
    <div className="dungdoor"></div>
          
  </div>
);
}

export default Office;
