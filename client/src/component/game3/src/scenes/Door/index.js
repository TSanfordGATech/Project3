import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Door() {
    return (
        <div className="dung">
            <Link to="/compass">
                <button className="dungdoor"></button>
            </Link>
        </div>
  );
}

export default Door;