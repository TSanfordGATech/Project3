import React from 'react';
import logo from "../../teamlogo.png";

function Footer () {
    return (
        <div>
            <footer className="page-footer" id="footer1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                
                <img className="logo1" src={logo} alt="Logo"/>
              </div>
              <div className="col l4 offset-l2 s12 devs-names">
                <h5 className="white-text dev ">Developers</h5>
                <ul >
                  <p><a className="grey-text text-lighten-3" href="https://github.com/TSanfordGATech" target="_blank">Tori Sanford</a></p>
                  <p><a className="grey-text text-lighten-3" href="https://github.com/Omlawrence24" target="_blank">Obedia Lawrence</a></p>
                  <p><a className="grey-text text-lighten-3" href= "https://github.com/GreysonMainor" target="_blank"> Greyson Mainor </a></p>
                  <p><a className="grey-text text-lighten-3" href="https://github.com/sorengrey" target="_blank">Heather Smith</a> </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                <div  className="copy">
            © 2021 MIT
            </div>
          </div>
          </div>
        </footer> 
        </div>
    )
}

export default Footer
