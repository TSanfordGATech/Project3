import React from 'react';
import logo from "../../teamlogo.png";

function Footer () {
    return (
        <div>
            <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                
                <img className="logo1" src={logo} alt="Logo"/>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text dev">Developers</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
                <div  class="copy">
            © 2021 MIT
            </div>
          </div>
          </div>
        </footer> 
        </div>
    )
}

export default Footer
