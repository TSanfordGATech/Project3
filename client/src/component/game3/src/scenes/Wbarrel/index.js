import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Wbarrel() {
    return (
        <div className="dung">
            <Link to="/Wbarrel">
                <button className="wbarrel"></button>
            </Link>
        </div>
    );
}

export default Wbarrel;
