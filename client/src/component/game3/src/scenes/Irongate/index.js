import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Crate() {
    return (
        <div className="dung">

            {/* this will be the barrel they can click. Determine what you want to put into it if anything. */}

            <Link to="/Wbarrel">
                <button className="clickbarrel"></button>
            </Link>

            {/* door they can click */}

            <Link to="/door">
                <button className="dungdoor"></button>
            </Link>

            {/* crate they can click */}

            <Link to="/crate">
                <button className="crate"></button>
            </Link>

            {/* winebarrel they can click */}

            <Link to="/Wbarrel">
                <button className="wbarrel"></button>
            </Link>


        </div>

    );
}

export default Crate;

