import React from 'react';
import logo from "../../teamlogo.png";
// import Tori from "https://github.com/TSanfordGATech";
// import Greyson from "https://github.com/sorengrey";
// import Heather from "https://github.com/GreysonMainor";
// import Obedia from "https://github.com/Omlawrence24";

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
                <ul class="devs-names">
                  <li><a class="grey-text text-lighten-3" href="https://github.com/TSanfordGATech" target="_blank">Tori Sanford</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/Omlawrence24">Obedia Lawrence</a></li>
                  <li><a class="grey-text text-lighten-3" href= "https://github.com/GreysonMainor"> Greyson Mainor </a></li>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/sorengrey">Heather Smith</a> </li>
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
