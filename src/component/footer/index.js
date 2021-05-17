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
              <div class="col l4 offset-l2 s12 devs-names">
                <h5 class="white-text dev ">Developers</h5>
                <ul >
                  <p><a class="grey-text text-lighten-3" href="https://github.com/TSanfordGATech" target="_blank">Tori Sanford</a></p>
                  <p><a class="grey-text text-lighten-3" href="https://github.com/Omlawrence24">Obedia Lawrence</a></p>
                  <p><a class="grey-text text-lighten-3" href= "https://github.com/GreysonMainor"> Greyson Mainor </a></p>
                  <p><a class="grey-text text-lighten-3" href="https://github.com/sorengrey">Heather Smith</a> </p>
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
