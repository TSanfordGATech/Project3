import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Wbarrel() {
    return (
        <div className="dung">
            <Link to="/Wbarrel2">
                <button className="wbarrel1"></button>
            </Link>
        </div>
    );
}

export default Wbarrel;
