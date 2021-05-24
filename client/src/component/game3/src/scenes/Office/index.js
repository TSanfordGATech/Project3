import React from "react";
import { Link, Route } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css";

function Office(props) {
  function alertLocked(event) {
    event.preventDefault();
    const Swal = require("sweetalert2");
    Swal.fire("Uh oh! The desk is locked! Try to find the key.");
  }

return (
  <div className="dung">
    <div className="night-background">
          </div> 
  </div>
);
}

export default Office;
