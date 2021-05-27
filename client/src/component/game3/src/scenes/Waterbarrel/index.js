import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Waterbarrel() {
    return (
        <div className="dung">
            <Link to="/Waterbarrel">
                <button className="clickbarrel"></button>
            </Link>
        </div>
    );
}

export default Waterbarrel;
