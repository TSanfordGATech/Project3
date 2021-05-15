import React, { Component } from 'react'



class SignOut extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
       
    }
    

    render() {
        return (
            
           
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h2>"Are you sure your ready to stop learning"</h2>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-large">Yes! Im sure!</a>
              </div>
            </div>
                     
        

        )
    }
}

export default SignOut
