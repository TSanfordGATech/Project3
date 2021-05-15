import React from "react";


function SignedInHeader() {

  return (
    <div className="callout">
      <div className="home">
        <div className="header">
          <div className="jumbotron">
            <h1>Brainstormers</h1>
            <button data-target="modallogout" class="btn modal-trigger">Modal</button>
         

           
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