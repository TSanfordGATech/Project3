import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";
import { Link } from "react-router-dom";

function Welcome(props) {

    return (
        <div className="background-login3">
            <header className="welcome3">
                Welcome to the Escape adventure!
            </header>
            <div className="container" id="cont3">
                <Row>
                    <Col size="lg-8">
                        <p className="intro3"> The year is 2020 and it is almost summer time.... they swore the virus would go away and life would resume normal. You planned a get away vacation with the family...</p>
                        <br></br>
                        <br></br>
                        <p className="until3">but things didn't go as planned....</p>
                    </Col>
                </Row>
            </div>
            <div className="animated-background" id="animated3">
                <div className="forest3">
                    {/* just the bird and its path with container */}
                    <div className="bird-container">
                        <div className="bird"></div>
                    </div>
                    {/* Moving trees and sun */}
                    <div className="sun"></div>
                    <div className="tree01"></div>
                    <div className="tree02"></div>
                    <div className="tree03"></div>
                    <div className="tree04"></div>
                    {/* This is the bus starting */}
                    <div className="combi-container">
                        <div className="combi"></div>
                        <div className="wheelshadow"></div>
                        <div className="wheel wheel01" ></div>
                        <div className="wheel wheel02" ></div>
                    </div>
                    {/* <!-- combi-container end --> */}

                </div>
                {/* <!-- forest end --> */}

                <div className="forest-background"></div>
                <div className="road"></div>
            </div>
        </div>
    );
}

export default Welcome
