/* eslint-disable no-lone-blocks */
import React, { Component } from 'react'


export class Carousel extends Component {

    componentDidMount(){
        const M =window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                indicators:true,
                fullWidth:true,
                duration: 200
               
            });
            
          });
        
    }

    render() {
        return (
            <div class="container">

<div class="carousel carousel-slider">

     <a class="carousel-item" href="#one!"><img src="https://th.bing.com/th/id/R869e509daf591aca967547ee45ee2a64?rik=VdANUdbgzlxJDg&riu=http%3a%2f%2fs3-ap-southeast-1.amazonaws.com%2fimages.humanresourcesonline.net%2fwp-content%2fuploads%2f2015%2f07%2fJerene-July-people-learning-shutterstock-700x420.jpg&ehk=JLbuo6dJGz1YfZNugi0d%2fnjmlGo7TX6uGkycmhsOuyY%3d&risl=&pid=ImgRaw"/></a>
     <a class="carousel-item" href="#two!"><img src="https://th.bing.com/th/id/R422bea58a6e1804477fb9164249a8262?rik=nqi4HrG2IOw4nA&riu=http%3a%2f%2fwww.pearsoned.com%2fwp-content%2fuploads%2fOnlineLearningHistoricallyBlackColleges-1540x740-770x370.png&ehk=f15z5ngSudONRH6z5NimXoKcynHfs%2bNDvYO0Fe4Kpxw%3d&risl=&pid=ImgRaw"/></a>
     <a class="carousel-item" href="#two!"><img src= "https://blog.mindvalley.com/wp-content/uploads/2018/01/rsz_untitled_design_42.jpg"/></a>
     <a class="carousel-item" href="#three!"><img src="https://cdn.cerebralpalsynewstoday.com/wp-content/uploads/2016/03/shutterstock_229624522.jpg"/></a>
     <a class="carousel-item" href="#four!"><img src="https://www.ukhypnosis.com/wp-content/uploads/2009/10/People-learning.jpg"/></a>
     <a class="carousel-item" href="#five!"><img src="https://www.languagecoursesuk.co.uk/wp-content/uploads/2016/02/bigstock-Business-Casual-People-Office-85581455-e1454520589445.jpg"/></a>
     </div> 
            </div>
            
        )
    }
}

export default Carousel

