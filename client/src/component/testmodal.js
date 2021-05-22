import React from "react";
import Modal from "./test.js";

function TestModal () {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Modal React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Modal />
    </div>
  );
}

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300
  }
};


export default TestModal