import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {

  return (
    <div className="dung">
      <Link to="/crate2">
            <button className="crate1"></button>
        </Link>
    </div>
  );
}

export default Office;
