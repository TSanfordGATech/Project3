import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Waterbarrel() {

    return (
        <div className="dung">
            <Link to="/Waterbarrel2">
                <button className="clickbarrel2"></button>
            </Link>
        </div>
    );
}



export default Waterbarrel;
