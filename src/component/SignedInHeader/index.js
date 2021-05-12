import React from "react";
// (document).foundation();

function SignedInHeader() {

  return (
    <div className="callout">
      <div className="home">
        <div className="header">
          <div className="jumbotron">
            <h1>Brainstormers</h1>

          <p><button class="button log-button" data-open="sign-in">Log Out</button></p>

            <div class="reveal" id="sign-in" data-reveal>
              
              <h1>Awesome!</h1>
              <p class="lead">I have another modal inside of me!</p>
              <button class="button" data-open="log-in">Click me for another modal!</button>
              <button class="close-button" data-close aria-label="Close reveal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>


            <div class="reveal" id="log-in" data-reveal>
              <h2>ANOTHER MODAL!!!</h2>
              <button class="close-button" data-close aria-label="Close reveal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>




  )


}


/* <h2>SIGN IN</h2>
<h5>UserName</h5>
<input className="user-name-input"></input>
<h5>Passowd</h5>
<input className="user-name-input"></input>
<button class="close-button" data-close aria-label="Close modal" type="button">
  <span aria-hidden="true">&times;</span>
</button> */

export default SignedInHeader;